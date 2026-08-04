import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("ThemeContextProvider 내부에서만 사용할 수 있습니다.");
    }
    return context;
};

export default useTheme;