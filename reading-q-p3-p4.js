// CELPIP Reading Test - Parts 3 & 4 Question Bank
// New format: tasks arrays (paragraph-match, statement-completion, fill-blank)
// Part 3: 9 paragraph-match questions per set (ans: 0=A, 1=B, 2=C, 3=D, 4=E)
// Part 4: 5 statement-completion + 5 fill-blank = 10 questions per set

const READING_PART3_SETS = [
  // ── Set 1: The Narwhal ────────────────────────────────────────────────────
  {
    desc: "Read the following information text and answer the questions.",
    time: 600,
    passage: `
      <div class="passage-header"><strong>The Narwhal: Unicorn of the Sea</strong></div>
      <p><strong>A.</strong> The narwhal, sometimes called the "unicorn of the sea," is a medium-sized toothed whale found in the Arctic waters of Canada, Greenland, Norway, and Russia. Its scientific name, <em>Monodon monoceros</em>, is Latin for "one tooth, one horn" — a reference to its most distinguishing feature: a long, spiraling tusk that can grow up to three metres in length. The tusk is actually a modified canine tooth that grows through the upper lip, almost always on the left side, and is found primarily in adult males, though some females develop a shorter version. Despite centuries of fascination, the exact function of the narwhal's iconic tusk remains one of the sea's great unsolved mysteries. Scientists have proposed several theories: it may be used in displays of dominance among males, in sensing changes in water temperature and salinity, or in helping to locate prey beneath the ice.</p>
      <p><strong>B.</strong> Narwhals are highly social animals that spend their lives in Arctic seas, migrating seasonally between summer feeding grounds and winter ice-covered areas. They typically travel in groups called pods, ranging from a handful of individuals to herds of several hundred. During winter, narwhals survive beneath the sea ice by breathing through natural openings in the ice called leads. Remarkably, narwhals can dive to depths of over fifteen hundred metres in search of food, making them one of the deepest-diving marine mammals in the world. Their diet consists primarily of Greenland halibut, Arctic cod, squid, and shrimp.</p>
      <p><strong>C.</strong> Although narwhals have been hunted for centuries by Indigenous communities in Canada and Greenland — who prize the tusk, skin, and blubber for cultural and nutritional purposes — the species now faces mounting pressures from a changing environment. Warming Arctic temperatures are reducing sea ice at an unprecedented rate, fundamentally altering the marine habitat these animals depend on. Loss of sea ice affects the distribution of the fish and invertebrates that narwhals feed on, and it allows new predators, including killer whales, to penetrate previously inaccessible Arctic regions.</p>
      <p><strong>D.</strong> Conservation organizations and scientists are working to better understand narwhal population dynamics by deploying satellite tags on captured animals. These tracking studies, conducted jointly by Canadian and Greenlandic researchers, have revealed that narwhals follow remarkably consistent migration routes year after year. While the narwhal is currently listed as "Least Concern" on the IUCN Red List, researchers caution that climate change represents a long-term existential threat — and that the species' limited range and specialized habitat make it particularly vulnerable to rapid environmental shifts.</p>
    `,
    tasks: [
      {
        type: 'paragraph-match',
        instruction: "Decide which paragraph, A to D, has the information given in each statement below. Select E if the information is not given in any of the paragraphs.",
        items: [
          {
            stem: "Narwhals are sometimes referred to by an informal nickname.",
            ans: 0
          },
          {
            stem: "Narwhals can survive in frozen conditions by breathing through natural openings in the ice.",
            ans: 1
          },
          {
            stem: "The narwhal's diet has changed significantly over the past decade.",
            ans: 4
          },
          {
            stem: "The narwhal's tusk is actually a type of modified tooth.",
            ans: 0
          },
          {
            stem: "Narwhals have been used as a food and material source by northern communities for generations.",
            ans: 2
          },
          {
            stem: "Scientists have attached electronic devices to narwhals in order to follow their movements.",
            ans: 3
          },
          {
            stem: "Narwhals are capable of extremely deep ocean dives.",
            ans: 1
          },
          {
            stem: "Climate change has allowed new predators to enter the narwhal's habitat.",
            ans: 2
          },
          {
            stem: "Narwhals are currently classified as an endangered species.",
            ans: 4
          }
        ]
      }
    ]
  },

  // ── Set 2: Sleep and Memory ───────────────────────────────────────────────
  {
    desc: "Read the following information text and answer the questions.",
    time: 600,
    passage: `
      <div class="passage-header"><strong>The Science of Sleep and Memory</strong></div>
      <p><strong>A.</strong> For decades, sleep was viewed simply as a passive state of rest — a period when the body and mind shut down to recover from the demands of the day. Modern neuroscience has significantly revised this picture. We now understand that sleep is a highly active biological process during which the brain performs essential maintenance work. One of its most critical functions is memory consolidation: the process by which newly acquired information is stabilized, reorganized, and moved into long-term storage. Research consistently shows that people who sleep well after learning new material retain it far more effectively than those who stay awake.</p>
      <p><strong>B.</strong> Human sleep unfolds in cycles that alternate between two main phases: non-REM (NREM) sleep and Rapid Eye Movement (REM) sleep. The deepest stage of NREM sleep — often called slow-wave sleep — dominates the early hours of the night and plays a central role in processing declarative memories, which include factual knowledge and episodic recollections. During this phase, the hippocampus, a region deep in the brain associated with forming new memories, replays recent experiences and gradually transfers them to the neocortex for long-term storage. This replay mechanism effectively "frees up" the hippocampus to receive new information the following day.</p>
      <p><strong>C.</strong> REM sleep, which becomes more prolonged in the later hours of the night, is closely linked to dreaming and to the processing of procedural and emotional memories. Procedural memory covers the "how-to" knowledge underpinning physical skills, such as riding a bicycle or playing a musical instrument. During REM sleep, the brain consolidates these motor patterns and refines newly learned skills. Equally importantly, REM sleep helps the brain process emotional experiences — research suggests it may gradually reduce the distress associated with difficult memories, contributing to emotional resilience over time.</p>
      <p><strong>D.</strong> The consequences of inadequate sleep for memory are well documented. Chronic sleep deprivation disrupts slow-wave sleep, severely impairing the consolidation of factual information. A lack of sufficient REM sleep, meanwhile, hinders the mastery of physical skills and can destabilize emotional regulation, increasing vulnerability to anxiety and mood disturbances. These findings have a direct practical implication: staying awake all night to study before an exam — the so-called "all-nighter" — is largely counterproductive. Although the student is exposed to more material, the brain is denied the biological processes required to encode that material into durable long-term memory.</p>
    `,
    tasks: [
      {
        type: 'paragraph-match',
        instruction: "Decide which paragraph, A to D, has the information given in each statement below. Select E if the information is not given in any of the paragraphs.",
        items: [
          {
            stem: "A specific brain region replays recent experiences during deep sleep to help store memories.",
            ans: 1
          },
          {
            stem: "Getting more sleep than usual can actually improve athletic performance.",
            ans: 4
          },
          {
            stem: "Scientists once believed that the brain was essentially inactive during sleep.",
            ans: 0
          },
          {
            stem: "REM sleep may lessen the emotional pain associated with distressing memories.",
            ans: 2
          },
          {
            stem: "People who sleep well after learning something remember it better than those who do not sleep.",
            ans: 0
          },
          {
            stem: "Not getting enough deep sleep makes it harder to remember newly learned facts.",
            ans: 3
          },
          {
            stem: "Slow-wave sleep occurs mainly in the early part of the night.",
            ans: 1
          },
          {
            stem: "Studying without sleeping the night before an exam is unlikely to be effective.",
            ans: 3
          },
          {
            stem: "REM sleep is associated with learning physical skills such as playing an instrument.",
            ans: 2
          }
        ]
      }
    ]
  },

  // ── Set 3: Urban Beekeeping ───────────────────────────────────────────────
  {
    desc: "Read the following information text and answer the questions.",
    time: 600,
    passage: `
      <div class="passage-header"><strong>Urban Beekeeping: Bringing the Hive to the City</strong></div>
      <p><strong>A.</strong> Urban beekeeping — the practice of maintaining honeybee colonies within city boundaries — has grown rapidly in popularity across North America, Europe, and Australia over the past two decades. What was once considered a strictly rural pursuit is now flourishing on rooftops, in community gardens, and even on school grounds in some of the world's largest cities. The appeal is easy to understand: urban hives provide a direct source of locally produced honey, and the bees themselves are invaluable pollinators, supporting the growth of vegetables, herbs, and flowering plants in gardens and urban green spaces. Proponents argue that even a small number of hives can meaningfully improve local biodiversity and reconnect city dwellers with natural food systems.</p>
      <p><strong>B.</strong> Despite its growing popularity, urban beekeeping is not without challenges. Honeybee colonies in cities are exposed to a range of pesticides and herbicides applied to parks, gardens, and street trees — chemicals that can weaken immune systems, impair navigation, and reduce colony survival rates. Disease management is another significant concern; in dense urban environments where many hobbyist beekeepers keep hives in close proximity, infections such as American foulbrood can spread rapidly between colonies if not caught early. Urban beekeepers must also navigate a patchwork of municipal regulations that vary widely from city to city, with some jurisdictions requiring hive registration, limiting the number of colonies per property, or prohibiting beekeeping in certain residential zones altogether.</p>
      <p><strong>C.</strong> For those who wish to begin, starting an urban apiary requires careful planning. Prospective beekeepers must first research their local municipal bylaws to determine whether registration is required and what restrictions apply to hive placement. The two most common hive designs used in urban settings are the Langstroth hive, a stackable box system widely used by hobbyists and commercial producers alike, and the top-bar hive, which many urban practitioners prefer for its lower cost and more natural comb structure. Hive placement is critical: hives should be positioned at least two metres above ground on a rooftop or elevated platform where possible, with the entrance facing away from pedestrian paths. Beginners are strongly encouraged to take a certified beekeeping course before acquiring their first colony.</p>
      <p><strong>D.</strong> The broader community benefits of urban beekeeping extend well beyond honey production. In cities where schools and community organizations have introduced hive programs, participants have reported increased interest in biology, environmental science, and local food systems. Rooftop gardens and urban farms that partner with beekeepers often see measurable improvements in crop yields due to improved pollination. Some municipalities have actively promoted urban beekeeping as part of broader urban biodiversity strategies, helping to establish "pollinator corridors" — connected stretches of flowering plants and green spaces that support not only honeybees but also wild bee species and other beneficial insects.</p>
    `,
    tasks: [
      {
        type: 'paragraph-match',
        instruction: "Decide which paragraph, A to D, has the information given in each statement below. Select E if the information is not given in any of the paragraphs.",
        items: [
          {
            stem: "Urban beekeeping can benefit neighbouring gardens by improving the pollination of plants.",
            ans: 0
          },
          {
            stem: "Beginner beekeepers are advised to complete a formal training course before getting started.",
            ans: 2
          },
          {
            stem: "Some cities have used urban beekeeping as part of a plan to support a wider variety of insects.",
            ans: 3
          },
          {
            stem: "Urban hives are more productive than rural hives because of the variety of city plants.",
            ans: 4
          },
          {
            stem: "Chemicals used in city parks and gardens can harm bee colonies.",
            ans: 1
          },
          {
            stem: "Schools that have introduced beekeeping programs have seen students become more interested in science.",
            ans: 3
          },
          {
            stem: "There is a type of hive that is preferred in urban settings because it is cheaper and more natural.",
            ans: 2
          },
          {
            stem: "A disease can spread quickly among hives that are kept close together in a city.",
            ans: 1
          },
          {
            stem: "Urban beekeeping first became popular in North America before spreading to other continents.",
            ans: 4
          }
        ]
      }
    ]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// READING PART 4 — Viewpoints
// Format: 5 statement-completion (1–5) + 5 fill-blank (6–10)
// ─────────────────────────────────────────────────────────────────────────────

const READING_PART4_SETS = [
  // ── Set 1: Active Classrooms ──────────────────────────────────────────────
  {
    desc: "Read the following article and answer the questions.",
    time: 600,
    passage: `
      <div class="passage-header"><strong>Can Exercise Make Students Better Learners?</strong></div>
      <p>Walking into Bradley Gordon's French class at Westmont Secondary School in Burlington, Ontario, you might do a double take. Alongside the usual rows of desks are a half-dozen exercise bikes and a cluster of large yoga balls serving as alternative seating. Gordon introduced the equipment two years ago after reading about the links between physical activity and brain function. "I teach a lot of kids who struggle to sit still for 75 minutes," he explains. "I thought: why fight it? Let's use it."</p>
      <p>The idea was not immediately welcomed. Principal Dawn Epstein was skeptical when Gordon first proposed it. "My initial worry was that exercise during class would actually exacerbate the symptoms of ADHD, not help them," she recalls. "I imagined chaos." Gordon convinced her to allow a six-month pilot, promising to document the results carefully.</p>
      <p>The scientific backing for Gordon's instinct comes in part from the work of Dr. John Ratey, a clinical professor of psychiatry at Harvard Medical School and author of <em>Spark: The Revolutionary New Science of Exercise and the Brain</em>. Ratey's research shows that aerobic exercise increases the production of brain-derived neurotrophic factor (BDNF), a protein that supports the growth of new neurons and strengthens synaptic connections. Far from worsening hyperactivity, Ratey argues, moderate exercise actually diminishes it while simultaneously increasing attention and focus — exactly the conditions needed for effective learning.</p>
      <p>After one full year of running the active classroom, Gordon's results matched his expectations. Standardized test scores in his classes were comparable to previous years, but teacher-reported engagement was noticeably higher. Several students who had previously been reluctant participants were now among the most active contributors to class discussions. "The bikes and balls don't distract them," Gordon says. "They free them."</p>

      <hr style="margin: 1.5rem 0; border-color: #ddd;">
      <p style="font-size:0.85em;color:var(--text-muted);">Comments (1)</p>

      <div style="background:#f9f9f9;border:1px solid #e0e0e0;border-radius:6px;padding:1rem 1.2rem;margin-top:0.5rem;">
        <p style="margin:0 0 0.5rem;font-weight:600;font-size:0.9em;">Comment by: skeptical_parent_99</p>
        <p style="margin:0;font-size:0.95em;">I read this article with interest, but I have concerns. While I respect Mr. Gordon's initiative, I worry that classrooms with exercise equipment could become a distraction for students who <em>don't</em> have attention difficulties — the majority of any class. Not every child needs to pedal a bike to pay attention. Dr. Ratey's research is compelling, but it was conducted in controlled lab settings, not real classrooms with 30 students. And what about subjects that require sustained silent concentration, like math or science? I'd be more convinced if there were broader, peer-reviewed studies across multiple schools and subject areas before we start putting bikes in every classroom in the country.</p>
      </div>
    `,
    tasks: [
      {
        type: 'statement-completion',
        instruction: "Using the drop-down menu (▾), choose the best option according to the information given in the article.",
        items: [
          {
            stem: "The main subject of this article is",
            opts: [
              "a study on the effects of yoga on student test scores",
              "a teacher who introduced exercise equipment into his classroom",
              "a school that replaced all desks with exercise bikes",
              "a debate between a principal and a school board about ADHD"
            ],
            ans: 1
          },
          {
            stem: "Principal Epstein's initial reaction to Gordon's proposal was",
            opts: [
              "enthusiastic support",
              "concern that exercise would make ADHD symptoms worse",
              "concern about the cost of the equipment",
              "agreement on the condition that all teachers participate"
            ],
            ans: 1
          },
          {
            stem: "According to Dr. Ratey, moderate exercise",
            opts: [
              "increases ADHD symptoms but improves test scores",
              "has no measurable effect on attention in classroom settings",
              "reduces hyperactivity and improves attention and focus",
              "is only beneficial when done for more than one hour"
            ],
            ans: 2
          },
          {
            stem: "After one year, Gordon found that his active classroom approach resulted in",
            opts: [
              "significantly higher standardized test scores than the previous year",
              "higher engagement and more participation from previously reluctant students",
              "a reduction in the number of students diagnosed with ADHD",
              "complaints from parents about distractions during lessons"
            ],
            ans: 1
          },
          {
            stem: "The comment posted by skeptical_parent_99 argues that",
            opts: [
              "exercise equipment is too expensive for most schools to afford",
              "Gordon's idea works well and should be adopted nationwide immediately",
              "the research supporting active classrooms needs to be more broadly tested before widespread adoption",
              "exercise bikes are only appropriate for physical education classes"
            ],
            ans: 2
          }
        ]
      },
      {
        type: 'fill-blank',
        instruction: "Here is a response to the comment. Complete the response by filling in the blanks. Select the best choice for each blank from the drop-down menu (▾).",
        template: `Reply by: gordon_teaches_french

Thank you for your thoughtful comment. I understand your 6. [BLANK] — introducing equipment into a classroom is a significant change and it's fair to ask whether it works for all students, not just those with ADHD.

You're right that Dr. Ratey's research was largely lab-based. That's exactly why I ran a 7. [BLANK] in my own classroom first, rather than asking the whole school to adopt the approach at once. I wanted real-world evidence, not just theory.

On the point about 8. [BLANK] — the equipment is optional, not mandatory. Students who prefer a traditional desk are always welcome to use one. The goal is to give students more 9. [BLANK], not to force everyone onto a bike.

I agree completely that broader studies across different 10. [BLANK] and subject areas would strengthen the case. I hope to collaborate with other teachers to gather that data over the next two years.

— Mr. Gordon`,
        blanks: [
          {
            opts: ["excitement", "skepticism", "enthusiasm", "confusion"],
            ans: 1
          },
          {
            opts: ["survey", "pilot program", "literature review", "fundraiser"],
            ans: 1
          },
          {
            opts: ["test scores", "distraction", "cost", "class size"],
            ans: 1
          },
          {
            opts: ["homework", "choice", "competition", "supervision"],
            ans: 1
          },
          {
            opts: ["countries", "schools", "subjects", "grade levels"],
            ans: 2
          }
        ]
      }
    ]
  },

  // ── Set 2: Remote Work Debate ─────────────────────────────────────────────
  {
    desc: "Read the following article and answer the questions.",
    time: 600,
    passage: `
      <div class="passage-header"><strong>Back to the Office — or Not? The Remote Work Debate Continues</strong></div>
      <p>When TechNova Solutions CEO Sarah Chen announced last spring that all employees would be required to come into the office at least three days per week, the reaction was swift and divided. Some employees welcomed the change; others threatened to resign. The announcement reignited a debate that has simmered across corporate Canada since the end of pandemic-era work-from-home arrangements: is the office truly necessary, or has remote work proven itself as a permanent fixture of modern employment?</p>
      <p>Chen's justification was straightforward. "We saw individual productivity hold up during remote work," she told the company's all-staff meeting, "but collaborative projects suffered. Timelines stretched. New employees were struggling to integrate. The informal knowledge-sharing that happens in hallway conversations simply doesn't happen over Slack." Her goal, she said, was not to punish remote workers but to restore the conditions for genuine team cohesion.</p>
      <p>Many employees, however, pushed back strongly. Those who had thrived working remotely cited benefits that went beyond personal convenience: better concentration without office noise, elimination of a commute that for some totalled two hours daily, and for parents, greater flexibility to manage childcare. "I am measurably more productive at home," said one senior developer who asked not to be named. "I complete the same work in six hours that used to take me eight in the office. The commute alone was exhausting me."</p>
      <p>The data on remote work productivity is genuinely mixed. Several large studies conducted between 2020 and 2023 found that individual output — measured by tasks completed, code written, or calls handled — was equal to or higher among remote workers. However, other research suggests that team-based innovation, mentorship of junior staff, and the speed of complex decision-making decline when teams are dispersed. The picture that emerges is not that remote work is universally better or worse, but that its effects depend heavily on the type of work being done.</p>
      <p>Dr. Martin Webb, a workplace psychologist at the University of Toronto, argues that neither extreme works well. "Fully remote work risks eroding the social bonds that make teams resilient under pressure," he says. "But mandatory full-time office attendance ignores the very real productivity and wellbeing benefits many workers experience at home. The evidence points clearly toward a thoughtfully designed hybrid model as the optimal solution." TechNova is currently piloting a "flex-core" schedule in which employees choose which three days they come in, with the requirement that all team members overlap at least one day per week.

      <hr style="margin: 1.5rem 0; border-color: #ddd;">
      <p style="font-size:0.85em;color:var(--text-muted);">Comments (1)</p>

      <div style="background:#f9f9f9;border:1px solid #e0e0e0;border-radius:6px;padding:1rem 1.2rem;margin-top:0.5rem;">
        <p style="margin:0 0 0.5rem;font-weight:600;font-size:0.9em;">Comment by: remote_is_the_future</p>
        <p style="margin:0;font-size:0.95em;">I've worked remotely for three years and I will never go back. My commute was 50 minutes each way, and getting rid of it gave me back nearly two hours every day — time I now spend exercising, cooking real meals, and being present with my family. My output is up and my stress is down. Managers who insist on office attendance are really just trying to justify expensive office leases, not improve performance. The argument about "collaboration" is overblown — video calls and shared documents handle 95% of what used to require an in-person meeting. Companies that force people back will simply lose their best talent to more flexible competitors.</p>
      </div>
    `,
    tasks: [
      {
        type: 'statement-completion',
        instruction: "Using the drop-down menu (▾), choose the best option according to the information given in the article.",
        items: [
          {
            stem: "The article is primarily about",
            opts: [
              "a new study showing that remote workers are always more productive",
              "the debate over whether employees should be required to return to the office",
              "a government policy requiring companies to offer remote work options",
              "how TechNova Solutions increased its profits by closing its offices"
            ],
            ans: 1
          },
          {
            stem: "According to Sarah Chen, the main problem with remote work was that",
            opts: [
              "individual employees were not completing their assigned tasks",
              "the company's office lease was too expensive to maintain",
              "team collaboration and knowledge-sharing declined",
              "employees were working longer hours than before"
            ],
            ans: 2
          },
          {
            stem: "Remote employees who opposed the return-to-office policy said that working from home",
            opts: [
              "allowed them to work fewer hours while appearing productive",
              "gave them better focus and saved significant commute time",
              "was less stressful because managers could not monitor them",
              "had no effect on their productivity compared to the office"
            ],
            ans: 1
          },
          {
            stem: "Research on remote work productivity found that",
            opts: [
              "remote workers always outperform office workers in every measure",
              "individual output was often higher remotely but team-based work suffered",
              "remote workers completed fewer tasks than office workers in all studies",
              "productivity data was too unreliable to draw any conclusions"
            ],
            ans: 1
          },
          {
            stem: "Dr. Martin Webb's recommendation is that companies should",
            opts: [
              "require all employees to work fully in the office",
              "allow all employees to work fully from home if they choose",
              "implement a well-designed hybrid model combining both options",
              "let each team decide independently without any company policy"
            ],
            ans: 2
          }
        ]
      },
      {
        type: 'fill-blank',
        instruction: "Here is a reply to the comment. Complete the reply by filling in the blanks. Select the best choice for each blank from the drop-down menu (▾).",
        template: `Reply by: office_advocate_TO

I understand your enthusiasm for remote work, and I agree the 6. [BLANK] benefits are real and significant for many people. But I think you're presenting only one side of a more complex picture.

The article specifically notes that while 7. [BLANK] productivity often holds up or improves when working from home, collaborative and team-based projects can suffer. That matters for companies whose products depend on creative teamwork, not just solo task completion.

Your point about managers "justifying office leases" is a bit cynical. Sarah Chen acknowledged remote workers' individual 8. [BLANK] was fine — her concern was specifically about team cohesion and the integration of 9. [BLANK] employees who struggle to learn the job without informal mentorship.

I also think calling the collaboration argument "overblown" understates the evidence. A video call is not the same as sharing a whiteboard or running into a colleague who has exactly the answer you need. The study mentioned in the article shows that 10. [BLANK] decision-making slows down in dispersed teams.

A reasonable hybrid arrangement, like the one TechNova is piloting, seems far more sensible than the all-or-nothing framing in your comment.`,
        blanks: [
          {
            opts: ["financial", "commute-related", "social", "technical"],
            ans: 1
          },
          {
            opts: ["team-based", "individual", "managerial", "creative"],
            ans: 1
          },
          {
            opts: ["output", "salary", "schedule", "morale"],
            ans: 0
          },
          {
            opts: ["senior", "remote", "new", "part-time"],
            ans: 2
          },
          {
            opts: ["individual", "simple", "complex", "routine"],
            ans: 2
          }
        ]
      }
    ]
  },

  // ── Set 3: Community Supported Agriculture ────────────────────────────────
  {
    desc: "Read the following article and answer the questions.",
    time: 600,
    passage: `
      <div class="passage-header"><strong>Farm Shares: How Community Supported Agriculture Is Changing the Way Canadians Eat</strong></div>
      <p>Every spring, thousands of Canadian families make an unusual financial commitment: they write a cheque to a local farmer before a single seed has been planted. In return, they receive a weekly box of fresh produce throughout the growing season — whatever the farm happens to harvest that week. This arrangement is called Community Supported Agriculture, or CSA, and it has been quietly reshaping the relationship between urban consumers and rural food producers for more than three decades.</p>
      <p>The financial logic of CSA is straightforward, though unconventional. By collecting payment at the start of the season, farmers receive the operating capital they need to purchase seeds, equipment, and labour without taking on debt or relying on the unpredictable prices of wholesale markets. In exchange for this financial security, the farmer shares both the rewards and the risks of the harvest with members. A bumper crop of tomatoes means abundance in the weekly box; a wet summer that devastates the pepper yield means members go without. Supporters argue this model builds a more honest, equitable relationship between eaters and growers — one in which consumers understand and share the realities of food production.</p>
      <p>Westfield Farm, a 45-hectare operation near Guelph, Ontario, has been running a CSA program for eleven years. Today it serves approximately 500 member families, with an annual retention rate of around 80 percent — a figure owner Derek Hsu calls "a sign that people genuinely value what they're getting, not just the idea of it." Hsu credits the program's longevity to a combination of reliable quality, transparent communication with members about growing conditions, and regular farm visit days that allow families to see where their food comes from.</p>
      <p>Not everyone finds the CSA model straightforward, however. The upfront cost — often between $400 and $700 for a full season share — is a barrier for lower-income families who cannot commit that sum in spring, even if the weekly per-box cost works out to be competitive with supermarket prices. There is also the challenge of unfamiliarity: CSA boxes frequently contain vegetables that members have never cooked before, such as kohlrabi, celeriac, or several varieties of kale. Some families, particularly those with selective eaters, find this unpredictability frustrating rather than exciting.</p>
      <p>Registered dietitian Dr. Sandra Kim argues that these inconveniences are, in fact, part of the point. "CSA members eat a more diverse range of vegetables than typical grocery shoppers, almost by necessity," she says. "When a box arrives containing something you've never heard of, you either learn to cook it or you waste it — and most people learn to cook it. Over a full season, that translates into genuinely expanded dietary habits." Her surveys of CSA members in the Greater Toronto Area found that participants reported eating measurably more vegetables by mid-season, and that most continued those habits into the off-season.

      <hr style="margin: 1.5rem 0; border-color: #ddd;">
      <p style="font-size:0.85em;color:var(--text-muted);">Comments (1)</p>

      <div style="background:#f9f9f9;border:1px solid #e0e0e0;border-radius:6px;padding:1rem 1.2rem;margin-top:0.5rem;">
        <p style="margin:0 0 0.5rem;font-weight:600;font-size:0.9em;">Comment by: csa_convert_guelph</p>
        <p style="margin:0;font-size:0.95em;">My family joined a CSA three summers ago and I can honestly say it changed the way we eat. Yes, the upfront cost was a stretch the first year, but when I broke it down per week it was actually cheaper than what I was spending at the grocery store on vegetables — and the quality was incomparable. The biggest surprise was how it made me a more adventurous cook. I had never heard of kohlrabi before my first box, and now it's a family favourite. I also love knowing that my money goes directly to a local farmer rather than to a supermarket chain. If you can afford the upfront cost, I'd encourage anyone to try it for at least one full season.</p>
      </div>
    `,
    tasks: [
      {
        type: 'statement-completion',
        instruction: "Using the drop-down menu (▾), choose the best option according to the information given in the article.",
        items: [
          {
            stem: "In a CSA arrangement, consumers pay for their produce",
            opts: [
              "weekly as they receive each box throughout the season",
              "at the end of the growing season once harvests are known",
              "upfront at the beginning of the growing season",
              "on a monthly installment plan set up by the farmer"
            ],
            ans: 2
          },
          {
            stem: "The CSA model benefits farmers primarily because it",
            opts: [
              "eliminates the need to hire seasonal workers",
              "gives them operating funds before the season begins without debt",
              "guarantees a minimum price for their produce at wholesale markets",
              "allows them to sell only their best-quality produce to members"
            ],
            ans: 1
          },
          {
            stem: "According to the article, Westfield Farm's high member retention rate is evidence that",
            opts: [
              "CSA boxes are always cheaper than supermarket produce",
              "members genuinely value what they receive, not just the concept",
              "Westfield Farm is the largest CSA operation in Ontario",
              "farm visit days are the most important factor in member satisfaction"
            ],
            ans: 1
          },
          {
            stem: "One barrier that prevents lower-income families from joining a CSA is",
            opts: [
              "the distance they must travel to pick up their weekly box",
              "the limited variety of vegetables offered by most farms",
              "the large upfront payment required at the start of the season",
              "the requirement to volunteer on the farm during the harvest"
            ],
            ans: 2
          },
          {
            stem: "Dr. Sandra Kim argues that receiving unfamiliar vegetables in a CSA box",
            opts: [
              "leads most families to cancel their memberships after the first season",
              "causes members to waste more food than typical grocery shoppers",
              "ultimately encourages members to develop broader and healthier eating habits",
              "has no significant effect on long-term dietary choices"
            ],
            ans: 2
          }
        ]
      },
      {
        type: 'fill-blank',
        instruction: "Here is a reply to the comment. Complete the reply by filling in the blanks. Select the best choice for each blank from the drop-down menu (▾).",
        template: `Reply by: smallfarm_derek

Thank you so much for sharing your experience — this is exactly why we keep running our CSA program. You've touched on something that I hear from members all the time: the 6. [BLANK] cost feels daunting at first, but once you compare it to what you were spending at the supermarket week by week, it often works out to be very 7. [BLANK].

The kohlrabi story made me smile. We grow several unusual varieties specifically to challenge our members' cooking habits, and the feedback is almost always the same: people are surprised by how quickly an unfamiliar vegetable becomes a 8. [BLANK] in their kitchen.

Your point about the money going directly to a local 9. [BLANK] rather than a large retail chain is one we emphasize a lot too. When you buy a share from us, roughly 85 cents of every dollar stays in our local rural community.

For anyone reading this who is on the fence: we do offer a 10. [BLANK] share option — half a season — which reduces the initial commitment and is a great way to try the model before signing up for a full year.

— Derek Hsu, Westfield Farm`,
        blanks: [
          {
            opts: ["weekly", "upfront", "hidden", "seasonal"],
            ans: 1
          },
          {
            opts: ["expensive", "competitive", "unpredictable", "flexible"],
            ans: 1
          },
          {
            opts: ["challenge", "staple", "leftover", "luxury"],
            ans: 1
          },
          {
            opts: ["supermarket", "distributor", "farmer", "co-op"],
            ans: 2
          },
          {
            opts: ["trial", "premium", "half-season", "discounted"],
            ans: 2
          }
        ]
      }
    ]
  }
];
