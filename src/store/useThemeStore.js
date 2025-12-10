import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useThemeStore = create(
    persist(
        (set) => ({
            isDarkMode: false,
            primaryColor: '#4F8000', // Default prime color from color.js

            toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
            setPrimaryColor: (color) => set({ primaryColor: color }),
        }),
        {
            name: 'theme-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);

export default useThemeStore;
