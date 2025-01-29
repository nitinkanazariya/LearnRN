import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddTaskScreen = props => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [editableData, setEditableData] = useState('');

  useEffect(() => {
    loadTasks();
    setEditableData(props.route.params);
    setTitle(editableData?.title);
    setNote(editableData?.note);
  }, [editableData]);

  const loadTasks = async () => {
    await AsyncStorage.getItem('tasks');
  };

  const SaveTask = async () => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    let noteData = storedTasks ? JSON.parse(storedTasks) : [];

    if (editableData) {
      const updatedData = {
        id: editableData.id,
        title: title,
        note: note,
        Date: new Date().toLocaleDateString(),
        Time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
      };

      const dataIndex = noteData.findIndex(item => item.id === editableData.id);
      if (dataIndex !== -1) {
        noteData[dataIndex] = updatedData;
      }
    } else {
      const newData = {
        id: new Date().getTime().toString(),
        title: title,
        note: note,
        Date: new Date().toLocaleDateString(),
        Time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
      };
      noteData.push(newData);
    }

    if (!title == '' && !note == '') {
      props.navigation.navigate('Home');
      await AsyncStorage.setItem('tasks', JSON.stringify(noteData));
    } else {
      Alert.alert('Enter title and task');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.createNoteText}>Note</Text>

        <TextInput
          placeholder="Enter title"
          onChangeText={res => setTitle(res)}
          value={title}
          style={[styles.addNoteTextInput, {fontWeight: 'bold'}]}
        />

        <TextInput
          placeholder="Enter note"
          onChangeText={res => setNote(res)}
          value={note}
          multiline
          numberOfLines={10}
          style={[
            styles.addNoteTextInput,
            {textAlignVertical: 'top', fontSize: 18},
          ]}
        />

        <TouchableOpacity
          style={styles.onSave}
          onPress={() => {
            SaveTask();
          }}>
          <Text style={styles.saveTxt}> Save </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default AddTaskScreen;


const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black', padding: 15},

  createNoteText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    marginTop: 40,
    fontWeight: 'bold',
  },
  addNoteTextInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 20,
    color: 'black',
    fontSize: 18,
    paddingLeft: 10,
  },
  onSave: {
    marginTop: '20%',
    backgroundColor: '#03966d',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
  },
  fontSize: 18,
  saveTxt: {color: 'white', marginHorizontal: 20, fontSize: 16},
});
