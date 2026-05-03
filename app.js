// CELPIP Mock Test Simulator - Main Application Controller (Listening + Reading)

const app = (() => {
  // State
  let mode = ''; // 'listening' or 'reading'
  let currentSets = null;
  let currentSetIndices = null;
  let currentPart = 0;
  let currentQ = 0;
  let answers = {};
  let timerInterval = null;
  let timeLeft = 0;
  let allQuestions = [];
  let totalParts = 6;
  let partNames = [];
  let synth = window.speechSynthesis;
  let isSpeaking = false;

  const STORAGE_KEY = 'celpip_history';

  const LISTENING_ADVICE = [
    "**Problem Solving**: You struggled with understanding the core issue and resolutions in conversations. Focus on identifying the speaker's tone, the main conflict, and how they agree to solve it.",
    "**Daily Life**: You missed details in everyday workplace or social scenarios. Practice listening for specific numbers, dates, or immediate actions the speakers plan to take.",
    "**Information**: This section tests your ability to follow a detailed explanation. Work on picking out the main subject and identifying supporting details or examples the speaker provides.",
    "**News Item**: You had difficulty with the formal, fast-paced delivery of a news broadcast. Try listening to Canadian radio news (CBC) and practicing identifying the 'who, what, where, when, and why'.",
    "**Discussion**: Following a 3-way conversation can be tricky. Practice distinguishing different voices and understanding who holds which opinion or who disagrees with whom.",
    "**Viewpoints**: This is the hardest part. You need to identify differing abstract opinions. Practice listening to documentaries or debates and summarizing the opposing arguments presented."
  ];

  const READING_ADVICE = [
    "**Correspondence**: You struggled with reading emails/letters. Focus on understanding the sender's purpose, the tone (formal vs. informal), and what action they are requesting from the recipient.",
    "**Applying a Diagram**: You missed questions that require linking text to a visual chart or schedule. Practice scanning schedules and advertisements, and synthesizing that data with accompanying emails.",
    "**Information Texts**: This assesses your ability to find specific facts in a multi-paragraph text. Work on skimming for keywords and clearly identifying the main idea of each paragraph.",
    "**Viewpoints**: You had trouble with complex articles containing differing opinions. Practice reading argumentative essays or opinion pieces and strictly separating facts from the author's (or commenters') opinions."
  ];

  const getHistory = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch(e) { return []; }
  };

  const saveHistory = (record) => {
    const history = getHistory();
    history.push(record);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  };

  const clearHistory = () => {
    if(confirm('Are you sure you want to delete all test history? This cannot be undone.')){
      localStorage.removeItem(STORAGE_KEY);
      renderProgress();
    }
  };

  const $ = id => document.getElementById(id);
  const show = el => { el.style.display = ''; };
  const hide = el => { el.style.display = 'none'; };
  const setScreen = id => {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(id).classList.add('active');
  };

  // ===== HOME & LANDING =====
  function goHome() {
    synth.cancel();
    clearInterval(timerInterval);
    clearInterval(speakingPrepInterval);
    clearInterval(speakingSpeakInterval);
    stopRecognition();
    window.scrollTo(0, 0);
    show($('home-screen')); // Clear any inline hide styles
    setScreen('home-screen');
  }

  function showProgress() {
    renderProgress();
    setScreen('progress-screen');
  }

  function renderProgress() {
    const history = getHistory();
    $('prog-total-tests').innerText = history.length;
    
    const list = $('history-list');
    if (history.length === 0) {
      list.innerHTML = `<div style="text-align:center; padding: 2rem; color: var(--text-muted);">No tests completed yet. Start practicing!</div>`;
      return;
    }

    // Sort by newest first
    const sorted = [...history].reverse();
    list.innerHTML = sorted.map(ref => {
      const date = new Date(ref.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
      const percent = Math.round((ref.score / ref.total) * 100);
      return `<div class="history-card">
        <div class="hc-header">
          <span class="hc-mode ${ref.mode}">${ref.mode.toUpperCase()}</span>
          <span class="hc-date">${date}</span>
        </div>
        <div class="hc-stats">
          <div class="hc-clb">CLB: ${ref.clb}</div>
          <div class="hc-score">${ref.score}/${ref.total} (${percent}%)</div>
        </div>
        <div class="hc-bar"><div class="hc-fill ${ref.mode}" style="width: ${percent}%"></div></div>
      </div>`;
    }).join('');
  }

  function goToLanding(testMode) {
    mode = testMode;
    setScreen('landing-screen');
    if (mode === 'listening') {
      $('landing-title').innerHTML = 'CELPIP Listening<br><span>Mock Test</span>';
      $('lc-qs').textContent = '38'; $('lc-parts').textContent = '6'; $('lc-time').textContent = '~47';
      $('landing-parts').innerHTML = ['Problem Solving','Daily Life','Information','News Item','Discussion','Viewpoints']
        .map((n,i) => `<div class="part-pill">Part ${i+1}: ${n}</div>`).join('');
      $('landing-instructions').innerHTML = `<h3>📋 Instructions</h3><ul>
        <li>Audio plays <strong>once only</strong> — listen carefully</li>
        <li>Each part is timed individually</li>
        <li>Select the best answer for each question</li>
        <li>You cannot go back to previous parts</li>
        <li>Results are shown after completing all parts</li>
        <li>Questions change each time you take the test</li></ul>`;
    } else {
      $('landing-title').innerHTML = 'CELPIP Reading<br><span>Mock Test</span>';
      $('lc-qs').textContent = '38'; $('lc-parts').textContent = '4'; $('lc-time').textContent = '~55';
      $('landing-parts').innerHTML = ['Correspondence','Applying a Diagram','Information Texts','Viewpoints']
        .map((n,i) => `<div class="part-pill">Part ${i+1}: ${n}</div>`).join('');
      $('landing-instructions').innerHTML = `<h3>📋 Instructions</h3><ul>
        <li>Read each passage carefully before answering</li>
        <li>Each part is timed individually</li>
        <li>The passage stays visible while you answer</li>
        <li>You can scroll the passage as needed</li>
        <li>Select the best answer for each question</li>
        <li>Questions change each time you take the test</li></ul>`;
    }
  }

  // ===== START TEST =====
  function getRecentIndices(modeKey) {
    const history = getHistory();
    const recent = history.filter(r => r.mode === modeKey).slice(-3);
    const merged = {};
    recent.forEach(r => {
      if (r.setIndices) {
        Object.entries(r.setIndices).forEach(([k, idx]) => {
          if (!merged[k]) merged[k] = [];
          if (!merged[k].includes(idx)) merged[k].push(idx);
        });
      }
    });
    return merged;
  }

  function startTest() {
    if (mode === 'listening') {
      const result = selectRandomSets(getRecentIndices('listening'));
      currentSets = result.sets;
      currentSetIndices = result.indices;
      totalParts = 6;
      partNames = PART_NAMES;
    } else {
      const result = selectRandomReadingSets(getRecentIndices('reading'));
      currentSets = result.sets;
      currentSetIndices = result.indices;
      totalParts = 4;
      partNames = READING_PART_NAMES;
    }
    currentPart = 0;
    currentQ = 0;
    answers = {};
    allQuestions = [];
    buildFlatQuestions();
    $('exam-badge').textContent = mode === 'listening' ? 'CELPIP Listening' : 'CELPIP Reading';
    setScreen('exam-screen');
    showPartIntro();
  }

  function buildFlatQuestions() {
    if (mode === 'listening') {
      const keys = ['part1','part2','part3','part4','part5','part6'];
      keys.forEach((k, pi) => {
        const set = currentSets[k];
        if (set.segments) {
          set.segments.forEach(seg => {
            seg.questions.forEach(q => {
              allQuestions.push({ partIdx: pi, q: q.q, opts: q.opts, ans: q.ans, script: seg.script });
            });
          });
        } else {
          (set.questions || []).forEach(q => {
            allQuestions.push({ partIdx: pi, q: q.q, opts: q.opts, ans: q.ans, script: set.script });
          });
        }
      });
    } else {
      const keys = ['rpart1','rpart2','rpart3','rpart4'];
      keys.forEach((k, pi) => {
        const set = currentSets[k];
        (set.tasks || []).forEach((task, ti) => {
          const items = task.type === 'fill-blank' ? task.blanks : task.items;
          items.forEach((item, ii) => {
            allQuestions.push({
              partIdx: pi,
              taskIdx: ti,
              type: task.type,
              q: task.type === 'fill-blank' ? `Blank ${ii + 1}` : item.stem,
              opts: task.type === 'paragraph-match' ? ['A','B','C','D','E'] : item.opts,
              ans: item.ans,
            });
          });
        });
      });
    }
  }

  function getPartQuestions(partIdx) {
    return allQuestions.filter(q => q.partIdx === partIdx);
  }

  // ===== PART INTRO =====
  function showPartIntro() {
    let set, partKey;
    if (mode === 'listening') {
      const keys = ['part1','part2','part3','part4','part5','part6'];
      partKey = keys[currentPart];
    } else {
      const keys = ['rpart1','rpart2','rpart3','rpart4'];
      partKey = keys[currentPart];
    }
    set = currentSets[partKey];

    $('part-label').textContent = `Part ${currentPart + 1}`;
    $('part-intro-number').textContent = `Part ${currentPart + 1} of ${totalParts}`;
    $('part-intro-title').textContent = partNames[currentPart];
    $('part-intro-desc').textContent = set.desc || '';

    // Video scene (listening Part 5)
    const vs = $('video-scene');
    if (set.videoScene) { vs.innerHTML = set.videoScene; show(vs); } else { hide(vs); }

    // Button text
    if (mode === 'listening') {
      $('begin-btn-text').textContent = 'Play Audio & Begin';
    } else {
      $('begin-btn-text').textContent = 'Read Passage & Begin';
    }

    show($('part-intro'));
    hide($('question-area'));
    currentQ = 0;
    timeLeft = set.time;
    updateTimerDisplay();
  }

  // ===== PLAY / BEGIN =====
  function playPartAudio() {
    hide($('part-intro'));
    show($('question-area'));

    if (mode === 'reading') {
      const qa = $('question-area');
      qa.classList.add('reading-mode');
      show($('reading-passage'));
      show($('reading-tasks-panel'));
      hide($('question-card'));
      hide($('audio-status'));
      hide($('prev-q-btn'));
      renderReadingPart();
    } else {
      // Listening mode
      const qa = $('question-area');
      qa.classList.remove('reading-mode');
      hide($('reading-passage'));
      show($('audio-status'));
      // Build and speak script
      const keys = ['part1','part2','part3','part4','part5','part6'];
      const set = currentSets[keys[currentPart]];
      let fullScript = '';
      if (set.segments) {
        fullScript = set.segments.map(s => s.script).join('\n\n');
      } else {
        fullScript = set.script;
      }
      speakScript(fullScript);
    }

    startTimer();
    renderQuestion();
  }

  function speakScript(text) {
    synth.cancel();
    const clean = text.replace(/(Man|Woman|Aisha|Ben|Carmen|David|Fatima|Grace|Raj|Sophia|Tyler):\s*/g, '... ');
    const utt = new SpeechSynthesisUtterance(clean);
    utt.rate = 0.92; utt.pitch = 1; utt.lang = 'en-CA';
    const voices = synth.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Samantha'))
      || voices.find(v => v.lang.startsWith('en-CA'))
      || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utt.voice = enVoice;
    isSpeaking = true; updateAudioStatus(true);
    utt.onend = () => { isSpeaking = false; updateAudioStatus(false); };
    utt.onerror = () => { isSpeaking = false; updateAudioStatus(false); };
    synth.speak(utt);
  }

  function updateAudioStatus(playing) {
    const el = $('audio-status');
    if (!el) return;
    if (playing) {
      el.className = 'audio-status';
      el.innerHTML = '<div class="audio-wave"><span></span><span></span><span></span><span></span><span></span></div><span>Audio playing — listen carefully</span>';
    } else {
      el.className = 'audio-status done';
      el.innerHTML = '<div class="audio-wave"><span></span><span></span><span></span><span></span><span></span></div><span>Audio complete — answer the questions</span>';
    }
  }

  // ===== TIMER =====
  function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) { clearInterval(timerInterval); timeLeft = 0; autoAdvancePart(); }
      updateTimerDisplay();
      const timer = $('timer');
      if (timeLeft <= 60) timer.classList.add('warning'); else timer.classList.remove('warning');
    }, 1000);
  }

  function updateTimerDisplay() {
    const m = Math.floor(timeLeft / 60), s = timeLeft % 60;
    $('timer-display').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  // ===== QUESTION RENDERING =====
  function renderQuestion() {
    const partQs = getPartQuestions(currentPart);
    if (currentQ >= partQs.length) return;
    const qData = partQs[currentQ];
    const qGlobal = getGlobalIndex();

    $('question-text').textContent = `${qGlobal + 1}. ${qData.q}`;
    const letters = ['A','B','C','D'];
    $('options-list').innerHTML = qData.opts.map((opt, i) => {
      const sel = answers[qGlobal] === i ? 'selected' : '';
      return `<button class="option-btn ${sel}" onclick="app.selectOption(${i})" id="opt-${i}">
        <span class="opt-letter">${letters[i]}</span>
        <span>${opt}</span>
      </button>`;
    }).join('');

    $('question-counter').textContent = `Q${qGlobal + 1} of ${allQuestions.length}`;
    $('progress-fill').style.width = `${((qGlobal + 1) / allQuestions.length) * 100}%`;

    const partQCount = partQs.length;
    $('prev-q-btn').style.display = currentQ > 0 ? '' : 'none';
    const isLastQInPart = currentQ === partQCount - 1;
    const isLastPart = currentPart === totalParts - 1;
    if (isLastQInPart && isLastPart) $('next-q-btn').textContent = '✓ Submit Test';
    else if (isLastQInPart) $('next-q-btn').textContent = 'Next Part →';
    else $('next-q-btn').textContent = 'Next →';
  }

  // ===== READING PART RENDERER =====
  function renderReadingPart() {
    const readingKeys = ['rpart1','rpart2','rpart3','rpart4'];
    const set = currentSets[readingKeys[currentPart]];

    $('passage-content').innerHTML = set.passage;

    let startGlobalIdx = 0;
    for (let p = 0; p < currentPart; p++) startGlobalIdx += getPartQuestions(p).length;

    let html = '';
    let localNum = 1;
    let gIdx = startGlobalIdx;

    (set.tasks || []).forEach(task => {
      html += `<div class="reading-task">`;
      html += `<div class="task-instruction">${task.instruction}</div>`;

      if (task.type === 'statement-completion') {
        html += `<div class="statement-list">`;
        task.items.forEach(item => {
          const sel = answers[gIdx];
          const selClass = sel !== undefined ? ' answered' : '';
          html += `<div class="statement-item">
            <span class="stmt-num">${localNum}.</span>
            <span class="stmt-stem">${item.stem}</span>
            <select class="stmt-select${selClass}" onchange="app.selectReadingAnswer(${gIdx}, this.value)">
              <option value="" ${sel === undefined ? 'selected' : ''} disabled>Select...</option>
              ${item.opts.map((opt, oi) => `<option value="${oi}" ${sel === oi ? 'selected' : ''}>${opt}</option>`).join('')}
            </select>
          </div>`;
          localNum++; gIdx++;
        });
        html += `</div>`;

      } else if (task.type === 'fill-blank') {
        let blankIdx = 0;
        const blankStartGIdx = gIdx;
        const rendered = task.template.replace(/\[BLANK\]/g, () => {
          const thisGIdx = blankStartGIdx + blankIdx;
          const sel = answers[thisGIdx];
          const selClass = sel !== undefined ? ' answered' : '';
          const opts = task.blanks[blankIdx].opts;
          const selectHtml = `<select class="inline-select${selClass}" onchange="app.selectReadingAnswer(${thisGIdx}, this.value)">
            <option value="" ${sel === undefined ? 'selected' : ''} disabled>▾</option>
            ${opts.map((opt, oi) => `<option value="${oi}" ${sel === oi ? 'selected' : ''}>${opt}</option>`).join('')}
          </select>`;
          blankIdx++;
          return selectHtml;
        });
        html += `<div class="fill-blank-block">${rendered}</div>`;
        gIdx += task.blanks.length;
        localNum += task.blanks.length;

      } else if (task.type === 'paragraph-match') {
        const opts = ['A','B','C','D','E'];
        html += `<div class="paragraph-match-list">`;
        task.items.forEach(item => {
          const sel = answers[gIdx];
          const selClass = sel !== undefined ? ' answered' : '';
          html += `<div class="match-item">
            <select class="match-select${selClass}" onchange="app.selectReadingAnswer(${gIdx}, this.value)">
              <option value="" ${sel === undefined ? 'selected' : ''} disabled>—</option>
              ${opts.map((opt, oi) => `<option value="${oi}" ${sel === oi ? 'selected' : ''}>${opt}</option>`).join('')}
            </select>
            <span class="match-stem">${localNum}. ${item.stem}</span>
          </div>`;
          localNum++; gIdx++;
        });
        html += `</div>`;
      }

      html += `</div>`;
    });

    $('reading-tasks-panel').innerHTML = html;

    const isLast = currentPart === totalParts - 1;
    $('next-q-btn').textContent = isLast ? '✓ Submit Test' : 'Next Part →';
    $('question-counter').textContent = `Part ${currentPart + 1} of ${totalParts}`;
    $('progress-fill').style.width = `${((currentPart + 1) / totalParts) * 100}%`;
  }

  function selectReadingAnswer(gIdx, val) {
    answers[gIdx] = parseInt(val);
  }

  function getGlobalIndex() {
    let idx = 0;
    for (let p = 0; p < currentPart; p++) idx += getPartQuestions(p).length;
    return idx + currentQ;
  }

  function selectOption(i) {
    const qGlobal = getGlobalIndex();
    answers[qGlobal] = i;
    document.querySelectorAll('.option-btn').forEach((btn, bi) => {
      btn.classList.toggle('selected', bi === i);
    });
    renderQuestion();
  }

  function nextQuestion() {
    if (mode === 'reading') {
      synth.cancel(); clearInterval(timerInterval);
      if (currentPart < totalParts - 1) { currentPart++; showPartIntro(); }
      else showResults();
      return;
    }
    const partQs = getPartQuestions(currentPart);
    if (currentQ < partQs.length - 1) { currentQ++; renderQuestion(); }
    else {
      synth.cancel(); clearInterval(timerInterval);
      if (currentPart < totalParts - 1) { currentPart++; showPartIntro(); }
      else showResults();
    }
  }

  function prevQuestion() { if (currentQ > 0) { currentQ--; renderQuestion(); } }

  function autoAdvancePart() {
    synth.cancel();
    if (currentPart < totalParts - 1) { currentPart++; showPartIntro(); }
    else showResults();
  }

  // ===== RESULTS =====
  function showResults() {
    synth.cancel(); clearInterval(timerInterval);
    setScreen('results-screen');

    let totalCorrect = 0;
    const partScores = new Array(totalParts).fill(0);
    const partTotals = new Array(totalParts).fill(0);

    allQuestions.forEach((q, i) => {
      partTotals[q.partIdx]++;
      if (answers[i] === q.ans) { totalCorrect++; partScores[q.partIdx]++; }
    });

    $('results-title').textContent = mode === 'listening' ? 'Listening Test Complete' : 'Reading Test Complete';
    $('score-num').textContent = totalCorrect;
    $('score-denom').textContent = `/${allQuestions.length}`;
    const pct = totalCorrect / allQuestions.length;
    const ring = $('score-ring');
    ring.style.strokeDashoffset = '326.73';
    setTimeout(() => { ring.style.strokeDashoffset = 326.73 * (1 - pct); }, 100);

    let clb = '< 7';
    if (pct >= 0.92) clb = '10'; else if (pct >= 0.82) clb = '9';
    else if (pct >= 0.7) clb = '8'; else if (pct >= 0.55) clb = '7';
    $('clb-estimate').textContent = `Estimated CLB: ${clb}`;

    $('part-scores').innerHTML = partNames.map((name, i) => {
      const score = partScores[i], total = partTotals[i];
      const p = total > 0 ? (score / total * 100) : 0;
      return `<div class="part-score-card">
        <div class="ps-label">Part ${i+1}: ${name}</div>
        <div class="ps-val">${score} / ${total}</div>
        <div class="ps-bar"><div class="ps-bar-fill" style="width:${p}%"></div></div>
      </div>`;
    }).join('');

    // Generate Personalized Suggestions
    const reqThreshold = 0.75; // Less than 75% triggers advice
    const adviceSource = mode === 'listening' ? LISTENING_ADVICE : READING_ADVICE;
    let suggestionsHtml = '';
    
    partScores.forEach((score, i) => {
      const total = partTotals[i];
      if (total > 0 && (score / total) < reqThreshold) {
        // Format markdown-like bolding for the title
        let rawAdvice = adviceSource[i];
        let formattedAdvice = rawAdvice.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        suggestionsHtml += `<div class="suggestion-item">
          <div class="sugg-icon">🎯</div>
          <div class="sugg-text">${formattedAdvice}</div>
        </div>`;
      }
    });

    const suggContainer = $('study-suggestions');
    if (suggestionsHtml.length > 0) {
      $('suggestions-list').innerHTML = suggestionsHtml;
      show(suggContainer);
    } else {
      $('suggestions-list').innerHTML = `<div class="suggestion-item"><div class="sugg-icon">🌟</div><div class="sugg-text"><strong>Excellent Work!</strong> You scored above 75% in every single section. Keep practicing to maintain your high proficiency level.</div></div>`;
      show(suggContainer);
    }

    // Save to Local History
    saveHistory({
      mode: mode,
      score: totalCorrect,
      total: allQuestions.length,
      clb: clb,
      timestamp: Date.now(),
      setIndices: currentSetIndices
    });

    hide($('review-section'));
  }

  function showReview() {
    const section = $('review-section');
    show(section);
    const letters = ['A','B','C','D'];
    let html = '', lastPart = -1;
    allQuestions.forEach((q, i) => {
      if (q.partIdx !== lastPart) {
        lastPart = q.partIdx;
        html += `<div class="review-part-header">Part ${q.partIdx + 1}: ${partNames[q.partIdx]}</div>`;
      }
      const userAns = answers[i], correct = userAns === q.ans;
      const isParagraphMatch = q.type === 'paragraph-match';
      const fmtAns = (idx) => isParagraphMatch
        ? q.opts[idx]
        : `${letters[idx]} — ${q.opts[idx]}`;
      html += `<div class="review-item ${correct ? 'correct' : 'incorrect'}">
        <div class="review-q">${i + 1}. ${q.q}</div>
        <div class="review-detail">
          ${userAns !== undefined
            ? `<span class="${correct ? 'correct-answer' : 'your-answer'}">Your answer: ${fmtAns(userAns)}</span>`
            : '<span class="your-answer">No answer selected</span>'}
          ${!correct ? `<br><span class="correct-answer">Correct: ${fmtAns(q.ans)}</span>` : ''}
        </div>
      </div>`;
    });
    section.innerHTML = html;
    section.scrollIntoView({ behavior: 'smooth' });
  }

  function restart() { window.scrollTo(0, 0); goToLanding(mode); }

  function togglePassage() {
    const rp = $('reading-passage');
    const btn = $('passage-toggle');
    const label = $('passage-toggle-label');
    const collapsed = rp.classList.toggle('collapsed');
    btn.classList.toggle('collapsed', collapsed);
    label.textContent = collapsed ? 'Show' : 'Hide';
  }

  if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = () => {};

  // ===== WRITING MODULE =====
  const WRITING_STORAGE_KEY = 'celpip_writing_history';
  let writingTaskNum = 1;
  let writingPrompt = null;
  let writingTimerInterval = null;
  let writingTimeLeft = 0;

  function goToWritingLanding() {
    synth.cancel();
    clearInterval(timerInterval);
    clearInterval(writingTimerInterval);
    window.scrollTo(0, 0);
    setScreen('writing-landing-screen');
  }

  function startWritingTask(taskNum) {
    writingTaskNum = taskNum;
    window._writingTaskNum = taskNum;
    const pool = taskNum === 1 ? WRITING_PROMPTS.task1 : WRITING_PROMPTS.task2;
    writingPrompt = pool[Math.floor(Math.random() * pool.length)];

    // Render prompt
    $('writing-task-badge').textContent = 'Task ' + taskNum;
    $('writing-prompt-type-badge').textContent = taskNum === 1 ? 'Task 1 — Write an Email' : 'Task 2 — Respond to Survey';

    let promptHtml = '';
    if (taskNum === 1) {
      promptHtml = `
        <div class="wp-task-label">Scenario</div>
        <div class="wp-scenario">${writingPrompt.scenario}</div>
        <div class="wp-task-label">Your Task</div>
        <div style="font-size:.9rem;line-height:1.7;color:var(--text2);">${writingPrompt.prompt.replace(/\n/g, '<br>')}</div>
        <div style="margin-top:16px;font-size:.78rem;color:var(--text2);padding:10px 14px;background:var(--surface2);border-radius:var(--radius-sm);border:1px solid var(--border);">
          Format: <strong style="color:var(--accent2)">${writingPrompt.format}</strong> &nbsp;•&nbsp; Length: <strong style="color:var(--accent2)">150–200 words</strong>
        </div>`;
    } else {
      promptHtml = `
        <div class="wp-task-label">Survey: ${writingPrompt.survey}</div>
        <div class="wp-questions">
          <div class="wp-question"><strong>Question 1</strong>${writingPrompt.question1}</div>
          <div class="wp-question"><strong>Question 2</strong>${writingPrompt.question2}</div>
        </div>
        <div style="margin-top:16px;font-size:.78rem;color:var(--text2);padding:10px 14px;background:var(--surface2);border-radius:var(--radius-sm);border:1px solid var(--border);">
          Address <strong style="color:var(--accent2)">both questions</strong> in your response &nbsp;•&nbsp; Length: <strong style="color:var(--accent2)">150–200 words</strong>
        </div>`;
    }
    $('writing-prompt-body').innerHTML = promptHtml;

    // Reset editor
    $('writing-textarea').value = '';
    updateWordCount();

    // Start timer
    clearInterval(writingTimerInterval);
    writingTimeLeft = taskNum === 1 ? 27 * 60 : 26 * 60;
    updateWritingTimer();
    writingTimerInterval = setInterval(() => {
      writingTimeLeft--;
      updateWritingTimer();
      if (writingTimeLeft <= 0) clearInterval(writingTimerInterval);
    }, 1000);

    window.scrollTo(0, 0);
    setScreen('writing-screen');
  }

  function updateWritingTimer() {
    const m = Math.floor(writingTimeLeft / 60);
    const s = writingTimeLeft % 60;
    $('writing-timer-display').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    const timerEl = $('writing-timer');
    if (writingTimeLeft <= 300) {
      timerEl.classList.add('warning');
    } else {
      timerEl.classList.remove('warning');
    }
  }

  function onWritingInput() {
    updateWordCount();
  }

  function countWords(text) {
    return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  }

  function updateWordCount() {
    const text = $('writing-textarea').value;
    const wc = countWords(text);
    const pct = Math.min(wc / 200, 1);
    const bar = $('writing-wc-bar');
    const live = $('writing-wc-live');
    const status = $('writing-wc-status');

    $('writing-word-count').textContent = wc + ' words';
    live.textContent = wc + ' / 200 words';

    bar.style.width = (pct * 100) + '%';

    if (wc >= 150 && wc <= 200) {
      bar.className = 'wc-bar ok';
      live.className = 'wc-live ok';
      status.textContent = 'Good length';
    } else if (wc > 200) {
      bar.className = 'wc-bar over';
      live.className = 'wc-live over';
      status.textContent = wc + ' words — slightly over';
    } else {
      bar.className = 'wc-bar';
      live.className = 'wc-live';
      status.textContent = wc < 150 ? `${150 - wc} more words needed` : 'Aim for 150–200 words';
    }
  }

  async function submitWriting() {
    const text = $('writing-textarea').value.trim();
    if (countWords(text) < 30) {
      alert('Please write at least 30 words before submitting.');
      return;
    }

    const apiKey = localStorage.getItem('celpip_api_key');
    if (!apiKey) {
      alert('No API key found. Please add your Anthropic API key in Settings (gear icon on home screen).');
      return;
    }

    clearInterval(writingTimerInterval);
    $('grading-overlay').style.display = 'flex';

    try {
      const result = await gradeWithClaude(text, apiKey);
      showWritingResults(result, text);
    } catch (err) {
      $('grading-overlay').style.display = 'none';
      alert('Grading failed: ' + err.message + '\n\nCheck your API key in Settings.');
    }
  }

  async function gradeWithClaude(essay, apiKey) {
    const taskDesc = writingTaskNum === 1
      ? `Task 1 - Write an Email\nScenario: ${writingPrompt.scenario}\nTask: ${writingPrompt.prompt}`
      : `Task 2 - Respond to Survey (${writingPrompt.survey})\nQuestion 1: ${writingPrompt.question1}\nQuestion 2: ${writingPrompt.question2}`;

    const systemPrompt = `You are an expert CELPIP examiner. Grade the following writing response using the official CELPIP rubric. Be honest and constructive. Respond ONLY with valid JSON in exactly this format:
{
  "clb": <number 4-12>,
  "overall": "<one sentence overall assessment>",
  "dimensions": {
    "content": { "score": <4-12>, "label": "Content & Coherence", "comment": "<1-2 sentences>" },
    "vocabulary": { "score": <4-12>, "label": "Vocabulary", "comment": "<1-2 sentences>" },
    "readability": { "score": <4-12>, "label": "Readability", "comment": "<1-2 sentences>" },
    "taskFulfillment": { "score": <4-12>, "label": "Task Fulfillment", "comment": "<1-2 sentences>" }
  },
  "suggestions": [
    "<specific actionable improvement with example>",
    "<specific actionable improvement with example>",
    "<specific actionable improvement with example>"
  ]
}`;

    const userMessage = `CELPIP Writing ${taskDesc}\n\n---\nCANDIDATE RESPONSE (${countWords(essay)} words):\n${essay}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }]
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `API error ${response.status}`);
    }

    const data = await response.json();
    const raw = data.content[0].text.trim();
    // Extract JSON even if wrapped in markdown code fences
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('Could not parse grading response.');
    return JSON.parse(jsonMatch[0]);
  }

  function showWritingResults(result, essay) {
    $('grading-overlay').style.display = 'none';

    $('writing-results-title').textContent = writingTaskNum === 1 ? 'Task 1 Graded' : 'Task 2 Graded';
    $('writing-score-num').textContent = 'CLB ' + result.clb;
    $('writing-clb-badge').textContent = 'Estimated CLB: ' + result.clb;

    // Animate score ring
    const ring = $('writing-score-ring');
    const pct = (result.clb - 4) / 8; // CLB 4=0%, CLB 12=100%
    const offset = 326.73 * (1 - pct);
    setTimeout(() => { ring.style.strokeDashoffset = offset; }, 100);

    // Dimension scores
    const dims = result.dimensions;
    let dimHtml = '';
    Object.values(dims).forEach(d => {
      const pct = ((d.score - 4) / 8) * 100;
      dimHtml += `
        <div class="dim-score-card">
          <div class="dim-label">${d.label}</div>
          <div class="dim-val">CLB ${d.score}</div>
          <div class="dim-bar"><div class="dim-bar-fill" style="width:${pct}%"></div></div>
        </div>`;
    });
    $('writing-dimension-scores').innerHTML = dimHtml;

    // Feedback
    let feedbackHtml = '';
    if (result.overall) feedbackHtml += `<div class="feedback-item"><strong>Overall</strong>${result.overall}</div>`;
    if (result.suggestions && result.suggestions.length) {
      result.suggestions.forEach((s, i) => {
        feedbackHtml += `<div class="feedback-item"><strong>Suggestion ${i+1}</strong>${s}</div>`;
      });
    }
    $('writing-feedback-content').innerHTML = feedbackHtml;
    $('writing-feedback-box').style.display = feedbackHtml ? 'block' : 'none';

    // Essay display
    $('writing-essay-display').textContent = essay;

    // Save to history
    saveWritingHistory(result, essay);

    window.scrollTo(0, 0);
    setScreen('writing-results-screen');
  }

  function saveWritingHistory(result, essay) {
    const history = JSON.parse(localStorage.getItem(WRITING_STORAGE_KEY) || '[]');
    history.unshift({
      date: new Date().toLocaleDateString(),
      task: writingTaskNum,
      clb: result.clb,
      words: countWords(essay)
    });
    localStorage.setItem(WRITING_STORAGE_KEY, JSON.stringify(history.slice(0, 20)));
  }

  // ===== SPEAKING MODULE =====
  const SPEAKING_STORAGE_KEY = 'celpip_speaking_history';
  let speakingTaskNum = 1;
  let speakingPromptData = null;
  let speakingPrepInterval = null;
  let speakingSpeakInterval = null;
  let speakingPrepTimeLeft = 30;
  let speakingSpeakTimeLeft = 60;
  let recognition = null;
  let isRecording = false;
  let speakingFinalTranscript = '';

  function goToSpeakingLanding() {
    synth.cancel();
    clearInterval(timerInterval);
    clearInterval(writingTimerInterval);
    clearInterval(speakingPrepInterval);
    clearInterval(speakingSpeakInterval);
    stopRecognition();
    window.scrollTo(0, 0);
    setScreen('speaking-landing-screen');
  }

  function startSpeakingTask(taskNum) {
    speakingTaskNum = taskNum;
    window._speakingTaskNum = taskNum;
    const taskData = SPEAKING_PROMPTS['task' + taskNum];
    speakingPromptData = taskData.prompts[Math.floor(Math.random() * taskData.prompts.length)];

    $('speaking-task-badge').textContent = 'Task ' + taskNum;
    $('speaking-prompt-type-badge').textContent = 'Task ' + taskNum + ' — ' + taskData.title;
    $('speaking-prompt-context').textContent = speakingPromptData.context;
    $('speaking-prompt-task').textContent = speakingPromptData.task;

    speakingFinalTranscript = '';
    $('speaking-transcript').value = '';
    $('speaking-transcript').readOnly = true;
    $('speaking-word-count').textContent = '0 words';
    $('speaking-no-mic-warning').style.display = 'none';

    showPrepPhase(taskData.prepTime, taskData.speakTime);
    window.scrollTo(0, 0);
    setScreen('speaking-screen');
  }

  function showPrepPhase(prepTime, speakTime) {
    clearInterval(speakingPrepInterval);
    clearInterval(speakingSpeakInterval);
    stopRecognition();

    $('speaking-phase-prep').classList.add('active');
    $('speaking-phase-speak').classList.remove('active');
    $('speaking-phase-label').textContent = 'Preparation';
    $('speaking-phase-label').className = 'speaking-phase-label prep';

    speakingPrepTimeLeft = prepTime;
    updateSpeakingTimer(speakingPrepTimeLeft);

    speakingPrepInterval = setInterval(() => {
      speakingPrepTimeLeft--;
      updateSpeakingTimer(speakingPrepTimeLeft);
      if (speakingPrepTimeLeft <= 0) {
        clearInterval(speakingPrepInterval);
        startSpeakingPhase(speakTime);
      }
    }, 1000);
  }

  function skipToSpeaking() {
    clearInterval(speakingPrepInterval);
    const taskData = SPEAKING_PROMPTS['task' + speakingTaskNum];
    startSpeakingPhase(taskData.speakTime);
  }

  function startSpeakingPhase(speakTime) {
    $('speaking-phase-prep').classList.remove('active');
    $('speaking-phase-speak').classList.add('active');
    $('speaking-phase-label').textContent = 'Speaking';
    $('speaking-phase-label').className = 'speaking-phase-label speak';

    speakingFinalTranscript = '';
    $('speaking-transcript').value = '';
    startRecognition();

    speakingSpeakTimeLeft = speakTime;
    updateSpeakingTimer(speakingSpeakTimeLeft);
    const timerEl = $('speaking-timer');
    timerEl.classList.remove('warning');

    speakingSpeakInterval = setInterval(() => {
      speakingSpeakTimeLeft--;
      updateSpeakingTimer(speakingSpeakTimeLeft);
      if (speakingSpeakTimeLeft <= 10) timerEl.classList.add('warning');
      if (speakingSpeakTimeLeft <= 0) {
        clearInterval(speakingSpeakInterval);
        stopRecognition();
        setTimeout(submitSpeaking, 600);
      }
    }, 1000);
  }

  function updateSpeakingTimer(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    $('speaking-timer-display').textContent =
      String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  function startRecognition() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      $('speaking-no-mic-warning').style.display = 'block';
      $('speaking-transcript').readOnly = false;
      $('speaking-rec-indicator').classList.remove('recording');
      $('speaking-rec-status').textContent = 'Type your response below';
      return;
    }

    recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-CA';
    isRecording = true;

    recognition.onresult = (e) => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) {
          speakingFinalTranscript += t + ' ';
        } else {
          interim += t;
        }
      }
      $('speaking-transcript').value =
        speakingFinalTranscript + (interim ? interim : '');
      updateSpeakingWordCount();
    };

    recognition.onerror = (e) => {
      if (e.error === 'not-allowed') {
        $('speaking-no-mic-warning').style.display = 'block';
        $('speaking-no-mic-warning').textContent =
          'Microphone access was denied. Please allow access and reload the page, or type your response below.';
        $('speaking-transcript').readOnly = false;
        $('speaking-rec-status').textContent = 'Microphone blocked — type below';
        isRecording = false;
      } else if (e.error !== 'no-speech') {
        $('speaking-rec-status').textContent = 'Mic error: ' + e.error;
      }
    };

    recognition.onend = () => {
      if (isRecording) {
        try { recognition.start(); } catch (ex) {}
      }
    };

    $('speaking-rec-indicator').classList.add('recording');
    $('speaking-rec-status').textContent = 'Recording — speak clearly';

    try {
      recognition.start();
    } catch (ex) {
      $('speaking-rec-status').textContent = 'Could not start mic. Check permissions.';
    }
  }

  function stopRecognition() {
    isRecording = false;
    if (recognition) {
      try { recognition.stop(); } catch (ex) {}
      recognition = null;
    }
    const indicator = $('speaking-rec-indicator');
    if (indicator) {
      indicator.classList.remove('recording');
      $('speaking-rec-status').textContent = 'Recording stopped';
    }
  }

  function updateSpeakingWordCount() {
    const text = $('speaking-transcript').value.trim();
    const words = text === '' ? 0 : text.split(/\s+/).length;
    $('speaking-word-count').textContent = words + ' words';
  }

  async function submitSpeaking() {
    clearInterval(speakingSpeakInterval);
    stopRecognition();

    const transcript = $('speaking-transcript').value.trim();
    if (transcript.split(/\s+/).filter(Boolean).length < 10) {
      alert('Your response is too short. Please speak or type at least 10 words.');
      return;
    }

    const apiKey = localStorage.getItem('celpip_api_key');
    if (!apiKey) {
      alert('No API key found. Please add your Anthropic API key in Settings (gear icon on home screen).');
      return;
    }

    $('grading-overlay').style.display = 'flex';

    try {
      const result = await gradeSpeakingWithClaude(transcript, apiKey);
      showSpeakingResults(result, transcript);
    } catch (err) {
      $('grading-overlay').style.display = 'none';
      alert('Grading failed: ' + err.message + '\n\nCheck your API key in Settings.');
    }
  }

  async function gradeSpeakingWithClaude(transcript, apiKey) {
    const taskData = SPEAKING_PROMPTS['task' + speakingTaskNum];
    const taskDesc = `Task ${speakingTaskNum}: ${taskData.title}
Context: ${speakingPromptData.context}
Task: ${speakingPromptData.task}`;

    const systemPrompt = `You are an expert CELPIP examiner grading a spoken response. The transcript was captured by speech recognition and may contain minor errors — grade based on what the candidate likely said. Be fair, honest, and constructive. Respond ONLY with valid JSON in exactly this format:
{
  "clb": <number 4-12>,
  "overall": "<one sentence overall assessment>",
  "dimensions": {
    "coherence": { "score": <4-12>, "label": "Coherence", "comment": "<1-2 sentences>" },
    "vocabulary": { "score": <4-12>, "label": "Vocabulary", "comment": "<1-2 sentences>" },
    "listenability": { "score": <4-12>, "label": "Listenability", "comment": "<1-2 sentences>" },
    "taskFulfillment": { "score": <4-12>, "label": "Task Fulfillment", "comment": "<1-2 sentences>" }
  },
  "suggestions": [
    "<specific actionable improvement with example>",
    "<specific actionable improvement with example>",
    "<specific actionable improvement with example>"
  ]
}`;

    const words = transcript.split(/\s+/).filter(Boolean).length;
    const userMessage = `CELPIP Speaking\n${taskDesc}\n\n---\nCANDIDATE SPOKEN RESPONSE (${words} words, speech-to-text transcript):\n${transcript}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }]
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `API error ${response.status}`);
    }

    const data = await response.json();
    const raw = data.content[0].text.trim();
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('Could not parse grading response.');
    return JSON.parse(jsonMatch[0]);
  }

  function showSpeakingResults(result, transcript) {
    $('grading-overlay').style.display = 'none';

    $('speaking-results-title').textContent = 'Task ' + speakingTaskNum + ' Graded';
    $('speaking-score-num').textContent = 'CLB ' + result.clb;
    $('speaking-clb-badge').textContent = 'Estimated CLB: ' + result.clb;

    const ring = $('speaking-score-ring');
    const pct = (result.clb - 4) / 8;
    setTimeout(() => { ring.style.strokeDashoffset = 326.73 * (1 - pct); }, 100);

    let dimHtml = '';
    Object.values(result.dimensions).forEach(d => {
      const p = ((d.score - 4) / 8) * 100;
      dimHtml += `<div class="dim-score-card">
        <div class="dim-label">${d.label}</div>
        <div class="dim-val">CLB ${d.score}</div>
        <div class="dim-bar"><div class="dim-bar-fill" style="width:${p}%"></div></div>
        <div style="font-size:.8rem;color:var(--text2);margin-top:8px;line-height:1.5;">${d.comment}</div>
      </div>`;
    });
    $('speaking-dimension-scores').innerHTML = dimHtml;

    let feedbackHtml = '';
    if (result.overall) feedbackHtml += `<div class="feedback-item"><strong>Overall</strong>${result.overall}</div>`;
    (result.suggestions || []).forEach((s, i) => {
      feedbackHtml += `<div class="feedback-item"><strong>Suggestion ${i + 1}</strong>${s}</div>`;
    });
    $('speaking-feedback-content').innerHTML = feedbackHtml;
    $('speaking-feedback-box').style.display = feedbackHtml ? 'block' : 'none';

    $('speaking-transcript-display').textContent = transcript;

    const history = JSON.parse(localStorage.getItem(SPEAKING_STORAGE_KEY) || '[]');
    history.unshift({
      date: new Date().toLocaleDateString(),
      task: speakingTaskNum,
      clb: result.clb,
      words: transcript.split(/\s+/).filter(Boolean).length
    });
    localStorage.setItem(SPEAKING_STORAGE_KEY, JSON.stringify(history.slice(0, 20)));

    window.scrollTo(0, 0);
    setScreen('speaking-results-screen');
  }

  // ===== SETTINGS =====
  function showSettings() {
    const key = localStorage.getItem('celpip_api_key') || '';
    $('api-key-input').value = key;
    $('api-key-status').textContent = key ? 'API key is saved.' : '';
    $('api-key-status').className = 'api-key-status' + (key ? ' ok' : '');
    $('settings-modal').style.display = 'flex';
  }

  function closeSettings() {
    $('settings-modal').style.display = 'none';
  }

  function closeSettingsOnOverlay(e) {
    if (e.target === $('settings-modal')) closeSettings();
  }

  function saveApiKey() {
    const key = $('api-key-input').value.trim();
    if (!key.startsWith('sk-ant-')) {
      $('api-key-status').textContent = 'Invalid key format. Should start with sk-ant-';
      $('api-key-status').className = 'api-key-status err';
      return;
    }
    localStorage.setItem('celpip_api_key', key);
    $('api-key-status').textContent = 'API key saved successfully.';
    $('api-key-status').className = 'api-key-status ok';
  }

  function clearApiKey() {
    localStorage.removeItem('celpip_api_key');
    $('api-key-input').value = '';
    $('api-key-status').textContent = 'API key cleared.';
    $('api-key-status').className = 'api-key-status err';
  }

  function toggleKeyVisibility() {
    const input = $('api-key-input');
    const btn = $('toggle-key-btn');
    if (input.type === 'password') {
      input.type = 'text';
      btn.textContent = 'Hide';
    } else {
      input.type = 'password';
      btn.textContent = 'Show';
    }
  }

  return {
    goHome, goToLanding, startTest, playPartAudio, selectOption, nextQuestion, prevQuestion,
    selectReadingAnswer, showReview, restart, showProgress, clearProgress: clearHistory, togglePassage,
    goToWritingLanding, startWritingTask, onWritingInput, submitWriting,
    goToSpeakingLanding, startSpeakingTask, skipToSpeaking, submitSpeaking,
    showSettings, closeSettings, closeSettingsOnOverlay, saveApiKey, clearApiKey, toggleKeyVisibility
  };
})();
