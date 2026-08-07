export type Lesson = {
  slug: string;
  n: number;
  title: string;
  summary: string;
  points: { heading: string; body: string }[];
};

export const lessons: Lesson[] = [
  {
    slug: "what-is-public-speaking",
    n: 1,
    title: "What is Public Speaking?",
    summary: "The purpose, importance and everyday value of speaking to an audience.",
    points: [
      {
        heading: "Purpose",
        body: "Public speaking is the act of sharing an idea with a group of listeners in a clear, organised and intentional way. The goal may be to inform, persuade, inspire or entertain — but there is always a goal.",
      },
      {
        heading: "Importance",
        body: "In school it shows up in assemblies, presentations and competitions. Later it appears in interviews, meetings and teamwork. It is one of the few skills that improves almost every other opportunity you get.",
      },
      {
        heading: "Benefits",
        body: "Clearer thinking, stronger vocabulary, better listening, leadership confidence, and the ability to organise your thoughts under pressure.",
      },
      {
        heading: "Everyday applications",
        body: "Answering a question in class, explaining a project, hosting an event, introducing yourself, or simply telling a story well at the dinner table.",
      },
    ],
  },
  {
    slug: "overcoming-stage-fear",
    n: 2,
    title: "Overcoming Stage Fear",
    summary: "Nervousness is normal. Here is how to turn it into useful energy.",
    points: [
      {
        heading: "Why nervousness is normal",
        body: "Your body treats an audience like a challenge and releases adrenaline. Experienced speakers feel it too — they have simply learned to use it as focus instead of fear.",
      },
      {
        heading: "Deep breathing",
        body: "Breathe in for four counts, hold for four, out for six. Three rounds before you walk up steadies your voice and slows your heartbeat.",
      },
      {
        heading: "Visualization",
        body: "Picture the whole speech going well — walking up calmly, the first line landing, the audience listening. Your brain rehearses what you imagine.",
      },
      {
        heading: "Practice",
        body: "Fear shrinks with repetition. Rehearse your opening ten times until it is automatic; the rest of the speech follows the momentum.",
      },
      {
        heading: "Positive mindset",
        body: "Replace 'I hope I don't mess up' with 'I have something worth sharing'. Nervousness aimed outward becomes enthusiasm.",
      },
      {
        heading: "Eye contact and smile",
        body: "Find three friendly faces — left, centre, right. Smile before your first word. A smile relaxes your face muscles and warms the room.",
      },
    ],
  },
  {
    slug: "how-to-practice",
    n: 3,
    title: "How to Practice",
    summary: "The habits that quietly build a confident speaker.",
    points: [
      { heading: "Read aloud daily", body: "Ten to fifteen minutes from a story book, textbook or newspaper. This single habit builds fluency faster than anything else." },
      { heading: "Record yourself", body: "Use your phone. Recording removes guesswork about how you actually sound." },
      { heading: "Watch your recordings", body: "Note one thing to keep and one thing to fix. Never more than one fix at a time." },
      { heading: "Mirror practice", body: "Check posture, gestures and facial expression while you speak." },
      { heading: "Speak before family", body: "A small, kind audience is the safest first stage." },
      { heading: "Join school competitions", body: "Deadlines force preparation, and stage time is irreplaceable." },
      { heading: "Read newspapers and books", body: "Newspapers give current examples; books give vocabulary and imagination." },
      { heading: "Speak English daily", body: "Use it in ordinary conversation, not only on stage." },
      { heading: "Expand vocabulary", body: "Learn one useful word a day and actually use it three times." },
      { heading: "Pronunciation exercises", body: "Say difficult words slowly, syllable by syllable, then at normal speed." },
      { heading: "Tongue twisters", body: "Two minutes a day sharpens articulation and lip movement." },
      { heading: "Voice modulation drills", body: "Read one paragraph angrily, then joyfully, then sadly. Learn your range." },
    ],
  },
  {
    slug: "body-language",
    n: 4,
    title: "Body Language",
    summary: "Your body speaks before your first word does.",
    points: [
      { heading: "Hand gestures", body: "Keep hands between waist and chest. Gesture to show size, contrast or sequence — never randomly." },
      { heading: "Facial expressions", body: "Your face should match your words. A serious statistic and a happy story cannot wear the same expression." },
      { heading: "Eye contact", body: "Hold one person for a full sentence, then move. Sweeping the room constantly looks nervous." },
      { heading: "Standing posture", body: "Feet shoulder-width apart, weight even, shoulders back, chin level. Do not rock or sway." },
      { heading: "Walking on stage", body: "Walk with purpose, stop, plant your feet, then speak. Move only to mark a new idea." },
      { heading: "Smiling", body: "A genuine smile at the start buys you goodwill for the whole speech." },
      { heading: "Confidence", body: "Confident body language is mostly stillness: fewer nervous movements, longer pauses, steadier eyes." },
    ],
  },
  {
    slug: "voice-control",
    n: 5,
    title: "Voice Control",
    summary: "Eight controls that turn a flat delivery into a memorable one.",
    points: [
      { heading: "Pitch", body: "How high or low your voice sits. Vary it so you never sound like a recording." },
      { heading: "Tone", body: "The emotional colour — warm, urgent, serious, playful. Choose it deliberately per section." },
      { heading: "Pace", body: "Slow down for important ideas, speed up slightly for excitement. Around 120–150 words a minute is comfortable." },
      { heading: "Pause", body: "The most underused tool. Pause before a key line and after it. Silence makes words land." },
      { heading: "Volume", body: "Speak to the last row, not the first. Drop volume for intimacy, raise it for a call to action." },
      { heading: "Emotion", body: "Feel the line as you say it. Audiences copy the emotion you show them." },
      { heading: "Stress", body: "Stressing a different word changes the meaning of a sentence entirely. Decide which word carries it." },
      { heading: "Emphasis", body: "Combine volume, pause and pitch on one phrase so it becomes the line people remember." },
    ],
  },
  {
    slug: "speaking-with-confidence",
    n: 6,
    title: "Speaking with Confidence",
    summary: "Preparation, calmness and recovering gracefully.",
    points: [
      { heading: "Preparation", body: "Confidence is mostly preparation wearing nice clothes. Know your first and last lines by heart." },
      { heading: "Knowing your topic", body: "Learn more than you will say. Extra knowledge removes the fear of questions." },
      { heading: "Confidence vs arrogance", body: "Confidence serves the audience; arrogance serves the speaker. Stay humble and useful." },
      { heading: "Staying calm", body: "If your hands shake, hold the podium lightly. If your voice shakes, slow down and breathe." },
      { heading: "Recovering after mistakes", body: "Do not apologise repeatedly. Pause, correct yourself in one calm sentence, continue." },
      { heading: "Handling forgotten lines", body: "Repeat your last sentence in different words. The repetition sounds intentional and buys you the next idea." },
    ],
  },
];

