import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/mun-builder")({
  head: () => ({
    meta: [
      { title: "MUN Opening Speech Builder — SpeakUp" },
      { name: "description", content: "Build a Model United Nations opening speech from your country, committee, agenda and proposals." },
      { property: "og:title", content: "MUN Opening Speech Builder — SpeakUp" },
      { property: "og:description", content: "Create a structured MUN opening speech in seconds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MunBuilder,
});

function MunBuilder() {
  const [f, setF] = useState({ country: "", committee: "", agenda: "", stance: "", proposals: "" });
  const [out, setOut] = useState("");
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const build = () => {
    const country = f.country || "[Country]";
    const props = f.proposals.split("\n").map((p) => p.trim()).filter(Boolean);
    setOut(
      [
        `Honourable Chair, distinguished delegates,`,
        ``,
        `The delegation of ${country} is honoured to address the ${f.committee || "[Committee]"} on the agenda: "${f.agenda || "[Agenda]"}".`,
        ``,
        `${country} believes that ${f.stance || "[your country's position]"}.`,
        ``,
        props.length ? `To move forward, ${country} proposes:` : `${country} looks forward to working on concrete solutions.`,
        ...props.map((p, i) => `${i + 1}. ${p}`),
        ``,
        `${country} is open to cooperation with all delegations that share these goals and looks forward to fruitful debate.`,
        ``,
        `Thank you, Honourable Chair. The delegate yields the floor back to the Chair.`,
      ].join("\n"),
    );
  };

  return (
    <>
      <PageHero eyebrow="MUN Builder" title="Write your MUN opening speech" subtitle="Fill in five fields. Most opening speeches last 60–90 seconds — keep it short and clear." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-3 rounded-3xl border border-border/60 bg-card p-6">
            <label className="grid gap-1 text-sm font-medium">Country<Input value={f.country} onChange={set("country")} placeholder="e.g. Saudi Arabia" /></label>
            <label className="grid gap-1 text-sm font-medium">Committee<Input value={f.committee} onChange={set("committee")} placeholder="e.g. UNEP" /></label>
            <label className="grid gap-1 text-sm font-medium">Agenda<Input value={f.agenda} onChange={set("agenda")} placeholder="e.g. Combating desertification" /></label>
            <label className="grid gap-1 text-sm font-medium">Your country's position<Textarea value={f.stance} onChange={set("stance")} placeholder="what your country believes about the issue" /></label>
            <label className="grid gap-1 text-sm font-medium">Proposals (one per line)<Textarea rows={4} value={f.proposals} onChange={set("proposals")} /></label>
            <Button onClick={build}>Build speech</Button>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Your speech</h2>
              {out ? <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(out)}>Copy</Button> : null}
            </div>
            <pre className="mt-4 whitespace-pre-wrap font-sans text-sm text-muted-foreground">{out || "Your speech will appear here."}</pre>
            {out ? <p className="mt-4 text-xs text-muted-foreground">About {out.split(/\s+/).length} words · roughly {Math.ceil(out.split(/\s+/).length / 130)} min</p> : null}
          </div>
        </div>
      </Section>
    </>
  );
}
