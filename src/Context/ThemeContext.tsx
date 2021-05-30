import React, { createContext, FC, useContext, useState } from "react";
interface Props {
  dark: boolean;
  setDark: Function;
}
const ThemeContext = createContext<Props>({} as Props);

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
