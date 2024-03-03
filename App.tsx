import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatScreenSidebar from '@/screens/ChatScreenSidebar';
import ChatScreen from '@/screens/ChatScreen';
import { StatusBar } from 'expo-status-bar';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Drawer.Navigator
        initialRouteName="ChatScreen"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: '80%',
          },
        }}
        drawerContent={({ navigation }) => <ChatScreenSidebar navigation={navigation} />}
      >
        <Drawer.Screen name="ChatScreen" component={ChatScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
