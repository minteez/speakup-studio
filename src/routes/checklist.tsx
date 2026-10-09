import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { ChecklistGroup } from "@/components/site/checklist-card";
import { competitionChecklist } from "@/data/extras";

export const Route = createFileRoute("/checklist")({
  head: () => ({
    meta: [
      { title: "Competition Preparation Checklist — SpeakUp" },
      { name: "description", content: "A step-by-step checklist for speech, debate and MUN competitions, from two weeks before to the big day." },
      { property: "og:title", content: "Competition Preparation Checklist — SpeakUp" },
      { property: "og:description", content: "Prepare for any speaking competition with a saved checklist." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ChecklistPage,
});

function ChecklistPage() {
  return (
    <>
      <PageHero eyebrow="Competition Prep" title="Your competition checklist" subtitle="Follow it step by step so nothing is forgotten on the day." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {competitionChecklist.map((g, i) => (
            <ChecklistGroup key={g.title} storageKey={`speakup-comp-${i + 1}`} title={g.title} items={g.items} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <button onClick={() => window.print()} className="rounded-xl gradient-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            Print checklist
          </button>
        </div>
      </Section>
    </>
  );
}
