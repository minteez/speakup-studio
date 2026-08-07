import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Input } from "@/components/ui/input";
import { tipCategories } from "@/data/library";

export const Route = createFileRoute("/tips")({
  head: () => ({
    meta: [
      { title: "100+ Public Speaking Tips for Students — SpeakUp" },
      { name: "description", content: "Over 100 practical public speaking tips across preparation, voice, confidence, storytelling, stage presence, debate, MUN and more." },
      { property: "og:title", content: "100+ Public Speaking Tips for Students — SpeakUp" },
      { property: "og:description", content: "Searchable tips organised into fifteen categories." },
      { property: "og:url", content: "/tips" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/tips" }],
  }),
  component: TipsPage,
});

function TipsPage() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const filtered = tipCategories
    .map((c) => ({ ...c, tips: query ? c.tips.filter((t) => t.toLowerCase().includes(query) || c.category.toLowerCase().includes(query)) : c.tips }))
    .filter((c) => c.tips.length > 0);
  const total = tipCategories.reduce((n, c) => n + c.tips.length, 0);

  return (
    <>
      <PageHero eyebrow="Speaking Tips" title={`${total} practical speaking tips`} subtitle="Fifteen categories, from preparation to Q&A. Search for what you need right now.">
        <div className="mx-auto mt-6 max-w-md">
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search tips…" aria-label="Search tips" />
        </div>
      </PageHero>
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, i) => (
            <Reveal key={c.category} delay={i * 30}>
              <section className="h-full rounded-3xl border border-border/60 bg-card p-6">
                <h2 className="text-lg font-semibold text-gradient">{c.category}</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {c.tips.map((t) => (
                    <li key={t} className="flex gap-2 text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-highlight" />
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
          {filtered.length === 0 ? <p className="text-muted-foreground">No tips match that search.</p> : null}
        </div>
      </Section>
    </>
  );
}
