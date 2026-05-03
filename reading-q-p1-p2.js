// CELPIP Reading Test - Parts 1 & 2 Question Bank
// New format: tasks arrays (statement-completion, fill-blank)
// Part 1: 6 statement-completion + 5 fill-blank = 11 questions per set
// Part 2: 5 fill-blank + 3 statement-completion = 8 questions per set

const READING_PART1_SETS = [
  // ── Set 1: Jeff's letter to Martin (parking garage) ──────────────────────
  {
    desc: "Read the following message and answer the questions.",
    time: 660,
    passage: `
      <div class="email-header">
        <div><strong>To:</strong> Martin Clarke &lt;martin.clarke@homemail.ca&gt;</div>
        <div><strong>From:</strong> Jeff Sandhu &lt;jeff.sandhu@homemail.ca&gt;</div>
        <div><strong>Date:</strong> September 3, 2024</div>
        <div class="email-subject">Subject: Your boxes in the parking garage — an apology</div>
      </div>
      <p>Hi Martin,</p>
      <p>I hope this message finds you well. I am writing to apologize for moving your boxes in our shared parking garage last Friday evening without asking you first. I realize I should have knocked on your door instead of taking matters into my own hands.</p>
      <p>Here is what happened. When I came home from work, I noticed that several of your cardboard boxes were stacked very close to the building's heating element — close enough that I genuinely worried about a fire hazard. I moved them to the far corner of the garage to reduce the risk. Unfortunately, in doing so, I placed them right against your passenger-side car door, which I only realized later was a problem.</p>
      <p>Your wife Sarah mentioned to me the next morning that she had been unable to get into the car because of the boxes. I felt terrible. I was leaving for a short business trip to Winnipeg that same afternoon, so I asked my son to move the boxes again before I departed. By the time you read this, the boxes should be neatly stacked along the back wall with plenty of room on both sides.</p>
      <p>Again, I am truly sorry for the inconvenience, especially to Sarah. In the future, if I spot a safety concern involving your belongings, I will come to you directly before doing anything. I hope this does not cause any hard feelings between us.</p>
      <p>Best regards,<br>Jeff</p>
    `,
    tasks: [
      {
        type: 'statement-completion',
        instruction: "Using the drop-down menu (▾), choose the best option according to the information given in the message.",
        items: [
          {
            stem: "Jeff and Martin are",
            opts: ["coworkers at the same office", "neighbours who share a parking garage", "cousins who live across the city", "old university friends"],
            ans: 1
          },
          {
            stem: "Jeff moved Martin's boxes because he was",
            opts: ["asked to do so by building management", "annoyed that the boxes were in his parking spot", "worried that the boxes were a fire hazard", "planning to help Martin clear out his storage"],
            ans: 2
          },
          {
            stem: "After moving the boxes, Jeff accidentally",
            opts: ["damaged one of the cardboard boxes", "blocked access to Martin's car door", "caused the heating element to malfunction", "lost the key to the parking garage"],
            ans: 1
          },
          {
            stem: "Sarah is",
            opts: ["Jeff's wife", "Martin's wife", "the building manager", "Jeff's neighbour from down the street"],
            ans: 1
          },
          {
            stem: "Jeff was unable to fix the situation himself right away because",
            opts: ["he could not lift the heavy boxes alone", "he did not know where to put the boxes", "he had to leave for a business trip", "his son refused to help him"],
            ans: 2
          },
          {
            stem: "The overall tone of Jeff's letter is",
            opts: ["defensive and frustrated", "formal and demanding", "casual and humorous", "apologetic and considerate"],
            ans: 3
          }
        ]
      },
      {
        type: 'fill-blank',
        instruction: "Here is a response to the message. Complete the response by filling in the blanks. Select the best choice for each blank from the drop-down menu (▾).",
        template: `Hi Jeff,

Thanks for letting me know — and for taking the time to write. When Sarah told me what had happened, I was 7. [BLANK] at first, since I had no idea why the boxes had moved. Once she explained, I completely understood. To be honest, I had not even noticed how close the boxes were to the 8. [BLANK]. You were right to act quickly.

I can imagine it was a 9. [BLANK] situation for you — trying to do the right thing and then inadvertently creating another problem. No hard feelings at all. In fact, I appreciate that you had your son sort it out before you left.

Going forward, I agree that a quick 10. [BLANK] would be the best approach if either of us spots something like this. Neighbours should look out for each other, after all.

Thanks again, and enjoy the rest of your week.

Martin

P.S. Please give my regards to your family. Sarah asked me to say she is 11. [BLANK] that the garage issue is resolved.`,
        blanks: [
          {
            opts: ["confused", "relieved", "delighted", "embarrassed"],
            ans: 0
          },
          {
            opts: ["parking spot", "back wall", "heating element", "passenger-side door"],
            ans: 2
          },
          {
            opts: ["frustrating", "dangerous", "boring", "simple"],
            ans: 0
          },
          {
            opts: ["written complaint", "knock on the door", "phone call to the landlord", "note left on the car"],
            ans: 1
          },
          {
            opts: ["angry", "relieved", "confused", "disappointed"],
            ans: 1
          }
        ]
      }
    ]
  },

  // ── Set 2: Office renovation notice ──────────────────────────────────────
  {
    desc: "Read the following message and answer the questions.",
    time: 660,
    passage: `
      <div class="email-header">
        <div><strong>To:</strong> All Staff — 4th Floor, Toronto Branch</div>
        <div><strong>From:</strong> Michael Chen, Operations Manager</div>
        <div><strong>Date:</strong> May 3, 2024</div>
        <div class="email-subject">Subject: Upcoming Office Renovation and Temporary Relocation</div>
      </div>
      <p>Team,</p>
      <p>Please be advised that the long-anticipated renovation of the 4th floor is scheduled to begin on Monday, May 13th. This project will replace the outdated cubicle layout with a modern open-concept workspace and add two new soundproof meeting pods. Work is expected to take approximately three weeks.</p>
      <p>During construction, all 4th-floor staff will temporarily relocate to the 2nd floor of Tower B, the building directly next door. Your phone extensions will remain the same, and IT will set up full network access at the new location over the weekend before the move so everything is ready on day one.</p>
      <p>You are responsible for packing all personal belongings and necessary paper files into the provided moving boxes by 5:00 PM on Friday, May 10th. Please label each box clearly with your full name and department. Do not pack any electronic equipment — monitors, desktop computers, and other devices will be handled exclusively by the IT team.</p>
      <p>The main cafeteria in our building will remain fully operational throughout the renovation period. However, the 4th-floor elevators will be restricted to construction personnel only. If you need to retrieve something from the 4th floor during the renovation, please contact facilities management first.</p>
      <p>We understand that this disruption is inconvenient and we appreciate your flexibility. If you have specific concerns about the temporary workspace, please direct them to HR. Thank you for your cooperation.</p>
      <p>Regards,<br>Michael Chen</p>
    `,
    tasks: [
      {
        type: 'statement-completion',
        instruction: "Using the drop-down menu (▾), choose the best option according to the information given in the message.",
        items: [
          {
            stem: "The main reason for the renovation is to",
            opts: ["repair structural damage on the 4th floor", "create a more modern and collaborative workspace", "add a new cafeteria to the building", "increase the total number of staff on the floor"],
            ans: 1
          },
          {
            stem: "The renovation is expected to last",
            opts: ["one week", "two weeks", "three weeks", "four weeks"],
            ans: 2
          },
          {
            stem: "During the renovation, 4th-floor employees will work in",
            opts: ["the main cafeteria of their building", "a different building next door", "a remote location from home", "a temporary space on the 3rd floor"],
            ans: 1
          },
          {
            stem: "Employees must pack their personal belongings by",
            opts: ["Monday, May 13th", "Friday, May 10th at 5:00 PM", "Thursday, May 9th at noon", "the weekend before the move"],
            ans: 1
          },
          {
            stem: "The 4th-floor elevators will be",
            opts: ["closed to all staff for safety", "available but only during off-peak hours", "accessible only to construction workers", "reserved for IT equipment transport"],
            ans: 2
          },
          {
            stem: "Staff with concerns about the temporary workspace should contact",
            opts: ["the IT team", "Michael Chen directly", "building facilities management", "the HR department"],
            ans: 3
          }
        ]
      },
      {
        type: 'fill-blank',
        instruction: "Here is a response to the message. Complete the response by filling in the blanks. Select the best choice for each blank from the drop-down menu (▾).",
        template: `Hi Michael,

Thank you for the heads-up about the renovation. A few of us on the 4th floor were talking it over, and we have some questions.

First, for those of us who take the subway, will the commute to 7. [BLANK] add significant travel time? We want to plan ahead.

Second, we have a team meeting booked for May 14th. Should we move it to a room in 8. [BLANK], or will there be bookable space set up there?

Third, I want to confirm — IT will handle the transport of our 9. [BLANK], but we are responsible for our own paper files and personal items, correct?

Finally, when packing, should we 10. [BLANK] the boxes clearly with our name and department as you suggested, or is there a specific label format we should follow?

One last thing — the email mentions the cafeteria stays open, which is great. Will it still be available at the 11. [BLANK] times as usual?

Thanks again,
Priya`,
        blanks: [
          {
            opts: ["Tower B", "the main cafeteria", "the IT department", "the facilities office"],
            ans: 0
          },
          {
            opts: ["Tower B", "the main building", "HR", "the cafeteria"],
            ans: 0
          },
          {
            opts: ["paper files", "personal belongings", "electronic equipment", "moving boxes"],
            ans: 2
          },
          {
            opts: ["seal", "label", "weigh", "number"],
            ans: 1
          },
          {
            opts: ["restricted", "usual", "extended", "reduced"],
            ans: 1
          }
        ]
      }
    ]
  },

  // ── Set 3: Fall Festival announcement ────────────────────────────────────
  {
    desc: "Read the following message and answer the questions.",
    time: 660,
    passage: `
      <div class="email-header">
        <div><strong>To:</strong> Maplewood Community Residents</div>
        <div><strong>From:</strong> Julia Vance, Event Coordinator, City Parks Department</div>
        <div><strong>Date:</strong> August 20, 2024</div>
        <div class="email-subject">Subject: Registration Open — 10th Annual Maplewood Fall Festival</div>
      </div>
      <p>Dear Residents,</p>
      <p>We are excited to announce that registration is now open for the 10th Annual Maplewood Fall Festival! The event will take place on Saturday, October 5th, at Centennial Park from 10:00 AM to 6:00 PM.</p>
      <p>This year's festival features our beloved farmers' market with fresh seasonal produce from local growers. We are also thrilled to introduce a brand-new section called Artisans Alley, where local crafters will showcase and sell handmade goods including ceramics, custom jewelry, and woodwork. As always, live music will kick off at the main pavilion at noon, featuring the Maplewood Jazz Quartet and folk singer Dave Miller.</p>
      <p>We are actively seeking volunteers to help ensure the day runs smoothly. We need help primarily in two areas: setting up vendor tents early in the morning, and supervising the children's activity zone in the afternoon. This is also a wonderful opportunity for high school students who need to fulfil their required community service hours. Every volunteer will receive a complimentary lunch voucher and a commemorative festival t-shirt as a thank-you.</p>
      <p>To volunteer or to reserve a vendor booth in Artisans Alley, please visit maplewoodparks.ca/fall-festival and complete the online registration form. Please note that booth spaces are limited and will be assigned strictly on a first-come, first-served basis. The deadline to register for a booth is September 15th — no late applications will be accepted.</p>
      <p>We hope to see you there!</p>
      <p>Warmly,<br>Julia Vance<br>City Parks Department</p>
    `,
    tasks: [
      {
        type: 'statement-completion',
        instruction: "Using the drop-down menu (▾), choose the best option according to the information given in the message.",
        items: [
          {
            stem: "The Fall Festival will be held at",
            opts: ["Maplewood Community Centre on October 5th", "Centennial Park on October 5th", "City Hall on September 15th", "Centennial Park on September 15th"],
            ans: 1
          },
          {
            stem: "Compared to previous years, something new at this year's festival is",
            opts: ["the farmers' market", "live music at the pavilion", "Artisans Alley", "the children's activity zone"],
            ans: 2
          },
          {
            stem: "Volunteers are needed to help with",
            opts: ["performing on stage and selling food", "setting up tents and supervising the children's zone", "designing the festival t-shirt and managing the website", "registering vendors and directing parking"],
            ans: 1
          },
          {
            stem: "Each volunteer will receive",
            opts: ["a cash payment and a free booth", "a discount on local produce", "a lunch voucher and a commemorative t-shirt", "free admission and priority parking"],
            ans: 2
          },
          {
            stem: "Booth spaces in Artisans Alley will be assigned",
            opts: ["based on the quality of the crafts submitted", "by lottery draw among all applicants", "in the order that applications are received", "first to vendors who attended previous years"],
            ans: 2
          },
          {
            stem: "The deadline to register for a vendor booth is",
            opts: ["August 20th", "September 15th", "October 1st", "October 5th"],
            ans: 1
          }
        ]
      },
      {
        type: 'fill-blank',
        instruction: "Here is a response to the message. Complete the response by filling in the blanks. Select the best choice for each blank from the drop-down menu (▾).",
        template: `Dear Julia,

Thank you for your email about the Fall Festival. My daughter and I are very 7. [BLANK] about attending this year's event — it sounds even better than last year!

I am particularly interested in volunteering. My daughter is in Grade 11 and needs to complete her 8. [BLANK] hours for school, so this would be perfect for her. Could you let me know whether she can sign up to help in the 9. [BLANK] zone in the afternoon? She is great with kids.

I am also thinking of reserving a booth to sell my handmade pottery. I understand that spots are given out on a 10. [BLANK] basis, so I will register on the website as soon as possible.

Finally, I wanted to ask — will there be a place to purchase food other than the farmers' market? I noticed the live music starts at 11. [BLANK], so I imagine a lot of people will want to eat around that time.

Thank you again for all your hard work organizing this event.

Best,
Sandra Okafor`,
        blanks: [
          {
            opts: ["excited", "confused", "worried", "undecided"],
            ans: 0
          },
          {
            opts: ["work-experience", "community service", "academic", "leadership"],
            ans: 1
          },
          {
            opts: ["vendor tent", "farmers' market", "children's activity", "music pavilion"],
            ans: 2
          },
          {
            opts: ["first-come, first-served", "lottery", "quality-based", "returning-vendor"],
            ans: 0
          },
          {
            opts: ["10:00 AM", "11:00 AM", "noon", "2:00 PM"],
            ans: 2
          }
        ]
      }
    ]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// READING PART 2 — Applying Diagrams
// Format: fill-blank (blanks 1–5) then statement-completion (items 6–8)
// ─────────────────────────────────────────────────────────────────────────────

const READING_PART2_SETS = [
  // ── Set 1: Transportation Options ────────────────────────────────────────
  {
    desc: "Read the following information and answer the questions.",
    time: 600,
    passage: `
      <div class="passage-header"><strong>Getting to Lakeview: Your Travel Options</strong></div>
      <p>Peter and Janice are planning a trip to Lakeview for the long weekend. They found the following comparison of travel options online.</p>
      <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin-top:1rem;">
        <thead>
          <tr style="background:var(--primary-light,#e8f4fd);">
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:left;">Option</th>
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:left;">Features</th>
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;">Round-Trip Cost</th>
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;">Travel Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid #ccc;padding:8px 10px;font-weight:600;">Train</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">First-class seating available · Scenic coastal route · Free Wi-Fi onboard</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">$260</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">4 h 25 min</td>
          </tr>
          <tr style="background:#fafafa;">
            <td style="border:1px solid #ccc;padding:8px 10px;font-weight:600;">Bus</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">No checked bags · No onboard washrooms · Morning departures only</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">$100</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">3 h 30 min</td>
          </tr>
          <tr>
            <td style="border:1px solid #ccc;padding:8px 10px;font-weight:600;">Plane</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">In-flight snack included · Movie entertainment · Airport close to town centre</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">$240</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">45 min</td>
          </tr>
          <tr style="background:#fafafa;">
            <td style="border:1px solid #ccc;padding:8px 10px;font-weight:600;">Car (Drive)</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Freedom to explore · Can make stops along the way · Cost shareable</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">$180 (or $90 each if sharing)</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">Flexible</td>
          </tr>
        </tbody>
      </table>
    `,
    tasks: [
      {
        type: 'fill-blank',
        instruction: "Peter has written an email to Janice about their trip. Complete the email by filling in the blanks. Select the best choice for each blank from the drop-down menu (▾).",
        template: `Hi Janice,

I've been looking at the travel options for our Lakeview trip. Here are my thoughts.

The bus is definitely the 1. [BLANK] option at only $100 return, but I'm a bit put off by the fact that it has no onboard washrooms — that's a long time to hold on! Plus, we can only leave in the 2. [BLANK].

The plane is by far the 3. [BLANK] at just 45 minutes, and it has in-flight entertainment, which is a nice touch. The airport is also close to the town centre, which saves us a taxi ride.

Personally, I think driving could be the most enjoyable. We could 4. [BLANK] along the way, and if we share the cost, it only works out to 5. [BLANK] each — cheaper than flying.

Let me know what you think!

Peter`,
        blanks: [
          {
            opts: ["cheapest", "fastest", "most comfortable", "most scenic"],
            ans: 0
          },
          {
            opts: ["morning", "afternoon", "evening", "evening or morning"],
            ans: 0
          },
          {
            opts: ["cheapest", "most scenic", "most comfortable", "fastest"],
            ans: 3
          },
          {
            opts: ["check in to our hotel", "make stops", "save on luggage fees", "book seats in advance"],
            ans: 1
          },
          {
            opts: ["$45", "$90", "$120", "$180"],
            ans: 1
          }
        ]
      },
      {
        type: 'statement-completion',
        instruction: "Using the drop-down menu (▾), choose the best option according to the information given in the diagram.",
        items: [
          {
            stem: "Of all four options, the one that offers free Wi-Fi is the",
            opts: ["bus", "plane", "train", "car"],
            ans: 2
          },
          {
            stem: "Compared to the bus, the train journey takes",
            opts: ["less time and costs more", "more time and costs more", "less time and costs less", "the same time but costs less"],
            ans: 1
          },
          {
            stem: "A passenger who wants to bring large checked luggage should avoid the",
            opts: ["train", "plane", "car", "bus"],
            ans: 3
          }
        ]
      }
    ]
  },

  // ── Set 2: Apartment Listings ─────────────────────────────────────────────
  {
    desc: "Read the following information and answer the questions.",
    time: 600,
    passage: `
      <div class="passage-header"><strong>Rental Apartment Comparison — City Listings</strong></div>
      <p>Maya is searching for a new apartment. Her friend sent her links to three available units. The table below summarizes the details.</p>
      <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin-top:1rem;">
        <thead>
          <tr style="background:var(--primary-light,#e8f4fd);">
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:left;">Apartment</th>
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:left;">Location / Size</th>
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;">Monthly Rent</th>
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:left;">What's Included</th>
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:left;">Minimum Lease</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid #ccc;padding:8px 10px;font-weight:600;">Apt A</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Downtown · 1 bed · 500 sq ft</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">$2,200</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Utilities + Parking + Gym access</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">12 months</td>
          </tr>
          <tr style="background:#fafafa;">
            <td style="border:1px solid #ccc;padding:8px 10px;font-weight:600;">Apt B</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Midtown · 2 bed · 750 sq ft</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">$1,800</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Utilities only</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">6 months</td>
          </tr>
          <tr>
            <td style="border:1px solid #ccc;padding:8px 10px;font-weight:600;">Apt C</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Suburbs · 2 bed · 1,000 sq ft</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">$1,400</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Nothing included</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Month-to-month</td>
          </tr>
        </tbody>
      </table>
    `,
    tasks: [
      {
        type: 'fill-blank',
        instruction: "Maya has written an email to her friend about the apartments. Complete the email by filling in the blanks. Select the best choice for each blank from the drop-down menu (▾).",
        template: `Hey Lena,

Thanks so much for sending those listings! I've been going over them carefully.

Apartment A is in the best 1. [BLANK] — right downtown — but it's also the most expensive at $2,200 a month. The upside is that utilities, parking, and even gym access are all 2. [BLANK] in the rent, so there are no surprise bills at the end of the month.

Apartment B is a better size — 750 square feet and 3. [BLANK] bedrooms — and cheaper at $1,800. The only thing included is utilities though, so I'd still need to budget for parking.

Apartment C is the 4. [BLANK] of the three at $1,400, and it's also the biggest. The catch is that nothing is included, so utilities would be on top of that. On the plus side, there's no minimum lease commitment — it's 5. [BLANK], which gives me maximum flexibility.

I think I'm leaning toward B. What do you think?

Maya`,
        blanks: [
          {
            opts: ["location", "condition", "price range", "size"],
            ans: 0
          },
          {
            opts: ["negotiable", "excluded", "included", "optional"],
            ans: 2
          },
          {
            opts: ["one", "two", "three", "studio"],
            ans: 1
          },
          {
            opts: ["largest", "most expensive", "cheapest", "closest to downtown"],
            ans: 2
          },
          {
            opts: ["a 6-month lease", "a 12-month lease", "month-to-month", "a fixed annual contract"],
            ans: 2
          }
        ]
      },
      {
        type: 'statement-completion',
        instruction: "Using the drop-down menu (▾), choose the best option according to the information given in the diagram.",
        items: [
          {
            stem: "Of the three apartments, the one with the shortest minimum lease commitment is",
            opts: ["Apartment A", "Apartment B", "Apartment C", "all three have the same minimum lease"],
            ans: 2
          },
          {
            stem: "Compared to Apartment B, Apartment A is",
            opts: ["larger but cheaper", "smaller but more expensive", "the same size but cheaper", "larger and more expensive"],
            ans: 1
          },
          {
            stem: "A renter who specifically needs a parking space included in the rent should choose",
            opts: ["Apartment A", "Apartment B", "Apartment C", "either Apartment B or C"],
            ans: 0
          }
        ]
      }
    ]
  },

  // ── Set 3: Summer Camp Programs ───────────────────────────────────────────
  {
    desc: "Read the following information and answer the questions.",
    time: 600,
    passage: `
      <div class="passage-header"><strong>Summer Day Camp Programs — Riverside Community Centre</strong></div>
      <p>The Riverside Community Centre is offering three summer day camp programs for children. The table below provides a summary for parents.</p>
      <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin-top:1rem;">
        <thead>
          <tr style="background:var(--primary-light,#e8f4fd);">
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:left;">Program</th>
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:left;">Age Range</th>
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:left;">Schedule</th>
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;">Weekly Fee</th>
            <th style="border:1px solid #ccc;padding:8px 10px;text-align:left;">Extras</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid #ccc;padding:8px 10px;font-weight:600;">Camp A<br><span style="font-weight:400;font-size:0.9em;">Arts &amp; Crafts</span></td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Ages 8–12</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Mon–Wed · 9 AM–3 PM</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">$320</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Lunch included</td>
          </tr>
          <tr style="background:#fafafa;">
            <td style="border:1px solid #ccc;padding:8px 10px;font-weight:600;">Camp B<br><span style="font-weight:400;font-size:0.9em;">Sports &amp; Fitness</span></td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Ages 10–15</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Mon–Fri · 8 AM–5 PM</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">$450</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Lunch included · Swimming pool access</td>
          </tr>
          <tr>
            <td style="border:1px solid #ccc;padding:8px 10px;font-weight:600;">Camp C<br><span style="font-weight:400;font-size:0.9em;">Science &amp; Nature</span></td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Ages 7–11</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Tue–Thu · 10 AM–2 PM</td>
            <td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">$280</td>
            <td style="border:1px solid #ccc;padding:8px 10px;">Nature walks · Lunch not included</td>
          </tr>
        </tbody>
      </table>
    `,
    tasks: [
      {
        type: 'fill-blank',
        instruction: "A parent has written an email to a friend about the camps. Complete the email by filling in the blanks. Select the best choice for each blank from the drop-down menu (▾).",
        template: `Hi Donna,

I finally looked into the summer camp programs at Riverside Community Centre for the kids — wanted to share what I found.

Camp B (Sports & Fitness) is the most 1. [BLANK] at $450 a week, but it runs all five days and goes from 8 AM to 5 PM, which would actually work really well with our work schedules. It also includes lunch and 2. [BLANK] access, which Tom would love.

Camp A (Arts & Crafts) is a good middle option at $320 per week. It only runs 3. [BLANK] days a week though (Monday to Wednesday), so I'd need to arrange childcare for the other two days.

Camp C is the cheapest at $280, but lunch is 4. [BLANK], so that's an extra cost to keep in mind. It's also only for kids aged 7 to 11, so it wouldn't work for my older one.

I think Camp B is the best fit for us overall. It's pricier but the 5. [BLANK] schedule means I don't need to arrange extra childcare at all.

Let me know what you decide for your kids!

Rachel`,
        blanks: [
          {
            opts: ["affordable", "flexible", "expensive", "popular"],
            ans: 2
          },
          {
            opts: ["gym", "nature walk", "swimming pool", "art studio"],
            ans: 2
          },
          {
            opts: ["two", "three", "four", "five"],
            ans: 1
          },
          {
            opts: ["included", "optional", "not included", "discounted"],
            ans: 2
          },
          {
            opts: ["Mon–Wed", "Tue–Thu", "Mon–Fri", "weekend"],
            ans: 2
          }
        ]
      },
      {
        type: 'statement-completion',
        instruction: "Using the drop-down menu (▾), choose the best option according to the information given in the diagram.",
        items: [
          {
            stem: "Of the three camps, the only one that runs five days a week is",
            opts: ["Camp A", "Camp B", "Camp C", "both Camp A and Camp B"],
            ans: 1
          },
          {
            stem: "A 9-year-old child would be eligible to attend",
            opts: ["Camp A and Camp C only", "Camp B and Camp C only", "Camp A and Camp B only", "all three camps"],
            ans: 0
          },
          {
            stem: "Compared to Camp A, Camp C starts",
            opts: ["one hour earlier and costs less", "one hour later and costs less", "one hour earlier and costs more", "at the same time and costs more"],
            ans: 1
          }
        ]
      }
    ]
  }
];
