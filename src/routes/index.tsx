import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Mic,
  Quote,
  Sparkles,
  GraduationCap,
  Award,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-speaker.jpg";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { lessons, lessonsLearned, quotes } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SpeakUp — Free Public Speaking Guide for Students" },
      {
        name: "description",
        content:
          "Learn public speaking, confidence, speech writing, stage presence and body language — absolutely free. A student-built educational project.",
      },
      { property: "og:title", content: "SpeakUp — Free Public Speaking Guide for Students" },
      {
        property: "og:description",
        content: "Learn public speaking, confidence, speech writing, stage presence and body language — absolutely free. A student-built educational project.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden gradient-soft">
        <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full gradient-hero opacity-20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full gradient-hero opacity-15 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 glass px-3 py-1 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="size-3.5 text-highlight" /> Free · No login · No ads
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">
              Everyone Can Become a <span className="text-gradient">Great Speaker.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Learn public speaking, confidence, speech writing, stage presence, body language and
              presentation skills — absolutely free.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-hero text-primary-foreground shadow-elegant">
                <Link to="/guide">
                  Start Learning <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/speech-writing">Explore Guides</Link>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { k: "6", v: "Core lessons" },
                { k: "100+", v: "Speaking tips" },
                { k: "30", v: "Day challenge" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl glass p-4">
                  <dt className="font-display text-2xl font-bold text-gradient">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="relative">
            <img
              src={heroImage}
              alt="A student speaking confidently at a podium in front of an audience"
              width={1280}
              height={960}
              className="w-full rounded-3xl border border-border/60 shadow-elegant"
            />
            <div className="absolute -bottom-6 -left-2 hidden max-w-[220px] rounded-2xl glass p-4 text-sm float-slow sm:block">
              <Quote className="size-4 text-highlight" />
              <p className="mt-2 font-medium">“Practice gives courage a microphone.”</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section title="About this website" description="A passion project, not an academy.">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl glass p-6">
            <BookOpen className="size-6 text-primary" />
            <p className="mt-4 text-muted-foreground">
              SpeakUp is a free educational website built by a student who discovered public speaking
              through school opportunities. The purpose is simple — to help beginners become confident
              speakers using practical techniques, real experiences, and inspiring stories.
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-3xl border border-dashed border-border p-6">
            <Users className="size-6 text-accent" />
            <p className="mt-4 text-muted-foreground">
              This website is not affiliated with any institution or academy. It is simply a personal
              educational project created to help students improve their speaking skills.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section title="Start with the beginner's guide" description="Six short lessons, in order.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((l, i) => (
            <Reveal as="li" key={l.slug} delay={i * 60}>
              <Link
                to="/guide"
                hash={l.slug}
                className="block h-full rounded-2xl border border-border/60 bg-card p-5 card-lift"
              >
                <span className="font-display text-sm font-bold text-highlight">Lesson {l.n}</span>
                <h3 className="mt-1 text-lg font-semibold">{l.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{l.summary}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section title="Why I built this website">
        <Reveal className="rounded-3xl glass p-8 text-lg leading-relaxed">
          <Heart className="size-7 text-highlight" />
          <p className="mt-4">
            I am not a professional public speaking coach, nor do I run an academy. I created SpeakUp
            simply because I enjoy learning new skills and wanted to use my own experiences to help
            other students who may feel nervous about speaking in public. If my journey can help even
            one student become more confident, then this project has achieved its purpose.
          </p>
        </Reveal>
      </Section>

      <Section
        title="The environment that inspired me"
        description="This website exists because of the opportunities my school and teachers gave me."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal className="rounded-2xl border border-border/60 bg-card p-6 card-lift">
            <GraduationCap className="size-6 text-primary" />
            <h3 className="mt-3 font-semibold">Teachers who notice</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Supportive teachers can recognise hidden talents and encourage students to explore them.
              One observation about my pronunciation changed everything for me.
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl border border-border/60 bg-card p-6 card-lift">
            <Mic className="size-6 text-accent" />
            <h3 className="mt-3 font-semibold">Stages to practise on</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Assemblies, anchoring slots and competitions gave me the repetition that no amount of
              private practice could replace.
            </p>
          </Reveal>
          <Reveal delay={160} className="rounded-2xl border border-border/60 bg-card p-6 card-lift">
            <Award className="size-6 text-highlight" />
            <h3 className="mt-3 font-semibold">More than competitions</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Public speaking is not only about winning. It is about becoming a better communicator,
              a leader, and a more confident individual.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-6 rounded-3xl glass p-6">
          <h3 className="font-semibold">Educational inspiration</h3>
          <p className="mt-3 text-muted-foreground">
            The founder of TPM Group of Institutions, Dr. T. P. Muhammad, has been recognised with the
            Dr. A. P. J. Abdul Kalam Award for his contributions to education. This recognition
            reflects the institution's commitment to encouraging academic excellence, leadership, and
            holistic student development.
          </p>
          <p className="mt-3 text-xs italic text-muted-foreground">
            Recognition mentioned for educational inspiration only. This is not an endorsement of this
            website.
          </p>
        </Reveal>
      </Section>

      <Section title="What public speaking taught me">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lessonsLearned.map((l, i) => (
            <Reveal as="li" key={l.title} delay={i * 50}>
              <div className="h-full rounded-2xl border border-border/60 bg-card p-5 card-lift">
                <span className="grid size-9 place-items-center rounded-xl gradient-hero text-primary-foreground">
                  <Sparkles className="size-4" />
                </span>
                <h3 className="mt-3 text-sm font-semibold">{l.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{l.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <Reveal className="rounded-3xl gradient-hero p-10 text-center text-primary-foreground shadow-elegant">
          <p className="mx-auto max-w-3xl font-display text-2xl font-bold sm:text-3xl">
            “{quotes[5]}”
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg opacity-90">“{quotes[6]}”</p>
        </Reveal>
      </Section>

      <Section title="A message to every student">
        <Reveal className="rounded-3xl border border-border/60 bg-card p-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            If you're afraid of standing on a stage, don't worry — you are not alone. Every experienced
            speaker once felt nervous too. Confidence doesn't appear overnight; it grows through
            practice, preparation, and perseverance. Read more, speak more, make mistakes, learn from
            them, and never stop improving. One day, you'll look back and realise how far you've come.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="gradient-hero text-primary-foreground">
              <Link to="/practice">Start the 7-day plan</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/journey">Read my journey</Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
