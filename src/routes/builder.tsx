import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Printer, Wand2 } from "lucide-react";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/builder")({
  head: () => ({
    meta: [
      { title: "Speech Builder — Free Speech Outline Generator | SpeakUp" },
      {
        name: "description",
        content:
          "Enter your topic, audience, time limit, tone and purpose to generate a structured speech outline with opening, body, conclusion and delivery tips.",
      },
      { property: "og:title", content: "Speech Builder — Free Speech Outline Generator" },
      { property: "og:description", content: "Generate a speech outline in seconds — free, no login required." },
      { property: "og:url", content: "/builder" },
    ],
    links: [{ rel: "canonical", href: "/builder" }],
  }),
  component: BuilderPage,
});

type Outline = {
  opening: string[];
  body: string[];
  conclusion: string[];
  tips: string[];
  delivery: string[];
};

function build(topic: string, audience: string, minutes: string, tone: string, purpose: string): Outline {
  const t = topic.trim() || "your topic";
  const mins = Number(minutes) || 3;
  const bodyMinutes = Math.max(1, Math.round(mins * 0.6));
  const words = mins * 130;

  const hooks: Record<string, string> = {
    Informative: `Open with a surprising, verifiable fact about ${t}.`,
    Persuasive: `Open with a question that makes ${audience || "the audience"} take a side on ${t}.`,
    Inspirational: `Open with a 30-second personal story connected to ${t}.`,
    Entertaining: `Open with a light, kind observation about ${t} that the room recognises.`,
  };

  return {
    opening: [
      hooks[purpose] ?? hooks["Informative"]!,
      `Greet the audience and introduce yourself in one line.`,
      `State your core message: "Today I want to show you why ${t} matters."`,
      `Preview your three main points so listeners know where you are going.`,
    ],
    body: [
      `Point 1 — What ${t} is, in plain words. Support it with one example.`,
      `Point 2 — Why it matters to ${audience || "this audience"}. Support it with evidence or data (cite the year).`,
      `Point 3 — What can be done about it. Support it with a story or a practical step.`,
      `Use a clear transition line between each point. Spend about ${bodyMinutes} minute(s) here.`,
    ],
    conclusion: [
      `Summarise your three points in one sentence each — no new information.`,
      `Return to your opening ${purpose === "Inspirational" ? "story" : "hook"} to close the circle.`,
      purpose === "Persuasive"
        ? `Give a specific call to action: exactly what you want them to do this week.`
        : `End with one prepared final line you have memorised word for word.`,
      `Thank the audience calmly and hold your position for two seconds.`,
    ],
    tips: [
      `Target roughly ${words} words for ${mins} minutes (about 130 words per minute).`,
      `Keep the ${tone.toLowerCase()} tone consistent from the first line to the last.`,
      `Rehearse aloud at least five times, standing, with a timer.`,
      `Memorise only the first and last sentence; know the rest as ideas.`,
      `Prepare answers to three likely questions about ${t}.`,
    ],
    delivery: [
      tone === "Formal"
        ? "Steady pace, minimal gestures, precise vocabulary."
        : tone === "Energetic"
          ? "Higher volume, faster pace in the body, big clear gestures."
          : tone === "Emotional"
            ? "Slower pace, longer pauses, softer volume on personal lines."
            : "Warm, conversational pace with natural gestures.",
      "Pause for two seconds before and after your most important sentence.",
      "Make eye contact with three areas of the room — left, centre, right.",
      "Plant your feet; move only when you change to a new point.",
      "Smile within the first five seconds.",
    ],
  };
}

function BuilderPage() {
  const [topic, setTopic] = useState("");
  const [audience, setAudience] = useState("school students");
  const [minutes, setMinutes] = useState("3");
  const [tone, setTone] = useState("Friendly");
  const [purpose, setPurpose] = useState("Informative");
  const [outline, setOutline] = useState<Outline | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Speech Builder"
        title="Build your speech outline"
        subtitle="Fill in five details and get a ready structure with delivery suggestions. Everything runs in your browser."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <Reveal>
            <form
              className="no-print space-y-4 rounded-3xl border border-border/60 bg-card p-6"
              onSubmit={(e) => {
                e.preventDefault();
                setOutline(build(topic, audience, minutes, tone, purpose));
              }}
            >
              <div>
                <Label htmlFor="topic">Topic</Label>
                <Input
                  id="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. Why reading aloud builds confidence"
                  className="mt-1.5"
                  required
                />
              </div>
              <div>
                <Label htmlFor="audience">Audience</Label>
                <Input
                  id="audience"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="minutes">Time limit (minutes)</Label>
                <Input
                  id="minutes"
                  type="number"
                  min={1}
                  max={20}
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="tone">Tone</Label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger id="tone" className="mt-1.5">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {["Friendly", "Formal", "Energetic", "Emotional"].map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="purpose">Purpose</Label>
                <Select value={purpose} onValueChange={setPurpose}>
                  <SelectTrigger id="purpose" className="mt-1.5">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {["Informative", "Persuasive", "Inspirational", "Entertaining"].map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full gradient-hero text-primary-foreground">
                <Wand2 className="size-4" /> Generate outline
              </Button>
            </form>
          </Reveal>

          <div>
            {outline ? (
              <Reveal className="space-y-6 rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                  <h2 className="truncate text-2xl font-bold">
                    {topic.trim() || "Your speech"} — outline
                  </h2>
                  <Button variant="outline" size="sm" className="no-print shrink-0" onClick={() => window.print()}>
                    <Printer className="size-4" /> Print
                  </Button>
                </div>
                {(
                  [
                    ["Opening", outline.opening],
                    ["Body", outline.body],
                    ["Conclusion", outline.conclusion],
                    ["Speaking tips", outline.tips],
                    ["Delivery suggestions", outline.delivery],
                  ] as const
                ).map(([heading, items]) => (
                  <div key={heading}>
                    <h3 className="font-display text-lg font-semibold text-gradient">{heading}</h3>
                    <ul className="mt-2 space-y-2">
                      {items.map((it) => (
                        <li key={it} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-highlight" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Reveal>
            ) : (
              <div className="grid h-full min-h-64 place-items-center rounded-3xl border border-dashed border-border p-8 text-center text-muted-foreground">
                Your generated outline will appear here.
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
