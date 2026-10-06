import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Section } from "@/components/site/page-hero";
import { categories, prepComparison, RULES_VARY } from "@/data/competitions";

export const Route = createFileRoute("/competitions")({
  head: () => ({
    meta: [
      { title: "Speaking Competition Directory — SpeakUp" },
      { name: "description", content: "Searchable directory of 90+ speaking formats: prepared speech, extempore, interpretation, debate, MUN, hosting, presentations and language events." },
      { property: "og:title", content: "Speaking Competition Directory — SpeakUp" },
      { property: "og:description", content: "Search and filter common speaking competition formats with preparation tips." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CompetitionsPage,
});

function CompetitionsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const total = categories.reduce((n, c) => n + c.items.length, 0);
  const filtered = useMemo(() => {
    const s = q.toLowerCase().trim();
    return categories
      .filter((c) => cat === "all" || c.id === cat)
      .map((c) => ({ ...c, items: c.items.filter((i) => !s || (i.name + " " + i.what).toLowerCase().includes(s)) }))
      .filter((c) => c.items.length);
  }, [q, cat]);

  return (
    <>
      <PageHero eyebrow="Competitions" title="Competition directory" subtitle={`${total} common speaking formats across ${categories.length} categories.`} />
      <Section>
        <p className="mb-6 rounded-2xl border border-highlight/40 bg-highlight/10 p-4 text-sm">{RULES_VARY}</p>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search formats…" aria-label="Search formats" className="flex-1 rounded-full border border-border bg-card px-5 py-3 text-sm" />
        </div>
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {[{ id: "all", label: "All" }, ...categories].map((c) => (
            <button key={c.id} onClick={() => setCat(c.id)} aria-pressed={cat === c.id}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${cat === c.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}>
              {c.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 && <p className="text-muted-foreground">No formats match your search.</p>}

        <div className="space-y-12">
          {filtered.map((c) => (
            <section key={c.id}>
              <h2 className="text-2xl font-bold">{c.label}</h2>
              <p className="mt-1 text-muted-foreground">{c.intro}</p>
              {c.id === "limited" && (
                <div className="mt-4 overflow-x-auto rounded-2xl border border-border/60">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-secondary/50"><tr><th className="p-3">Format</th><th className="p-3">Preparation</th><th className="p-3">Typical skill</th></tr></thead>
                    <tbody>{prepComparison.map((r) => <tr key={r[0]} className="border-t border-border/60">{r.map((x) => <td key={x} className="p-3">{x}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              )}
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {c.items.map((it) => (
                  <li key={it.name}>
                    <details className="group h-full rounded-3xl border border-border/60 bg-card p-5 card-lift">
                      <summary className="cursor-pointer list-none">
                        <h3 className="font-semibold">{it.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{it.what}</p>
                        <span className="mt-2 inline-block text-xs font-semibold text-highlight group-open:hidden">Show details →</span>
                      </summary>
                      <div className="mt-4 space-y-3 text-sm">
                        <p><b>Typical preparation:</b> <span className="text-muted-foreground">{c.prep}</span></p>
                        <div><b>Typical structure:</b><ol className="ml-5 list-decimal text-muted-foreground">{c.structure.map((s) => <li key={s}>{s}</li>)}</ol></div>
                        <p><b>Judges may look for:</b> <span className="text-muted-foreground">{c.judges.join(", ")}</span></p>
                        <p><b>Common mistakes:</b> <span className="text-muted-foreground">{c.mistakes.join("; ")}</span></p>
                        {it.topics && <p><b>Topic ideas:</b> <span className="text-muted-foreground">{it.topics.join(", ")}</span></p>}
                        <p className="rounded-2xl bg-secondary/50 p-3"><b>Practice:</b> {c.exercise}</p>
                        <p className="text-xs text-muted-foreground">Check your organizer's rules for timing and scoring.</p>
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
