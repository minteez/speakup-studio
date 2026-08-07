import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { quotes } from "@/data/content";

export const Route = createFileRoute("/quotes")({
  head: () => ({
    meta: [
      { title: "Quote Library for Speakers — SpeakUp" },
      { name: "description", content: "Original motivational quotes about confidence, practice and public speaking, written for the SpeakUp project." },
      { property: "og:title", content: "Quote Library for Speakers — SpeakUp" },
      { property: "og:description", content: "Motivational lines for students learning to speak." },
      { property: "og:url", content: "/quotes" },
    ],
    links: [{ rel: "canonical", href: "/quotes" }],
  }),
  component: QuotesPage,
});

function QuotesPage() {
  return (
    <>
      <PageHero eyebrow="Quote Library" title="Lines to keep you going" subtitle="Original motivational lines written for SpeakUp." />
      <Section>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal as="li" key={q} delay={i * 40}>
              <blockquote className={`h-full rounded-3xl p-6 card-lift ${i % 3 === 0 ? "gradient-hero text-primary-foreground" : "glass"}`}>
                <Quote className="size-5 opacity-70" />
                <p className="mt-3 font-display text-lg font-semibold">“{q}”</p>
              </blockquote>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
