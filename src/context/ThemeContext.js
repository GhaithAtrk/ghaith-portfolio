"use client";

import { createContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

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
