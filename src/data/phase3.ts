export type Lesson = { id: string; title: string; detail: string };
export type Level = { level: string; name: string; lessons: Lesson[] };

const L = (prefix: string, rows: [string, string][]): Lesson[] =>
  rows.map(([title, detail], i) => ({ id: `${prefix}-${i}`, title, detail }));

export const curriculum: Level[] = [
  { level: "Level 1", name: "Foundations", lessons: L("l1", [
    ["What is public speaking?", "Sharing one clear idea with a group so they understand, feel or act."],
    ["Understanding audiences", "Ask: who is listening, what do they already know, and what do they need?"],
    ["Confidence", "Confidence follows preparation. Practise until the first minute feels familiar."],
    ["Stage nervousness", "Nerves are energy. Slow breathing (in 4, hold 4, out 6) calms the body."],
    ["Basic speech structure", "Tell them what you'll say, say it, then remind them what you said."],
    ["Voice basics", "Stand tall, breathe from the belly and speak to the back row."],
  ]) },
  { level: "Level 2", name: "Delivery", lessons: L("l2", [
    ["Pace", "Aim for about 130–150 words a minute; slow down for key ideas."],
    ["Pitch", "Let your voice rise and fall naturally — a flat line sounds bored."],
    ["Tone", "Match tone to message: warm for stories, firm for arguments."],
    ["Volume", "Loud enough for the last row, softer for moments of emphasis."],
    ["Pauses", "A two-second pause before a key line makes people lean in."],
    ["Articulation", "Finish the ends of words. Tongue twisters help."],
    ["Body language", "Feet steady, shoulders relaxed, hands visible."],
    ["Eye contact", "Hold each person's gaze for one full sentence."],
    ["Gestures", "Use open, purposeful gestures that match your words."],
  ]) },
  { level: "Level 3", name: "Speechwriting", lessons: L("l3", [
    ["Topic selection", "Pick something you care about and can explain in one sentence."],
    ["Research", "Use two or three reliable sources and note where each fact came from."],
    ["Central message", "Write your whole speech as one sentence before you write anything else."],
    ["Hook", "Open with a question, short story, surprising fact or vivid image."],
    ["Introduction", "Hook, then why it matters, then a preview of your points."],
    ["Main points", "Two or three points are easier to remember than six."],
    ["Evidence", "Support each point with an example, a number or an expert view."],
    ["Transitions", "Link points: 'That's the problem — now let's look at the solution.'"],
    ["Conclusion", "Summarise, return to your hook and end on a strong line."],
    ["Call to action", "Tell the audience one specific thing to do next."],
  ]) },
  { level: "Level 4", name: "Storytelling", lessons: L("l4", [
    ["Story structure", "Situation → problem → turning point → lesson."],
    ["Characters", "Give people names and one detail each so listeners can picture them."],
    ["Conflict", "Without a problem there's no story. Say what was at stake."],
    ["Emotion", "Describe how you felt, not just what happened."],
    ["Descriptive language", "Use senses: what did it sound, smell or look like?"],
    ["Personal stories", "Your own small moments are more powerful than borrowed big ones."],
    ["Anecdotes", "A 30-second anecdote can make a dry point memorable."],
    ["Narrative openings", "Start mid-scene: 'The microphone squeaked, and 400 faces turned to me.'"],
  ]) },
  { level: "Level 5", name: "Persuasion", lessons: L("l5", [
    ["Claims", "State clearly what you want the audience to believe."],
    ["Evidence", "Facts, examples and expert views make a claim believable."],
    ["Reasoning", "Explain why the evidence proves the claim — don't leave the link unsaid."],
    ["Counterarguments", "Name the strongest objection and answer it fairly."],
    ["Audience analysis", "What does this audience value? Connect your claim to it."],
    ["Ethical persuasion", "Never twist facts or play on fear. Honesty builds lasting trust."],
    ["Rhetorical devices", "See the Rhetoric Lab for ethos, pathos, logos and more."],
  ]) },
  { level: "Level 6", name: "Competition", lessons: L("l6", [
    ["Time management", "Practise with a timer and aim to finish 10–15 seconds early."],
    ["Judging criteria", "Content, delivery, language and time are commonly judged — check the rules."],
    ["Practice routines", "Rehearse fully at least five times, including once in front of someone."],
    ["Competition nerves", "Arrive early, walk the stage and breathe slowly before your turn."],
    ["Memorization", "Memorise the structure and key lines, not every word."],
    ["Notes", "If allowed, use small cue cards with keywords only."],
    ["Handling mistakes", "If you forget, pause, smile, and move to your next point."],
    ["Post-performance review", "Write down three things that went well and one to improve."],
  ]) },
  { level: "Level 7", name: "Advanced Communication", lessons: L("l7", [
    ["Debate", "Listen carefully, note the opponent's points and rebut the strongest."],
    ["MUN", "Represent your country's position, not your personal opinion."],
    ["Presentations", "One idea per slide; your voice carries the message, not the text."],
    ["Interviews", "Answer with a short example: situation, action, result."],
    ["Leadership communication", "Be clear, calm and brief when giving direction to a team."],
    ["Moderation", "Keep time, give everyone a turn and summarise fairly."],
    ["Crisis communication", "Say what you know, what you don't, and what happens next."],
    ["Professional speaking", "Prepare, respect time and always thank your hosts."],
  ]) },
];

