import { createFileRoute } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck, Printer } from "lucide-react";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { lessons } from "@/data/content";
import { useBookmarks } from "@/hooks/use-site-state";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Beginner's Guide to Public Speaking — SpeakUp" },
      {
        name: "description",
        content:
          "Six free lessons: what public speaking is, overcoming stage fear, how to practise, body language, voice control and speaking with confidence.",
      },
      { property: "og:title", content: "Beginner's Guide to Public Speaking — SpeakUp" },
      { property: "og:description", content: "Six step-by-step lessons for beginner speakers." },
      { property: "og:url", content: "/guide" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/guide" }],
  }),
  component: GuidePage,
});

function GuidePage() {
  const { has, toggle } = useBookmarks();

  return (
    <>
      <PageHero
        eyebrow="Beginner's Guide"
        title="Six lessons that build a confident speaker"
        subtitle="Work through them in order. Each lesson takes a few minutes to read and a few weeks to master."
      >
        <div className="mt-6 flex justify-center">
          <Button variant="outline" onClick={() => window.print()} className="no-print">
            <Printer className="size-4" /> Print this guide
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <nav className="no-print hidden lg:block" aria-label="Lessons">
            <ul className="sticky top-24 space-y-2 text-sm">
              {lessons.map((l) => (
                <li key={l.slug}>
                  <a
                    href={`#${l.slug}`}
                    className="block rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {l.n}. {l.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-10">
            {lessons.map((l, i) => (
              <Reveal as="article" key={l.slug} delay={i * 40}>
                <div id={l.slug} className="scroll-mt-24 rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-highlight">
                        Lesson {l.n}
                      </p>
                      <h2 className="mt-1 text-2xl font-bold">{l.title}</h2>
                      <p className="mt-2 text-muted-foreground">{l.summary}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="no-print shrink-0"
                      aria-label={has(l.slug) ? `Remove bookmark from ${l.title}` : `Bookmark ${l.title}`}
                      aria-pressed={has(l.slug)}
                      onClick={() => toggle(l.slug)}
                    >
                      {has(l.slug) ? (
                        <BookmarkCheck className="size-5 text-highlight" />
                      ) : (
                        <Bookmark className="size-5" />
                      )}
                    </Button>
                  </div>

                  <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                    {l.points.map((p) => (
                      <div key={p.heading} className="rounded-2xl bg-secondary/50 p-4">
                        <dt className="font-semibold">{p.heading}</dt>
                        <dd className="mt-1 text-sm text-muted-foreground">{p.body}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
