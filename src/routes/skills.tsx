import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { ChecklistGroup } from "@/components/site/checklist-card";
import { skillAreas } from "@/data/extras";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Voice, Body Language & Storytelling Practice — SpeakUp" },
      { name: "description", content: "Daily exercises for voice, body language and storytelling with saved progress." },
      { property: "og:title", content: "Skill Practice Studio — SpeakUp" },
      { property: "og:description", content: "Voice drills, body language exercises and storytelling tasks for students." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <>
      <PageHero eyebrow="Skill Studio" title="Train your voice, body and stories" subtitle="Short exercises you can do in ten minutes a day." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {skillAreas.map((a) => (
            <ChecklistGroup key={a.key} storageKey={`speakup-skill-${a.key}`} title={a.title} description={a.description} items={a.items} />
          ))}
        </div>
      </Section>
    </>
  );
}
