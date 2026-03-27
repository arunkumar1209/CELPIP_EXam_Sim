// CELPIP Reading Test - Parts 1 & 2 Question Bank
// 3 Randomized Sets Per Part

const READING_PART1_SETS = [
  {
    desc: "Read the following email and answer the questions.",
    time: 660, // 11 minutes
    passage: `
      <div class="email-header">
        <div><strong>To:</strong> Customer Service <support@grandviewhotel.com></div>
        <div><strong>From:</strong> Sarah Mitchell <s.mitchell85@email.ca></div>
        <div><strong>Date:</strong> October 12, 2024</div>
        <div class="email-subject">Subject: Feedback regarding our recent stay - Booking #GV4892</div>
      </div>
      <p>Dear Customer Service Team,</p>
      <p>I am writing to share our experience during our stay at the Grandview Hotel in Victoria from October 8th to 10th. While we have enjoyed staying with you several times in the past, this visit unfortunately fell short of our expectations.</p>
      <p>When we arrived at 4:30 PM, well past the standard 3:00 PM check-in time, we were informed that our ocean-view suite was not yet ready. The receptionist, David, was polite but seemed overwhelmed. We had to wait for nearly an hour in the lobby before we were finally given our room keys.</p>
      <p>Once in the room, we noticed that the air conditioning unit was exceptionally loud, making a constant rattling noise that made it difficult to sleep on the first night. We reported this to the front desk the next morning. While maintenance did come up to inspect it, they informed us that a part needed to be ordered and it couldn't be fixed during our stay. We were offered a small fan as a temporary solution, which was appreciated but inadequate for a room of that size.</p>
      <p>On a positive note, the complimentary breakfast buffet at the Harbour Restaurant was fantastic, as always. The dining staff were attentive, and the variety of fresh, local pastries was a highlight of our mornings.</p>
      <p>Given the inconvenience with the delayed check-in and the disruption caused by the faulty air conditioning, we feel that some form of compensation is appropriate. We hope you will review this matter and get back to us.</p>
      <p>Sincerely,<br>Sarah Mitchell</p>
    `,
    questions: [
      { q: "What is the main purpose of Sarah's email?", opts: ["To request a refund for her entire stay", "To express dissatisfaction with certain aspects of her visit", "To praise the hotel's breakfast buffet", "To apply for an ongoing discount at the hotel"], ans: 1 },
      { q: "What problem did Sarah encounter upon arrival?", opts: ["Her reservation was cancelled", "The receptionist was rude", "Her room was not ready on time", "She was given the wrong room type"], ans: 2 },
      { q: "How did the hotel staff handle the air conditioning issue?", opts: ["They moved Sarah to a different room immediately", "They fixed it within a few hours", "They provided a temporary fix as repairs were delayed", "They ignored her complaint entirely"], ans: 2 },
      { q: "According to the email, what did Sarah enjoy most?", opts: ["The ocean view from her suite", "The service provided by David", "The quality of the morning meal", "The size of her hotel room"], ans: 2 },
      { q: "What can be inferred about Sarah's history with the hotel?", opts: ["This was her first time visiting", "She frequently complains about the hotel", "She has been a guest there before", "She works for the hotel chain"], ans: 2 },
      { q: "What resolution is Sarah hoping for?", opts: ["A formal apology from the manager", "Some type of compensation for the issues", "Free breakfast on her next visit", "A complimentary room upgrade right now"], ans: 1 },
      { q: "What is the tone of Sarah's email?", opts: ["Aggressive and demanding", "Polite but disappointed", "Overly enthusiastic", "Confused and apologetic"], ans: 1 },
      { q: "In the second paragraph, the word 'overwhelmed' is closest in meaning to:", opts: ["Bored", "Angry", "Stressed", "Excited"], ans: 2 }
    ]
  },
  {
    desc: "Read the following email and answer the questions.",
    time: 660,
    passage: `
      <div class="email-header">
        <div><strong>To:</strong> All Staff - Toronto Branch</div>
        <div><strong>From:</strong> Michael Chen, Operations Manager</div>
        <div><strong>Date:</strong> May 3, 2024</div>
        <div class="email-subject">Subject: Upcoming Office Renovation and Temporary Relocation</div>
      </div>
      <p>Team,</p>
      <p>Please be advised that the long-anticipated renovation of the 4th floor is scheduled to begin on Monday, May 15th. This project aims to modernize our workspace, replacing the outdated cubicles with an open-concept layout to foster better collaboration. We will also be upgrading the breakroom and adding two new soundproof meeting pods.</p>
      <p>During the estimated four-week construction period, all 4th-floor staff will need to temporarily relocate. We have secured temporary co-working space on the 2nd floor of the building next door (Tower B). You will retain your current phone extensions, and IT will ensure full network connectivity is established at the temporary site over the weekend prior to the move.</p>
      <p>You must pack up all your personal belongings and necessary files into the provided moving boxes by 5:00 PM on Friday, May 12th. Please clearly label your boxes with your name and department. Do not pack any electronic equipment like monitors or desktop computers; the IT team will handle the safe transport and setup of all tech assets.</p>
      <p>Please note that the main cafeteria in our building will remain operational during the renovation. However, access to the 4th-floor elevators will be restricted to construction personnel only.</p>
      <p>We understand that moving is disruptive, and we appreciate your cooperation and patience as we work to create a better office environment for everyone. If you have any specific concerns about the temporary setup, please reach out to HR.</p>
      <p>Regards,<br>Michael</p>
    `,
    questions: [
      { q: "What is the primary reason for the office renovation?", opts: ["To fix structural damage on the 4th floor", "To increase the total number of employees", "To create a more collaborative and modern workspace", "To install a new cafeteria"], ans: 2 },
      { q: "How long is the construction expected to last?", opts: ["One weekend", "About a month", "Six weeks", "Until May 15th"], ans: 1 },
      { q: "Where will the 4th-floor staff work during the renovations?", opts: ["From their homes", "On the same floor, just in different rooms", "In a different building nearby", "In the main cafeteria"], ans: 2 },
      { q: "What are employees responsible for moving themselves?", opts: ["Their desktop computers", "Only their personal items and files", "The soundproof meeting pods", "Their office chairs"], ans: 1 },
      { q: "What restriction will be in place during the renovation period?", opts: ["The cafeteria will be closed", "Staff cannot use any elevators", "Staff cannot access the 4th-floor elevators", "Phone extensions will be temporarily changed"], ans: 2 },
      { q: "Who should staff contact if they have issues with the temporary workspace arrangements?", opts: ["The IT Team", "Michael Chen", "The construction manager", "Human Resources"], ans: 3 },
      { q: "When must employees have their boxes packed?", opts: ["Monday, May 15th", "Friday, May 12th by 5:00 PM", "Whenever they are ready", "Over the weekend"], ans: 1 },
      { q: "The term 'foster' in the first paragraph implies:", opts: ["To force completely", "To encourage the development of", "To restrict quickly", "To redesign physically"], ans: 1 }
    ]
  },
  {
    desc: "Read the following email and answer the questions.",
    time: 660,
    passage: `
      <div class="email-header">
        <div><strong>To:</strong> Maplewood Community Residents</div>
        <div><strong>From:</strong> Julia Vance, Event Coordinator, City Parks Department</div>
        <div><strong>Date:</strong> August 20, 2024</div>
        <div class="email-subject">Subject: Registration Open for the 10th Annual Fall Festival</div>
      </div>
      <p>Dear Residents,</p>
      <p>We are thrilled to announce that the City Parks Department is finalizing plans for the 10th Annual Maplewood Fall Festival, which will take place on Saturday, October 5th, at Centennial Park from 10:00 AM to 6:00 PM.</p>
      <p>This year's festival will feature our traditional farmers' market, showcasing seasonal produce from local growers. We are also introducing a new 'Artisans Alley' where local crafters will be selling handmade goods, from ceramics to custom jewelry. As always, there will be live music at the main pavilion starting at noon, featuring the Maplewood Jazz Quartet and local folk singer, Dave Miller.</p>
      <p>We are currently looking for volunteers to help make this milestone event a success. We need assistance primarily with setting up the vendor tents early in the morning and managing the children's activity zone in the afternoon. Volunteering is a great way for high school students to earn their required community service hours. All volunteers will receive a free lunch voucher and a commemorative t-shirt.</p>
      <p>If you are interested in volunteering, or if you'd like to reserve a booth in Artisans Alley, please visit our website at maplewoodparks.ca/fall-festival to complete the registration forms. Booth spaces are limited and will be assigned on a first-come, first-served basis. The deadline to register for a booth is September 15th.</p>
      <p>Let's make this 10th anniversary the best festival yet!</p>
      <p>Warmly,<br>Julia Vance</p>
    `,
    questions: [
      { q: "What is the main purpose of Julia Vance's email?", opts: ["To cancel the upcoming Fall Festival", "To announce the festival details and call for participants", "To complain about a lack of local vendors", "To change the location of the festival"], ans: 1 },
      { q: "What is a new feature at this year's festival?", opts: ["The farmers' market", "Live music at the pavilion", "Artisans Alley", "The children's activity zone"], ans: 2 },
      { q: "When does the live music start?", opts: ["10:00 AM", "12:00 PM", "6:00 PM", "Early in the morning"], ans: 1 },
      { q: "What specific roles does Julia mention for volunteers?", opts: ["Singing on stage and serving food", "Setting up tents and helping with children's activities", "Selling jewelry and directing traffic", "Managing the website and designing t-shirts"], ans: 1 },
      { q: "What is one benefit offered to volunteers?", opts: ["A free booth at Artisans Alley", "A discount on local produce", "A commemorative t-shirt", "Cash payment"], ans: 2 },
      { q: "How are the booth spaces in Artisans Alley being allocated?", opts: ["Based on the quality of the crafts", "They are randomly drawn", "They are assigned to returning vendors first", "In the order the applications are received"], ans: 3 },
      { q: "When is the cut-off date to apply for a booth?", opts: ["August 20th", "September 15th", "October 5th", "The day of the event"], ans: 1 },
      { q: "Why might this event be particularly appealing to high school students?", opts: ["They can earn money selling crafts", "It fulfills a graduation requirement for community service", "They get to skip school that day", "They can join the jazz quartet"], ans: 1 }
    ]
  }
];

