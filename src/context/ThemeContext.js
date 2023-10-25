"use client";

import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    setMode((prev) => (prev == "dark" ? "light" : "dark"));
    localStorage.setItem("mode", mode);
  };

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
