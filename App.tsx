import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatSidebarView from '@/views/ChatSidebarView';
import { StatusBar } from 'expo-status-bar';
import ChatView from '@/views/ChatView';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Drawer.Navigator
        initialRouteName="ChatView"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: '80%',
          },
        }}
        drawerContent={({ navigation }) => <ChatSidebarView navigation={navigation} />}
      >
        <Drawer.Screen name="ChatScreen" component={ChatView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
