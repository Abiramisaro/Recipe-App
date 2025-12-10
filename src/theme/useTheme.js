import useThemeStore from '../store/useThemeStore';
import { color as defaultColors } from './color';

export const useTheme = () => {
    const { isDarkMode, primaryColor, toggleTheme, setPrimaryColor } = useThemeStore();

    const colors = {
        ...defaultColors,
        // Overrides based on mode
        prime: primaryColor,
        background: isDarkMode ? '#121212' : defaultColors.white,
        text: isDarkMode ? '#FFFFFF' : defaultColors.black,
        card: isDarkMode ? '#1E1E1E' : defaultColors.white,
        border: isDarkMode ? '#333333' : defaultColors.border,
        placeHolder: isDarkMode ? '#888888' : defaultColors.placeHolder,
        // Add other dynamic mappings here
    };

    return {
        colors,
        isDarkMode,
        toggleTheme,
        setPrimaryColor,
    };
};
