import { useMemo, useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import { themes } from "../utils/themes";

function ThemeProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState<'light' | 'dark' | 'colorful'>(() => localStorage.getItem('theme') as 'light' | 'dark' | 'colorful' || 'light');

    useEffect(() => {
        document.body.className = themes[theme].className;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const contextValue = useMemo(() => ({
        theme,
        setTheme: (newTheme: 'light' | 'dark' | 'colorful') => setTheme(newTheme),
    }), [theme]);
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );

}

export default ThemeProvider;
