import { Check } from "lucide-react";
import { useLocalChecklist } from "@/hooks/use-site-state";

export type CheckItem = { id: string; title: string; detail?: string };

export function ChecklistGroup({
  storageKey,
  title,
  description,
  items,
}: {
  storageKey: string;
  title: string;
  description?: string;
  items: CheckItem[];
}) {
  const list = useLocalChecklist(storageKey);
  const pct = Math.round((list.done.filter((d) => items.some((i) => i.id === d)).length / items.length) * 100);
  return (
    <section className="rounded-3xl border border-border/60 bg-card p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="font-semibold">{pct}%</span>
          <button onClick={list.reset} className="text-muted-foreground underline-offset-4 hover:underline">
            Reset
          </button>
        </div>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
        <div className="h-full gradient-hero transition-all" style={{ width: `${pct}%` }} />
      </div>
      <ul className="mt-5 grid gap-2">
        {items.map((i) => {
          const on = list.has(i.id);
          return (
            <li key={i.id}>
              <button
                onClick={() => list.toggle(i.id)}
                aria-pressed={on}
                className="flex w-full items-start gap-3 rounded-2xl border border-border/60 p-3 text-left transition-colors hover:bg-secondary/50"
              >
                <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border ${on ? "gradient-hero border-transparent text-primary-foreground" : "border-border"}`}>
                  {on ? <Check className="size-3.5" /> : null}
                </span>
                <span>
                  <span className={`block text-sm font-medium ${on ? "line-through opacity-70" : ""}`}>{i.title}</span>
                  {i.detail ? <span className="block text-xs text-muted-foreground">{i.detail}</span> : null}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function readProgress(key: string, total: number) {
  try {
    const arr = JSON.parse(localStorage.getItem(key) ?? "[]") as string[];
    return Math.min(100, Math.round((arr.length / total) * 100));
  } catch {
    return 0;
  }
}