export type SpeechStructure = {
  title: string;
  tag: string;
  steps: string[];
  note?: string;
};

export const structures: SpeechStructure[] = [
  { title: "Informative Speech", tag: "Explain clearly", steps: ["Introduction", "Information", "Examples", "Summary", "Closing"], note: "Aim for three main points — audiences remember three." },
  { title: "Persuasive Speech", tag: "Change a mind", steps: ["Hook", "Problem", "Evidence", "Solution", "Call to action"], note: "Address the strongest objection before your conclusion." },
  { title: "Inspirational Speech", tag: "Move hearts", steps: ["Story", "Challenge", "Lesson", "Hope", "Ending"], note: "One honest personal story beats ten borrowed quotes." },
  { title: "Debate Speech", tag: "Defend a side", steps: ["Opening statement", "Arguments", "Evidence", "Counterarguments", "Conclusion"], note: "Signpost clearly: 'My first argument…', 'To my opponent's point…'." },
  { title: "Extempore Speech", tag: "Think fast", steps: ["Take 30 seconds to pick one angle", "Opening line + three quick points", "Time management: 20% opening, 60% body, 20% close"], note: "A simple structure delivered calmly always beats a clever structure delivered in panic." },
  {
    title: "MUN Speech",
    tag: "Diplomatic",
    steps: ["Country policy", "Opening address", "The global issue", "Research", "Evidence", "Solutions", "Diplomatic language", "Formal closing"],
    note: "Example theme: 'How France Reduced Poverty'. Build such a speech only on verified national policy documents, UN data and published statistics — never on assumptions, invented figures or fictional claims. Delegates lose credibility instantly when evidence cannot be sourced.",
  },
  { title: "Historical Personality Speech", tag: "Example: Jawaharlal Nehru", steps: ["Biography", "Achievements", "Leadership", "Interesting facts", "Quotes", "Conclusion"], note: "Stick to well-documented facts and widely published quotations; say 'it is said that' when a story is anecdotal." },
];

export type Competition = {
  name: string;
  purpose: string;
  judging: string;
  tips: string;
};

