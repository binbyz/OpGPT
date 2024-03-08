import { Image, Text, TouchableOpacity, View } from 'react-native';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/styles/ChatScreenSidebarStyles';
import { MaterialIcons } from '@expo/vector-icons';

type ChatScreenSidebarProps = {
  navigation: DrawerNavigationHelpers;
};

export default function ChatScreenSidebar({ navigation }: ChatScreenSidebarProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}></View>
      <View style={styles.bottom}>
        <View style={styles.bottomContainer}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
          <View style={{ flexDirection: 'column', gap: 5 }}>
            <Text style={{ fontSize: 11, color: '#cdcdcd', letterSpacing: -0.5 }}>
              OP.GG Verified
            </Text>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>임원빈</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => alert('test')}>
          <MaterialIcons name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
