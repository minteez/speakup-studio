import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { acknowledgements } from "@/data/content";

export const Route = createFileRoute("/acknowledgements")({
  head: () => ({
    meta: [
      { title: "Acknowledgements — SpeakUp" },
      { name: "description", content: "Thank you to the teachers, school, parents and students who made this free public speaking project possible." },
      { property: "og:title", content: "Acknowledgements — SpeakUp" },
      { property: "og:description", content: "Dedicated to every student who believes confidence is built through practice." },
      { property: "og:url", content: "/acknowledgements" },
    ],
    links: [{ rel: "canonical", href: "/acknowledgements" }],
  }),
  component: AcknowledgementsPage,
});

function AcknowledgementsPage() {
  return (
    <>
      <PageHero eyebrow="Acknowledgements" title="Thank you" subtitle="SpeakUp exists because of the people who encouraged one student to speak." />
      <Section>
        <ul className="mx-auto grid max-w-3xl gap-4">
          {acknowledgements.map((a, i) => (
            <Reveal as="li" key={a} delay={i * 60}>
              <div className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5 card-lift">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl gradient-hero text-primary-foreground">
                  <Heart className="size-4" />
                </span>
                <p className="text-muted-foreground">{a}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={200} className="mx-auto mt-8 max-w-3xl rounded-3xl gradient-hero p-8 text-center text-primary-foreground">
          <p className="font-display text-xl font-semibold">
            This website is dedicated to every student who believes that confidence is built through
            practice, one speech at a time.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
