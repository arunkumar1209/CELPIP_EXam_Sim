// CELPIP Mock Test Simulator - Main Application Controller (Listening + Reading)

const app = (() => {
  // State
  let mode = ''; // 'listening' or 'reading'
  let currentSets = null;
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
  function startTest() {
    if (mode === 'listening') {
      currentSets = selectRandomSets();
      totalParts = 6;
      partNames = PART_NAMES;
    } else {
      currentSets = selectRandomReadingSets();
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
        (set.questions || []).forEach(q => {
          allQuestions.push({ partIdx: pi, q: q.q, opts: q.opts, ans: q.ans, passage: set.passage });
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
      // Show passage panel, hide audio status
      const qa = $('question-area');
      qa.classList.add('reading-mode');
      const rp = $('reading-passage');
      show(rp);
      const partQs = getPartQuestions(currentPart);
      if (partQs.length > 0 && partQs[0].passage) {
        $('passage-content').innerHTML = partQs[0].passage;
      }
      hide($('audio-status'));
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
      timestamp: Date.now()
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
      html += `<div class="review-item ${correct ? 'correct' : 'incorrect'}">
        <div class="review-q">${i + 1}. ${q.q}</div>
        <div class="review-detail">
          ${userAns !== undefined
            ? `<span class="${correct ? 'correct-answer' : 'your-answer'}">Your answer: ${letters[userAns]} — ${q.opts[userAns]}</span>`
            : '<span class="your-answer">No answer selected</span>'}
          ${!correct ? `<br><span class="correct-answer">Correct: ${letters[q.ans]} — ${q.opts[q.ans]}</span>` : ''}
        </div>
      </div>`;
    });
    section.innerHTML = html;
    section.scrollIntoView({ behavior: 'smooth' });
  }

  function restart() { window.scrollTo(0, 0); goToLanding(mode); }

  if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = () => {};

  return { goHome, goToLanding, startTest, playPartAudio, selectOption, nextQuestion, prevQuestion, showReview, restart, showProgress, clearProgress: clearHistory };
})();
