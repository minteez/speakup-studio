import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { practicePrompts } from "@/data/phase3";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/practice-mode")({
  head: () => ({ meta: pageMeta("Speech Practice Mode — SpeakUp", "A focused practice space with a prompt, countdown timer, notes and a reflection saved to your practice history.") }),
  component: PracticeMode,
});

const HISTORY_KEY = "speakup-practice-history";
const QUESTIONS = ["What went well?", "What could improve?", "Did I stay within the time?", "Was my conclusion strong?", "What will I change next time?"];
type Entry = { date: string; prompt: string; target: number; used: number; answers: string[] };
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.abs(s) % 60).padStart(2, "0")}`;

function PracticeMode() {
  const [prompt, setPrompt] = useState<string>(practicePrompts[0]!);
  const [target, setTarget] = useState(120);
  const [notes, setNotes] = useState("");
  const [phase, setPhase] = useState<"setup" | "countdown" | "speaking" | "review">("setup");
  const [count, setCount] = useState(3);
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);
  const [answers, setAnswers] = useState<string[]>(QUESTIONS.map(() => ""));
  const [history, setHistory] = useState<Entry[]>([]);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try { setHistory(JSON.parse(localStorage.getItem(HISTORY_KEY) ?? "[]")); } catch { setHistory([]); }
  }, []);

  useEffect(() => {
    if (phase === "countdown") {
      if (count === 0) { setPhase("speaking"); return; }
      const t = setTimeout(() => setCount((c) => c - 1), 1000);
      return () => clearTimeout(t);
    }
    if (phase === "speaking" && !paused) {
      const t = setInterval(() => setElapsed((e) => e + 1), 1000);
      return () => clearInterval(t);
    }
    return undefined;
  }, [phase, count, paused]);

  const start = () => {
    setElapsed(0); setCount(3); setPaused(false); setPhase("countdown");
    box.current?.requestFullscreen?.().catch(() => {});
  };
  const finish = () => {
    setPhase("review");
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  };
  const save = () => {
    const next = [{ date: new Date().toLocaleString(), prompt, target, used: elapsed, answers }, ...history].slice(0, 30);
    setHistory(next);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
    setAnswers(QUESTIONS.map(() => ""));
    setNotes("");
    setPhase("setup");
  };
  const remaining = target - elapsed;

  return (
    <>
      <PageHero eyebrow="Practice Mode" title="Stand up and speak" subtitle="Pick a prompt, set your time, and practise in full screen. Reflect afterwards — it's saved on this device." />
      <Section>
        <div ref={box} className="rounded-3xl border border-border/60 bg-card p-6 [&:fullscreen]:flex [&:fullscreen]:flex-col [&:fullscreen]:justify-center [&:fullscreen]:bg-background [&:fullscreen]:p-12">
          {phase === "setup" ? (
            <div className="grid gap-4">
              <label className="text-sm font-medium">Prompt
                <div className="mt-2 flex gap-2">
                  <input value={prompt} onChange={(e) => setPrompt(e.target.value)} className="flex-1 rounded-xl border border-input bg-background px-3 py-2 text-sm" />
                  <button onClick={() => setPrompt(practicePrompts[Math.floor(Math.random() * practicePrompts.length)]!)} className="rounded-xl border border-border px-3 text-sm">Random</button>
                </div>
              </label>
              <label className="text-sm font-medium">Time limit
                <select value={target} onChange={(e) => setTarget(Number(e.target.value))} className="mt-2 block rounded-xl border border-input bg-background px-3 py-2 text-sm">
                  {[60, 120, 180, 300, 420].map((s) => <option key={s} value={s}>{s / 60} min</option>)}
                </select>
              </label>
              <label className="text-sm font-medium">Key words / ideas
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} className="mt-2 w-full rounded-xl border border-input bg-background p-3 text-sm" placeholder="hook, point 1, point 2, closing line" />
              </label>
              <button onClick={start} className="justify-self-start rounded-xl gradient-hero px-6 py-3 font-semibold text-primary-foreground">Start practice</button>
            </div>
          ) : null}

          {phase === "countdown" ? <p className="py-16 text-center text-8xl font-bold text-gradient">{count || "Go!"}</p> : null}

          {phase === "speaking" ? (
            <div className="text-center">
              <p className="text-lg text-muted-foreground">{prompt}</p>
              <p className={`my-6 text-7xl font-bold tabular-nums ${remaining < 0 ? "text-destructive" : remaining <= 15 ? "text-highlight" : "text-gradient"}`}>{remaining < 0 ? `+${fmt(-remaining)}` : fmt(remaining)}</p>
              {notes ? <p className="mx-auto max-w-xl whitespace-pre-wrap rounded-2xl bg-secondary p-4 text-left text-sm">{notes}</p> : null}
              <div className="mt-6 flex justify-center gap-3">
                <button onClick={() => setPaused((p) => !p)} className="rounded-xl border border-border px-5 py-2.5 text-sm font-semibold">{paused ? "Resume" : "Pause"}</button>
                <button onClick={finish} className="rounded-xl gradient-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground">Finish</button>
              </div>
            </div>
          ) : null}

          {phase === "review" ? (
            <div className="grid gap-4">
              <p className="text-sm">You spoke for <strong>{fmt(elapsed)}</strong> of a {fmt(target)} target{elapsed <= target ? " — within time." : " — a little over time."}</p>
              {QUESTIONS.map((q, i) => (
                <label key={q} className="text-sm font-medium">{q}
                  <textarea rows={2} value={answers[i]} onChange={(e) => setAnswers((a) => a.map((v, j) => (j === i ? e.target.value : v)))} className="mt-1 w-full rounded-xl border border-input bg-background p-3 text-sm" />
                </label>
              ))}
              <button onClick={save} className="justify-self-start rounded-xl gradient-hero px-6 py-3 font-semibold text-primary-foreground">Save reflection</button>
            </div>
          ) : null}
        </div>

        <h2 className="mt-12 text-xl font-semibold">Practice history</h2>
        {history.length === 0 ? <p className="mt-2 text-sm text-muted-foreground">No sessions saved yet.</p> : (
          <ul className="mt-4 grid gap-3">
            {history.map((h, i) => (
              <li key={i} className="rounded-2xl border border-border/60 bg-card p-4 text-sm">
                <div className="flex flex-wrap justify-between gap-2"><span className="font-medium">{h.prompt}</span><span className="text-muted-foreground">{h.date} · {fmt(h.used)} / {fmt(h.target)}</span></div>
                {h.answers[1] ? <p className="mt-1 text-muted-foreground">To improve: {h.answers[1]}</p> : null}
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
