import { createContext, useState, useEffect } from 'react';
const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

export const ThemeContext = createContext(isBrowserDefaultDark() ? 'dark' : 'light');

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
