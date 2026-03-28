// CELPIP Question Bank - Parts 1-3 (3 sets each)
// Format: Each set has { script, questions: [{ q, opts: [A,B,C,D], ans: 0-3 }] }

const PART1_SETS = [
  { // Set A
    title: "Listening to Problem Solving",
    time: 480,
    desc: "You will hear three short conversations where people are solving problems. Answer the questions after each conversation.",
    segments: [
      {
        script: "Woman: Hey Mark, I'm really struggling with the new scheduling software. Every time I try to book a meeting room for Tuesday, it says there's a conflict, but I checked and the room is empty.\nMan: Hmm, that's odd. Did you, um, check whether you're looking at the right building? Remember, we have two locations now, and the system defaults to the downtown office.\nWoman: Oh! I bet that's it. I've been looking at the Parkdale location, but maybe the system is showing me downtown.\nMan: Yeah, try switching the location filter at the top. If that doesn't work, you could also just call facilities directly — their extension is 4502.\nWoman: Good idea. I'll try the filter first. Thanks, Mark!",
        questions: [
          { q: "What problem is the woman experiencing?", opts: ["She cannot log into the scheduling software.", "She sees a conflict when booking a meeting room.", "The meeting room is double-booked by another team.", "She forgot which day her meeting is on."], ans: 1 },
          { q: "What does Mark suggest is the likely cause?", opts: ["The software has a bug that needs updating.", "She is looking at the wrong building location.", "Someone else has already reserved the room.", "The room is under maintenance on Tuesday."], ans: 1 },
          { q: "What will the woman most likely do first?", opts: ["Call facilities at extension 4502.", "Switch the location filter in the system.", "Ask her manager for help.", "Book a different room instead."], ans: 1 }
        ]
      },
      {
        script: "Man: Excuse me, I ordered the salmon dish about forty minutes ago and it still hasn't arrived. I'm on my lunch break, so I'm, uh, kind of pressed for time.\nWoman: I'm so sorry about that, sir. Let me check with the kitchen right away. It looks like there was a mix-up — your order was accidentally combined with another table's. I can have it rushed out in about five minutes, or I can offer you something quicker, like our soup and sandwich combo.\nMan: Five minutes should be fine, I guess. But I'd appreciate it if you could, you know, take something off the bill for the wait.\nWoman: Absolutely. I'll ask my manager to apply a twenty percent discount. Again, I apologize for the inconvenience.",
        questions: [
          { q: "Why is the man frustrated?", opts: ["The food was cold when it arrived.", "His order has been significantly delayed.", "He was seated at the wrong table.", "The restaurant is too noisy."], ans: 1 },
          { q: "What caused the delay?", opts: ["The kitchen was short-staffed.", "His order was mixed up with another table's.", "The ingredient for his dish ran out.", "The server forgot to place his order."], ans: 1 },
          { q: "What compensation does the woman offer?", opts: ["A free dessert with his meal.", "A full refund on the order.", "A twenty percent discount on the bill.", "A complimentary drink while he waits."], ans: 2 }
        ]
      },
      {
        script: "Woman: Hi, I'm calling about my internet service. It's been cutting in and out all morning, and I work from home, so this is really affecting my productivity.\nMan: I understand how frustrating that must be. Let me pull up your account. Okay, I can see there's actually a service disruption in your area due to some overnight maintenance that ran longer than expected. It should be fully restored by 2 PM today.\nWoman: 2 PM? That's still a few hours away. Is there anything you can do in the meantime?\nMan: Well, I can enable a temporary mobile hotspot on your plan at no extra charge. That should give you enough bandwidth for video calls and basic work tasks.",
        questions: [
          { q: "What is the cause of the woman's internet issues?", opts: ["Her modem needs to be replaced.", "There is an area-wide service disruption.", "She has exceeded her monthly data limit.", "A storm damaged the cables in her area."], ans: 1 },
          { q: "What solution does the man offer?", opts: ["He will send a technician immediately.", "He will upgrade her internet plan for free.", "He will enable a temporary mobile hotspot.", "He will credit her account for the full month."], ans: 2 }
        ]
      }
    ]
  },
  { // Set B
    title: "Listening to Problem Solving",
    time: 480,
    desc: "You will hear three short conversations where people are solving problems. Answer the questions after each conversation.",
    segments: [
      {
        script: "Man: Lisa, have you noticed that the printer on the third floor keeps jamming? I've cleared the paper tray twice today already.\nWoman: Yeah, I reported it last week, but the maintenance team said they're waiting on a replacement part. In the meantime, um, you can use the printer by the reception area on the first floor.\nMan: That's quite a walk just to print something. Is there any way to get a temporary printer up here?\nWoman: I'll check with IT. They might have a spare unit in storage. If not, you could also try sending your print jobs to the second-floor color printer — I'll share the network address with you.\nMan: That would be great. Thanks, Lisa.",
        questions: [
          { q: "What is the main problem?", opts: ["The printer is out of ink.", "The third-floor printer keeps jamming.", "The network connection is unstable.", "The printer has been removed."], ans: 1 },
          { q: "Why hasn't the issue been fixed yet?", opts: ["Nobody reported it to maintenance.", "The maintenance team is on vacation.", "They are waiting for a replacement part.", "The printer model has been discontinued."], ans: 2 },
          { q: "What does Lisa offer to do?", opts: ["Fix the printer herself after lunch.", "Order a brand new printer online.", "Check with IT for a spare unit.", "Move the reception printer upstairs."], ans: 2 }
        ]
      },
      {
        script: "Woman: Good morning. I purchased this jacket online and I'd like to return it. It doesn't fit right — the sleeves are way too long.\nMan: Sure, do you have your receipt or order confirmation?\nWoman: I have the confirmation email on my phone. Here you go.\nMan: Let me take a look. Okay, so this was purchased during our clearance sale, so unfortunately, uh, it's final sale — we can't issue a refund. But I can offer you a store credit or an exchange for a different size.\nWoman: I don't think a smaller size would help — the cut itself is just not right for me. I'll take the store credit, I guess.\nMan: Absolutely. I'll process a credit for the full amount, forty-nine ninety-five, and it'll be valid for twelve months.",
        questions: [
          { q: "Why does the woman want to return the jacket?", opts: ["The color is different from the photo.", "The zipper is broken.", "The sleeves are too long and the fit is wrong.", "She found a cheaper option elsewhere."], ans: 2 },
          { q: "Why can't the store issue a refund?", opts: ["The return window has passed.", "The item was bought on clearance and is final sale.", "The woman lost the receipt.", "The jacket has been worn and cannot be resold."], ans: 1 },
          { q: "What does the woman decide to do?", opts: ["Exchange it for a smaller size.", "Speak to the store manager.", "Accept a store credit.", "Keep the jacket anyway."], ans: 2 }
        ]
      },
      {
        script: "Man: Hey, I just realized my parking permit expired yesterday. Do you know where I can renew it?\nWoman: You can do it online through the building management portal, or you can go to the security desk in the lobby. They process renewals on the spot.\nMan: Online sounds easier. But, um, do I need any specific documents?\nWoman: Just your employee ID number and your license plate. The fee is seventy-five dollars for six months. Oh, and if you renew within the grace period — which is five business days — you won't have to pay the late fee.",
        questions: [
          { q: "What is the man's issue?", opts: ["He lost his parking permit.", "His parking permit has expired.", "He doesn't know where to park.", "His car was towed from the lot."], ans: 1 },
          { q: "How much does the six-month renewal cost?", opts: ["Fifty dollars.", "Sixty-five dollars.", "Seventy-five dollars.", "Ninety dollars."], ans: 2 }
        ]
      }
    ]
  },
  { // Set C
    title: "Listening to Problem Solving",
    time: 480,
    desc: "You will hear three short conversations where people are solving problems. Answer the questions after each conversation.",
    segments: [
      {
        script: "Woman: Tom, the projector in Conference Room B isn't connecting to my laptop. I've got a client presentation in twenty minutes and I really need this to work.\nMan: Okay, don't panic. Are you using the HDMI cable or trying to connect wirelessly?\nWoman: Wirelessly. I connected to the room's Wi-Fi, but the projector just shows a blank screen.\nMan: The wireless function has been unreliable lately. Here, use this HDMI adapter — it works with your laptop's USB-C port. That should, um, solve it right away.\nWoman: Perfect. And if the HDMI doesn't work either?\nMan: Then we'll move your meeting to Room D. I'll reserve it now as a backup.",
        questions: [
          { q: "When does the woman need the projector to work?", opts: ["In about five minutes.", "In about twenty minutes.", "After her lunch break.", "Tomorrow morning."], ans: 1 },
          { q: "What is Tom's first suggestion?", opts: ["Restart the projector.", "Use an HDMI adapter instead of wireless.", "Move to a different conference room.", "Call the IT department."], ans: 1 },
          { q: "What is the backup plan?", opts: ["Cancel the presentation.", "Use a different laptop.", "Move the meeting to Room D.", "Present from a tablet."], ans: 2 }
        ]
      },
      {
        script: "Man: Hi, I'm having trouble with my library card. I tried to check out these books but the system says my account is blocked.\nWoman: Let me look into that. Oh, I see — you have an overdue item from, uh, January, and the accumulated fine has exceeded ten dollars, so the system automatically suspends borrowing privileges.\nMan: January? I thought I returned everything. What book is it?\nWoman: It shows 'Introduction to Data Science'. Do you still have it at home?\nMan: Oh, that must be the one I lent to my roommate. I'll bring it back tomorrow. Can I still check these out today?\nWoman: Once you pay the fine, I can reactivate your card immediately. The fine right now is twelve dollars and fifty cents.",
        questions: [
          { q: "Why is the man's account blocked?", opts: ["His library card has expired.", "He has an overdue book with a fine over ten dollars.", "He reported his card lost.", "He owes fees from a damaged book."], ans: 1 },
          { q: "What must the man do to check out books today?", opts: ["Return the overdue book first.", "Pay the fine to reactivate his card.", "Apply for a new library card.", "Wait five business days for reactivation."], ans: 1 },
          { q: "How much is the current fine?", opts: ["Ten dollars.", "Eleven dollars.", "Twelve dollars and fifty cents.", "Fifteen dollars."], ans: 2 }
        ]
      },
      {
        script: "Woman: I just got off the phone with the catering company for Friday's event, and they said they can only do a buffet setup, not the sit-down dinner we originally planned.\nMan: Really? That changes things. How many guests are we expecting?\nWoman: Around eighty. They said the venue's kitchen layout makes a plated service too complicated for that number.\nMan: Well, a buffet could actually work better for networking purposes. People can mingle more freely. Let's go with it but make sure there are enough serving stations so guests don't have to wait in long lines.\nWoman: Good point. I'll ask them to set up at least three stations.",
        questions: [
          { q: "What has changed about the event plan?", opts: ["The venue has been switched to a larger space.", "The catering will be a buffet instead of a sit-down dinner.", "The number of guests has been significantly reduced.", "The event has been postponed to the following week."], ans: 1 },
          { q: "How does the man feel about the change?", opts: ["He is very upset and wants a different caterer.", "He thinks it could actually work better for networking.", "He is indifferent and doesn't care either way.", "He suggests cancelling the catering entirely."], ans: 1 }
        ]
      }
    ]
  }
];

