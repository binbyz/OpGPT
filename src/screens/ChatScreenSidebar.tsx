import { Text, View } from 'react-native';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

type ChatScreenSidebarProps = {
  navigation: DrawerNavigationHelpers;
};

export default function ChatScreenSidebar({ navigation }: ChatScreenSidebarProps) {
  return (
    <View>
      <Text>Chat Screen Sidebar</Text>
    </View>
  );
}