const READING_PART2_SETS = [
  {
    desc: "Read the advertisement and email below. Then, answer the questions.",
    time: 540, // 9 mins
    passage: `
      <div class="diagram-box">
        <h4>Midtown Community College: Evening Language Courses</h4>
        <p>Enhance your career or prepare for travel with our conversational language classes!</p>
        <ul>
          <li><strong>Spanish Level 1:</strong> Mondays & Wednesdays, 6:00 PM - 7:30 PM. Focuses on basic greetings, travel vocabulary, and present tense verbs. Cost: $180</li>
          <li><strong>French Level 2:</strong> Tuesdays & Thursdays, 7:00 PM - 8:30 PM. Requires basic French knowledge. Focuses on conversational fluency and business terminology. Cost: $210</li>
          <li><strong>Mandarin Level 1:</strong> Saturdays, 9:00 AM - 12:00 PM. An intensive weekend course covering fundamental tones, basic characters, and everyday phrases. Cost: $250</li>
        </ul>
        <p><em>*All courses run for 8 weeks starting the first week of October. Textbooks are not included in the course fee. Registration closes September 28th.</em></p>
      </div>
      
      <div class="email-header">
        <div><strong>To:</strong> Brian <brian.h@email.com></div>
        <div><strong>From:</strong> Carla <carla.j@email.com></div>
        <div><strong>Date:</strong> September 18, 2024</div>
        <div class="email-subject">Subject: Language Classes next month?</div>
      </div>
      <p>Hey Brian,</p>
      <p>Did you see the flyer for the language courses at the community college? I attached it above. Remember we were talking about improving our language skills before our trip to Europe next summer?</p>
      <p>I definitely want to sign up, but my schedule is a bit tight. I play in my volleyball league on Tuesday and Thursday nights, so those evenings are out for me. Because of that, I can't take the French course, even though I took French in high school and it would have been a good refresher.</p>
      <p>I think the Spanish class might be a better fit for me anyway, since we're spending most of our trip in Spain and Italy. The Monday/Wednesday schedule works perfectly. I know you work late on Wednesdays, though, so it might not work for you.</p>
      <p>If you still want to take a class together, maybe we could look at the Saturday option? It is a bit more expensive, and I think learning Mandarin would be significantly harder for us, but at least we could study together. Plus, it's just one day a week.</p>
      <p>Let me know what you think soon. We only have about ten days left to decide before the deadline!</p>
      <p>Cheers,<br>Carla</p>
    `,
    questions: [
      { q: "What is Carla's primary motivation for wanting to take a language course?", opts: ["To get a promotion at work", "To prepare for an upcoming vacation", "To meet new people in the community", "To help her with her college degree"], ans: 1 },
      { q: "Why is Carla unable to enroll in the French Level 2 course?", opts: ["She doesn't have the necessary prerequisite knowledge", "The course fee is too high", "It conflicts with her sports commitments", "The textbook is not included"], ans: 2 },
      { q: "Which course does Carla believe would be most practical for their planned trip?", opts: ["Spanish Level 1", "French Level 2", "Mandarin Level 1", "An Italian course not listed"], ans: 0 },
      { q: "Why might the Spanish class be difficult for Brian to attend?", opts: ["He works on the weekends", "He is busy on Tuesday evenings", "He has a scheduling conflict on Wednesdays", "He prefers to learn French"], ans: 2 },
      { q: "What is the main drawback Carla identifies with the Mandarin course?", opts: ["It conflicts with her volleyball league", "It requires previous knowledge of the language", "It is likely more difficult and costs more", "It meets too many times during the week"], ans: 2 },
      { q: "Based on the advertisement, what additional cost should Carla and Brian anticipate besides the course fee?", opts: ["A registration fee", "Course textbooks", "Parking pass", "Travel insurance"], ans: 1 },
      { q: "What is the deadline for enrolling in these language courses?", opts: ["September 18th", "September 28th", "The first week of October", "There is no deadline mentioned"], ans: 1 },
      { q: "What action does Carla urge Brian to take at the end of the email?", opts: ["To quit his Wednesday evening job", "To call the college to complain", "To make a decision quickly due to the approaching deadline", "To sign up for the French class alone"], ans: 2 }
    ]
  },
  {
    desc: "Read the advertisement and email below. Then, answer the questions.",
    time: 540,
    passage: `
      <div class="diagram-box">
        <h4>GreenLeaf Landscaping - Spring Packages</h4>
        <p>Get your yard ready for summer with our professional care packages!</p>
        <ul>
          <li><strong>The Basic Trim ($99):</strong> Includes full lawn mowing, edging along sidewalks and driveways, and basic leaf blowing. (Ideal for small residential yards).</li>
          <li><strong>The Garden Revive ($175):</strong> Includes everything in the Basic Trim, PLUS focused weeding of two garden beds and planting up to a dozen provided seasonal flowers.</li>
          <li><strong>The Premium Estate ($299):</strong> Comprehensive yard care. Includes mowing, edging, unlimited weeding, pruning of small shrubs, and application of organic fertilizer. (Best for large yards).</li>
        </ul>
        <p><em>Note: A $25 surcharge applies for yards exceeding 0.5 acres. Appointments must be booked by April 30th to secure Spring rates.</em></p>
      </div>

      <div class="email-header">
        <div><strong>To:</strong> David <david.p@email.com></div>
        <div><strong>From:</strong> Elena <elena.m@email.com></div>
        <div><strong>Date:</strong> April 15, 2024</div>
        <div class="email-subject">Subject: Landscaping options for mom's house</div>
      </div>
      <p>Hi David,</p>
      <p>Since Mom's mobility hasn't been great lately, I thought we should hire a service to get her yard in shape before her garden club meeting next month. I found this flyer for GreenLeaf Landscaping (see above).</p>
      <p>Her lawn definitely needs a good cut after the winter, but it's really the garden beds that look neglected. The weeds are taking over the front area entirely. Because of that, the cheapest option won't really solve the main problem she's stressed about.</p>
      <p>I was leaning toward the middle tier package. It handles the mowing and directly addresses the weeds. Plus, we could buy some of those bright petunias she loves, and they would plant them for us. It seems like the best value for what she needs right now.</p>
      <p>I know her property is pretty small—definitely less than half an acre—so we won't have to worry about any extra fees. The top-tier package seems like overkill since her bushes were just trimmed in the fall, and she already has an automated fertilizer system.</p>
      <p>If you're okay with splitting the cost with me, let me know. I want to lock this in before the end of the month so we don't have to pay the higher summer prices.</p>
      <p>Love,<br>Elena</p>
    `,
    questions: [
      { q: "What is Elena's main reason for wanting to hire a landscaping service?", opts: ["To increase the value of her mother's home", "Her mother is physically unable to maintain the yard currently", "She wants to surprise her mother for her birthday", "She wants to start a landscaping business"], ans: 1 },
      { q: "Why does Elena dismiss 'The Basic Trim' package?", opts: ["It is too expensive for their budget", "It doesn't include weeding the garden beds", "It is only for yards over 0.5 acres", "It doesn't include mowing the lawn"], ans: 1 },
      { q: "Which package does Elena prefer?", opts: ["The Basic Trim", "The Garden Revive", "The Premium Estate", "None of them"], ans: 1 },
      { q: "What does Elena plan to provide for the landscapers if they choose her preferred package?", opts: ["Organic fertilizer", "The landscaping tools", "Seasonal flowers for planting", "Lunch for the crew"], ans: 2 },
      { q: "Why is the $25 surcharge not a concern for Elena?", opts: ["She plans to use a discount code", "Her mother's yard is small enough to avoid it", "David agreed to pay the extra fee", "The surcharge does not apply to spring bookings"], ans: 1 },
      { q: "Why does Elena feel the 'Premium Estate' package is unnecessary?", opts: ["Her mother allergic to organic fertilizer", "It doesn't include edging", "The shrubs don't need pruning and the yard already has a fertilizer system", "It does not include planting flowers"], ans: 2 },
      { q: "What event is motivating Elena to act quickly?", opts: ["A family reunion", "Her mother's garden club meeting", "A neighborhood inspection", "The end of the summer season"], ans: 1 },
      { q: "Why does Elena urge David to make a quick decision?", opts: ["To avoid an upcoming price increase", "Because the landscaping company is going out of business", "Because she is leaving for vacation", "So they can plant vegetables before the frost"], ans: 0 }
    ]
  },
  {
    desc: "Read the advertisement and email below. Then, answer the questions.",
    time: 540,
    passage: `
      <div class="diagram-box">
        <h4>TechNova Solutions - Internet Plans</h4>
        <p>Reliable high-speed internet for your home.</p>
        <ul>
          <li><strong>Starter Plan (50 Mbps):</strong> Perfect for light browsing, checking email, and social media. Ideal for 1-2 devices. $45/month.</li>
          <li><strong>Streamer Plan (150 Mbps):</strong> Great for HD video streaming and online gaming. Supports 3-5 devices simultaneously. $65/month.</li>
          <li><strong>Ultra-Home Plan (500 Mbps):</strong> Built for heavy internet users, 4K streaming, and smart homes. Supports 6+ devices. $95/month.</li>
        </ul>
        <p><em>Special Offer: Get free installation ($50 value) and a complimentary Wi-Fi extender on a 1-year contract. Offer ends November 14th.</em></p>
      </div>

      <div class="email-header">
        <div><strong>To:</strong> Mark <mark.s@email.com></div>
        <div><strong>From:</strong> Sam <sam.t@email.com></div>
        <div><strong>Date:</strong> November 2, 2024</div>
        <div class="email-subject">Subject: New Internet Provider?</div>
      </div>
      <p>Hey Mark,</p>
      <p>Our current internet contract with CityNet expires next week, and honestly, the connection drops while I'm trying to work from home have been driving me crazy. I found a flyer for a new provider, TechNova Solutions (details above).</p>
      <p>Since we're both working from home now, and we often stream movies in the evening while our roommate plays games online, the cheapest option definitely won't cut it. We have way too many devices connected at once.</p>
      <p>I was looking at the middle option. It seems like it has enough speed to handle our video calls during the day and our Netflix and gaming habits at night without lagging. It’s also ten dollars cheaper than what we’re paying CityNet right now for worse speeds.</p>
      <p>The top-tier plan looks amazing, but I think 500 Mbps is more than we actually need, and spending nearly a hundred bucks a month on internet is a bit steep for our budget.</p>
      <p>If we switch, we should probably take advantage of that promotional offer. Getting the setup fee waived is nice, but I really like the idea of the free booster since the signal in my bedroom is always weak. We just need to sign up soon to get it.</p>
      <p>Let me know your thoughts before I call them.<br>Sam</p>
    `,
    questions: [
      { q: "Why is Sam looking to change their internet service provider?", opts: ["Their current provider is out of business", "They are moving to a new apartment", "The current internet connection is unreliable for remote work", "TechNova offered them a cash prize"], ans: 2 },
      { q: "Why is the 'Starter Plan' inadequate for Sam's household?", opts: ["It is too expensive", "It doesn't support the number of devices or their heavy usage", "It doesn't come with free installation", "It is only available for businesses"], ans: 1 },
      { q: "Which plan Does Sam propose they sign up for?", opts: ["Starter Plan", "Streamer Plan", "Ultra-Home Plan", "They should stay with CityNet"], ans: 1 },
      { q: "What is a major advantage of the plan Sam chose compared to their current service?", opts: ["It offers a free television", "It includes completely unlimited data", "It is cheaper and provides better speeds", "It does not require a contract"], ans: 2 },
      { q: "Why does Sam reject the 'Ultra-Home Plan'?", opts: ["It is not available in their area", "It is not fast enough for gaming", "It is unnecessarily fast and too expensive for their budget", "It does not allow smart home devices"], ans: 2 },
      { q: "What incentive is TechNova offering to new customers?", opts: ["Six months of free service", "A complimentary tablet", "Waved setup fees and a Wi-Fi enhancing device", "A discounted monthly rate for two years"], ans: 2 },
      { q: "Why is the promotional device particularly appealing to Sam?", opts: ["He wants to sell it", "It will improve the weak internet signal in his specific bedroom", "It allows him to connect to public Wi-Fi", "His roommate requested it for gaming"], ans: 1 },
      { q: "By what date must they finalize their decision to receive the promotion?", opts: ["November 2nd", "November 14th", "Next week", "The end of the year"], ans: 1 }
    ]
  }
];