export const competitions: Competition[] = [
  { name: "Speech", purpose: "Present a prepared topic to an audience within a time limit.", judging: "Content, delivery, language, confidence, time.", tips: "Memorise the opening and closing; rehearse with a timer." },
  { name: "Debate", purpose: "Argue for or against a motion.", judging: "Logic, evidence, rebuttal, poise.", tips: "Prepare both sides so you can predict the opposition." },
  { name: "Declamation", purpose: "Deliver a famous speech in the original speaker's spirit.", judging: "Interpretation, expression, memory, voice modulation.", tips: "Study the original delivery, then make the emotion your own." },
  { name: "Elocution", purpose: "Recite a passage with precise pronunciation and expression.", judging: "Clarity, diction, pronunciation, rhythm.", tips: "Mark pauses and stressed words on your script." },
  { name: "Anchoring", purpose: "Host an event and hold the programme together.", judging: "Fluency, energy, presence of mind, coordination.", tips: "Prepare link lines and two backup fillers for delays." },
  { name: "Assembly Hosting", purpose: "Lead the morning assembly with announcements and segments.", judging: "Clarity, discipline, timing, tone.", tips: "Write a running order and check names beforehand." },
  { name: "News Reading", purpose: "Read news bulletins in a neutral, professional tone.", judging: "Pronunciation, pace, neutrality, eye contact.", tips: "Practise reading unfamiliar names and numbers aloud." },
  { name: "Poetry Recitation", purpose: "Recite poetry with rhythm and feeling.", judging: "Expression, rhythm, memory, emotion.", tips: "Respect the line breaks; do not rush the silences." },
  { name: "MUN", purpose: "Represent a country in a simulated UN committee.", judging: "Research, diplomacy, policy accuracy, negotiation.", tips: "Read your country's actual position papers and UN voting record." },
  { name: "Presentation", purpose: "Explain a project or topic, often with slides.", judging: "Structure, visuals, clarity, Q&A handling.", tips: "Slides support you — never read them out." },
];

export const commonMistakes: { title: string; fix: string }[] = [
  { title: "Reading slides word for word", fix: "Put keywords on slides and explain them in your own words." },
  { title: "Speaking too fast", fix: "Mark three pause points in your script and honour them." },
  { title: "Monotone voice", fix: "Vary pitch and volume on at least one word per sentence." },
  { title: "Lack of eye contact", fix: "One person, one sentence, then move to another face." },
  { title: "Poor posture", fix: "Feet planted, shoulders open, hands free above the waist." },
  { title: "Using filler words", fix: "Replace 'um' with a silent pause — it sounds more confident." },
  { title: "Lack of preparation", fix: "Rehearse aloud at least five full times, standing up." },
  { title: "Ignoring the audience", fix: "Ask a question, reference the room, react to their reactions." },
  { title: "Poor timing", fix: "Always rehearse with a timer and build in a 10% buffer." },
  { title: "Weak conclusion", fix: "End on a prepared final line, not on 'that's all, thank you'." },
];

export const quotes: string[] = [
  "The best way to become confident is to keep speaking.",
  "Every expert speaker was once a nervous beginner.",
  "Confidence grows one speech at a time.",
  "Your voice has the power to change someone's perspective.",
  "Practice gives courage a microphone.",
  "Talent may get noticed, but consistent practice is what creates it.",
  "Every confident speaker was once someone who was afraid to speak.",
  "Read more today so you have more to say tomorrow.",
  "A pause is not silence — it is emphasis.",
  "Prepare so well that nervousness has nothing to hold on to.",
];

export const lessonsLearned: { title: string; body: string }[] = [
  { title: "Confidence comes through consistent practice", body: "Not from one lucky day on stage, but from hundreds of ordinary days of reading aloud." },
  { title: "Mistakes are opportunities to improve", body: "Every forgotten line taught me a recovery technique I still use." },
  { title: "Reading expands vocabulary and imagination", body: "Books gave me both the words and the pictures to describe them." },
  { title: "Winning is rewarding, learning is more valuable", body: "I have not won yet, and I have still improved every single time." },
  { title: "Every speech is a chance to become better", body: "Treat each one as a rehearsal for the next." },
  { title: "Teachers can change a student's life", body: "One teacher noticing my pronunciation changed the direction of my school years." },
  { title: "Preparation is more important than talent", body: "The best prepared speaker in the room usually sounds like the most talented one." },
  { title: "Speaking builds leadership and critical thinking", body: "You cannot explain an idea clearly until you have genuinely understood it." },
];

export const journey: { year: string; title: string; body: string }[] = [
  { year: "2021", title: "Reading aloud became a habit", body: "I started reading story books, school textbooks, encyclopedias and general knowledge books out loud — every day, without an audience." },
  { year: "Practice", title: "Pronunciation, fluency, rhythm", body: "Reading aloud slowly improved my pronunciation, vocabulary, fluency and speaking rhythm. My accent was never natural — it was built." },
  { year: "The moment", title: "A teacher noticed", body: "One of my school teachers noticed my clear pronunciation and accent, and encouraged me to try public speaking." },
  { year: "First stages", title: "Speeches, assemblies, anchoring", body: "I began participating in school speeches, morning assemblies and anchoring events." },
  { year: "Recognition", title: "Known as a speaker in school", body: "Over time teachers and students began recognising me as a capable speaker and anchor." },
  { year: "Competitions", title: "Inter-school events", body: "I represented my school in institutional competitions and inter-school CBSE events in Riyadh, including Hindi speech competitions." },
  { year: "Today", title: "Still learning", body: "I have not won yet — but every competition has been a lesson. Now I want to help other beginners start their own journey." },
];

export const acknowledgements: string[] = [
  "My teachers, for recognising my potential and pushing me towards the stage.",
  "My school, for the speeches, assemblies and competitions that gave me practice.",
  "My parents, for encouraging continuous learning at home.",
  "Every student who visits SpeakUp with the desire to improve.",
];
