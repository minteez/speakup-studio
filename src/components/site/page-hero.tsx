import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 gradient-soft">
      <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full gradient-hero opacity-20 blur-3xl" />
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function Section({
  title,
  description,
  children,
  id,
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14">
      {title ? (
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
          {description ? <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p> : null}
        </Reveal>
      ) : null}
      <div className={title ? "mt-8" : ""}>{children}</div>
    </section>
  );
}
