import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { ChecklistGroup } from "@/components/site/checklist-card";
import { pathway } from "@/data/extras";

export const Route = createFileRoute("/pathway")({
  head: () => ({
    meta: [
      { title: "Learning Pathway: Beginner to Competitor — SpeakUp" },
      { name: "description", content: "A four-level public speaking pathway for students, with tasks you can tick off as you grow." },
      { property: "og:title", content: "Learning Pathway — SpeakUp" },
      { property: "og:description", content: "Four levels from first introduction to inter-school competitions." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PathwayPage,
});

function PathwayPage() {
  return (
    <>
      <PageHero eyebrow="Learning Pathway" title="From first words to the competition stage" subtitle="Four levels. Tick each task when you finish it — your progress is saved on this device." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {pathway.map((l, i) => (
            <ChecklistGroup key={l.level} storageKey={`speakup-path-${i + 1}`} title={l.level} description={l.goal} items={l.items} />
          ))}
        </div>
      </Section>
    </>
  );
}
