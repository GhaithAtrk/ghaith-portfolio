"use client";

import { createContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedValue =
    typeof window !== "undefined" ? localStorage.getItem("mode") : null;

  const initial = storedValue !== null ? storedValue : "light";

  const [mode, setMode] = useState(initial);

  const toggle = () => {
    setMode((prev) => (prev == "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      toggle,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div className={`theme ${mode}`}>{children} </div>
    </ThemeContext.Provider>
  );
};