const PART2_SETS = [
  { // Set A
    title: "Listening to a Daily Life Conversation",
    time: 300,
    desc: "You will hear a conversation about a daily life situation. Listen carefully and answer the questions.",
    script: "Woman: Hey James, do you have a minute? I wanted to talk to you about the shared kitchen on our floor.\nMan: Sure, what's up?\nWoman: Well, I've noticed that, um, for the past couple of weeks, someone's been leaving dirty dishes in the sink overnight. By the time I come in at eight in the morning, there's a pile of mugs and plates just sitting there. It's really unsanitary.\nMan: Yeah, I've seen that too. It's been bothering me as well, to be honest. Do you have any idea who's doing it?\nWoman: Not really. I think it might be people who work the late shift, but I don't want to point fingers without knowing for sure.\nMan: That's fair. How about we send a friendly reminder email to everyone on the floor? Something like, you know, 'Please wash your dishes before leaving for the day.' We could also suggest a rotating cleanup schedule.\nWoman: A reminder is a good first step. But I think we should also put up a sign near the sink. Sometimes people don't read emails right away.\nMan: True. And maybe we should bring it up at the next floor meeting — that way, management is aware and can reinforce the policy.\nWoman: Great idea. I'll draft the email and make the sign. Could you mention it to our floor supervisor?\nMan: Absolutely. I'll talk to Sandra this afternoon.",
    questions: [
      { q: "What is the main issue the woman raises?", opts: ["The kitchen appliances are broken.", "Someone is leaving dirty dishes overnight.", "The cleaning staff is not being hired.", "Food is going missing from the shared fridge."], ans: 1 },
      { q: "Who does the woman suspect is responsible?", opts: ["The new employees.", "People on the late shift.", "The cleaning crew.", "James and his team."], ans: 1 },
      { q: "What is the first step James suggests?", opts: ["Report the issue to building management.", "Install a security camera in the kitchen.", "Send a friendly reminder email to everyone.", "Hire a professional cleaning service."], ans: 2 },
      { q: "Why does the woman also want to put up a sign?", opts: ["Emails are often ignored completely.", "Some people may not read emails right away.", "The company policy requires it.", "She wants to publicly shame the offenders."], ans: 1 },
      { q: "What does James agree to do?", opts: ["Clean the kitchen himself.", "Write an anonymous complaint letter.", "Talk to the floor supervisor Sandra.", "Set up a security camera."], ans: 2 }
    ]
  },
  { // Set B
    title: "Listening to a Daily Life Conversation",
    time: 300,
    desc: "You will hear a conversation about a daily life situation. Listen carefully and answer the questions.",
    script: "Man: Hi Priya, I noticed you've been bringing your lunch every day this week. Did the cafeteria change their menu again?\nWoman: Actually, no. I've started, um, meal prepping on Sundays. I realized I was spending almost fifteen dollars a day on lunch, and it was really adding up.\nMan: Fifteen dollars a day? That's like over three hundred a month. I never thought about it that way.\nWoman: Exactly. Now I spend about fifty dollars on groceries for the whole week's lunches. I make things like grain bowls, wraps, and pasta salads. It takes me about two hours on Sunday, but it's so worth it.\nMan: That's impressive. But doesn't the food get, you know, kind of stale by Thursday or Friday?\nWoman: Not if you store things properly. I keep sauces separate, use airtight containers, and I freeze anything I won't eat within three days. On the morning of, I just grab a container and go.\nMan: Huh, I might actually try that. My wife has been saying we need to cut back on spending. Do you follow any specific recipes?\nWoman: There are tons of meal-prep channels on YouTube. I'd recommend starting with simple recipes — like five ingredients or less. Once you get the hang of it, you can get more creative.\nMan: Sounds like a plan. Thanks for the inspiration, Priya.",
    questions: [
      { q: "Why did Priya start meal prepping?", opts: ["She has food allergies.", "The cafeteria closed permanently.", "She wanted to save money on daily lunches.", "Her doctor recommended a special diet."], ans: 2 },
      { q: "How much does Priya now spend on a week's lunches?", opts: ["About thirty dollars.", "About fifty dollars.", "About seventy-five dollars.", "About one hundred dollars."], ans: 1 },
      { q: "How does Priya keep her food fresh throughout the week?", opts: ["She reheats everything in the morning.", "She uses airtight containers and freezes extras.", "She only preps food for three days.", "She adds extra preservatives to the meals."], ans: 1 },
      { q: "What motivates the man to consider meal prepping?", opts: ["He wants to eat healthier food.", "His wife wants them to reduce spending.", "He doesn't like the cafeteria food.", "He has been told to by his manager."], ans: 1 },
      { q: "What does Priya suggest for getting started?", opts: ["Take a professional cooking class.", "Buy a meal-prep kit from the store.", "Start with simple recipes from YouTube.", "Follow her exact weekly routine."], ans: 2 }
    ]
  },
  { // Set C
    title: "Listening to a Daily Life Conversation",
    time: 300,
    desc: "You will hear a conversation about a daily life situation. Listen carefully and answer the questions.",
    script: "Woman: Dave, are you still planning to drive downtown for the concert tonight? I heard the construction on Main Street is causing major detours.\nMan: Oh, really? I hadn't heard about that. I was going to take Main Street directly to the venue.\nWoman: Yeah, they've, um, closed two lanes for some pipe replacement project. My neighbour drove through there yesterday and said it took her an extra forty minutes.\nMan: Forty minutes? That's ridiculous. I'd miss the opening act for sure.\nWoman: You could take the expressway instead. It's a bit longer distance-wise, but with the construction, it would probably be faster.\nMan: Good thinking. Or I could just take the subway. The Blue Line goes right to the entertainment district, doesn't it?\nWoman: It does, and there's no transfer needed from your station. Plus, you wouldn't have to worry about parking. Downtown parking on concert nights is like thirty dollars.\nMan: Yeah, that settles it. I'll take the subway. The last thing I need is to drive around for twenty minutes looking for a spot. What time does the last train run?\nWoman: I think the last southbound train is at one fifteen AM, so you should be fine even if the show runs late.",
    questions: [
      { q: "What could prevent the man from reaching the concert on time?", opts: ["A snowstorm is expected tonight.", "Construction on Main Street is causing detours.", "The subway line is shut down.", "The concert has been moved to a new venue."], ans: 1 },
      { q: "How much extra time did the woman's neighbour spend in traffic?", opts: ["Twenty minutes.", "Thirty minutes.", "Forty minutes.", "One hour."], ans: 2 },
      { q: "What does the man decide to do?", opts: ["Drive via the expressway.", "Take the subway to the venue.", "Cancel his plans for the evening.", "Ask a friend for a ride."], ans: 1 },
      { q: "How much does downtown parking typically cost on concert nights?", opts: ["Fifteen dollars.", "Twenty dollars.", "Thirty dollars.", "Forty-five dollars."], ans: 2 },
      { q: "What time does the last southbound train depart?", opts: ["Twelve thirty AM.", "One AM.", "One fifteen AM.", "One forty-five AM."], ans: 2 }
    ]
  },
  { // Set D
    title: "Listening to a Daily Life Conversation",
    time: 300,
    desc: "You will hear a conversation about a daily life situation. Listen carefully and answer the questions.",
    script: "Woman: Hi Tom! I'm so glad I caught you. I've been trying to reach you about the neighbourhood block party.\nMan: Oh yeah, I heard something about that. When is it happening?\nWoman: We're planning it for the last Saturday of June — the twenty-eighth. We're hoping to close off Maple Drive from Elm to Oak for the whole afternoon, from noon to eight PM.\nMan: That sounds great. What do you need from the residents?\nWoman: Well, we're asking everyone to contribute either food, equipment, or volunteer time. My husband and I are bringing our barbecue and we'll handle all the grilling. But we need at least two more people to help set up the tables and chairs in the morning, starting around nine.\nMan: I can help with the setup — I'm usually up early on weekends anyway. What about the permit? Do we need permission to close the street?\nWoman: We already applied to the city. The permit should be approved by mid-June. It costs forty dollars, which the neighbourhood association is covering.\nMan: That's great. Should I bring anything for the food?\nWoman: If you could bring a few bags of ice and some cold beverages, that would be amazing. We already have enough hot food covered, but drinks are always in demand.\nMan: No problem. I'll take care of that. How many people are expected?\nWoman: We sent invitations to all sixty-two households on the block. Last year about half came, so we're planning for around thirty to forty families.",
    questions: [
      { q: "When is the block party planned?", opts: ["The first Saturday of June.", "The last Saturday of June.", "The last Saturday of July.", "The first Saturday of July."], ans: 1 },
      { q: "What will the woman and her husband contribute?", opts: ["They will organize the entertainment.", "They will handle the grilling.", "They will apply for the street permit.", "They will supply tables and chairs."], ans: 1 },
      { q: "What does the man agree to help with?", opts: ["Organizing entertainment.", "Setting up tables and chairs in the morning.", "Applying for the street permit.", "Grilling the food."], ans: 1 },
      { q: "How much does the street permit cost?", opts: ["Twenty dollars.", "Thirty dollars.", "Forty dollars.", "Sixty dollars."], ans: 2 },
      { q: "What does the woman ask the man to bring?", opts: ["A barbecue grill.", "Paper plates and napkins.", "Ice and cold beverages.", "Extra tables and chairs."], ans: 2 }
    ]
  },
  { // Set E
    title: "Listening to a Daily Life Conversation",
    time: 300,
    desc: "You will hear a conversation about a daily life situation. Listen carefully and answer the questions.",
    script: "Man: Sarah, I heard you're moving next month! When exactly is the big day?\nWoman: Moving day is July twelfth. I got a two-bedroom apartment downtown near the waterfront — I'm so excited.\nMan: That's fantastic! Must feel good to finally get rid of that commute.\nWoman: Absolutely. Forty-five minutes each way every day — I'm done with it. But the move is stressing me out. I have so much stuff accumulated over five years in this place.\nMan: Are you thinking of having a garage sale before you go?\nWoman: Actually, yes! I'm planning one for the weekend of June twenty-first and twenty-second. I've got furniture — a dining table, two bookshelves, and a sofa — that won't fit in the new apartment. Plus bags of clothing and kitchen items.\nMan: I might come by and take a look. I've been wanting a bookshelf, actually.\nWoman: Perfect! I have two — one is a solid oak, five-shelf unit, and the other is a smaller white one. I'm selling them for fifty and twenty-five dollars respectively.\nMan: I'd probably take the oak one. Do you have help for moving day itself?\nWoman: I hired a moving company. They quoted me eight hundred dollars for a half-day. I figured it was worth it.\nMan: Ha, very true. Any chance you're free the weekend before the move? Happy to help with packing.\nWoman: That would be wonderful — I'm a terrible packer.",
    questions: [
      { q: "When is the woman moving?", opts: ["June twenty-first.", "June twenty-eighth.", "July twelfth.", "July twenty-first."], ans: 2 },
      { q: "Why is the woman happy about her new apartment?", opts: ["It has a garage included.", "She will no longer have a long commute.", "It is larger than her current home.", "The rent is much cheaper."], ans: 1 },
      { q: "What is the woman selling at her garage sale?", opts: ["Electronics and sports equipment.", "Furniture, clothing, and kitchen items.", "Books and garden tools.", "Tools and outdoor furniture."], ans: 1 },
      { q: "How much is the woman asking for the oak bookshelf?", opts: ["Twenty-five dollars.", "Thirty-five dollars.", "Fifty dollars.", "Seventy-five dollars."], ans: 2 },
      { q: "What does the man offer to help with?", opts: ["Finding a moving company.", "Driving the furniture truck.", "Helping with packing before the move.", "Advertising the garage sale."], ans: 2 }
    ]
  },
  { // Set F
    title: "Listening to a Daily Life Conversation",
    time: 300,
    desc: "You will hear a conversation about a daily life situation. Listen carefully and answer the questions.",
    script: "Man: Hey Lisa! Are you doing anything this long weekend? A few of us are renting a cottage up near Muskoka. Two spots left if you're interested.\nWoman: Oh that sounds so nice. When exactly?\nMan: The Victoria Day weekend — Friday the seventeenth to Monday the twentieth. We'd leave right after work Friday.\nWoman: I'd love to, but I promised my sister I'd help her move on Saturday. I committed to that months ago.\nMan: Oh that's too bad. Could you come up just for Saturday night and Sunday?\nWoman: That might actually work! But I don't have a car — how would I get there?\nMan: Well, David and Karen are driving up Saturday evening after they attend a birthday party. They have room for one more.\nWoman: Perfect! What time would they be leaving?\nMan: Probably around seven PM from downtown. They'd arrive at the cottage by nine, nine thirty.\nWoman: That works great. What should I contribute — like for groceries?\nMan: Just bring your personal stuff. We've already split the food and cottage costs. Since you're only coming for two nights, your share would be fifty dollars.\nWoman: Very reasonable. I'm in! I'll text David tonight to confirm the ride.",
    questions: [
      { q: "What is the occasion for the cottage trip?", opts: ["A birthday celebration.", "A farewell party.", "The Victoria Day long weekend.", "A Canada Day holiday."], ans: 2 },
      { q: "Why can the woman not join from the start?", opts: ["She has to work on Friday.", "She is already helping her sister move on Saturday.", "She cannot afford the trip.", "She does not want to go to a cottage."], ans: 1 },
      { q: "How will the woman travel to the cottage?", opts: ["By bus from the city.", "She will rent a car.", "She will get a ride with David and Karen.", "She will take a train to Muskoka."], ans: 2 },
      { q: "What time are David and Karen expected to leave downtown?", opts: ["Five PM.", "Six PM.", "Seven PM.", "Nine PM."], ans: 2 },
      { q: "How much does the woman need to contribute?", opts: ["Twenty-five dollars.", "Fifty dollars.", "Seventy-five dollars.", "One hundred dollars."], ans: 1 }
    ]
  }
];

