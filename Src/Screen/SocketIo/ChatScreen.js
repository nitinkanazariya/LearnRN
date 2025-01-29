import { View, Text, FlatList, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WIDTH } from '../../Component/Constant';
import { RootName } from '../../Constent/OBJ';

const SOCKET_URL = 'http://10.0.2.2:3000';
const socket = io(SOCKET_URL);

const ChatScreen = (props) => {
  const userid = props?.route?.params?.userId?.id
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [myId, setMyId] = useState(1);

  const getMYId = async () => {
    const a = await AsyncStorage.getItem('myid')
    setMyId(JSON.parse(a))
  }

  useEffect(() => {
    getMYId()
  }, [])


  useEffect(() => {
    socket.on('receive_message', (msg) => {

      setMessages((prevMessages) => [{ senderId: msg.myId, message: msg.message, }, ...prevMessages]);
    });
    return () => {
      socket.off('receive_message');
    };
  }, []);

  const sendMessage = async () => {
    if (!message.trim()) {
      return;
    }
    const response = await fetch('http://192.168.1.33:3000/api/send_message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        senderId: myId,
        message: message,
        receiverId: userid,
      }),
    });

    const data = await response.json()
    if (data.status_Code == 200) {
      if (socket && message.trim()) {
        socket.emit('message', { message: message, senderId: myId });
        setMessages((prevMessages) => [{ senderId: myId, message: message, }, ...prevMessages]);
        setMessage('');
      }
    } else {
      Alert.alert(data.message)
    }
  };

  const logOutUser = async () => {
    await AsyncStorage.clear()
    Alert.alert('logOut')
    props.navigation.navigate(RootName.home)

  }
const getMessages=()=>{
  
}

  return (
    <View style={{ flex: 1, backgroundColor: 'white', }}>

      <StatusBar backgroundColor={'black'} />
      <View style={{ padding: 20, backgroundColor: 'black', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: 'white', fontWeight: 'bold', }}>{''}</Text>
        <TouchableOpacity onPress={logOutUser} style={{}}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>LogOut</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        inverted
        style={{ marginTop: 25, padding: 10 }}
        data={messages}
        renderItem={({ item }) => {
          const sentByUser = item.senderId == myId;
          return (
            <View
              style={{
                padding: 10,
                backgroundColor: sentByUser ? 'lightgreen' : 'lightgray',
                margin: 1,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignSelf: sentByUser ? 'flex-end' : 'flex-start',
              }}
            >
              <Text>{item.message}</Text>
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
