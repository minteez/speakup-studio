import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { speakers } from "@/data/library";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Famous Speakers and What They Teach Us — SpeakUp" },
      { name: "description", content: "Profiles of eight effective communicators: early life, speaking journey, challenges, style and lessons students can learn." },
      { property: "og:title", content: "Famous Speakers and What They Teach Us — SpeakUp" },
      { property: "og:description", content: "How great communicators built their speaking skills." },
      { property: "og:url", content: "/speakers" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/speakers" }],
  }),
  component: SpeakersPage,
});

function SpeakersPage() {
  return (
    <>
      <PageHero eyebrow="Famous Speakers" title="Learn from speakers who moved audiences" subtitle="Short, factual profiles — what they are known for, and what a student can borrow from each." />
      <Section>
        <ul className="grid gap-5 md:grid-cols-2">
          {speakers.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 40}>
              <article className="h-full rounded-3xl border border-border/60 bg-card p-6 card-lift">
                <h2 className="text-xl font-semibold">{s.name}</h2>
                <p className="mt-1 text-sm text-highlight">{s.known}</p>
                <dl className="mt-4 space-y-3 text-sm">
                  {([["Early life", s.early], ["Speaking journey", s.journey], ["Biggest challenges", s.challenges], ["Speaking style", s.style]] as const).map(([k, v]) => (
                    <div key={k}>
                      <dt className="font-semibold">{k}</dt>
                      <dd className="text-muted-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 rounded-2xl bg-secondary/50 p-3 text-sm">
                  <span className="font-semibold">Lesson for students: </span>
                  <span className="text-muted-foreground">{s.lesson}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
