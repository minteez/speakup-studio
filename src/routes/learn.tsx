import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { ChecklistGroup } from "@/components/site/checklist-card";
import { curriculum } from "@/data/phase3";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/learn")({
  head: () => ({ meta: pageMeta("Learn — 7-Level Public Speaking Curriculum — SpeakUp", "An original seven-level curriculum: foundations, delivery, speechwriting, storytelling, persuasion, competition and advanced communication.") }),
  component: LearnPage,
});

function LearnPage() {
  return (
    <>
      <PageHero eyebrow="Curriculum" title="Learn, one level at a time" subtitle="Seven levels written for students. Tick each lesson once you've read it and tried it out loud." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {curriculum.map((lv, i) => (
            <ChecklistGroup key={lv.level} storageKey={`speakup-learn-${i + 1}`} title={`${lv.level} — ${lv.name}`} items={lv.lessons} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          These lessons are original SpeakUp content inspired by common themes in public-speaking education. SpeakUp is not affiliated with any course provider.
        </p>
      </Section>
    </>
  );
}
