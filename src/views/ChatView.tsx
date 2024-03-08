import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from '@/styles/ChatStyle';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Thread } from '@/types';
import { createOpGptMessage, createUserMessage, sampleThreads } from '@/services/SampleGenerator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

type ChatScreenProps = {
  navigation: DrawerNavigationHelpers;
};

export default function ChatView({ navigation }: ChatScreenProps) {
  const threadListRef = useRef<FlatList>(null);
  const inputMessageRef = useRef<TextInput>(null);

  const [inputMessage, setInputMessage] = useState('');
  const [threads, setThreads] = useState<Thread[]>([]);

  // sample
  useEffect(() => {
    setThreads(sampleThreads);
  }, []);

  const sendMessage = () => {
    if (inputMessage.length) {
      setThreads([
        ...threads,
        createUserMessage(inputMessage),
        createOpGptMessage(''), // for loading image
      ]);

      setInputMessage('');
      inputMessageRef.current?.clear();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>OpGPT</Text>
          <TouchableOpacity onPress={() => alert('새로운 채팅!')}>
            <MaterialCommunityIcons name="chat-plus-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <FlatList
          ref={threadListRef}
          style={styles.threadList}
          data={threads}
          keyExtractor={(_, index) => index.toString()}
          onContentSizeChange={() => threadListRef.current?.scrollToEnd({ animated: true })}
          onLayout={() => threadListRef.current?.scrollToEnd({ animated: true })}
          renderItem={({ item }) => {
            return (
              <View style={styles.threadContainer}>
                <View style={styles.threadProfileContainer}>
                  <Image source={{ uri: item.image_url }} style={styles.threadProfileImage} />
                  <Text style={styles.threadUser}>{item.name}</Text>
                </View>

                <View style={styles.threadMessage}>
                  {item.message.length ? (
                    <Text>{item.message}</Text>
                  ) : (
                    <Image
                      source={require('../../assets/icons/dual_ball_50x50.gif')}
                      style={styles.threadThinkingGif}
                    />
                  )}
                </View>
              </View>
            );
          }}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inputContainer}
        >
          <Ionicons name="image-outline" size={24} color="black" />
          <TextInput
            ref={inputMessageRef}
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            placeholder={'Message'}
            onChangeText={(text) => setInputMessage(text)}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Feather name="send" size={24} color="black" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
