import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Mic, Moon, Search, Sun, Contrast } from "lucide-react";
import { navItems, primaryNav } from "@/data/nav";
import { useTheme } from "@/hooks/use-site-state";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function SiteHeader() {
  const { dark, contrast, toggleTheme, toggleContrast } = useTheme();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-border/60 glass">
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl gradient-hero text-primary-foreground">
            <Mic className="size-5" />
          </span>
          <span className="truncate font-display text-lg font-bold">SpeakUp</span>
        </Link>

        <div className="flex items-center gap-1">
          <ul className="mr-2 hidden items-center gap-1 lg:flex">
            {primaryNav.slice(1).map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button variant="ghost" size="icon" aria-label="Search the site" onClick={() => setOpen(true)}>
            <Search className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle high contrast mode"
            aria-pressed={contrast}
            onClick={toggleContrast}
          >
            <Contrast className="size-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Toggle dark mode" onClick={toggleTheme}>
            {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>

          <Sheet open={menu} onOpenChange={setMenu}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto">
              <SheetTitle className="px-4 pt-4 font-display">All pages</SheetTitle>
              <ul className="space-y-1 p-4">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setMenu(false)}
                      activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                      className="block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search guides, tips, speakers…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {navItems.map((item) => (
              <CommandItem
                key={item.to}
                value={`${item.label} ${item.blurb}`}
                onSelect={() => {
                  setOpen(false);
                  navigate({ to: item.to });
                }}
              >
                <span className="font-medium">{item.label}</span>
                <span className="ml-2 truncate text-xs text-muted-foreground">{item.blurb}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}
