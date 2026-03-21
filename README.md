# EduWorld 2 🏫

**A simulation game about being a school educator in Kazakhstan — from first-year teacher all the way to School Director.**

---

## Inspiration

Education is one of the most stressful and underappreciated professions in the world — especially in Kazakhstan, where teachers juggle enormous class sizes, administrative pressure, and constant curriculum demands. We wanted to build something that *makes people feel* what it's like to stand in front of a classroom, manage difficult students, earn trust from parents, and climb the career ladder from Teacher → Deputy Principal → Director.

EduWorld 2 was born from respect for educators. We wanted to simulate the real emotional weight of the job: the student who keeps disrupting class, the parent complaint you have to resolve at 8am, the Ministry inspection you didn't know was coming. Every choice matters.

---

## What It Does

EduWorld 2 is a browser-based career simulation game with three distinct gameplay phases:

### 🍎 Teacher Phase
- Manage a real classroom across days and weeks
- Assign and check homework, run lessons, handle student behavior
- Students have individual personalities: lazy, anxious, bully, average
- Students ask you questions after lessons — your responses affect their understanding
- Weekly quizzes and end-of-term summative assessments (SA)
- Earn reputation and score to advance to the next career level

### 🏛️ Deputy Principal (VP) Phase
- Conduct lesson inspections: observe teachers, give official ratings (Poor / Good / Excellent)
- Handle school incidents: hallway conflicts, flu outbreaks, journalist visits, fire alarms
- Give post-inspection feedback and actions that affect your reputation score
- Track progress toward the Director position on a live progress bar

### 👔 Director Phase
- Manage a full school budget: income vs. expenses each week
- Hire and fire teachers, raise/lower salaries, track performance
- Respond to parent complaints ranging from grade disputes to political bribery
- Handle emergency events: power outages, kitchen fires, water pipe bursts
- Survive surprise Ministry of Education inspections

---

## What It Does

EduWorld 2 is a browser-based career simulation game set in a Kazakhstani school. You start as a first-year teacher and work your way up through three distinct career phases:

**🍎 Teacher** — Run a real classroom day by day. Check homework, explain topics, handle disruptive students (lazy, anxious, bully personality types), answer student questions after lessons, and sit weekly quizzes and summative assessments. Your reputation score determines whether you get promoted.

**🏛️ Deputy Principal** — Inspect other teachers' lessons and give official ratings (Needs Improvement / Good / Excellent). Resolve real school incidents that come up randomly: hallway fights, flu outbreaks, journalists arriving unannounced, fire alarms during exams, a student crying in class. Each situation has three choices with different reputation consequences. Track your progress toward the Director role on a live progress bar.

**👔 Director** — Manage the whole school. Control the weekly budget (income vs. staff salaries), hire and fire teachers, raise or cut salaries, buy equipment, run school events. Handle parent complaints ranging from unfair grading disputes to a local politician asking you to skip the admissions queue. Survive surprise Ministry of Education inspections.

Every decision has a consequence. The game ends with an animated certificate showing your full career summary.

---



| Technology | Usage |
|---|---|
| **TypeScript** | Core game logic, all screen components, state management |
| **Vite** | Build tool and dev server |
| **HTML Canvas / DOM** | All UI rendered directly — no framework |
| **CSS-in-JS (inline)** | Dynamic styled screens |
| **Custom i18n system** | Full English / Russian / Kazakh localization |

No external game engine. No backend. Everything runs in the browser from a single HTML file.

Architecture highlights:
- `TeacherLevel.ts` — lesson loop, student AI, homework system, career triggers
- `VPScreen.ts` — inspection flow, incident system, post-feedback actions
- `DirectorScreen.ts` — budget sim, staff management, events, ministry inspection
- `EndingScreen.ts` — animated career summary with starfield + confetti
- `i18n/index.ts` — centralized translation keys, language switching

---

## Challenges We Ran Into

- **Balancing the student AI**: making students feel alive without making the game frustrating. Getting the probability thresholds right for questions, disruptions, and progression took many iterations.
- **Career progression pacing**: too fast and the game feels trivial; too slow and it's boring. We tuned each phase to feel earned.
- **The i18n system**: supporting three languages (English, Russian, Kazakh) across 5+ screens with dynamic template strings was tricky to maintain correctly.
- **UI without a framework**: every screen is pure DOM + inline CSS. This gave us total control but required discipline to keep readable.

---

## Accomplishments We're Proud Of

- A complete career arc: **Teacher → Deputy Principal → Director** — each phase feels genuinely different
- The **incident system** in the VP phase: 12 distinct school situations, each with 3 moral choices and real consequences
- The **Director budget sim**: a surprisingly deep management layer that emerged from a simple prototype
- Full **English localization** across all 5 screens and 300+ strings
- The **ending screen**: animated starfield, confetti, gold certificate — it actually feels like an achievement

---

## What We Learned

Building a simulation game without any engine forces you to think very carefully about state. Every screen is both UI and game logic. We learned to respect the complexity of even simple systems — a "student asks a question" feature turned out to involve probability math, state tracking, UI timing, and narrative design all at once.

We also gained deep empathy for what teachers actually deal with every day.

---

## What's Next

- **Multiplayer co-op mode**: two players manage the same school together
- **Random event generator**: AI-generated incidents based on real Kazakhstani education news
- **Student progression stories**: follow individual students from grade 7 to graduation
- **Mobile version**: the game is fully playable on phone with minor UI tweaks
- **More career paths**: School Psychologist, PE Teacher, Librarian

---

## Known Issues

- **Localization bugs**: Some UI strings may still appear in Russian or Kazakh in edge cases (dynamic notifications, rare game events). Full English localization is ongoing — if you spot untranslated text, it's a known work-in-progress.

---

## Built With

`TypeScript` · `Vite` · `HTML5 Canvas` · `CSS` · `Vanilla JS`

---

## Team

Built with ❤️ for the hackathon. Inspired by every teacher who ever stayed late to grade papers.

> *"The best teachers don't give you the answers. They make you want to find them."*
