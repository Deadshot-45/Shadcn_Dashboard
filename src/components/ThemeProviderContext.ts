export type Theme = "light" | "dark" | "system";
export type ThemeProviderContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

import { createContext } from "react";
export const ThemeProviderContext = createContext<ThemeProviderContextType>({
  theme: "system",
  setTheme: () => {},
});
