import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Mic, Sparkles, Trophy, School, Users, Rocket } from "lucide-react";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { journey } from "@/data/content";

const icons = [BookOpen, Sparkles, Users, Mic, School, Trophy, Rocket];

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "My Journey — SpeakUp" },
      {
        name: "description",
        content:
          "How reading books aloud since 2021 turned into school speeches, anchoring and inter-school CBSE competitions in Riyadh.",
      },
      { property: "og:title", content: "My Journey — SpeakUp" },
      { property: "og:description", content: "The personal story behind SpeakUp, told as a timeline." },
      { property: "og:url", content: "/journey" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/journey" }],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="My Journey"
        title="From reading aloud to speaking on stage"
        subtitle="My accent was not natural — it was developed through years of consistent practice. This is how it happened."
      />

      <Section>
        <ol className="relative mx-auto max-w-3xl border-l border-border pl-8">
          {journey.map((step, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <Reveal as="li" key={step.title} delay={i * 70} className="relative pb-10">
                <span className="absolute -left-[3.05rem] grid size-9 place-items-center rounded-full gradient-hero text-primary-foreground shadow-soft">
                  <Icon className="size-4" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{step.year}</p>
                <h2 className="mt-1 text-xl font-semibold">{step.title}</h2>
                <p className="mt-2 text-muted-foreground">{step.body}</p>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      <Section title="In my own words">
        <Reveal className="rounded-3xl glass p-8 leading-relaxed text-muted-foreground">
          <p>
            I discovered my interest in public speaking after one of my school teachers noticed my clear
            pronunciation and accent. Since 2021, I have made it a habit to read books aloud — story
            books, school textbooks, encyclopedias, general knowledge books and educational articles.
            Reading aloud improved my pronunciation, fluency, vocabulary, confidence and speaking
            rhythm.
          </p>
          <p className="mt-4">
            My teacher encouraged me to participate in speeches, anchoring, assemblies and competitions
            because they believed I had the potential to become a confident speaker. Over time, teachers
            and students in my school began recognising me as a capable speaker and anchor, and I
            received opportunities to represent my school in institutional competitions and inter-school
            CBSE events in Riyadh, including Hindi speech competitions.
          </p>
          <p className="mt-4">
            Although I have not yet won these competitions, every experience has taught me valuable
            lessons and made me a better speaker. My goal now is to help beginners begin their own
            journey and realise that public speaking is a skill anyone can develop with dedication.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
