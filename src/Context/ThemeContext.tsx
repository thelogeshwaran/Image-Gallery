import React, { createContext, FC, useContext, useState } from "react";

const ThemeContext = createContext<any | null>(null);

export const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}
