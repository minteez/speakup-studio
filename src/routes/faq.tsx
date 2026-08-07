import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/library";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Public Speaking FAQ for Students — SpeakUp" },
      { name: "description", content: "Around 30 answers to common questions: stage fear, forgetting lines, practice time, introverts, judging criteria and pronunciation." },
      { property: "og:title", content: "Public Speaking FAQ for Students — SpeakUp" },
      { property: "og:description", content: "Straight answers to the questions beginner speakers ask most." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions beginners ask" subtitle="Short, practical answers to the things students worry about most." />
      <Section>
        <Reveal className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card p-4 sm:p-6">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>
    </>
  );
}
