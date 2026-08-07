import { createFileRoute } from "@tanstack/react-router";
import { Award, RotateCcw } from "lucide-react";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { challenge30, dailyPlan } from "@/data/library";
import { useLocalChecklist } from "@/hooks/use-site-state";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Daily Practice Plan & 30-Day Challenge — SpeakUp" },
      {
        name: "description",
        content:
          "A 7-day public speaking routine and a 30-day challenge with a progress tracker, badges and a printable certificate — all saved in your browser.",
      },
      { property: "og:title", content: "Daily Practice Plan & 30-Day Challenge — SpeakUp" },
      { property: "og:description", content: "Track your speaking practice with a free 7-day and 30-day plan." },
      { property: "og:url", content: "/practice" },
    ],
    links: [{ rel: "canonical", href: "/practice" }],
  }),
  component: PracticePage,
});

function PracticePage() {
  const week = useLocalChecklist("speakup-week");
  const month = useLocalChecklist("speakup-30day");
  const pct = Math.round((month.done.length / challenge30.length) * 100);

  const badges = [
    { at: 1, name: "First Step" },
    { at: 7, name: "One Week Strong" },
    { at: 15, name: "Halfway Speaker" },
    { at: 25, name: "Stage Ready" },
    { at: 30, name: "Challenge Champion" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Practice"
        title="Practice plans that actually fit a school week"
        subtitle="Start with seven days. When it feels natural, take on the thirty-day challenge. Your progress is stored on this device only."
      />

      <Section title="7-day routine">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dailyPlan.map((d, i) => (
            <Reveal as="li" key={d.day} delay={i * 50}>
              <label className="flex h-full cursor-pointer gap-3 rounded-2xl border border-border/60 bg-card p-5 card-lift">
                <Checkbox
                  checked={week.has(`d${d.day}`)}
                  onCheckedChange={() => week.toggle(`d${d.day}`)}
                  aria-label={`Mark day ${d.day} complete`}
                  className="mt-1"
                />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-highlight">
                    Day {d.day}
                  </span>
                  <span className="mt-1 block font-semibold">{d.title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{d.body}</span>
                </span>
              </label>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section title="30-day public speaking challenge" description="One small mission a day. Tick them off as you go.">
        <Reveal className="rounded-3xl border border-border/60 bg-card p-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <div className="min-w-0">
              <p className="font-semibold">
                {month.done.length} of {challenge30.length} missions complete
              </p>
              <Progress value={pct} className="mt-3" />
            </div>
            <Button variant="outline" size="sm" className="shrink-0" onClick={month.reset}>
              <RotateCcw className="size-4" /> Reset
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <li
                key={b.name}
                className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${
                  month.done.length >= b.at
                    ? "gradient-hero border-transparent text-primary-foreground"
                    : "border-border text-muted-foreground"
                }`}
              >
                <Award className="size-3.5" /> {b.name}
              </li>
            ))}
          </ul>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {challenge30.map((m, i) => (
              <li key={m}>
                <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-secondary/50 p-3 text-sm">
                  <Checkbox
                    checked={month.has(`m${i}`)}
                    onCheckedChange={() => month.toggle(`m${i}`)}
                    aria-label={`Mark day ${i + 1} mission complete`}
                    className="mt-0.5"
                  />
                  <span>
                    <span className="font-semibold">Day {i + 1}. </span>
                    <span className="text-muted-foreground">{m}</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>

          {month.done.length === challenge30.length ? (
            <div className="mt-8 rounded-3xl gradient-hero p-8 text-center text-primary-foreground">
              <h3 className="font-display text-2xl font-bold">Certificate of Completion</h3>
              <p className="mt-2 opacity-90">
                You completed the SpeakUp 30-Day Public Speaking Challenge. Just for fun — and well earned.
              </p>
              <Button variant="secondary" className="no-print mt-4" onClick={() => window.print()}>
                Print certificate
              </Button>
            </div>
          ) : null}
        </Reveal>
      </Section>
    </>
  );
}
