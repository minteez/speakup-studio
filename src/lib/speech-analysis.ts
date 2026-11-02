const TRANSITIONS = ["first", "second", "third", "finally", "however", "therefore", "moreover", "in addition", "for example", "in conclusion", "to conclude", "next", "on the other hand", "because", "as a result", "furthermore", "similarly", "in summary"];
const INTRO_CUES = ["good morning", "good afternoon", "good evening", "today i", "i am here", "my name is", "respected", "dear", "imagine", "have you ever"];
const CONCL_CUES = ["in conclusion", "to conclude", "finally", "thank you", "to sum up", "in summary", "let us", "together we"];

export type Analysis = {
  words: number;
  minutes: number;
  sections: number;
  sentences: number;
  longSentences: string[];
  repeated: { phrase: string; count: number }[];
  transitions: number;
  hasIntro: boolean;
  hasConclusion: boolean;
  argumentCues: number;
};

export function analyzeSpeech(text: string, wpm = 140): Analysis {
  const clean = text.trim();
  const wordsArr = clean.toLowerCase().match(/[a-z']+/g) ?? [];
  const words = wordsArr.length;
  const paras = clean.split(/\n\s*\n/).filter((p) => p.trim());
  const sentencesArr = clean.split(/(?<=[.!?])\s+/).filter((s) => s.trim());
  const longSentences = sentencesArr.filter((s) => s.split(/\s+/).length > 30);
  const counts = new Map<string, number>();
  for (let i = 0; i + 2 < wordsArr.length; i++) {
    const p = wordsArr.slice(i, i + 3).join(" ");
    counts.set(p, (counts.get(p) ?? 0) + 1);
  }
  const repeated = [...counts].filter(([, c]) => c >= 3).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([phrase, count]) => ({ phrase, count }));
  const lower = clean.toLowerCase();
  const countCues = (list: string[]) => list.reduce((n, t) => n + (lower.match(new RegExp(`\\b${t}\\b`, "g"))?.length ?? 0), 0);
  const head = lower.slice(0, Math.max(200, Math.floor(lower.length * 0.15)));
  const tail = lower.slice(-Math.max(200, Math.floor(lower.length * 0.15)));
  return {
    words,
    minutes: Math.round((words / wpm) * 10) / 10,
    sections: paras.length,
    sentences: sentencesArr.length,
    longSentences,
    repeated,
    transitions: countCues(TRANSITIONS),
    hasIntro: INTRO_CUES.some((c) => head.includes(c)) || /\?/.test(head),
    hasConclusion: CONCL_CUES.some((c) => tail.includes(c)),
    argumentCues: countCues(["because", "therefore", "for example", "evidence", "research", "according to", "this shows"]),
  };
}
