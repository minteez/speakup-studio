import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Shuffle, Volume2 } from "lucide-react";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { vocabulary } from "@/data/library";

export const Route = createFileRoute("/vocabulary")({
  head: () => ({
    meta: [
      { title: "Vocabulary Builder for Speakers — SpeakUp" },
      {
        name: "description",
        content:
          "Word of the day for public speakers: meanings, example sentences, pronunciation, synonyms, antonyms and difficulty levels.",
      },
      { property: "og:title", content: "Vocabulary Builder for Speakers — SpeakUp" },
      { property: "og:description", content: "Learn one useful speaking word a day, with examples and pronunciation." },
      { property: "og:url", content: "/vocabulary" },
    ],
    links: [{ rel: "canonical", href: "/vocabulary" }],
  }),
  component: VocabularyPage,
});

function VocabularyPage() {
  const dayIndex = new Date().getDate() % vocabulary.length;
  const [index, setIndex] = useState(dayIndex);
  const word = vocabulary[index]!;

  return (
    <>
      <PageHero
        eyebrow="Vocabulary"
        title="One useful word a day"
        subtitle="Prefer the clear word over the impressive one — but the more words you know, the clearer you can be."
      />

      <Section>
        <Reveal className="rounded-3xl glass p-8">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Word of the day</p>
              <h2 className="mt-1 text-3xl font-bold sm:text-4xl">{word.word}</h2>
              <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <Volume2 className="size-4" /> {word.pronunciation}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="shrink-0"
              onClick={() => setIndex((i) => (i + 1) % vocabulary.length)}
            >
              <Shuffle className="size-4" /> Next word
            </Button>
          </div>
          <p className="mt-5 text-lg">{word.meaning}</p>
          <p className="mt-3 italic text-muted-foreground">“{word.example}”</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge variant="secondary">{word.level}</Badge>
            {word.synonyms.map((s) => (
              <Badge key={s} variant="outline">
                syn: {s}
              </Badge>
            ))}
            {word.antonyms.map((a) => (
              <Badge key={a} variant="outline">
                ant: {a}
              </Badge>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section title="Full word list">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vocabulary.map((w, i) => (
            <Reveal as="li" key={w.word} delay={i * 35}>
              <article className="h-full rounded-2xl border border-border/60 bg-card p-5 card-lift">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{w.word}</h3>
                  <Badge variant="secondary">{w.level}</Badge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{w.pronunciation}</p>
                <p className="mt-2 text-sm">{w.meaning}</p>
                <p className="mt-2 text-sm italic text-muted-foreground">“{w.example}”</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  Synonyms: {w.synonyms.join(", ")} · Antonyms: {w.antonyms.join(", ")}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