export const rhetoric = [
  { name: "Ethos", meaning: "Credibility — why the audience should trust you.", example: "As a student who has stood on that stage and frozen, I know how fear feels." },
  { name: "Pathos", meaning: "Emotion — helping the audience feel something.", example: "Imagine a child who has never seen a library, holding a book for the first time." },
  { name: "Logos", meaning: "Logic — facts, reasons and evidence.", example: "If each student saves one plastic bottle a day, our school saves over 300,000 a year." },
  { name: "Repetition", meaning: "Repeating a word or idea so it sticks.", example: "Practice makes you prepared. Practice makes you calm. Practice makes you ready." },
  { name: "Anaphora", meaning: "Starting several sentences with the same words.", example: "We can read more. We can listen more. We can speak more." },
  { name: "Metaphor", meaning: "Describing one thing as another.", example: "Your voice is a bridge between your ideas and your audience." },
  { name: "Analogy", meaning: "Explaining something new by comparing it to something familiar.", example: "Practising a speech is like charging a phone — skip it and you'll die halfway." },
  { name: "Rhetorical question", meaning: "A question asked for effect, not for an answer.", example: "If not us, the students, then who will protect our planet?" },
  { name: "Rule of three", meaning: "Grouping ideas in threes for rhythm.", example: "Be clear, be calm, be confident." },
  { name: "Contrast", meaning: "Placing opposites side by side.", example: "Fear tells you to sit down. Courage tells you to stand up." },
  { name: "Storytelling", meaning: "Using a short narrative to carry an idea.", example: "Last year I forgot my opening line. This year, I'm opening with that story." },
  { name: "Call to action", meaning: "Ending with a clear next step.", example: "Tonight, read one page aloud. Tomorrow, read two." },
];

export const analysisSpeeches = [
  { id: "mlk", title: "\"I Have a Dream\" — Martin Luther King Jr. (1963)", context: "Delivered at the March on Washington for civil rights in the United States.", listen: ["Repetition of a key phrase", "Vivid imagery of the future", "Rising volume and emotion", "References to shared national values"], source: "https://www.archives.gov/" },
  { id: "malala", title: "UN Youth Takeover speech — Malala Yousafzai (2013)", context: "Spoken at the United Nations on her 16th birthday about the right to education.", listen: ["Calm, steady pace", "Personal story as ethos", "Simple, memorable language", "Clear call to action"], source: "https://www.un.org/" },
  { id: "kalam", title: "Speeches to students — Dr. A. P. J. Abdul Kalam", context: "India's former President often spoke to students about dreams and hard work.", listen: ["Questions to the audience", "Warm, conversational tone", "Short lists and pledges", "Encouraging close"], source: "https://www.presidentofindia.gov.in/" },
  { id: "churchill", title: "\"We shall fight on the beaches\" — Winston Churchill (1940)", context: "Delivered to the UK Parliament during the Second World War.", listen: ["Anaphora (repeated openings)", "Slow, deliberate pace", "Contrast of danger and resolve", "Strong final line"], source: "https://winstonchurchill.org/" },
];

