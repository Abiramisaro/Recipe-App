import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

const useAuthStore = create((set, get) => ({
  isLoggedIn: true,
  loading: false,
  userDetails: {},

  setLogin: async ({user}) => {
    console.log(user,token)
    await AsyncStorage.setItem('user', JSON.stringify(user));
    set({ isLoggedIn: true, userDetails: user });
  },

  logout: async () => {
    await AsyncStorage.removeItem('user');
    set({ isLoggedIn: false, userDetails: null });
  }, 
}));


export default useAuthStore;
