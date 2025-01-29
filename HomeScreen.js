import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';

import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Modal,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
const HomeScreen = props => {
  const [search, setSearch] = useState('');
  const [selact, setSelact] = useState([]);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      loadSavedSelection();
      loadTasks();
    }, []),
  );

  const loadTasks = async () => {
    const savedTasks = await AsyncStorage.getItem('tasks');
    setData(JSON.parse(savedTasks));
  };
  const loadSavedSelection = async () => {
    const selected = await AsyncStorage.getItem('check');
    if (selected) {
      setSelact(JSON.parse(selected));
    }
  };

  const check = async itemId => {
    if (selact.includes(itemId)) {
      setSelact(selact.filter(id => id !== itemId));
    } else {
      setSelact([...selact, itemId]);
    }
  };

  const clearAll = async () => {
    const clearAll = await AsyncStorage.clear();
    setData(clearAll);
  };
  const removeTask = async id => {
    const updatedTasks = data.filter(task => task.id !== id);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setData(updatedTasks);
  };

  const searchFilterFunction = text => {
    const filteredData = data.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchData(filteredData);
    setSearch(text);
  };

  useEffect(() => {
    AsyncStorage.setItem('check', JSON.stringify(selact));
  }, [selact]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <ScrollView>
        <Text style={styles.noteApp}>NOTE APP</Text>

        <View style={{ padding: 10 }}>
          <TextInput
            placeholder="Search here"
            value={search}
            onChangeText={searchFilterFunction}
            style={styles.searchinput}
          />
          {data ? (
            <Text
              style={styles.clearAll}
              onPress={() => {
                clearAll();
              }}>
              Clear all note
            </Text>
          ) : null}
          <FlatList
            scrollEnabled={false}
            style={styles.FlatList}
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.listView,
                    {
                      backgroundColor:
                        index % 3 == 0
                          ? '#edf5a4'
                          : index % 2.5 == 0
                            ? '#fcd2e3'
                            : index % 4 == 0
                              ? 'white'
                              : '#d2f5fc',
                    },
                  ]}
                  onPress={() => {
                    props.navigation.navigate('AddTask', item);
                  }}>
                  <TouchableOpacity
                    onPress={() => check(item.id)}
                    style={styles.complateView}>
                    {selact.includes(item.id) ? (
                      <Text style={styles.complateTxt}>Complet Task</Text>
                    ) : null}
                    <Image
                      style={[
                        styles.checkicon,
                        {
                          tintColor: selact.includes(item.id)
                            ? 'green'
                            : 'gray',
                        },
                      ]}
                      source={require('./image/check.png')}
                    />
                  </TouchableOpacity>
                  <Text style={styles.titleText}>
                    {index + 1 + '] '}
                    {item.title}
                  </Text>

                  <View style={styles.iconview}>
                    <Text style={styles.timetext}>
                      {item.Time + '  '}
                      {item.Date}
                    </Text>

                    <TouchableOpacity onPress={() => removeTask(item.id)}>
                      <Image
                        style={styles.removeicon}
                        source={require('./image/delete.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
            data={search == '' ? data : searchData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('AddTask');
        }}
        style={styles.addNote}>
        <Image
          style={styles.addNoteIcon}
          source={require('./image/add.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },

  noteApp: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'black',
    marginTop: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  searchinput: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 10,
    color: 'black',
  },
  FlatList: { marginTop: 10 },
  clearAll: {
    color: 'white',
    alignSelf: 'flex-end',
    padding: 5,
    fontSize: 16,
    borderRadius: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'white',
  },
  addNote: {
    position: 'absolute',
    bottom: '10%',
    right: '12%',

    elevation: 5,
    color: 'black',
    backgroundColor: 'darkgreen',
    padding: 10,
    borderRadius: 30,
  },
  addNoteIcon: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },

  listView: {
    padding: 15,
    flex: 0.5,
    marginHorizontal: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: -5,
  },
  timetext: {
    color: 'gray',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginLeft: -5,
  },
  notetext: { color: 'gray', fontWeight: 'bold', fontSize: 14 },
  removeicon: {
    height: 22,
    width: 22,
  },

  checkicon: { tintColor: 'green', height: 20, width: 20 },
  iconview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
  },

  complateView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: -10,
    padding: 5,
  },
  complateTxt: {
    marginRight: 5,
    fontSize: 12,
    color: 'green',
    fontWeight: 'bold',
  },
});
