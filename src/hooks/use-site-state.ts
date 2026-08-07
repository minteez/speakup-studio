import { useEffect, useState } from "react";

const THEME_KEY = "speakup-theme";
const CONTRAST_KEY = "speakup-contrast";

export function useTheme() {
  const [dark, setDark] = useState(false);
  const [contrast, setContrast] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    const hc = localStorage.getItem(CONTRAST_KEY) === "on";
    setDark(isDark);
    setContrast(hc);
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("high-contrast", hc);
  }, []);

  const toggleTheme = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
      return next;
    });
  };

  const toggleContrast = () => {
    setContrast((c) => {
      const next = !c;
      document.documentElement.classList.toggle("high-contrast", next);
      localStorage.setItem(CONTRAST_KEY, next ? "on" : "off");
      return next;
    });
  };

  return { dark, contrast, toggleTheme, toggleContrast };
}

const BOOKMARK_KEY = "speakup-bookmarks";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    try {
      setBookmarks(JSON.parse(localStorage.getItem(BOOKMARK_KEY) ?? "[]"));
    } catch {
      setBookmarks([]);
    }
  }, []);

  const toggle = (id: string) => {
    setBookmarks((prev) => {
      const next = prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id];
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(next));
      return next;
    });
  };

  return { bookmarks, toggle, has: (id: string) => bookmarks.includes(id) };
}

export function useLocalChecklist(key: string) {
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    try {
      setDone(JSON.parse(localStorage.getItem(key) ?? "[]"));
    } catch {
      setDone([]);
    }
  }, [key]);

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id];
      localStorage.setItem(key, JSON.stringify(next));
      return next;
    });
  };

  const reset = () => {
    setDone([]);
    localStorage.setItem(key, "[]");
  };

  return { done, toggle, reset, has: (id: string) => done.includes(id) };
}
