import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const SOCKET_URL = 'http://10.0.2.2:3000';
const socket = io(SOCKET_URL);

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (msg) => {
      console.log(msg);
      setMessages((prevMessages) => [...prevMessages, { text: msg, sender: 'other' }]);
    });
    return () => {
      socket.off('receive_message');
    };
  }, []);

  const sendMessage = () => {
    if (socket && message.trim()) {
      socket.emit('message', message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: 'user' },
      ]);
      setMessage('');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
      <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>
        Chatting RealTime
      </Text>
      <FlatList
        style={{ marginTop: 25 }}
        data={messages}
        renderItem={({ item }) => {
          const sentByUser = item.sender === 'other';
          return (
            <View
              style={{
                padding: 10,
                backgroundColor: sentByUser ? 'lightgray' : 'lightgreen',
                margin: 1,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignSelf: sentByUser ? 'flex-start' : 'flex-end',
              }}
            >
              <Text>{item.text}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder="Write Message"
          value={message}
          onChangeText={(txt) => setMessage(txt)}
          style={{
            paddingHorizontal: 15,
            backgroundColor: '#eee',
            flex: 1,
            height: 45,
            marginRight: 5,
            borderRadius: 20,
          }}
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={{
            height: 45,
            backgroundColor: 'blue',
            width: 50,
            marginLeft: 5,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