export const listenFor = ["Opening", "Pace", "Pauses", "Repetition", "Storytelling", "Rhetorical devices", "Emotional appeal", "Evidence", "Closing"];

const tasks = [
  "Read a page aloud", "Give a one-minute speech", "Explain an everyday object", "Tell a short story",
  "Explain a difficult concept simply", "Give a persuasive 60-second pitch", "Answer a random impromptu question",
  "Debate both sides of a topic", "Deliver a MUN opening speech", "Record yourself", "Analyse your recording", "Deliver a final speech",
];

export const challengeSets = [
  { key: "c7", name: "7-Day Challenge", level: "Beginner", days: [0, 1, 2, 3, 10, 4, 5].map((t, i) => ({ id: `d${i + 1}`, title: `Day ${i + 1}: ${tasks[t]}` })) },
  { key: "c14", name: "14-Day Challenge", level: "Intermediate", days: Array.from({ length: 14 }, (_, i) => ({ id: `d${i + 1}`, title: `Day ${i + 1}: ${i === 13 ? tasks[11] : tasks[i % 11]}` })) },
  { key: "c30", name: "30-Day Challenge", level: "Advanced", days: Array.from({ length: 30 }, (_, i) => ({ id: `d${i + 1}`, title: `Day ${i + 1}: ${i === 29 ? tasks[11] : tasks[(i * 5) % 11]}` })) },
];

export const externalResources = [
  { group: "Courses", items: [
    { name: "Coursera — public speaking courses", url: "https://www.coursera.org/courses?query=public%20speaking" },
    { name: "Preply — English conversation tutors", url: "https://preply.com/" },
    { name: "edX — university communication courses", url: "https://www.edx.org/" },
  ] },
  { group: "Speech organizations", items: [
    { name: "National Speech & Debate Association", url: "https://www.speechanddebate.org/" },
    { name: "Toastmasters International", url: "https://www.toastmasters.org/" },
    { name: "English-Speaking Union", url: "https://www.esu.org/" },
  ] },
  { group: "Video learning", items: [
    { name: "TED Talks", url: "https://www.ted.com/talks" },
    { name: "TED-Ed", url: "https://ed.ted.com/" },
    { name: "United Nations (official speeches)", url: "https://media.un.org/" },
  ] },
];

export const commLessons = [
  { title: "Conversation practice", body: "Talk with a friend for five minutes on one topic without switching to another language.", drill: "Topic: 'The best day of my holiday.'" },
  { title: "Pronunciation", body: "Pick three words you find hard each week and practise them slowly, then at normal speed.", drill: "Try: 'particularly', 'environment', 'vocabulary'." },
  { title: "Fluency", body: "Fluency is flow, not perfection. Keep going even when you make a small mistake.", drill: "Speak for 60 seconds without stopping on 'my favourite food'." },
  { title: "Vocabulary in use", body: "A new word is only yours once you have said it in a sentence out loud.", drill: "Use today's Word of the Day in three spoken sentences." },
  { title: "Speaking confidence", body: "Start with low-pressure audiences — a mirror, a sibling, then a small group.", drill: "Introduce yourself to your mirror in 30 seconds." },
  { title: "Real-world communication", body: "Ordering food, asking a teacher a question and calling a relative all count as practice.", drill: "Ask one question in class this week." },
  { title: "Role-play", body: "Act out situations with a partner: interviews, shop visits, a news report.", drill: "One of you is a reporter, the other a scientist." },
  { title: "Dialogue", body: "Good speakers listen. Respond to what the other person said, not what you planned.", drill: "Repeat your partner's point before giving yours." },
  { title: "Presentation practice", body: "Turn a school topic into a two-minute talk with one slide or none.", drill: "Explain photosynthesis to a younger student." },
];

export const practicePrompts = [
  "Why should every student learn to speak in public?",
  "Describe a person who has inspired you.",
  "Should homework be optional?",
  "What would you change about your city?",
  "The most important invention of the last 100 years.",
  "A lesson I learned from failure.",
  "Why reading books still matters.",
  "Explain your favourite hobby to someone who's never tried it.",
];
