import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import ChatScreen from '@/components/ChatScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ChatScreen></ChatScreen>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
