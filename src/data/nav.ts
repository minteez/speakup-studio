export type NavItem = { to: string; label: string; blurb: string };

export const navItems: NavItem[] = [
  { to: "/", label: "Home", blurb: "SpeakUp — a free guide to public speaking for students" },
  { to: "/journey", label: "My Journey", blurb: "The story behind SpeakUp, school, teachers and competitions" },
  { to: "/guide", label: "Beginner's Guide", blurb: "Six lessons: stage fear, practice, body language, voice, confidence" },
  { to: "/speech-writing", label: "Speech Writing", blurb: "Introduction, body, conclusion and seven speech structures including MUN" },
  { to: "/competitions", label: "Competitions", blurb: "Speech, debate, declamation, elocution, anchoring, MUN and more" },
  { to: "/builder", label: "Speech Builder", blurb: "Generate a speech outline from topic, audience, time, tone and purpose" },
  { to: "/practice", label: "Practice Plans", blurb: "7-day routine and the 30-day public speaking challenge" },
  { to: "/vocabulary", label: "Vocabulary", blurb: "Word of the day, meanings, synonyms and pronunciation" },
  { to: "/speakers", label: "Famous Speakers", blurb: "How great communicators built their speaking skills" },
  { to: "/tips", label: "Speaking Tips", blurb: "Over 100 practical tips across 15 categories" },
  { to: "/mistakes", label: "Common Mistakes", blurb: "Ten mistakes beginners make and how to fix them" },
  { to: "/quotes", label: "Quote Library", blurb: "Motivational quotes about speaking and confidence" },
  { to: "/resources", label: "Resources", blurb: "Speeches to watch, voice exercises, MUN and vocabulary resources" },
  { to: "/faq", label: "FAQ", blurb: "Around 30 common questions from beginner speakers" },
  { to: "/acknowledgements", label: "Acknowledgements", blurb: "Thanks to teachers, school, parents and students" },
];

export const primaryNav = navItems.filter((i) =>
  ["/", "/journey", "/guide", "/speech-writing", "/builder", "/tips"].includes(i.to),
);
