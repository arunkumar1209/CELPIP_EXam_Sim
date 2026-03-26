// CELPIP Listening Mock Test - Main Application Controller

const app = (() => {
  // State
  let currentSets = null;
  let currentPart = 0; // 0-5
  let currentQ = 0;
  let globalQ = 0;
  let answers = {};
  let timerInterval = null;
  let timeLeft = 0;
  let allQuestions = []; // flat list: [{partIdx, qIdx, q, opts, ans}]
  let synth = window.speechSynthesis;
  let isSpeaking = false;

  // DOM helpers
  const $ = id => document.getElementById(id);
  const show = el => { el.style.display = ''; };
  const hide = el => { el.style.display = 'none'; };
  const setScreen = id => {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(id).classList.add('active');
  };

  function startTest() {
    currentSets = selectRandomSets();
    currentPart = 0;
    currentQ = 0;
    globalQ = 0;
    answers = {};
    allQuestions = [];
    buildFlatQuestions();
    setScreen('exam-screen');
    showPartIntro();
  }

  function buildFlatQuestions() {
    const keys = ['part1','part2','part3','part4','part5','part6'];
    keys.forEach((k, pi) => {
      const set = currentSets[k];
      if (set.segments) {
        // Part 1 has segments
        set.segments.forEach(seg => {
          seg.questions.forEach((q, qi) => {
            allQuestions.push({ partIdx: pi, q: q.q, opts: q.opts, ans: q.ans, script: seg.script });
          });
        });
      } else {
        // Parts 2-6 have flat questions
        (set.questions || []).forEach((q, qi) => {
          allQuestions.push({ partIdx: pi, q: q.q, opts: q.opts, ans: q.ans, script: set.script });
        });
      }
    });
  }

  function getPartQuestions(partIdx) {
    return allQuestions.filter(q => q.partIdx === partIdx);
  }

  function showPartIntro() {
    const keys = ['part1','part2','part3','part4','part5','part6'];
    const set = currentSets[keys[currentPart]];
    $('part-label').textContent = `Part ${currentPart + 1}`;
    $('part-intro-number').textContent = `Part ${currentPart + 1} of 6`;
    $('part-intro-title').textContent = PART_NAMES[currentPart];
    $('part-intro-desc').textContent = set.desc || PART_DESCS[currentPart];

    // Video scene for Part 5
    const vs = $('video-scene');
    if (set.videoScene) {
      vs.innerHTML = set.videoScene;
      show(vs);
    } else {
      hide(vs);
    }

    show($('part-intro'));
    hide($('question-area'));
    currentQ = 0;
    timeLeft = set.time;
    updateTimerDisplay();
  }

  function playPartAudio() {
    hide($('part-intro'));
    show($('question-area'));
    startTimer();
    renderQuestion();

    // Build full script for this part
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

  function speakScript(text) {
    synth.cancel();
    // Clean speaker labels for TTS
    const clean = text.replace(/(Man|Woman|Aisha|Ben|Carmen|David|Fatima|Grace|Raj|Sophia|Tyler):\s*/g, '... ');
    const utt = new SpeechSynthesisUtterance(clean);
    utt.rate = 0.92;
    utt.pitch = 1;
    utt.lang = 'en-CA';

    // Try to find an English voice
    const voices = synth.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Samantha'))
      || voices.find(v => v.lang.startsWith('en-CA'))
      || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utt.voice = enVoice;

    isSpeaking = true;
    updateAudioStatus(true);
    utt.onend = () => {
      isSpeaking = false;
      updateAudioStatus(false);
    };
    utt.onerror = () => {
      isSpeaking = false;
      updateAudioStatus(false);
    };
    synth.speak(utt);
  }

  function updateAudioStatus(playing) {
    const el = $('audio-status');
    if (playing) {
      el.className = 'audio-status';
      el.innerHTML = '<div class="audio-wave"><span></span><span></span><span></span><span></span><span></span></div><span>Audio playing — listen carefully</span>';
    } else {
      el.className = 'audio-status done';
      el.innerHTML = '<div class="audio-wave"><span></span><span></span><span></span><span></span><span></span></div><span>Audio complete — answer the questions</span>';
    }
  }

  function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timeLeft = 0;
        autoAdvancePart();
      }
      updateTimerDisplay();
      // Warning when < 60s
      const timer = $('timer');
      if (timeLeft <= 60) timer.classList.add('warning');
      else timer.classList.remove('warning');
    }, 1000);
  }

  function updateTimerDisplay() {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    $('timer-display').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

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

    // Update counters
    $('question-counter').textContent = `Q${qGlobal + 1} of ${allQuestions.length}`;
    $('progress-fill').style.width = `${((qGlobal + 1) / allQuestions.length) * 100}%`;

    // Nav buttons
    const partQCount = partQs.length;
    $('prev-q-btn').style.display = currentQ > 0 ? '' : 'none';
    const isLastQInPart = currentQ === partQCount - 1;
    const isLastPart = currentPart === 5;
    if (isLastQInPart && isLastPart) {
      $('next-q-btn').textContent = '✓ Submit Test';
    } else if (isLastQInPart) {
      $('next-q-btn').textContent = 'Next Part →';
    } else {
      $('next-q-btn').textContent = 'Next →';
    }
  }

  function getGlobalIndex() {
    let idx = 0;
    for (let p = 0; p < currentPart; p++) {
      idx += getPartQuestions(p).length;
    }
    return idx + currentQ;
  }

  function selectOption(i) {
    const qGlobal = getGlobalIndex();
    answers[qGlobal] = i;
    // Update UI
    document.querySelectorAll('.option-btn').forEach((btn, bi) => {
      btn.classList.toggle('selected', bi === i);
      btn.querySelector('.opt-letter').className = 'opt-letter';
      if (bi === i) btn.querySelector('.opt-letter').classList.add('selected-letter');
    });
    renderQuestion();
  }

  function nextQuestion() {
    const partQs = getPartQuestions(currentPart);
    if (currentQ < partQs.length - 1) {
      currentQ++;
      renderQuestion();
    } else {
      // End of part
      synth.cancel();
      clearInterval(timerInterval);
      if (currentPart < 5) {
        currentPart++;
        showPartIntro();
      } else {
        showResults();
      }
    }
  }

  function prevQuestion() {
    if (currentQ > 0) {
      currentQ--;
      renderQuestion();
    }
  }

  function autoAdvancePart() {
    synth.cancel();
    if (currentPart < 5) {
      currentPart++;
      showPartIntro();
    } else {
      showResults();
    }
  }

  function showResults() {
    synth.cancel();
    clearInterval(timerInterval);
    setScreen('results-screen');

    let totalCorrect = 0;
    const partScores = [0,0,0,0,0,0];
    const partTotals = [0,0,0,0,0,0];

    allQuestions.forEach((q, i) => {
      partTotals[q.partIdx]++;
      if (answers[i] === q.ans) {
        totalCorrect++;
        partScores[q.partIdx]++;
      }
    });

    // Animate score
    $('score-num').textContent = totalCorrect;
    const pct = totalCorrect / allQuestions.length;
    const ring = $('score-ring');
    const circumference = 326.73;
    setTimeout(() => {
      ring.style.strokeDashoffset = circumference * (1 - pct);
    }, 100);

    // CLB estimate
    let clb = '< 7';
    if (pct >= 0.92) clb = '10';
    else if (pct >= 0.82) clb = '9';
    else if (pct >= 0.7) clb = '8';
    else if (pct >= 0.55) clb = '7';
    $('clb-estimate').textContent = `Estimated CLB: ${clb}`;

    // Part scores
    $('part-scores').innerHTML = PART_NAMES.map((name, i) => {
      const score = partScores[i];
      const total = partTotals[i];
      const p = total > 0 ? (score / total * 100) : 0;
      return `<div class="part-score-card">
        <div class="ps-label">Part ${i+1}: ${name}</div>
        <div class="ps-val">${score} / ${total}</div>
        <div class="ps-bar"><div class="ps-bar-fill" style="width:${p}%"></div></div>
      </div>`;
    }).join('');

    hide($('review-section'));
  }

  function showReview() {
    const section = $('review-section');
    show(section);
    const letters = ['A','B','C','D'];
    let html = '';
    let lastPart = -1;

    allQuestions.forEach((q, i) => {
      if (q.partIdx !== lastPart) {
        lastPart = q.partIdx;
        html += `<div class="review-part-header">Part ${q.partIdx + 1}: ${PART_NAMES[q.partIdx]}</div>`;
      }
      const userAns = answers[i];
      const correct = userAns === q.ans;
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

  function restart() {
    window.scrollTo(0, 0);
    setScreen('landing-screen');
  }

  // Load voices
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = () => {};
  }

  return { startTest, playPartAudio, selectOption, nextQuestion, prevQuestion, showReview, restart };
})();
