import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: pageMeta("About SpeakUp — Why a Student Built It", "What SpeakUp is, why it was built, the teacher and school behind the journey, and what it is not.", "website") }),
  component: AboutPage,
});

const blocks: { h: string; p: string; link?: { to: string; label: string } }[] = [
  { h: "What is SpeakUp?", p: "A free website that helps students learn public speaking, speech writing and competition preparation — no login, no payment, no advertisements." },
  { h: "Why I built it", p: "When I started, I couldn't find one simple place that explained speaking for students like me. SpeakUp is the guide I wish I had." },
  { h: "My public speaking journey", p: "I'm a 15-year-old CBSE NRI student. In 2021 I began reading storybooks, school books and general-knowledge books aloud. Over time that turned into speeches, anchoring and competitions. I haven't won every one — and each loss taught me something.", link: { to: "/journey", label: "Read my full journey" } },
  { h: "My teacher — Mr. Jabir Thayyil", p: "He noticed my speaking ability and accent and encouraged me to keep going. That encouragement started everything.", link: { to: "/mentor", label: "About my mentor" } },
  { h: "My school & educational environment", p: "My school gave me assemblies, stages and competitions to practise on, and teachers who believed students could speak." },
  { h: "Inspiration from TPM Group of Institutions", p: "TPM Group of Institutions, founded by Dr. T. P. Muhammad, has been a source of inspiration. According to information provided by the project creator, Dr. T. P. Muhammad has received the Dr. A. P. J. Abdul Kalam Award for contributions to education." },
  { h: "What I have learned", p: "Confidence comes from practice, not talent. Preparation beats nerves. And every speaker — even the famous ones — started as a beginner." },
  { h: "What SpeakUp is NOT", p: "It isn't a professional coaching service, an official competition body, or affiliated with any course provider or organization linked on this site. I'm a student sharing what has helped me." },
  { h: "Developer", p: "Designed and built by Minteez." },
  { h: "Credits", p: "Thanks to my teachers, my school, my parents and every student who tried SpeakUp.", link: { to: "/acknowledgements", label: "Acknowledgements" } },
  { h: "Version", p: "Version 2.0 — curriculum, labs, practice mode and challenges added." },
  { h: "Copyright", p: "© 2026 SpeakUp. All rights reserved. Famous speeches are described and analysed, never copied in full; please visit the linked official sources." },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A student-made guide to speaking up" subtitle="Humble, honest and free — built by a student, for students." />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {blocks.map((b, i) => (
            <Reveal key={b.h} delay={i * 30}>
              <article className="h-full rounded-3xl border border-border/60 bg-card p-6">
                <h2 className="text-lg font-semibold">{b.h}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{b.p}</p>
                {b.link ? <Link to={b.link.to} className="mt-3 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline">{b.link.label} →</Link> : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
