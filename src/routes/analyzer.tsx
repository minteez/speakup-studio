import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { PageHero, Section } from "@/components/site/page-hero";
import { analyzeSpeech } from "@/lib/speech-analysis";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/analyzer")({
  head: () => ({ meta: pageMeta("Speech Analyzer — Check Your Speech Structure — SpeakUp", "Paste your speech to see word count, speaking time, sections, long sentences, repeated phrases and transitions.") }),
  component: AnalyzerPage,
});

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-4 text-center">
      <p className="text-2xl font-bold text-gradient">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Flag({ ok, label, hint }: { ok: boolean; label: string; hint: string }) {
  return (
    <li className="flex gap-3 rounded-2xl border border-border/60 bg-card p-3 text-sm">
      <span className={`grid size-6 shrink-0 place-items-center rounded-full ${ok ? "gradient-hero text-primary-foreground" : "bg-destructive/15 text-destructive"}`}>
        {ok ? <Check className="size-4" /> : <X className="size-4" />}
      </span>
      <span><span className="font-medium">{label}</span><span className="block text-muted-foreground">{hint}</span></span>
    </li>
  );
}

function AnalyzerPage() {
  const [text, setText] = useState("");
  const a = useMemo(() => analyzeSpeech(text), [text]);
  const has = text.trim().length > 0;
  return (
    <>
      <PageHero eyebrow="Speech Analysis" title="Check your speech's structure" subtitle="Paste your speech below. SpeakUp checks structure only — it can't judge your confidence or personality from text." />
      <Section>
        <label htmlFor="speech" className="text-sm font-medium">Your speech (leave a blank line between sections)</label>
        <textarea id="speech" value={text} onChange={(e) => setText(e.target.value)} rows={12} className="mt-2 w-full rounded-2xl border border-input bg-background p-4 text-sm" placeholder="Good morning everyone…" />
        {has ? (
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat label="words" value={a.words} />
              <Stat label="minutes (at 140 wpm)" value={a.minutes} />
              <Stat label="sections" value={a.sections} />
              <Stat label="transitions" value={a.transitions} />
            </div>
            <ul className="grid gap-3 md:grid-cols-2">
              <Flag ok={a.hasIntro} label="Introduction" hint={a.hasIntro ? "Your opening has a greeting, hook or question." : "Try opening with a greeting, question or short story."} />
              <Flag ok={a.hasConclusion} label="Conclusion" hint={a.hasConclusion ? "Your ending signals a close." : "Add a clear closing line, e.g. 'In conclusion…' or a call to action."} />
              <Flag ok={a.sections >= 3} label="Sections" hint={a.sections >= 3 ? "You have an intro, body and close." : "Split your speech into at least three paragraphs."} />
              <Flag ok={a.transitions >= Math.max(2, a.sections - 1)} label="Transitions" hint="Words like 'first', 'however' and 'finally' guide listeners." />
              <Flag ok={a.argumentCues >= 2} label="Argument structure" hint="Reasons and evidence ('because', 'for example', 'according to') make points stronger." />
              <Flag ok={a.longSentences.length === 0} label="Sentence length" hint={a.longSentences.length ? `${a.longSentences.length} sentence(s) over 30 words — split them for easier delivery.` : "Your sentences are easy to say aloud."} />
            </ul>
            {a.repeated.length ? (
              <div className="rounded-2xl border border-border/60 bg-card p-4 text-sm">
                <p className="font-medium">Repeated phrases</p>
                <p className="text-muted-foreground">Repetition can be powerful if it's on purpose. Check these:</p>
                <ul className="mt-2 flex flex-wrap gap-2">{a.repeated.map((r) => <li key={r.phrase} className="rounded-full bg-secondary px-3 py-1">"{r.phrase}" × {r.count}</li>)}</ul>
              </div>
            ) : null}
          </div>
        ) : null}
      </Section>
    </>
  );
}
