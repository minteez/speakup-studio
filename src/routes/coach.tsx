import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PageHero, Section } from "@/components/site/page-hero";

export const Route = createFileRoute("/coach")({
  head: () => ({
    meta: [
      { title: "Speech Practice Coach — SpeakUp" },
      { name: "description", content: "Practise a speech with a timer, live transcript, words-per-minute and filler-word counter — all in your browser." },
      { property: "og:title", content: "Speech Practice Coach — SpeakUp" },
      { property: "og:description", content: "Timer, pace and filler-word feedback for practice." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CoachPage,
});

const FILLERS = ["um", "uh", "like", "basically", "actually", "so", "you know", "literally"];

function CoachPage() {
  const [running, setRunning] = useState(false);
  const [secs, setSecs] = useState(0);
  const [text, setText] = useState("");
  const [supported, setSupported] = useState(true);
  const recRef = useRef<any>(null);

  useEffect(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { setSupported(false); return; }
    const r = new SR();
    r.continuous = true; r.interimResults = false; r.lang = "en-US";
    r.onresult = (e: any) => {
      let t = "";
      for (let i = e.resultIndex; i < e.results.length; i++) if (e.results[i].isFinal) t += e.results[i][0].transcript + " ";
      setText((p) => p + t);
    };
    recRef.current = r;
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const toggle = () => {
    if (running) { recRef.current?.stop(); setRunning(false); }
    else { setText(""); setSecs(0); try { recRef.current?.start(); } catch {} setRunning(true); }
  };

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const wpm = secs > 5 ? Math.round(words / (secs / 60)) : 0;
  const lower = ` ${text.toLowerCase()} `;
  const fillers = FILLERS.map((f) => [f, lower.split(` ${f} `).length - 1] as const).filter(([, n]) => n > 0);
  const mm = String(Math.floor(secs / 60)).padStart(2, "0"), ss = String(secs % 60).padStart(2, "0");

  return (
    <>
      <PageHero eyebrow="Practice Coach" title="Practise out loud, get instant feedback" subtitle="Your audio stays in your browser. Feedback is a practice aid, not an objective assessment." />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          {!supported && <p className="rounded-2xl bg-secondary/50 p-4 text-sm">Live transcript isn't supported in this browser (try Chrome or Edge). The timer still works.</p>}
          <div className="flex items-center justify-between rounded-3xl border border-border/60 bg-card p-6">
            <span className="font-mono text-5xl font-bold">{mm}:{ss}</span>
            <button onClick={toggle} className={`rounded-full px-6 py-3 font-semibold ${running ? "bg-destructive text-destructive-foreground" : "bg-primary text-primary-foreground"}`}>
              {running ? "Stop" : "Start speaking"}
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="Words" value={words} />
            <Stat label="Words / min" value={wpm} hint="120–150 is comfortable" />
            <Stat label="Filler words" value={fillers.reduce((n, [, c]) => n + c, 0)} />
          </div>
          {fillers.length > 0 && <p className="text-sm text-muted-foreground">Detected: {fillers.map(([f, n]) => `"${f}" ×${n}`).join(", ")}. Try replacing them with a silent pause.</p>}
          <div className="min-h-32 rounded-3xl border border-border/60 bg-card p-5 text-sm leading-relaxed">
            {text || <span className="text-muted-foreground">Your transcript will appear here…</span>}
          </div>
        </div>
      </Section>
    </>
  );
}

function Stat({ label, value, hint }: { label: string; value: number; hint?: string }) {
  return (
    <div className="rounded-3xl border border-border/60 bg-card p-5 text-center">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
      {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
    </div>
  );
}
