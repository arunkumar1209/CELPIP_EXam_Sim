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
  }
];
