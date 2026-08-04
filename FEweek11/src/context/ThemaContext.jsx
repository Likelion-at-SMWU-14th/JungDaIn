import { createContext, useState } from 'react';

const ThemaContext = createContext();

export const ThemaContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => {
        setIsDark((prev) => !prev);
        console.log("테마가 변경되었습니다.");
    };

    return (
        <ThemaContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemaContext.Provider>
    );
};

export default ThemaContext;