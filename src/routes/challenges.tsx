import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { ChecklistGroup } from "@/components/site/checklist-card";
import { challengeSets } from "@/data/phase3";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/challenges")({
  head: () => ({ meta: pageMeta("Speaking Challenges — 7, 14 and 30 Days — SpeakUp", "Beginner, intermediate and advanced speaking challenges with daily tasks and progress saved on your device.") }),
  component: ChallengesPage,
});

function ChallengesPage() {
  return (
    <>
      <PageHero eyebrow="Challenges" title="Pick your challenge" subtitle="Start with 7 days, move up to 14, then take on the full 30. One small task a day." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {challengeSets.map((c) => (
            <ChecklistGroup key={c.key} storageKey={`speakup-${c.key}`} title={c.name} description={c.level} items={c.days} />
          ))}
        </div>
      </Section>
    </>
  );
}
