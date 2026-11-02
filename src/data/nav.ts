export type NavItem = { to: string; label: string; blurb: string };

export const navItems: NavItem[] = [
  { to: "/", label: "Home", blurb: "SpeakUp — a free guide to public speaking for students" },
  { to: "/journey", label: "My Journey", blurb: "The story behind SpeakUp, school, teachers and competitions" },
  { to: "/guide", label: "Beginner's Guide", blurb: "Six lessons: stage fear, practice, body language, voice, confidence" },
  { to: "/speech-writing", label: "Speech Writing", blurb: "Introduction, body, conclusion and seven speech structures including MUN" },
  { to: "/competitions", label: "Competitions", blurb: "Speech, debate, declamation, elocution, anchoring, MUN and more" },
  { to: "/dashboard", label: "My Dashboard", blurb: "All your saved progress in one place" },
  { to: "/pathway", label: "Learning Pathway", blurb: "Four levels from starter to competitor" },
  { to: "/skills", label: "Skill Studio", blurb: "Voice, body language and storytelling exercises" },
  { to: "/checklist", label: "Competition Checklist", blurb: "Prepare step by step for any competition" },
  { to: "/mun-builder", label: "MUN Builder", blurb: "Build a Model United Nations opening speech" },
  { to: "/builder", label: "Speech Builder", blurb: "Generate a speech outline from topic, audience, time, tone and purpose" },
  { to: "/coach", label: "Practice Coach", blurb: "Timer, live transcript, pace and filler-word counter" },
  { to: "/mentor", label: "My Mentor", blurb: "Mr. Jabir Thayyil — the teacher who started my journey" },
  { to: "/practice", label: "Practice Plans", blurb: "7-day routine and the 30-day public speaking challenge" },
  { to: "/vocabulary", label: "Vocabulary", blurb: "Word of the day, meanings, synonyms and pronunciation" },
  { to: "/speakers", label: "Famous Speakers", blurb: "How great communicators built their speaking skills" },
  { to: "/tips", label: "Speaking Tips", blurb: "Over 100 practical tips across 15 categories" },
  { to: "/mistakes", label: "Common Mistakes", blurb: "Ten mistakes beginners make and how to fix them" },
  { to: "/quotes", label: "Quote Library", blurb: "Motivational quotes about speaking and confidence" },
  { to: "/resources", label: "Resources", blurb: "Speeches to watch, voice exercises, MUN and vocabulary resources" },
  { to: "/faq", label: "FAQ", blurb: "Around 30 common questions from beginner speakers" },
  { to: "/learn", label: "Learn (7 Levels)", blurb: "Curriculum from foundations to advanced communication" },
  { to: "/practice-mode", label: "Practice Mode", blurb: "Full-screen practice with timer, reflection and history" },
  { to: "/analyzer", label: "Speech Analyzer", blurb: "Paste your speech to check structure, length and transitions" },
  { to: "/analysis-lab", label: "Analysis Lab", blurb: "Analyse famous speeches and techniques" },
  { to: "/rhetoric", label: "Rhetoric Lab", blurb: "Ethos, pathos, logos, anaphora, rule of three and more" },
  { to: "/challenges", label: "Challenges", blurb: "7, 14 and 30-day speaking challenges" },
  { to: "/communication", label: "Communication Skills", blurb: "Conversation, pronunciation, fluency and role-play" },
  { to: "/learn-more", label: "Learn More", blurb: "Courses, speech organizations and video learning" },
  { to: "/about", label: "About", blurb: "What SpeakUp is, why it was built, TPM Group and credits" },
  { to: "/acknowledgements", label: "Acknowledgements", blurb: "Thanks to teachers, school, parents and students" },
];

export const primaryNav = navItems.filter((i) =>
  ["/", "/journey", "/guide", "/speech-writing", "/pathway", "/builder", "/dashboard"].includes(i.to),
);
