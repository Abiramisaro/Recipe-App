import Constants from 'expo-constants';
import { Platform, View } from 'react-native';

export const StatusBarBackground = ({ color }) => (
  <View
    style={{
      height: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
      backgroundColor: color,
    }}
  />
);
