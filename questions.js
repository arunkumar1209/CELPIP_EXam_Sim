// questions.js - Combines all question sets and provides random selection

const QUESTION_BANK = {
  part1: PART1_SETS,
  part2: PART2_SETS,
  part3: PART3_SETS,
  part4: PART4_SETS,
  part5: PART5_SETS,
  part6: PART6_SETS
};

const READING_QUESTION_BANK = {
  rpart1: READING_PART1_SETS,
  rpart2: READING_PART2_SETS,
  rpart3: READING_PART3_SETS,
  rpart4: READING_PART4_SETS
};

// Listening Part Names
const PART_NAMES = [
  "Listening to Problem Solving",
  "Listening to a Daily Life Conversation",
  "Listening for Information",
  "Listening to a News Item",
  "Listening to a Discussion",
  "Listening for Viewpoints"
];

// Reading Part Names
const READING_PART_NAMES = [
  "Reading Correspondence",
  "Reading to Apply a Diagram",
  "Reading for Information",
  "Reading for Viewpoints"
];

const PART_DESCS = [
  "You will hear three short conversations where people discuss and solve problems.",
  "You will hear a conversation about everyday situations.",
  "You will hear a conversation where someone provides detailed information on a topic.",
  "You will hear a news report similar to Canadian radio or television.",
  "You will hear a discussion among three people sharing different perspectives.",
  "You will hear a speaker presenting contrasting viewpoints on a social issue."
];

function pickAvoidingRecent(sets, recentIndices) {
  if (sets.length <= 1) return { set: sets[0], index: 0 };
  const candidates = sets.map((_, i) => i).filter(i => !recentIndices.includes(i));
  const pool = candidates.length > 0 ? candidates : sets.map((_, i) => i);
  const index = pool[Math.floor(Math.random() * pool.length)];
  return { set: sets[index], index };
}

function selectRandomSets(recentSetIndices) {
  const keys = ['part1','part2','part3','part4','part5','part6'];
  const selected = {};
  const usedIndices = {};
  const recent = recentSetIndices || {};
  keys.forEach(k => {
    const sets = QUESTION_BANK[k];
    const { set, index } = pickAvoidingRecent(sets, recent[k] || []);
    selected[k] = set;
    usedIndices[k] = index;
  });
  return { sets: selected, indices: usedIndices };
}

function selectRandomReadingSets(recentSetIndices) {
  const keys = ['rpart1','rpart2','rpart3','rpart4'];
  const selected = {};
  const usedIndices = {};
  const recent = recentSetIndices || {};
  keys.forEach(k => {
    const sets = READING_QUESTION_BANK[k];
    const { set, index } = pickAvoidingRecent(sets, recent[k] || []);
    selected[k] = set;
    usedIndices[k] = index;
  });
  return { sets: selected, indices: usedIndices };
}
