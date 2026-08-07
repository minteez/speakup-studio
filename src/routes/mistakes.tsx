import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { commonMistakes } from "@/data/content";

export const Route = createFileRoute("/mistakes")({
  head: () => ({
    meta: [
      { title: "10 Common Public Speaking Mistakes — SpeakUp" },
      { name: "description", content: "The most common mistakes beginner speakers make — reading slides, speaking too fast, monotone delivery — and how to fix each one." },
      { property: "og:title", content: "10 Common Public Speaking Mistakes — SpeakUp" },
      { property: "og:description", content: "Spot the mistake, apply the fix." },
      { property: "og:url", content: "/mistakes" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/mistakes" }],
  }),
  component: MistakesPage,
});

function MistakesPage() {
  return (
    <>
      <PageHero eyebrow="Common Mistakes" title="Fix these before your next speech" subtitle="Most beginner mistakes have a one-line fix. Pick one per week." />
      <Section>
        <ul className="grid gap-4 sm:grid-cols-2">
          {commonMistakes.map((m, i) => (
            <Reveal as="li" key={m.title} delay={i * 40}>
              <div className="h-full rounded-2xl border border-border/60 bg-card p-5 card-lift">
                <h2 className="font-semibold">{m.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-highlight">Fix: </span>
                  {m.fix}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
