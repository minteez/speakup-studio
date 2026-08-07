import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Globe, Mic } from "lucide-react";
import { navItems } from "@/data/nav";

export function SiteFooter() {
  return (
    <footer className="no-print mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-xl gradient-hero text-primary-foreground">
                <Mic className="size-5" />
              </span>
              <span className="font-display text-lg font-bold">SpeakUp</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Speak with Confidence. Inspire with Words. A free educational project helping students
              become confident speakers — no login, no payment, no advertisements.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-3 grid gap-2 text-sm">
              {navItems.slice(1, 9).map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-muted-foreground transition-colors hover:text-foreground">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Developer — Minteez</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Student, public speaking enthusiast, browser game developer, and technology learner
              passionate about helping others build confidence through communication.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-1">
              <SocialCard href="https://www.instagram.com/sudo.minteez" label="Instagram" handle="@sudo.minteez" icon={<Instagram className="size-4" />} />
              <SocialCard href="https://youtube.com/@thecubermint" label="YouTube" handle="@thecubermint" icon={<Youtube className="size-4" />} />
              <SocialCard href="https://minteez.lovable.app" label="Portfolio" handle="minteez.lovable.app" icon={<Globe className="size-4" />} />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SpeakUp. All Rights Reserved. · Version 1.0.0</p>
          <p>Engineered and designed by Minteez · Educational project created for students.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialCard({
  href,
  label,
  handle,
  icon,
}: {
  href: string;
  label: string;
  handle: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-3 py-2 text-sm card-lift"
    >
      <span className="grid size-8 shrink-0 place-items-center rounded-lg gradient-hero text-primary-foreground">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-medium">{label}</span>
        <span className="block truncate text-xs text-muted-foreground">{handle}</span>
      </span>
    </a>
  );
}
