// CELPIP Writing Prompts
// Task 1: Write an Email (~150-200 words, 27 min)
// Task 2: Respond to Survey Questions (~150-200 words, 26 min)

const WRITING_PROMPTS = {
  task1: [
    {
      id: 'w1-1',
      title: 'Complaint to Landlord',
      scenario: `You are renting an apartment. For the past two weeks, the heating system has not been working properly and your apartment is very cold. You have called the building manager twice but nothing has been done.`,
      prompt: `Write an email to your landlord. In your email:
• Describe the problem with the heating
• Explain how it is affecting you
• Request that the issue be fixed urgently`,
      format: 'Email to landlord'
    },
    {
      id: 'w1-2',
      title: 'Request to Manager',
      scenario: `You recently started a new job. Your manager asked all employees to submit requests for any equipment or resources they need to do their job effectively.`,
      prompt: `Write an email to your manager. In your email:
• Explain what equipment or resource you need
• Give reasons why you need it
• Suggest how it will improve your work`,
      format: 'Email to manager'
    },
    {
      id: 'w1-3',
      title: 'Apology to Friend',
      scenario: `You borrowed your friend's car last weekend and accidentally scratched the side door in a parking lot. You have not told your friend yet.`,
      prompt: `Write an email to your friend. In your email:
• Explain what happened to the car
• Apologize for the incident
• Suggest how you will make it right`,
      format: 'Email to a friend'
    },
    {
      id: 'w1-4',
      title: 'Event Invitation',
      scenario: `You are organizing a farewell party for a colleague who is leaving your company. You want to invite another coworker who works in a different department and may not have heard the news.`,
      prompt: `Write an email to your coworker. In your email:
• Share the news about your colleague leaving
• Provide details about the party (time, place, etc.)
• Ask them to confirm their attendance`,
      format: 'Email to a coworker'
    },
    {
      id: 'w1-5',
      title: 'Complaint about Service',
      scenario: `You ordered a laptop online two weeks ago. The website said delivery would take 5 business days. You still have not received it and customer service has not responded to your calls.`,
      prompt: `Write an email to the company's customer service department. In your email:
• Describe your order and the problem
• Express your frustration with the lack of response
• State what action you expect from them`,
      format: 'Email to customer service'
    },
    {
      id: 'w1-6',
      title: 'Request to Neighbour',
      scenario: `Your neighbour plays loud music late at night on weekends, which is disturbing your sleep. You have not spoken to them about it yet and want to handle it politely.`,
      prompt: `Write an email to your neighbour. In your email:
• Describe the issue politely
• Explain how it is affecting you
• Suggest a reasonable solution`,
      format: 'Email to a neighbour'
    },
    {
      id: 'w1-7',
      title: 'Request for Leave',
      scenario: `A close family member is getting married in another country and you need to take two weeks off work to attend. Your company allows vacation requests with at least one month's notice.`,
      prompt: `Write an email to your supervisor. In your email:
• State the reason for your leave request
• Specify the dates you need off
• Explain how your work will be handled while you are away`,
      format: 'Email to supervisor'
    },
    {
      id: 'w1-8',
      title: 'Feedback to School',
      scenario: `Your child's school recently changed the lunch menu to only serve pre-packaged food. As a parent, you are concerned about the nutritional quality of the new menu.`,
      prompt: `Write an email to the school principal. In your email:
• Express your concern about the new lunch menu
• Explain why you think it is a problem
• Suggest what changes could be made`,
      format: 'Email to school principal'
    }
  ],

  task2: [
    {
      id: 'w2-1',
      title: 'Working from Home',
      survey: 'City Workplace Trends Survey',
      question1: 'Do you think working from home should become a permanent option for office workers? Why or why not?',
      question2: 'What do you think is the biggest challenge of working from home? Explain your answer.'
    },
    {
      id: 'w2-2',
      title: 'Public Transportation',
      survey: 'Urban Mobility Survey',
      question1: 'Should the government invest more in public transportation rather than building new roads? Give reasons for your opinion.',
      question2: 'Describe one improvement you would make to public transportation in your city and explain why.'
    },
    {
      id: 'w2-3',
      title: 'Social Media',
      survey: 'Digital Lifestyle Survey',
      question1: 'Do you think social media has a more positive or negative effect on young people? Explain your view.',
      question2: 'Should there be an age limit for using social media platforms? Why or why not?'
    },
    {
      id: 'w2-4',
      title: 'Higher Education',
      survey: 'Education Policy Survey',
      question1: 'Do you think university education should be free for all students? Give reasons for your opinion.',
      question2: 'What do you think is more valuable for career success — a university degree or hands-on work experience? Explain.'
    },
    {
      id: 'w2-5',
      title: 'Healthy Living',
      survey: 'Community Health Survey',
      question1: 'Should employers be required to provide gym memberships or wellness programs for employees? Why or why not?',
      question2: 'What do you think is the most effective way to encourage people to live a healthier lifestyle? Explain your answer.'
    },
    {
      id: 'w2-6',
      title: 'Environmental Responsibility',
      survey: 'Environmental Awareness Survey',
      question1: 'Do you think individuals or corporations are more responsible for reducing environmental pollution? Explain your view.',
      question2: 'Should the government ban single-use plastic products entirely? Give reasons for your opinion.'
    },
    {
      id: 'w2-7',
      title: 'Technology in Schools',
      survey: 'Education Technology Survey',
      question1: 'Should students be allowed to use smartphones and tablets during class? Why or why not?',
      question2: 'Do you think online learning can fully replace traditional classroom education? Explain your answer.'
    },
    {
      id: 'w2-8',
      title: 'Immigration',
      survey: 'Community Integration Survey',
      question1: 'What do you think is the most important factor for immigrants to successfully integrate into a new country? Explain.',
      question2: 'Should governments provide more financial support to help newcomers settle in their country? Give reasons for your opinion.'
    }
  ]
};
