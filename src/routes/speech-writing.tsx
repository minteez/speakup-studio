import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { structures } from "@/data/content";

export const Route = createFileRoute("/speech-writing")({
  head: () => ({
    meta: [
      { title: "Speech Writing Guide & Structures — SpeakUp" },
      {
        name: "description",
        content:
          "How to write a speech: attention-grabbing introductions, a well-ordered body, strong conclusions, plus seven structures including debate, extempore and MUN.",
      },
      { property: "og:title", content: "Speech Writing Guide & Structures — SpeakUp" },
      { property: "og:description", content: "Introduction, body, conclusion and seven ready speech structures." },
      { property: "og:url", content: "/speech-writing" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/speech-writing" }],
  }),
  component: SpeechWritingPage,
});

const parts = [
  {
    title: "Introduction",
    lead: "You have about fifteen seconds to earn attention. Choose one hook and commit to it.",
    items: [
      ["Story", "Open in a scene: a place, a moment, a problem. People lean in for stories."],
      ["Question", "Ask something the audience silently answers for themselves."],
      ["Fact", "A short, surprising fact reframes how they hear everything after it."],
      ["Quote", "Use a quote only if it is short and genuinely relevant."],
      ["Statistics", "One number, clearly sourced, beats five vague ones."],
    ],
  },
  {
    title: "Body",
    lead: "Two or three main points, each with support. Order them so the strongest lands last.",
    items: [
      ["Arrange ideas", "Chronological, problem–solution, or cause–effect. Pick one and stay in it."],
      ["Examples", "Make abstract points concrete with a real school-level example."],
      ["Evidence", "Reports, data, expert statements — always with a year and source."],
      ["Facts", "Verify everything you plan to state as fact."],
      ["Transitions", "'That brings me to…', 'But here is the problem…' — guide the listener."],
      ["Arguments", "State the claim, give the reason, give the proof, restate the claim."],
    ],
  },
  {
    title: "Conclusion",
    lead: "Never end by trailing off. Land the plane.",
    items: [
      ["Summary", "One sentence per main point, no new information."],
      ["Powerful ending", "Return to your opening image — the audience feels the circle close."],
      ["Call to action", "Tell them exactly what to do next, in one clear sentence."],
      ["Thank you", "Say it calmly, hold your position for two seconds, then leave."],
    ],
  },
];

function SpeechWritingPage() {
  return (
    <>
      <PageHero
        eyebrow="Speech Writing"
        title="Write a speech people actually remember"
        subtitle="Every strong speech has the same three parts. What changes is how you build them."
      />

      <Section>
        <div className="space-y-8">
          {parts.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold">{p.title}</h2>
              <p className="mt-2 text-muted-foreground">{p.lead}</p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {p.items.map(([h, b]) => (
                  <div key={h} className="rounded-2xl bg-secondary/50 p-4">
                    <dt className="font-semibold">{h}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{b}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Speech structures" description="Pick the structure that matches your purpose.">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {structures.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 50}>
              <div className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6 card-lift">
                <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {s.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <ol className="mt-4 space-y-2 text-sm">
                  {s.steps.map((step, n) => (
                    <li key={step} className="flex gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full gradient-hero text-[11px] font-bold text-primary-foreground">
                        {n + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
                {s.note ? (
                  <p className="mt-4 rounded-2xl bg-secondary/50 p-3 text-xs text-muted-foreground">{s.note}</p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
