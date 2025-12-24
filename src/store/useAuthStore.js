import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  loading: true,
  userDetails: null,

  hydrate: async () => {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      set({
        isLoggedIn: true,
        userDetails: JSON.parse(user),
        loading: false,
      });
    } else {
      set({ loading: false });
    }
  },

  setLogin: async (user) => {
    console.log(user)
    await AsyncStorage.setItem('user', JSON.stringify(user));
    set({
      isLoggedIn: true,
      userDetails: user,
    });
  },

  logout: async () => {
    await AsyncStorage.removeItem('user');
    set({
      isLoggedIn: false,
      userDetails: null,
    });
  },
}));

export default useAuthStore;
