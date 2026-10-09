import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { readProgress } from "@/components/site/checklist-card";
import { pathway, skillAreas, competitionChecklist } from "@/data/extras";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "My Progress Dashboard — SpeakUp" },
      { name: "description", content: "See your saved progress across the pathway, practice plans, skill studio and competition checklist." },
      { property: "og:title", content: "My Progress Dashboard — SpeakUp" },
      { property: "og:description", content: "All your SpeakUp progress in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Dashboard,
});

type Row = { label: string; to: string; pct: number };

function Dashboard() {
  const [rows, setRows] = useState<Row[]>([]);
  useEffect(() => {
    setRows([
      ...pathway.map((l, i) => ({ label: l.level, to: "/pathway", pct: readProgress(`speakup-path-${i + 1}`, l.items.length) })),
      { label: "7-day routine", to: "/practice", pct: readProgress("speakup-week", 7) },
      { label: "30-day challenge", to: "/practice", pct: readProgress("speakup-30day", 30) },
      ...skillAreas.map((a) => ({ label: a.title, to: "/skills", pct: readProgress(`speakup-skill-${a.key}`, a.items.length) })),
      ...competitionChecklist.map((g, i) => ({ label: `Competition: ${g.title}`, to: "/checklist", pct: readProgress(`speakup-comp-${i + 1}`, g.items.length) })),
    ]);
  }, []);
  const avg = rows.length ? Math.round(rows.reduce((s, r) => s + r.pct, 0) / rows.length) : 0;

  return (
    <>
      <PageHero eyebrow="Dashboard" title="Your speaking progress" subtitle="Saved only on this device — no login needed.">
        <p className="mt-6 text-5xl font-bold text-gradient">{avg}%</p>
        <p className="text-sm text-muted-foreground">overall</p>
      </PageHero>
      <Section>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((r) => (
            <li key={r.label}>
              <Link to={r.to} className="block rounded-2xl border border-border/60 bg-card p-4 card-lift">
                <div className="flex justify-between text-sm"><span className="font-medium">{r.label}</span><span>{r.pct}%</span></div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full gradient-hero" style={{ width: `${r.pct}%` }} /></div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
