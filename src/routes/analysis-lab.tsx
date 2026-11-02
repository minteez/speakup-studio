import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHero, Section } from "@/components/site/page-hero";
import { analysisSpeeches, listenFor } from "@/data/phase3";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/analysis-lab")({
  head: () => ({ meta: pageMeta("Speaker Analysis Lab — SpeakUp", "Pick a famous speech, learn what to listen for, and write your own analysis of the techniques used.") }),
  component: AnalysisLab,
});

const QS = ["What made this speech memorable?", "What techniques did you notice?", "What would you borrow for your own speaking?"];

function AnalysisLab() {
  const [id, setId] = useState(analysisSpeeches[0]!.id);
  const [answers, setAnswers] = useState<string[]>(["", "", ""]);
  const [saved, setSaved] = useState(false);
  const s = analysisSpeeches.find((x) => x.id === id)!;
  const key = `speakup-analysis-${id}`;

  useEffect(() => {
    try { setAnswers(JSON.parse(localStorage.getItem(key) ?? '["","",""]')); } catch { setAnswers(["", "", ""]); }
    setSaved(false);
  }, [key]);

  return (
    <>
      <PageHero eyebrow="Analysis Lab" title="Study speakers, don't just admire them" subtitle="Watch or read a famous speech from an official source, then break down how it works." />
      <Section>
        <div className="flex flex-wrap gap-2">
          {analysisSpeeches.map((x) => (
            <button key={x.id} onClick={() => setId(x.id)} className={`rounded-full px-4 py-2 text-sm font-medium ${x.id === id ? "gradient-hero text-primary-foreground" : "bg-secondary"}`}>{x.title.split(" — ")[1] ?? x.title}</button>
          ))}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-border/60 bg-card p-6">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.context}</p>
            <h3 className="mt-5 text-sm font-semibold">Look out for</h3>
            <ul className="mt-2 list-disc pl-5 text-sm">{s.listen.map((l) => <li key={l}>{l}</li>)}</ul>
            <h3 className="mt-5 text-sm font-semibold">General checklist</h3>
            <div className="mt-2 flex flex-wrap gap-2">{listenFor.map((l) => <span key={l} className="rounded-full bg-secondary px-3 py-1 text-xs">{l}</span>)}</div>
            <a href={s.source} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline">Find it on the official site <ExternalLink className="size-3.5" /></a>
          </article>
          <div className="rounded-3xl border border-border/60 bg-card p-6">
            <h2 className="text-xl font-semibold">Your analysis</h2>
            {QS.map((q, i) => (
              <label key={q} className="mt-4 block text-sm font-medium">{q}
                <textarea rows={3} value={answers[i] ?? ""} onChange={(e) => { setSaved(false); setAnswers((a) => a.map((v, j) => (j === i ? e.target.value : v))); }} className="mt-1 w-full rounded-xl border border-input bg-background p-3 text-sm" />
              </label>
            ))}
            <button onClick={() => { localStorage.setItem(key, JSON.stringify(answers)); setSaved(true); }} className="mt-4 rounded-xl gradient-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground">{saved ? "Saved ✓" : "Save my analysis"}</button>
          </div>
        </div>
      </Section>
    </>
  );
}
