import type { CheckItem } from "@/components/site/checklist-card";

const mk = (prefix: string, rows: [string, string][]): CheckItem[] =>
  rows.map(([title, detail], i) => ({ id: `${prefix}-${i}`, title, detail }));

export const pathway = [
  { level: "Level 1 — Starter", goal: "Get comfortable speaking out loud", items: mk("p1", [
    ["Introduce yourself for 60 seconds", "Name, class, one hobby, one goal."],
    ["Read a paragraph aloud daily for a week", "Focus on clear pronunciation."],
    ["Record yourself once and listen back", "Notice one thing to improve."],
    ["Speak in front of family", "A 1-minute talk on any topic."],
  ]) },
  { level: "Level 2 — Builder", goal: "Structure and delivery", items: mk("p2", [
    ["Write a 2-minute speech with intro, body, conclusion", "Use the Speech Builder."],
    ["Practise eye contact with three points in the room", ""],
    ["Remove filler words in one recording", "Use the Practice Coach counter."],
    ["Use one story in a speech", ""],
  ]) },
  { level: "Level 3 — Performer", goal: "Speak to real audiences", items: mk("p3", [
    ["Speak in a class assembly or club", ""],
    ["Try an extempore with 1 minute of preparation", ""],
    ["Deliver a speech without reading notes", "Use cue cards only."],
    ["Get written feedback from a teacher", ""],
  ]) },
  { level: "Level 4 — Competitor", goal: "Compete and lead", items: mk("p4", [
    ["Enter an inter-school competition", ""],
    ["Take part in a debate or MUN", ""],
    ["Anchor or host an event", ""],
    ["Mentor a younger student", "Teaching is the best practice."],
  ]) },
];

export const skillAreas = [
  { key: "voice", title: "Voice", description: "Breath, clarity, pace and variety.", items: mk("v", [
    ["Diaphragm breathing — 2 minutes", "Breathe in for 4, hold 4, out for 6."],
    ["Humming warm-up", "Hum low to high for 30 seconds, three times."],
    ["Tongue twisters", "\"Red lorry, yellow lorry\" ×10, slowly then faster."],
    ["Pace drill", "Read a paragraph at 3 speeds: slow, normal, fast."],
    ["Pause practice", "Mark pauses with / in a script and obey them."],
    ["Emphasis drill", "Say one sentence 5 times, stressing a different word each time."],
    ["Projection", "Speak to the back wall without shouting."],
  ]) },
  { key: "body", title: "Body Language", description: "Posture, gestures, eye contact and movement.", items: mk("b", [
    ["Power stance for 1 minute", "Feet shoulder-width, shoulders relaxed."],
    ["Mirror practice", "Deliver your opening while watching your face."],
    ["Open-hand gestures", "Keep hands between waist and shoulders."],
    ["Eye-contact triangle", "Left, centre, right — hold each 3 seconds."],
    ["Purposeful movement", "Move only when changing points."],
    ["Smile check", "Start and end with a natural smile."],
  ]) },
  { key: "story", title: "Storytelling", description: "Hook, conflict, change and message.", items: mk("s", [
    ["Write a 5-sentence personal story", "Setting, problem, struggle, turning point, lesson."],
    ["Open with a moment, not a summary", "\"The microphone was shaking in my hand…\""],
    ["Add one sensory detail", "Sound, sight or feeling."],
    ["Include dialogue", "One line someone actually said."],
    ["End with a clear message", "One sentence the audience remembers."],
    ["Tell your story in 90 seconds", "Time it with the Practice Coach."],
  ]) },
];

export const competitionChecklist = [
  { title: "Two weeks before", items: mk("c1", [
    ["Read the rules: time limit, topic, judging criteria", ""],
    ["Research the topic from three sources", ""],
    ["Write the first draft", ""],
  ]) },
  { title: "One week before", items: mk("c2", [
    ["Cut the speech to fit the time limit", ""],
    ["Make cue cards", ""],
    ["Rehearse daily in front of someone", ""],
    ["Record and review one full run", ""],
  ]) },
  { title: "The day before", items: mk("c3", [
    ["Prepare uniform or outfit", ""],
    ["Pack cue cards, water, pen", ""],
    ["One calm final rehearsal", ""],
    ["Sleep early", ""],
  ]) },
  { title: "On the day", items: mk("c4", [
    ["Arrive early and see the stage", ""],
    ["Do a voice and breathing warm-up", ""],
    ["Smile, pause, then begin", ""],
    ["Thank the judges and listen to others", ""],
  ]) },
];

export const moreSpeakers = [
  { name: "Malala Yousafzai", known: "Education activist, youngest Nobel Peace laureate", lesson: "Speak about what you truly believe; sincerity beats polish." },
  { name: "A. P. J. Abdul Kalam", known: "Scientist and former President of India", lesson: "Simple words and questions can inspire students more than big vocabulary." },
  { name: "Nelson Mandela", known: "Anti-apartheid leader, President of South Africa", lesson: "Pauses and calm delivery give words weight." },
  { name: "Greta Thunberg", known: "Climate activist", lesson: "Short, direct sentences make a strong message." },
  { name: "Shashi Tharoor", known: "Author and parliamentarian", lesson: "Prepare evidence and humour together to persuade." },
  { name: "Brené Brown", known: "Researcher and TED speaker", lesson: "Sharing vulnerability builds connection." },
  { name: "Sundar Pichai", known: "CEO of Google and Alphabet", lesson: "A calm, clear explanation is powerful leadership." },
  { name: "Michelle Obama", known: "Former First Lady of the United States, author", lesson: "Personal stories make big ideas relatable." },
  { name: "Ken Robinson", known: "Education speaker, most-watched TED talk", lesson: "Humour keeps an audience listening to serious ideas." },
  { name: "Indra Nooyi", known: "Former CEO of PepsiCo", lesson: "Connect your journey to your audience's dreams." },
];
