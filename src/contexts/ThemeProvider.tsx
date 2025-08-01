import { useMemo, useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState<'light' | 'dark' | 'colorful'>('light');


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
