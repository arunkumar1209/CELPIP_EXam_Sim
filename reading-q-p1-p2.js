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
  },
  {
    desc: "Read the following email and answer the questions.",
    time: 660,
    passage: `
      <div class="email-header">
        <div><strong>To:</strong> Jim Walsh &lt;jimwalsh@email.ca&gt;</div>
        <div><strong>From:</strong> Scott Brennan &lt;scottb@email.ca&gt;</div>
        <div><strong>Date:</strong> October 9, 2024</div>
        <div class="email-subject">Subject: About last weekend...</div>
      </div>
      <p>Hi Jim,</p>
      <p>I've been putting off writing this because, honestly, I'm still processing everything that happened on our trip to Algonquin. I hope Max is okay and that things have settled down for you a little since Saturday.</p>
      <p>I know we've been planning this hiking weekend for months — the Centennial Ridges Trail was on both of our bucket lists. And for the first two hours, it was genuinely spectacular. The fall colours up there were unbelievable, and the lookout at kilometre four was worth every step.</p>
      <p>What I wasn't prepared for was the moment you unclipped Max's leash to let him run in that open meadow, and then he bolted after what we assumed was a deer. I can still hear you calling his name for over an hour. I'm so sorry I had to leave at five to make it back for the drive — I felt terrible leaving before Max was found.</p>
      <p>Thank you for texting me that night to say a couple at a nearby campsite had found Max by the lake and returned him to you. I cannot tell you the relief I felt reading that.</p>
      <p>I'd completely understand if you'd rather we stick to trails where dogs are required to stay on-leash going forward. Either way, I'd love to plan another trip — something a little less eventful next time. Let me know when you're ready.</p>
      <p>Take care,<br>Scott</p>
    `,
    questions: [
      { q: "Why has Scott been delaying sending this email?", opts: ["He was waiting to hear if Max had been found", "He was still processing the stressful events of the weekend", "He was trying to plan another hiking trip first", "He was unsure how Jim would react to his early departure"], ans: 1 },
      { q: "What was a highlight of the trip according to Scott?", opts: ["Seeing a deer on the trail", "The campsite by the lake", "The fall colours and the lookout at kilometre four", "The full two-day hike they completed together"], ans: 2 },
      { q: "How did Max go missing?", opts: ["He ran away during the night while Jim was sleeping", "He slipped off his leash when Jim was distracted", "He chased what was thought to be a deer across an open meadow", "He wandered off the trail when neither hiker was watching"], ans: 2 },
      { q: "Why did Scott leave before the search for Max finished?", opts: ["He was too upset to continue searching", "He had to leave by five PM to make it back for the drive", "He believed Max would find his own way back", "A park ranger told him to return to the trailhead"], ans: 1 },
      { q: "How was Max found?", opts: ["A park warden spotted him near the parking lot", "Max returned to the campsite on his own", "A couple at a nearby campsite found him by the lake", "Scott found him on his way back to the car"], ans: 2 },
      { q: "What does Scott suggest for future hiking trips?", opts: ["They should only hike in parks closer to the city", "They should consider sticking to trails where dogs must stay on-leash", "They should always leave Max at home", "They should go as a larger group for safety"], ans: 1 },
      { q: "What is the overall tone of Scott's email?", opts: ["Angry and resentful", "Sympathetic, apologetic, and hopeful", "Formal and professional", "Casual and humorous"], ans: 1 },
      { q: "The phrase 'bucket list' in the third paragraph refers to:", opts: ["Items they packed for the trip", "Equipment needed for hiking", "Experiences they have always wanted to have", "A list of trails they have already completed"], ans: 2 }
    ]
  },
  {
    desc: "Read the following email and answer the questions.",
    time: 660,
    passage: `
      <div class="email-header">
        <div><strong>To:</strong> Janice Wong &lt;j.wong@techbridge.ca&gt;</div>
        <div><strong>From:</strong> Peter Kufi &lt;p.kufi@techbridge.ca&gt;</div>
        <div><strong>Date:</strong> February 14, 2024</div>
        <div class="email-subject">Subject: Travel plans – Vancouver Innovation Summit, March 18–20</div>
      </div>
      <p>Hi Janice,</p>
      <p>I've been looking at our travel options for the summit and wanted your input before I book anything.</p>
      <p>The most direct option would be to fly — the flight from Calgary is only about an hour. If we fly on the morning of the seventeenth, we'd arrive early enough to attend the pre-conference networking dinner, which I think would be valuable for the Meridian Systems relationship we've been working on.</p>
      <p>Alternatively, we could take the train. The Rocky Mountaineer has a scenic route that would be genuinely incredible this time of year. However, with full conference days on the eighteenth through the twentieth, we'd need to either leave very early Thursday or book a sleeper car for Wednesday night. It's significantly more expensive and time-consuming, though I'll admit the idea is appealing.</p>
      <p>Driving is also an option. The route takes about ten hours in good conditions, but March through the Rockies can be unpredictable. I'm not sure that's a risk worth taking for a work trip.</p>
      <p>My vote is for the flight. It's practical, it gets us there on time, and the company travel system should be able to book it directly. The conference confirmation also mentions that the summit hotel, The Harbourview, is offering a negotiated rate of one hundred and seventy-five dollars per night for registered attendees — well below their standard rate.</p>
      <p>Let me know your preference and I'll take care of the bookings.</p>
      <p>Best,<br>Peter</p>
    `,
    questions: [
      { q: "What is the purpose of Peter's email?", opts: ["To confirm their hotel booking for the conference", "To discuss and decide on travel arrangements for the summit", "To invite Janice to a networking dinner", "To report their conference expenses to the finance team"], ans: 1 },
      { q: "Why does Peter prefer arriving on the evening of the seventeenth?", opts: ["To avoid traffic on the morning of the eighteenth", "Flight prices are lower that evening", "To attend the pre-conference networking dinner for a key business relationship", "The hotel check-in is only available before eight PM"], ans: 2 },
      { q: "What does Peter acknowledge is appealing about the train option?", opts: ["It is the cheapest option", "It is faster than driving", "The scenic route through the Rockies", "It arrives directly at the conference venue"], ans: 2 },
      { q: "Why does Peter discourage driving?", opts: ["Neither of them has a driver's licence", "The company does not reimburse fuel costs", "March conditions in the Rockies can be unpredictable", "The drive takes over fifteen hours"], ans: 2 },
      { q: "What is Peter's preferred travel option?", opts: ["The train with a sleeper car", "Driving together to save costs", "Flying to Vancouver", "Attending the conference virtually"], ans: 2 },
      { q: "What discount is the summit hotel offering registered attendees?", opts: ["Free breakfast with every stay", "A negotiated rate well below the standard price", "A complimentary room upgrade for two nights", "A thirty percent discount on parking fees"], ans: 1 },
      { q: "Who is Meridian Systems, as implied by the email?", opts: ["A hotel management company", "A company organizing the conference", "An important business contact Peter and Janice are cultivating", "Peter's former employer"], ans: 2 },
      { q: "The phrase 'negotiated rate' in the last paragraph means:", opts: ["A price that can still be bargained down further", "A specially arranged discount price for a specific group", "A refundable deposit on the room", "A rate that applies only during the off-season"], ans: 1 }
    ]
  },
  {
    desc: "Read the following email and answer the questions.",
    time: 660,
    passage: `
      <div class="email-header">
        <div><strong>To:</strong> Ben Kowalski &lt;bkowalski@gmail.com&gt;</div>
        <div><strong>From:</strong> David Park &lt;dpark@email.ca&gt;</div>
        <div><strong>Date:</strong> January 22, 2024</div>
        <div class="email-subject">Subject: Northbridge Hawks – Provincial Tournament Weekend</div>
      </div>
      <p>Hey Ben,</p>
      <p>Finally got all the details confirmed from the league office and wanted to get everything out to you so you can loop in the other parents.</p>
      <p>The Provincial Tournament runs February 9th to 11th in Guelph. Our first game is Saturday the tenth at 8:30 AM, so the boys need to be at the rink by 7:15 for warm-up. If we advance past the semi-finals, we could potentially be playing as late as Sunday evening.</p>
      <p>Regarding accommodation — the league has a room block at the Comfort Inn on Speedvale Avenue. The rate is $112 per night for a standard room, which includes breakfast. Families must book directly using the group code HAWKS2024 and the deadline for the group rate is January 31st. After that, the block is released and prices will go up considerably.</p>
      <p>For travel, I'm coordinating a team bus for the boys and their equipment. The bus departs from the arena parking lot at 6:00 PM on Friday the 9th. Parents who want to carpool can follow the bus — I'll share the Google Maps pin for the hotel once everyone is booked.</p>
      <p>One important reminder: please ensure your son's physical form and updated insurance waiver are submitted to Coach Torres no later than this Friday, January 26th. He cannot put any player on the roster without both documents on file.</p>
      <p>The booster club is planning a team dinner Saturday night at 6:00 PM at a local restaurant — details to follow. If we advance to Sunday, we'll keep it to a quick team meal at the hotel.</p>
      <p>Let me know if you have any questions.<br>David</p>
    `,
    questions: [
      { q: "What is the main purpose of David's email?", opts: ["To announce the team has qualified for provincials", "To share tournament logistics with team families", "To request fundraising support from parents", "To confirm the tournament venue has changed"], ans: 1 },
      { q: "What time must players be at the rink for their first game?", opts: ["8:30 AM", "7:45 AM", "7:15 AM", "6:00 AM"], ans: 2 },
      { q: "What is included in the hotel room rate?", opts: ["Parking and dinner", "Breakfast and Wi-Fi", "Breakfast", "An evening reception for the team"], ans: 2 },
      { q: "What is the deadline to book at the discounted group rate?", opts: ["January 22nd", "January 26th", "January 31st", "February 9th"], ans: 2 },
      { q: "What documents must be submitted to Coach Torres by January 26th?", opts: ["A player photo and equipment waiver", "A physical form and updated insurance waiver", "A registration form and tournament fee", "A medical history and emergency contact card"], ans: 1 },
      { q: "When does the team bus depart from the arena?", opts: ["Friday morning at 9 AM", "Friday evening at 6 PM", "Saturday morning at 6 AM", "Saturday evening after the first game"], ans: 1 },
      { q: "What is planned for Saturday night?", opts: ["A team strategy meeting with the coach", "A team movie night at the hotel", "A team dinner at a local restaurant", "A parent meeting with league officials"], ans: 2 },
      { q: "What does David mean when he says parents can 'loop in' others?", opts: ["Create a physical loop for the carpool route", "Forward or share the information with other parents", "Drive in a loop to pick up all families", "Sign a loop waiver for tournament travel"], ans: 1 }
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
  },
  {
    desc: "Read the schedule and email below. Then, answer the questions.",
    time: 540,
    passage: `
      <div class="diagram-box">
        <h4>GO Transit — Toronto to Kitchener Line: Weekday Schedule</h4>
        <table style="width:100%;border-collapse:collapse;font-size:0.85em">
          <tr style="background:#1e293b"><th style="padding:6px">Train</th><th style="padding:6px">Union Station</th><th style="padding:6px">Brampton</th><th style="padding:6px">Georgetown</th><th style="padding:6px">Acton</th><th style="padding:6px">Guelph</th><th style="padding:6px">Kitchener</th></tr>
          <tr><td style="padding:6px">KT01</td><td style="padding:6px;text-align:center">6:55 AM</td><td style="padding:6px;text-align:center">7:31 AM</td><td style="padding:6px;text-align:center">7:55 AM</td><td style="padding:6px;text-align:center">8:09 AM</td><td style="padding:6px;text-align:center">8:29 AM</td><td style="padding:6px;text-align:center">9:08 AM</td></tr>
          <tr style="background:#1a2744"><td style="padding:6px">KT02</td><td style="padding:6px;text-align:center">7:50 AM</td><td style="padding:6px;text-align:center">8:27 AM</td><td style="padding:6px;text-align:center">8:50 AM</td><td style="padding:6px;text-align:center">9:03 AM</td><td style="padding:6px;text-align:center">9:22 AM</td><td style="padding:6px;text-align:center">10:00 AM</td></tr>
          <tr><td style="padding:6px">KT03</td><td style="padding:6px;text-align:center">4:45 PM</td><td style="padding:6px;text-align:center">5:21 PM</td><td style="padding:6px;text-align:center">5:46 PM</td><td style="padding:6px;text-align:center">6:00 PM</td><td style="padding:6px;text-align:center">6:20 PM</td><td style="padding:6px;text-align:center">7:00 PM</td></tr>
          <tr style="background:#1a2744"><td style="padding:6px">KT04</td><td style="padding:6px;text-align:center">5:30 PM</td><td style="padding:6px;text-align:center">6:06 PM</td><td style="padding:6px;text-align:center">6:29 PM</td><td style="padding:6px;text-align:center">6:43 PM</td><td style="padding:6px;text-align:center">7:03 PM</td><td style="padding:6px;text-align:center">7:43 PM</td></tr>
        </table>
        <p><em>*Bicycles permitted on KT01 and KT03 only. Single-fare tickets must be purchased before boarding.</em></p>
      </div>

      <div class="email-header">
        <div><strong>To:</strong> Anika &lt;anika.r@email.com&gt;</div>
        <div><strong>From:</strong> Daniel &lt;daniel.k@email.com&gt;</div>
        <div><strong>Date:</strong> March 5, 2024</div>
        <div class="email-subject">Subject: Getting to Guelph on Saturday – a question</div>
      </div>
      <p>Hey Anika,</p>
      <p>I'm planning to visit my aunt in Guelph next Saturday for her retirement party. The party starts at noon, so I'd like to get there with time to spare. I was looking at the GO Transit schedule above — have you taken this line before?</p>
      <p>I'm thinking of catching the 7:50 AM departure, which gets me into Guelph at 9:22 in the morning. That gives me over two hours before the party — plenty of time to drop off my bags and grab a coffee downtown. It arrives a bit later than the first train, but honestly, getting up for a 6:55 departure on a Saturday feels brutal.</p>
      <p>One thing I want to bring is my bicycle, since I might go for a ride after the party. I wanted to confirm that the train I'm taking actually allows bikes. From what I see on the schedule, only two of the four trains permit them.</p>
      <p>I'm coming back in the evening. My aunt said the party wraps up by four, so I'm planning to catch the 5:30 PM departure back, which gets me into Union Station around quarter to eight.</p>
      <p>Talk soon,<br>Daniel</p>
    `,
    questions: [
      { q: "Why is Daniel travelling to Guelph?", opts: ["To attend a work conference", "To celebrate his aunt's retirement", "To visit a friend who recently moved there", "To participate in a cycling event"], ans: 1 },
      { q: "What time does Daniel plan to depart from Union Station in the morning?", opts: ["6:55 AM", "7:31 AM", "7:50 AM", "8:27 AM"], ans: 2 },
      { q: "What time will Daniel arrive in Guelph on his chosen morning train?", opts: ["8:29 AM", "9:03 AM", "9:22 AM", "10:00 AM"], ans: 2 },
      { q: "Why does Daniel choose the second morning train instead of the first?", opts: ["The first train does not stop in Guelph", "A 6:55 AM departure on a Saturday feels too early", "The first train is more expensive", "The second train arrives before the first"], ans: 1 },
      { q: "Is Daniel's chosen morning train (KT02) permitted to carry bicycles?", opts: ["Yes, all trains allow bicycles", "No, only KT01 and KT03 allow bicycles", "Yes, but only with a monthly pass", "The schedule does not mention bicycles"], ans: 1 },
      { q: "Which train does Daniel plan to take back in the evening?", opts: ["KT03, departing at 4:45 PM", "KT04, departing at 5:30 PM", "KT01, departing at 6:55 AM", "KT02, departing at 7:50 AM"], ans: 1 },
      { q: "What time will Daniel arrive back at Union Station on his return train?", opts: ["7:00 PM", "7:03 PM", "7:43 PM", "8:00 PM"], ans: 2 },
      { q: "Why does Daniel say the 9:22 AM arrival gives him 'plenty of time'?", opts: ["He wants to sleep in at his aunt's house before the party", "He plans to arrive well before noon to settle in and relax", "He has multiple appointments scheduled before noon", "He is worried about the train being late"], ans: 1 }
    ]
  },
  {
    desc: "Read the schedule and email below. Then, answer the questions.",
    time: 540,
    passage: `
      <div class="diagram-box">
        <h4>Maplewood Community Centre — Fall Event Schedule (Week of Oct 14–20)</h4>
        <table style="width:100%;border-collapse:collapse;font-size:0.85em">
          <tr style="background:#1e293b"><th style="padding:6px">Day</th><th style="padding:6px">Time</th><th style="padding:6px">Event</th><th style="padding:6px">Location</th><th style="padding:6px">Cost</th><th style="padding:6px">Notes</th></tr>
          <tr><td style="padding:6px">Monday</td><td style="padding:6px">7:00 PM</td><td style="padding:6px">Beginner Watercolour Class</td><td style="padding:6px">Art Room B</td><td style="padding:6px">$15/session</td><td style="padding:6px">Supplies included</td></tr>
          <tr style="background:#1a2744"><td style="padding:6px">Tuesday</td><td style="padding:6px">9:00 AM</td><td style="padding:6px">Senior Yoga (Gentle)</td><td style="padding:6px">Studio 1</td><td style="padding:6px">Free</td><td style="padding:6px">Registered members only</td></tr>
          <tr><td style="padding:6px">Tuesday</td><td style="padding:6px">6:30 PM</td><td style="padding:6px">Parent &amp; Toddler Playtime</td><td style="padding:6px">Gym B</td><td style="padding:6px">Free</td><td style="padding:6px">Ages 0–3 only</td></tr>
          <tr style="background:#1a2744"><td style="padding:6px">Wednesday</td><td style="padding:6px">12:00 PM</td><td style="padding:6px">Community Lunch Program</td><td style="padding:6px">Dining Hall</td><td style="padding:6px">$5 suggested donation</td><td style="padding:6px">Open to all; no registration needed</td></tr>
          <tr><td style="padding:6px">Thursday</td><td style="padding:6px">7:00 PM</td><td style="padding:6px">Public Speaking Workshop</td><td style="padding:6px">Conference Room</td><td style="padding:6px">$20/session</td><td style="padding:6px">Pre-registration required</td></tr>
          <tr style="background:#1a2744"><td style="padding:6px">Friday</td><td style="padding:6px">6:00 PM</td><td style="padding:6px">Family Movie Night</td><td style="padding:6px">Main Hall</td><td style="padding:6px">Free</td><td style="padding:6px">Bring blankets &amp; snacks</td></tr>
          <tr><td style="padding:6px">Saturday</td><td style="padding:6px">10:00 AM</td><td style="padding:6px">Volunteer Garden Workday</td><td style="padding:6px">Community Garden</td><td style="padding:6px">Free</td><td style="padding:6px">Gloves provided; wear old clothes</td></tr>
        </table>
      </div>

      <div class="email-header">
        <div><strong>To:</strong> Mei &lt;mei.c@email.com&gt;</div>
        <div><strong>From:</strong> Sandra &lt;sandra.v@email.com&gt;</div>
        <div><strong>Date:</strong> October 10, 2024</div>
        <div class="email-subject">Subject: Let's go to some events this week!</div>
      </div>
      <p>Hi Mei,</p>
      <p>I grabbed the schedule from the community centre and it looks like there's actually a lot going on the week of the fourteenth! I wanted to pick a couple of things we could do together.</p>
      <p>My top pick is the watercolour class on Monday evening. I've been wanting to try painting for ages, and the fact that we don't need to bring anything because everything is covered in the fee makes it really easy. It's only fifteen dollars, which seems totally reasonable.</p>
      <p>I also think it would be fun to go to the movie night on Friday. You mentioned you have a big blanket you never use — this would be the perfect excuse to bring it. It's free, which is always a bonus, and we could bring some popcorn from home.</p>
      <p>I thought about the public speaking workshop on Thursday, but honestly twenty dollars per session adds up fast, and you'd have to sign up ahead of time. Maybe another time.</p>
      <p>I know you've been thinking about getting little Marcus involved in more activities. The Tuesday evening session in Gym B looks like it could be great for him — it's designed for his age group. And since it's free, it's basically a no-brainer if you're free that evening.</p>
      <p>Let me know which ones you're up for!<br>Sandra</p>
    `,
    questions: [
      { q: "What is Sandra's top choice for an event this week?", opts: ["The Family Movie Night on Friday", "The Beginner Watercolour Class on Monday", "The Public Speaking Workshop on Thursday", "The Board Game Social on Sunday"], ans: 1 },
      { q: "Why does Sandra describe the watercolour class as easy to attend?", opts: ["The skill level required is very basic", "The location is close to where they live", "Supplies are included in the session fee", "The class is very short"], ans: 2 },
      { q: "What does Sandra ask Mei to bring to the movie night?", opts: ["A favourite board game", "Her large blanket", "Extra folding chairs", "A pillow and sleeping bag"], ans: 1 },
      { q: "Why does Sandra decide against the Public Speaking Workshop?", opts: ["It is scheduled at a time she cannot make", "She is already a confident public speaker", "The cost per session is high and pre-registration is required", "She has already attended a similar workshop"], ans: 2 },
      { q: "Which event does Sandra suggest might suit Mei's toddler?", opts: ["The Senior Yoga on Tuesday morning", "The Community Lunch Program on Wednesday", "The Parent and Toddler Playtime on Tuesday evening", "The Volunteer Garden Workday on Saturday"], ans: 2 },
      { q: "What is the age restriction for the Tuesday evening toddler session?", opts: ["Ages 0–5", "Ages 0–3", "Ages 2–5", "No age restriction"], ans: 1 },
      { q: "How much does the Community Lunch Program cost?", opts: ["It is completely free", "Five dollars for members only", "Five dollars suggested donation", "Ten dollars per person"], ans: 2 },
      { q: "What does Sandra's email suggest about her relationship with Mei?", opts: ["They are colleagues at the same workplace", "They are friendly neighbours planning activities together", "They are family members visiting for the week", "Sandra is organizing these events on behalf of the centre"], ans: 1 }
    ]
  },
  {
    desc: "Read the schedule and email below. Then, answer the questions.",
    time: 540,
    passage: `
      <div class="diagram-box">
        <h4>FitPeak Gym — Group Fitness Class Schedule (September)</h4>
        <table style="width:100%;border-collapse:collapse;font-size:0.85em">
          <tr style="background:#1e293b"><th style="padding:6px">Class</th><th style="padding:6px">Mon</th><th style="padding:6px">Tue</th><th style="padding:6px">Wed</th><th style="padding:6px">Thu</th><th style="padding:6px">Sat</th><th style="padding:6px">Level</th><th style="padding:6px">Duration</th></tr>
          <tr><td style="padding:6px">Spin Cycle</td><td style="padding:6px;text-align:center">6:00 AM</td><td style="padding:6px;text-align:center">—</td><td style="padding:6px;text-align:center">6:00 AM</td><td style="padding:6px;text-align:center">—</td><td style="padding:6px;text-align:center">8:00 AM</td><td style="padding:6px">All levels</td><td style="padding:6px">45 min</td></tr>
          <tr style="background:#1a2744"><td style="padding:6px">Yoga Flow</td><td style="padding:6px;text-align:center">—</td><td style="padding:6px;text-align:center">7:00 PM</td><td style="padding:6px;text-align:center">—</td><td style="padding:6px;text-align:center">7:00 PM</td><td style="padding:6px;text-align:center">9:30 AM</td><td style="padding:6px">Beginner–Intermediate</td><td style="padding:6px">60 min</td></tr>
          <tr><td style="padding:6px">HIIT Blast</td><td style="padding:6px;text-align:center">12:00 PM</td><td style="padding:6px;text-align:center">12:00 PM</td><td style="padding:6px;text-align:center">12:00 PM</td><td style="padding:6px;text-align:center">12:00 PM</td><td style="padding:6px;text-align:center">—</td><td style="padding:6px">Intermediate–Advanced</td><td style="padding:6px">30 min</td></tr>
          <tr style="background:#1a2744"><td style="padding:6px">Pilates Core</td><td style="padding:6px;text-align:center">—</td><td style="padding:6px;text-align:center">6:00 PM</td><td style="padding:6px;text-align:center">—</td><td style="padding:6px;text-align:center">6:00 PM</td><td style="padding:6px;text-align:center">10:30 AM</td><td style="padding:6px">All levels</td><td style="padding:6px">50 min</td></tr>
          <tr><td style="padding:6px">Zumba</td><td style="padding:6px;text-align:center">7:00 PM</td><td style="padding:6px;text-align:center">—</td><td style="padding:6px;text-align:center">7:00 PM</td><td style="padding:6px;text-align:center">—</td><td style="padding:6px;text-align:center">11:30 AM</td><td style="padding:6px">All levels</td><td style="padding:6px">60 min</td></tr>
        </table>
        <p><em>*All classes included with Full/Premium membership. Drop-in rate: $12/class. Saturday classes require no pre-booking. Weekday classes must be reserved 24 hours in advance through the FitPeak app.</em></p>
      </div>

      <div class="email-header">
        <div><strong>To:</strong> Rachel &lt;rachel.t@email.com&gt;</div>
        <div><strong>From:</strong> Nora &lt;nora.s@email.com&gt;</div>
        <div><strong>Date:</strong> August 28, 2024</div>
        <div class="email-subject">Subject: FitPeak schedule – we should go together!</div>
      </div>
      <p>Hi Rachel,</p>
      <p>I've been going to FitPeak for a few months and I really think you'd love it. I saw the September schedule and thought we should plan to attend a few classes together.</p>
      <p>Since we're both usually free on Tuesday and Thursday evenings, I thought the evening yoga class on those days could be perfect for us. I know you mentioned being stressed lately — yoga is honestly the best thing I've found for that. Plus, based on the level description, it's designed for beginners or intermediate participants, so you don't have to worry about not keeping up.</p>
      <p>There's also a HIIT class at lunch every weekday that I sometimes squeeze in. It's only half an hour so it fits between meetings. But honestly it's quite intense, so maybe we work up to that one together.</p>
      <p>If you want to try before committing to a membership, you can come as a drop-in first. The Saturday morning classes are also a good option since they don't require any advance booking — just show up.</p>
      <p>I have a Full membership so everything is included for me. But since you're not a member yet, just keep in mind there's a per-class cost for drop-ins.</p>
      <p>Let me know if you're interested and we can make a plan!<br>Nora</p>
    `,
    questions: [
      { q: "Why does Nora suggest the evening yoga class to Rachel?", opts: ["It is the most popular class at the gym", "It fits their shared evening availability and suits Rachel's stress levels", "It is the only class available on weekday evenings", "Nora has been attending it for months already"], ans: 1 },
      { q: "On which days is Yoga Flow offered in the evening?", opts: ["Monday and Wednesday", "Tuesday and Thursday", "Wednesday and Friday", "Monday and Thursday"], ans: 1 },
      { q: "Why does Nora say Rachel doesn't need to worry about keeping up in yoga?", opts: ["The instructor adjusts the class individually", "The class is described as beginner to intermediate level", "The class is shorter than most other options", "Rachel has taken yoga before at another gym"], ans: 1 },
      { q: "How long is the HIIT Blast class?", opts: ["Twenty minutes", "Thirty minutes", "Forty-five minutes", "One hour"], ans: 1 },
      { q: "What does Nora suggest about the HIIT class?", opts: ["It is ideal for beginners", "They should try it first before yoga", "They should work up to it gradually as it is intense", "It is only offered on Saturdays"], ans: 2 },
      { q: "What advantage do Saturday classes have over weekday classes?", opts: ["They are free for non-members", "They are longer in duration", "They do not require advance booking", "They are taught by the most experienced instructors"], ans: 2 },
      { q: "How much will Rachel pay if she attends as a drop-in?", opts: ["Nothing — drop-in classes are free for first-time visitors", "Twelve dollars per class", "The cost of a monthly membership", "The cost depends on which class she chooses"], ans: 1 },
      { q: "How should members reserve weekday classes?", opts: ["By calling the gym the day before", "By arriving early to sign in on the class sheet", "Through the FitPeak app at least 24 hours in advance", "There is no reservation system for weekday classes"], ans: 2 }
    ]
  }
];
