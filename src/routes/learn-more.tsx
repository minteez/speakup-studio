import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHero, Section } from "@/components/site/page-hero";
import { externalResources } from "@/data/phase3";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/learn-more")({
  head: () => ({ meta: pageMeta("Learn More — Courses, Organizations & Videos — SpeakUp", "Trusted external places to keep learning public speaking: courses, speech and debate organizations, and video libraries.") }),
  component: LearnMore,
});

function LearnMore() {
  return (
    <>
      <PageHero eyebrow="Further Learning" title="Keep learning beyond SpeakUp" subtitle="Official links only. SpeakUp is not affiliated with, sponsored by or endorsed by any of these organizations." />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {externalResources.map((g) => (
            <section key={g.group} className="rounded-3xl border border-border/60 bg-card p-6">
              <h2 className="text-lg font-semibold">{g.group}</h2>
              <ul className="mt-4 grid gap-2">
                {g.items.map((i) => (
                  <li key={i.url}>
                    <a href={i.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 rounded-xl border border-border/60 p-3 text-sm transition-colors hover:bg-secondary">
                      {i.name} <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
                    </a>
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
