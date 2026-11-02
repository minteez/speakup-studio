import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { rhetoric } from "@/data/phase3";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/rhetoric")({
  head: () => ({ meta: pageMeta("Rhetoric Lab — Ethos, Pathos, Logos & More — SpeakUp", "Twelve rhetorical devices explained simply, each with an original example you can use in your own speeches.") }),
  component: RhetoricPage,
});

function RhetoricPage() {
  return (
    <>
      <PageHero eyebrow="Rhetoric Lab" title="The tools behind great speeches" subtitle="Every example here was written for SpeakUp — try saying each one out loud." />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rhetoric.map((r, i) => (
            <Reveal key={r.name} delay={i * 40}>
              <article className="h-full rounded-3xl border border-border/60 bg-card p-6 card-lift">
                <h2 className="text-lg font-semibold text-gradient">{r.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{r.meaning}</p>
                <blockquote className="mt-4 border-l-4 border-highlight pl-3 text-sm italic">"{r.example}"</blockquote>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
