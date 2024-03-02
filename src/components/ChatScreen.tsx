import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '@/styles/ChatScreenStyles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Thread } from '@/types';
import { createUserMessage, sampleThreads } from '@/components/sample_threads';

export default function ChatScreen() {
  const [inputMessage, setInputMessage] = useState('');
  const [threads, setThreads] = useState<Thread[]>([]);

  // sample
  useEffect(() => setThreads(sampleThreads), []);

  const sendMessage = () => {
    if (inputMessage.length) {
      setThreads([...threads, createUserMessage(inputMessage)]);
      setInputMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => alert('햄버거 메뉴 클릭!')}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>OpGPT</Text>
        <TouchableOpacity onPress={() => alert('새로운 채팅!')}>
          <MaterialCommunityIcons name="chat-plus-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.threadList}
        data={threads}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.threadContainer}>
              <View style={styles.threadProfileContainer}>
                <Image source={{ uri: item.image_url }} style={styles.threadProfileImage} />
                <Text style={styles.threadUser}>{item.name}</Text>
              </View>

              <Text style={styles.threadMessage}>{item.message}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
