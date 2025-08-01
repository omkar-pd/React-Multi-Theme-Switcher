import { createContext } from "react";

type ThemeContextType = {
  theme: 'light' | 'dark' | 'colorful';
  setTheme: (theme: 'light' | 'dark' | 'colorful') => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => { }
});

export default ThemeContext;
