import { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => {
        setIsDark((prev) => !prev);
        console.log("테마가 변경되었습니다.");
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;