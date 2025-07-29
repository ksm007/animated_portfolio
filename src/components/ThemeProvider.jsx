import { createContext, useContext, useEffect, useState } from "react";

const ThemeProviderContext = createContext({});

export const ThemeProvider = ({
  children,
  defaultTheme = "system",
  defaultAccent = "blue",
  ...props
}) => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });
  const [accent, setAccent] = useState(() => {
    try {
      return localStorage.getItem("accent") || defaultAccent;
    } catch {
      return defaultAccent;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const accents = [
      "neutral",
      "red",
      "rose",
      "orange",
      "green",
      "blue",
      "yellow",
      "violet",
    ];

    // Remove all accent classes
    accents.forEach((a) => root.classList.remove(a));
    // Add the selected accent
    root.classList.add(accent);
  }, [accent]);

  const value = {
    theme,
    accent,
    setTheme: (theme) => {
      setTheme(theme);
      try {
        localStorage.setItem("theme", theme);
      } catch (e) {
        console.error(e);
      }
    },
    setAccent: (accent) => {
      setAccent(accent);
      try {
        localStorage.setItem("accent", accent);
      } catch (e) {
        console.error(e);
      }
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
