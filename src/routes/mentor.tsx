import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";

export const Route = createFileRoute("/mentor")({
  head: () => ({
    meta: [
      { title: "The Teacher Who Started My Journey — SpeakUp" },
      { name: "description", content: "How Mr. Jabir Thayyil, Social Science teacher and public speaker, encouraged the creator of SpeakUp to start public speaking." },
      { property: "og:title", content: "The Teacher Who Started My Journey — SpeakUp" },
      { property: "og:description", content: "A teacher's encouragement that revealed a hidden ability." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MentorPage,
});

function MentorPage() {
  return (
    <>
      <PageHero eyebrow="Mentor" title="The Teacher Who Started My Journey" subtitle="A teacher's encouragement can sometimes reveal an ability that a student didn't know they had." />
      <Section>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[220px_1fr]">
          <div aria-hidden className="grid aspect-square place-items-center rounded-3xl bg-gradient-to-br from-primary to-accent text-6xl font-bold text-primary-foreground">JT</div>
          <div>
            <h2 className="text-3xl font-bold">Mr. Jabir Thayyil</h2>
            <p className="mt-1 text-highlight font-medium">Social Science Teacher · Public Speaker</p>
            <blockquote className="mt-5 border-l-4 border-highlight pl-4 italic text-muted-foreground">
              "My interest in public speaking grew significantly after my teacher, Mr. Jabir Thayyil, recognized my speaking ability and encouraged me to participate in public speaking."
            </blockquote>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://www.instagram.com/thayyil5691" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Instagram</a>
              <a href="https://www.youtube.com/@jabirthayyil8912" target="_blank" rel="noopener noreferrer" className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground">YouTube</a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">SpeakUp is a personal student project and is not officially endorsed by Mr. Jabir Thayyil.</p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-border/60 bg-card p-6">
          <h2 className="text-xl font-semibold">TPM Group of Institutions</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            According to information provided by the project creator, Dr. T. P. Muhammad, founder of TPM Group of Institutions, has received the Dr. A. P. J. Abdul Kalam Award for contributions to education.
          </p>
        </div>
      </Section>
    </>
  );
}