const PART3_SETS = [
  { // Set A
    title: "Listening for Information",
    time: 360,
    desc: "You will hear a conversation where one person explains a topic or provides information. Listen and answer the questions.",
    script: "Man: So, Sarah, you mentioned you've been getting into beekeeping. I'm really curious — how did you even start something like that?\nWoman: Well, it started about two years ago when my neighbor had a swarm of bees settle in his backyard. Instead of calling pest control, he contacted a local beekeeping association, and they came and, um, relocated the colony. I was fascinated watching the whole process.\nMan: That does sound interesting. So what did you do next?\nWoman: I signed up for an introductory course offered by the city's agricultural extension office. It was a ten-week program, one evening a week. They covered everything from bee biology and hive management to honey harvesting and common diseases.\nMan: Ten weeks — that's quite a commitment. Was it expensive?\nWoman: Actually, no. It was only a hundred and twenty dollars for the whole course, and that included a basic starter kit — a smoker, a hive tool, gloves, and a veil. The actual hive and bees I bought separately for about three hundred dollars from a local supplier.\nMan: How many hives do you have now?\nWoman: I started with one, but now I have three. Each hive can produce anywhere from thirty to sixty pounds of honey per season, depending on the weather and the flowers available in the area.\nMan: That's a lot of honey! What do you do with it all?\nWoman: I keep some for personal use, obviously. I also sell jars at the local farmers' market on Saturdays. I donate a portion to a food bank, and I've started making beeswax candles and lip balm as well — those are surprisingly popular.\nMan: Are there any challenges?\nWoman: Oh, definitely. The biggest one is managing pests, especially varroa mites. They're tiny parasites that attach to bees and can wipe out an entire colony if not treated. Regular inspection is crucial — I check my hives every two weeks during the active season.",
    questions: [
      { q: "How did Sarah first become interested in beekeeping?", opts: ["She read a book about it in college.", "She watched bees being relocated from her neighbour's yard.", "Her family has been beekeeping for generations.", "She saw a documentary about declining bee populations."], ans: 1 },
      { q: "How long was the introductory course?", opts: ["Four weeks.", "Six weeks.", "Ten weeks.", "Twelve weeks."], ans: 2 },
      { q: "How much did Sarah pay for the course?", opts: ["Eighty dollars.", "One hundred dollars.", "One hundred and twenty dollars.", "One hundred and fifty dollars."], ans: 2 },
      { q: "How much honey can one hive produce per season?", opts: ["Ten to twenty pounds.", "Twenty to forty pounds.", "Thirty to sixty pounds.", "Fifty to eighty pounds."], ans: 2 },
      { q: "What does Sarah do with excess honey?", opts: ["She ships it to retail stores across the province.", "She sells it at a farmers' market and donates some.", "She gives all of it to friends and family.", "She stores it and uses it throughout the year."], ans: 1 },
      { q: "What is the biggest challenge Sarah faces?", opts: ["Finding enough flowers for the bees.", "Managing varroa mites.", "The high cost of maintaining hives.", "Keeping the bees warm during winter."], ans: 1 }
    ]
  },
  { // Set B
    title: "Listening for Information",
    time: 360,
    desc: "You will hear a conversation where one person explains a topic or provides information. Listen and answer the questions.",
    script: "Woman: Mike, I heard you're training for your first triathlon. That's really ambitious! Tell me about it.\nMan: Yeah, I signed up for an Olympic-distance triathlon in August. That's, uh, a one-point-five-kilometer swim, a forty-kilometer bike ride, and a ten-kilometer run.\nWoman: Wow, that sounds intense. How are you preparing?\nMan: I follow a structured training plan that divides the week into specific sessions. Monday is a rest day. Tuesday and Thursday are for running. Wednesday is swimming. Friday is a brick workout — that's where you do two disciplines back-to-back, usually biking then running, to train your body for the transition. Saturday is a long bike ride, and Sunday is an easy recovery swim.\nWoman: That's very organized. Did you create the plan yourself?\nMan: No, I hired an online coach. She designs the plan based on my fitness level and adjusts it every four weeks. It costs about two hundred dollars a month, but it's worth it because she also reviews my workout data and gives feedback.\nWoman: How about nutrition? Is there a special diet?\nMan: Not a strict diet, but I focus on, um, increasing my carbohydrate intake on heavy training days and making sure I get enough protein for muscle recovery. I also take electrolyte supplements during long sessions to prevent cramping.\nWoman: What's been the hardest part so far?\nMan: Honestly, the swimming. I wasn't a strong swimmer before this, so I've had to work a lot on my technique. I even took private lessons twice to improve my breathing and stroke efficiency. The running and cycling come more naturally to me.\nWoman: When is race day?\nMan: August sixteenth. I'm nervous but excited. My goal isn't to win — it's just to finish the whole thing without stopping.",
    questions: [
      { q: "How long is the swimming portion of the triathlon?", opts: ["Seven hundred and fifty meters.", "One kilometer.", "One and a half kilometers.", "Two kilometers."], ans: 2 },
      { q: "What is a 'brick workout'?", opts: ["A workout done with weights in a gym.", "Two disciplines done back-to-back.", "A running session on a brick surface.", "A high-intensity interval session."], ans: 1 },
      { q: "How much does Mike's online coach charge?", opts: ["One hundred dollars per month.", "One hundred and fifty dollars per month.", "Two hundred dollars per month.", "Two hundred and fifty dollars per month."], ans: 2 },
      { q: "What does Mike focus on nutritionally during heavy training days?", opts: ["Reducing his calorie intake.", "Increasing carbohydrates.", "Eating only protein shakes.", "Following a strict keto diet."], ans: 1 },
      { q: "Which discipline has been hardest for Mike?", opts: ["Running.", "Cycling.", "Swimming.", "The transitions between events."], ans: 2 },
      { q: "What is Mike's primary goal for race day?", opts: ["To finish in the top ten.", "To qualify for a professional event.", "To finish the entire race without stopping.", "To beat his personal record time."], ans: 2 }
    ]
  },
  { // Set C
    title: "Listening for Information",
    time: 360,
    desc: "You will hear a conversation where one person explains a topic or provides information. Listen and answer the questions.",
    script: "Man: Jen, I noticed you've been volunteering at the community repair café. Can you tell me what that's all about?\nWoman: Sure! A repair café is basically a free pop-up event where people bring in broken household items, and volunteer fixers help them repair things instead of throwing them away.\nMan: That's a wonderful concept. What kinds of things do people bring?\nWoman: All sorts of things — small electronics like toasters and lamps, clothing that needs mending, wooden furniture with loose joints, even bicycles. We had someone bring in a vintage record player last month, and one of our volunteers actually got it working again.\nMan: Impressive. How often does the café run?\nWoman: We hold it on the first Saturday of every month at the community centre on Elm Street. We're open from ten AM to two PM. It's, um, completely free for visitors — we just ask for a small donation if they can afford it, to cover the cost of supplies like solder, thread, and replacement parts.\nMan: How do you find volunteers with the right skills?\nWoman: We recruit through social media and local trade schools. We currently have about fifteen regular volunteers — electricians, seamstresses, carpenters, and general handy people. Everyone goes through a short orientation session where we cover safety protocols and liability basics.\nMan: Has it made a noticeable impact?\nWoman: Definitely. In the past year, we've diverted an estimated two thousand kilograms of waste from landfills. Beyond the environmental benefit, it really brings the community together. People chat, learn new skills, and leave feeling empowered rather than frustrated by a broken appliance.\nMan: I'd love to get involved. I'm pretty handy with bikes.\nWoman: That would be fantastic! Our next session is April fifth. I'll send you the sign-up link.",
    questions: [
      { q: "What is a repair café?", opts: ["A coffee shop that sells refurbished items.", "A class where people learn to build furniture.", "A free event where volunteers fix broken household items.", "A store that offers repair services at a discount."], ans: 2 },
      { q: "How often does the repair café operate?", opts: ["Every weekend.", "The first Saturday of every month.", "Every two weeks on Sundays.", "Once a quarter."], ans: 1 },
      { q: "What does the repair café ask visitors for?", opts: ["A mandatory fee of ten dollars.", "A small voluntary donation for supplies.", "Proof of community membership.", "A review on social media."], ans: 1 },
      { q: "How many regular volunteers does the café have?", opts: ["About eight.", "About twelve.", "About fifteen.", "About twenty."], ans: 2 },
      { q: "How much waste has the café diverted from landfills in one year?", opts: ["About five hundred kilograms.", "About one thousand kilograms.", "About two thousand kilograms.", "About five thousand kilograms."], ans: 2 },
      { q: "What does the man offer to help with?", opts: ["Organizing the events.", "Fixing bicycles.", "Recruiting volunteers.", "Promoting the café on social media."], ans: 1 }
    ]
  },
  { // Set D
    title: "Listening for Information",
    time: 360,
    desc: "You will hear a conversation where one person explains a topic or provides information. Listen and answer the questions.",
    script: "Woman: Good afternoon and welcome to the Riverside Walk-In Clinic. Before you see a doctor today, I'd like to explain our registration and assessment process.\n\nWhen you first arrive, you need to complete a brief registration form. New patients provide their full name, date of birth, health card number, address, and emergency contact. Returning patients just verify their existing information.\n\nOnce registered, you'll be directed to our triage nurse for a quick assessment. The nurse checks your vital signs — blood pressure, temperature, heart rate, and oxygen level — and asks you to briefly describe your symptoms. Based on this, the nurse assigns a priority level. Priority one patients, those with urgent conditions, are seen within thirty minutes. Priority two patients with non-urgent conditions typically wait between forty-five minutes and an hour and a half.\n\nWhile you wait, please remain in the waiting area and listen for your name on the intercom. Do not leave without notifying reception — we call once and then move on to the next patient.\n\nRegarding payment: a valid provincial health card covers your visit fully at no cost. Without a health card — for example if you're a new immigrant or your card is expired — the standard fee is one hundred and twenty dollars, payable by cash or card.\n\nFinally, the clinic does not prescribe controlled substances or provide specialist referrals on the same day. Your family doctor would need to arrange those. Any questions?",
    questions: [
      { q: "What do new patients need to provide at registration?", opts: ["An insurance policy number and two photo IDs.", "Health card, date of birth, address, and emergency contact.", "A referral letter from their family doctor.", "Proof of address and a recent photo."], ans: 1 },
      { q: "What does the triage nurse assess?", opts: ["Your complete medical history.", "Vital signs and a brief description of symptoms.", "Your insurance coverage and payment method.", "Your allergies and current medications only."], ans: 1 },
      { q: "How long will a priority two patient typically wait?", opts: ["Under fifteen minutes.", "About thirty minutes.", "Between forty-five minutes and an hour and a half.", "More than two hours."], ans: 2 },
      { q: "What should patients do if they need to leave the waiting area?", opts: ["Wait until they are called and then explain.", "Notify the reception desk before leaving.", "Call the clinic from outside.", "Return to triage for a new priority number."], ans: 1 },
      { q: "What is the fee for a patient without a valid health card?", opts: ["Fifty dollars.", "Eighty dollars.", "One hundred dollars.", "One hundred and twenty dollars."], ans: 3 },
      { q: "What does the clinic NOT provide on the same day?", opts: ["Vital sign checks.", "Prescriptions for controlled substances or specialist referrals.", "Treatment for minor injuries.", "Blood pressure readings."], ans: 1 }
    ]
  },
  { // Set E
    title: "Listening for Information",
    time: 360,
    desc: "You will hear a conversation where one person explains a topic or provides information. Listen and answer the questions.",
    script: "Man: Hello everyone, welcome to the Pinewood Community Centre. I'm Derek, the programs coordinator, and I'll walk you through our fall class registration process.\n\nRegistration opens this Saturday, September seventh, at eight AM. You can register online at pinewoodcentre.ca, by phone at 555-0183, or in person at the front desk. We strongly encourage online or phone registration — our in-person lineup on registration day tends to get quite long.\n\nTo register, you need a community centre membership, which costs forty-five dollars annually per household. Returning members renew automatically. New members can sign up as part of the registration process.\n\nOur fall session runs from September sixteenth to December fourteenth — thirteen weeks. Classes run either once or twice weekly. Popular programs include adult beginner swimming on Monday and Wednesday evenings, senior yoga every Tuesday morning, the youth coding club on Saturday afternoons, and family pottery on Sunday afternoons.\n\nAn important note on refunds: if you withdraw before the second session, you receive a full refund minus a ten-dollar administrative fee. After the second class, no refunds are given, but you may transfer your registration to another eligible class in the same session.\n\nIf a class is full, add your name to the waiting list and we will contact you automatically if a spot opens. Email program questions to programs@pinewoodcentre.ca.",
    questions: [
      { q: "When does registration open?", opts: ["September first at nine AM.", "September seventh at eight AM.", "September sixteenth at eight AM.", "September first at eight AM."], ans: 1 },
      { q: "What does the coordinator recommend for registration?", opts: ["Always visiting in person for accurate service.", "Using the online or phone option to avoid long lineups.", "Mailing a paper registration form.", "Registering through a doctor's referral."], ans: 1 },
      { q: "What is the cost of an annual household membership?", opts: ["Twenty-five dollars.", "Thirty-five dollars.", "Forty-five dollars.", "Sixty dollars."], ans: 2 },
      { q: "How long does the fall session run?", opts: ["Eight weeks.", "Ten weeks.", "Twelve weeks.", "Thirteen weeks."], ans: 3 },
      { q: "When can a participant receive a refund minus the administrative fee?", opts: ["At any time before the session ends.", "Within the first week only.", "Before the second class session.", "Only if the class is cancelled by the centre."], ans: 2 },
      { q: "What happens if a class is full?", opts: ["The course is cancelled.", "The fee is automatically refunded.", "You are added to a waiting list and contacted if space opens.", "You are redirected to another location."], ans: 2 }
    ]
  },
  { // Set F
    title: "Listening for Information",
    time: 360,
    desc: "You will hear a conversation where one person explains a topic or provides information. Listen and answer the questions.",
    script: "Woman: Hi there, here are your two prescriptions. I want to take a few minutes to go over the medications with you.\n\nThe first is Amoxicillin, an antibiotic. You'll take one five-hundred-milligram capsule three times a day — morning, afternoon, and evening. The most important thing with antibiotics is that you complete the full ten-day course, even if you feel better after three or four days. Stopping early can allow bacteria to become resistant and the infection may return stronger. Take each dose with a full glass of water, with or without food. If you experience stomach upset, take it with a small meal.\n\nThe second medication is Naproxen, an anti-inflammatory painkiller for your joint discomfort. Take one two-hundred-and-twenty-milligram tablet twice daily — morning and evening. Always take this one with food or a full glass of milk to protect your stomach. Do not take it on an empty stomach, as it can cause irritation. Also avoid other anti-inflammatories like Aspirin or Ibuprofen while on Naproxen, as combining them increases stomach risk.\n\nBoth prescriptions are a ten-day supply. Store them at room temperature, away from direct sunlight and moisture — so not in the bathroom cabinet. A bedside table or kitchen cupboard away from the stove is ideal.\n\nNeither medication is expected to cause drowsiness, which is relevant since you mentioned you drive regularly. However, if you notice any unusual dizziness, please don't drive until that clears. Any questions?",
    questions: [
      { q: "How often should the patient take Amoxicillin?", opts: ["Once a day in the morning.", "Twice a day with meals.", "Three times a day — morning, afternoon, and evening.", "Four times a day at equal intervals."], ans: 2 },
      { q: "Why is completing the full antibiotic course important?", opts: ["The medication becomes less effective after ten days.", "Stopping early can lead to resistant bacteria and a returning infection.", "Incomplete treatment results in an allergic reaction.", "The prescription coverage requires full completion."], ans: 1 },
      { q: "What should the patient do to protect their stomach when taking Naproxen?", opts: ["Take it with a large glass of juice.", "Take it only when pain is severe.", "Always take it with food or milk.", "Crush the tablet before swallowing."], ans: 2 },
      { q: "Which medication should NOT be taken alongside Naproxen?", opts: ["Amoxicillin.", "Vitamin C supplements.", "Aspirin or Ibuprofen.", "Antihistamines."], ans: 2 },
      { q: "Where should the medications be stored?", opts: ["In the refrigerator.", "In the bathroom cabinet for easy access.", "At room temperature, away from sunlight and moisture.", "In a sealed bag in the freezer."], ans: 2 },
      { q: "What does the pharmacist say about driving?", opts: ["The patient must not drive during treatment.", "Driving is unaffected by both medications.", "Neither medication is expected to cause drowsiness, but the patient should avoid driving if they feel dizzy.", "Only the antibiotic may affect driving ability."], ans: 2 }
    ]
  }
];
