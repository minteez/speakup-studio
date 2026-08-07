import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { resources } from "@/data/library";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Public Speaking Resources — SpeakUp" },
      { name: "description", content: "Categories of resources for speakers: great speeches to watch, TED-style talks, debate examples, MUN documents, voice exercises and vocabulary books." },
      { property: "og:title", content: "Public Speaking Resources — SpeakUp" },
      { property: "og:description", content: "Where to look next as you practise." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Where to look next" subtitle="Categories rather than copied content — search these out and build your own library." />
      <Section>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 40}>
              <section className="h-full rounded-3xl border border-border/60 bg-card p-6 card-lift">
                <h2 className="text-lg font-semibold">{r.title}</h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {r.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-highlight" />
                      {it}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
