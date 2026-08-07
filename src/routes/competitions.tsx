import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { competitions } from "@/data/content";

export const Route = createFileRoute("/competitions")({
  head: () => ({
    meta: [
      { title: "School Speaking Competitions Explained — SpeakUp" },
      {
        name: "description",
        content:
          "Speech, debate, declamation, elocution, anchoring, assembly hosting, news reading, poetry, MUN and presentations — purpose, judging criteria and preparation tips.",
      },
      { property: "og:title", content: "School Speaking Competitions Explained — SpeakUp" },
      { property: "og:description", content: "Ten competition formats with judging criteria and preparation tips." },
      { property: "og:url", content: "/competitions" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/competitions" }],
  }),
  component: CompetitionsPage,
});

function CompetitionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Competitions"
        title="Types of school speaking competitions"
        subtitle="Know what each format asks for before you prepare — most students lose marks on the rubric, not the words."
      />
      <Section>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {competitions.map((c, i) => (
            <Reveal as="li" key={c.name} delay={i * 40}>
              <article className="h-full rounded-3xl border border-border/60 bg-card p-6 card-lift">
                <h2 className="text-lg font-semibold">{c.name}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{c.purpose}</p>
                <p className="mt-3 text-sm">
                  <span className="font-semibold">Judged on: </span>
                  <span className="text-muted-foreground">{c.judging}</span>
                </p>
                <p className="mt-2 rounded-2xl bg-secondary/50 p-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Tip: </span>
                  {c.tips}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
