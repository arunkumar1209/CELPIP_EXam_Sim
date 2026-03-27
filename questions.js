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

function selectRandomSets() {
  const keys = ['part1','part2','part3','part4','part5','part6'];
  const selected = {};
  keys.forEach(k => {
    const sets = QUESTION_BANK[k];
    selected[k] = sets[Math.floor(Math.random() * sets.length)];
  });
  return selected;
}

function selectRandomReadingSets() {
  const keys = ['rpart1','rpart2','rpart3','rpart4'];
  const selected = {};
  keys.forEach(k => {
    const sets = READING_QUESTION_BANK[k];
    selected[k] = sets[Math.floor(Math.random() * sets.length)];
  });
  return selected;
}
