import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { commLessons } from "@/data/phase3";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/communication")({
  head: () => ({ meta: pageMeta("Everyday Communication Skills — SpeakUp", "Conversation, pronunciation, fluency, role-play and dialogue lessons for student speakers, each with a quick drill.") }),
  component: CommunicationPage,
});

function CommunicationPage() {
  return (
    <>
      <PageHero eyebrow="Communication Skills" title="Speaking well, every day" subtitle="Public speaking starts with everyday conversations. Try one drill a day." />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {commLessons.map((l, i) => (
            <Reveal key={l.title} delay={i * 40}>
              <article className="h-full rounded-3xl border border-border/60 bg-card p-6 card-lift">
                <h2 className="text-lg font-semibold">{l.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{l.body}</p>
                <p className="mt-4 rounded-xl bg-secondary p-3 text-sm"><span className="font-semibold text-highlight">Drill: </span>{l.drill}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
