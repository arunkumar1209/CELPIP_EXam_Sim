// CELPIP Speaking Test Prompts — 8 Tasks, 4 prompts each

const SPEAKING_PROMPTS = {
  task1: {
    title: 'Giving Advice',
    prepTime: 30,
    speakTime: 90,
    instruction: 'Listen to the situation and give practical advice. Speak for up to 90 seconds.',
    prompts: [
      {
        context: 'Your friend calls you and says: "I have been offered a great job in another city. The salary is 40% higher than my current job, but it means leaving my family and close friends behind. I am not sure what to do."',
        task: 'What advice would you give your friend? What factors should they consider? Give specific suggestions and explain your reasoning. Speak for up to 90 seconds.'
      },
      {
        context: 'Your neighbor tells you: "My teenage son spends 6–8 hours a day playing video games. His grades are dropping and he barely leaves his room. I have tried talking to him but he just ignores me and gets angry."',
        task: 'What advice would you give to your neighbor? What steps should they take to deal with this situation effectively? Be specific and practical. Speak for up to 90 seconds.'
      },
      {
        context: 'A coworker says to you: "I have been in the same position for five years with no promotion. I work hard and put in extra hours, but my manager never seems to recognize my efforts. I am frustrated and thinking about quitting."',
        task: 'What advice would you give to your coworker? What actions should they take before making any major decisions? Speak for up to 90 seconds.'
      },
      {
        context: 'Your sister tells you: "I have been having constant arguments with my roommate about chores and noise levels. The lease still has eight months left and I cannot afford to move. Our relationship is getting worse every week."',
        task: 'What advice would you give to your sister? How should she approach the situation to improve things? Give practical suggestions. Speak for up to 90 seconds.'
      }
    ]
  },

  task2: {
    title: 'Talking about a Personal Experience',
    prepTime: 30,
    speakTime: 60,
    instruction: 'Describe a personal experience related to the topic below. Speak for up to 60 seconds.',
    prompts: [
      {
        context: 'Topic: A memorable travel experience',
        task: 'Describe a memorable trip or travel experience you have had. Where did you go? What made it special or unforgettable? How did it affect you? Speak for up to 60 seconds.'
      },
      {
        context: 'Topic: A challenge you faced and overcame',
        task: 'Talk about a significant challenge you experienced. What was the situation? How did you handle it? What did you learn from it? Speak for up to 60 seconds.'
      },
      {
        context: 'Topic: A person who has had a positive influence on your life',
        task: 'Describe someone who has had a meaningful positive influence on your life. Who are they and what is your relationship? How did they influence you? Why are they important to you? Speak for up to 60 seconds.'
      },
      {
        context: 'Topic: A skill you learned outside of school or work',
        task: 'Talk about an important skill you have learned on your own. What is the skill? How did you learn it? How has it benefited you in your everyday life? Speak for up to 60 seconds.'
      }
    ]
  },

  task3: {
    title: 'Describing a Scene',
    prepTime: 30,
    speakTime: 60,
    instruction: 'Read the scene description below and describe what you observe in detail. Speak for up to 60 seconds.',
    prompts: [
      {
        context: 'Scene: A busy farmers market on a Saturday morning. Dozens of wooden stalls display fresh vegetables, fruits, and flowers. A woman in a green apron is weighing tomatoes for a customer. Two children are eating ice cream near a water fountain. An elderly man plays guitar and a small crowd has gathered to listen. The smell of fresh bread fills the air.',
        task: 'Describe what you see in this scene. Talk about the people, the activities, and the overall atmosphere. What details stand out to you? Speak for up to 60 seconds.'
      },
      {
        context: 'Scene: A university library during exam period. Most seats at long wooden tables are occupied by students with laptops and textbooks open. A group of three students in one corner whisper and share notes. Near the window, a student has fallen asleep on their open textbook. A librarian pushes a cart of books down the aisle. Several empty coffee cups sit on tables.',
        task: 'Describe what you see in this scene. What are the different people doing? What does this tell you about the atmosphere and the situation? Speak for up to 60 seconds.'
      },
      {
        context: 'Scene: A neighborhood park on a weekday afternoon. A mother pushes a stroller along a paved path while talking on her phone. Three teenagers sit on the grass looking at their phones. An older couple walks a golden retriever. In the distance, a group of men play soccer on a grass field. Two young girls swing on the playground equipment and laugh.',
        task: 'Describe what you see in this scene. Who are the people and what are they doing? What is the general mood and atmosphere of the park? Speak for up to 60 seconds.'
      },
      {
        context: 'Scene: A restaurant kitchen during the dinner rush. Several chefs in white uniforms move quickly between stations. One chef plates a dish with careful precision while another stirs a large pot. A server rushes in holding a tray of dirty dishes. The head chef calls out instructions near the grill. Steam rises from multiple pots and the counters are covered with ingredients and equipment.',
        task: 'Describe what you see in this kitchen scene. What are the different people doing? What is the pace and atmosphere like? Speak for up to 60 seconds.'
      }
    ]
  },

  task4: {
    title: 'Making Predictions',
    prepTime: 30,
    speakTime: 60,
    instruction: 'Read the situation below and predict what might happen. Give specific reasons. Speak for up to 60 seconds.',
    prompts: [
      {
        context: 'Situation: A small family-owned bakery has just opened between a large coffee chain and a popular sandwich shop on a busy downtown street. It is 8 a.m. and a short line of curious customers is already forming outside on the grand opening day.',
        task: 'Predict what might happen to this bakery over the next year. What challenges might it face competing against larger businesses? What would it need to do to survive and succeed? Speak for up to 60 seconds.'
      },
      {
        context: 'Situation: A city council has approved converting an abandoned factory in the downtown area into a mixed-use development with condominiums, shops, and a public park. The area currently has few businesses and is rarely visited by residents.',
        task: 'Predict how this development will affect the surrounding neighborhood over the next few years. What changes do you expect? Who might benefit and who might face difficulties? Speak for up to 60 seconds.'
      },
      {
        context: 'Situation: A major technology company has announced it will move its headquarters to a small city of 80,000 people and hire 2,000 employees over two years. The city has affordable housing and a university but limited restaurants and entertainment options.',
        task: 'Predict how this announcement will change the city. What effects do you expect on housing, local businesses, and daily life for current residents? Speak for up to 60 seconds.'
      },
      {
        context: 'Situation: A popular local sports team\'s best player has just been injured and will miss the entire season. The team was in first place and had a strong chance at the championship. The remaining players are younger and less experienced.',
        task: 'Predict what might happen to the team for the rest of the season. How might this affect the players, the coaching staff, and the fans? What are the possible outcomes? Speak for up to 60 seconds.'
      }
    ]
  },

  task5: {
    title: 'Comparing and Persuading',
    prepTime: 30,
    speakTime: 60,
    instruction: 'Compare the two options below and recommend one. Give clear reasons for your recommendation. Speak for up to 60 seconds.',
    prompts: [
      {
        context: 'Your friend has received two job offers:\n• Option A: Large corporation — $85,000/year, standard 9–5 hours, strong benefits package, limited room for creativity or fast advancement.\n• Option B: Growing startup — $65,000/year, flexible hours, opportunity to shape the company, but job security is uncertain.',
        task: 'Compare these two job offers and recommend one to your friend. What are the advantages and disadvantages of each? Which would you suggest and why? Speak for up to 60 seconds.'
      },
      {
        context: 'A family is deciding between two vacation options:\n• Option A: All-inclusive resort in Mexico — relaxing beach, everything paid upfront, limited exploration, family-friendly entertainment.\n• Option B: Road trip through national parks — flexible schedule, camping or budget hotels, lots of driving, unique scenery, unpredictable weather.',
        task: 'Compare these two vacation options and recommend one for the family. What are the benefits and drawbacks of each? Which would you suggest and why? Speak for up to 60 seconds.'
      },
      {
        context: 'A recent graduate is choosing between two housing options:\n• Option A: Rent an apartment alone — full privacy, costs $1,800/month, 10-minute commute to work.\n• Option B: Share a house with two roommates — costs $900/month each, 30-minute commute, less privacy but more social interaction.',
        task: 'Compare these two housing options and recommend one. What are the pros and cons of each? Which would you suggest and why? Speak for up to 60 seconds.'
      },
      {
        context: 'A student is choosing between two university programs:\n• Option A: Engineering — high employment rate, high starting salary, very challenging coursework, 4-year program, highly structured.\n• Option B: Business — broad skill set, many career paths, moderate starting salary, 3-year program, easier to switch careers later.',
        task: 'Compare these two programs and recommend one. What are the advantages and disadvantages of each? Which would you suggest and why? Speak for up to 60 seconds.'
      }
    ]
  },

  task6: {
    title: 'Dealing with a Difficult Situation',
    prepTime: 30,
    speakTime: 60,
    instruction: 'Read the difficult situation below. Explain clearly what you would say or do. Speak for up to 60 seconds.',
    prompts: [
      {
        context: 'Situation: You are at a restaurant celebrating your birthday with your family. After waiting 45 minutes, your food arrives cold and two family members received the wrong dishes. The server has been inattentive and has not checked on your table once.',
        task: 'What would you do and say in this situation? How would you handle the issue with the restaurant staff? What outcome would you be hoping to achieve? Speak for up to 60 seconds.'
      },
      {
        context: 'Situation: You have been working on an important team project for three months. During the final presentation to senior management, your colleague takes credit for the majority of work you did, barely mentioning your contributions. Your manager then praises your colleague publicly.',
        task: 'What would you do and say in this situation? How would you address this professionally? What steps would you take immediately and over the following days? Speak for up to 60 seconds.'
      },
      {
        context: 'Situation: You are on a crowded bus and an elderly person boards who is clearly struggling to stand while carrying heavy bags. All the priority seats near the front are occupied by young, healthy-looking passengers who are looking at their phones.',
        task: 'What would you do and say in this situation? How would you help while remaining respectful to everyone? Walk through your actions step by step. Speak for up to 60 seconds.'
      },
      {
        context: 'Situation: You recently discovered that a close friend has been telling mutual friends exaggerated and inaccurate stories about a private mistake you made. The stories are embarrassing and are affecting how others see you. You heard this from a trusted source.',
        task: 'What would you do and say in this situation? How would you approach your friend? What outcome would you hope to achieve while preserving the friendship? Speak for up to 60 seconds.'
      }
    ]
  },

  task7: {
    title: 'Expressing Opinions',
    prepTime: 30,
    speakTime: 90,
    instruction: 'State whether you agree or disagree with the statement below. Support your position with two or three specific reasons. Speak for up to 90 seconds.',
    prompts: [
      {
        context: 'Statement: "Social media has done more harm than good to society."',
        task: 'Do you agree or disagree with this statement? Give two or three specific reasons to support your position. Use examples from your own experience or things you have observed. Speak for up to 90 seconds.'
      },
      {
        context: 'Statement: "University education should be free for all citizens."',
        task: 'Do you agree or disagree with this statement? Give two or three specific reasons to support your position. Consider the benefits, the costs, and the impact on society as a whole. Speak for up to 90 seconds.'
      },
      {
        context: 'Statement: "Working from home permanently is better for employees than working in an office."',
        task: 'Do you agree or disagree with this statement? Give two or three specific reasons to support your position. Consider different types of workers and work environments. Speak for up to 90 seconds.'
      },
      {
        context: 'Statement: "Cities should ban private cars from their downtown areas to reduce traffic and pollution."',
        task: 'Do you agree or disagree with this statement? Give two or three reasons to support your position and consider the impact on different groups of people. Speak for up to 90 seconds.'
      }
    ]
  },

  task8: {
    title: 'Describing an Unusual Situation',
    prepTime: 30,
    speakTime: 60,
    instruction: 'Read the unusual scene below. Describe what you observe and give possible explanations. Speak for up to 60 seconds.',
    prompts: [
      {
        context: 'Unusual Scene: You are walking through your neighborhood on a cold rainy evening. You notice that every house on one street has its front door wide open. A cat sits on every doorstep. There are no people visible anywhere, but the lights inside all the homes are on. A van labeled "Community Event Coordinator" is parked at the end of the street.',
        task: 'Describe what you see and what is unusual about this scene. What possible explanations can you think of? How would you feel if you encountered this? Speak for up to 60 seconds.'
      },
      {
        context: 'Unusual Scene: You arrive at work on a Monday morning to find your entire office has been completely rearranged overnight. All desks have been turned to face the windows. The coffee machine has been replaced with a juice bar. A large beanbag corner now occupies the space where the boardroom used to be. No one has received any notice about these changes.',
        task: 'Describe what you observe and what seems surprising about it. What possible explanations might there be? How do you think your coworkers would react? Speak for up to 60 seconds.'
      },
      {
        context: 'Unusual Scene: You are at a shopping mall and notice that every single store is holding a "going out of business" sale at the same time. The mall is packed with shoppers carrying large bags. Store employees are smiling and cheerfully helping customers. A sign near the main entrance reads: "This mall will be transformed — thank you for 30 amazing years!"',
        task: 'Describe what you observe in this scene. What is unusual about it? What is most likely happening? How might the shoppers and employees be feeling? Speak for up to 60 seconds.'
      },
      {
        context: 'Unusual Scene: You are at a park and you see about 20 adults all dressed in formal business attire sitting on colorful picnic blankets on the grass. They are eating sandwiches from lunchboxes. Some are wearing name tags. Several are taking notes in small notebooks. Two people appear to be presenting something on a portable whiteboard set up on the grass.',
        task: 'Describe this unusual scene in detail. What is happening? Why might these people be dressed formally at a picnic? What could the purpose of this gathering be? Speak for up to 60 seconds.'
      }
    ]
  }
};
