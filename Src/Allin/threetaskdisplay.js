

import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const image = [
    'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  ];

  const task = [
    { id: 1, name: 'simpleTask', done: false, user: image },
    { id: 2, name: 'multipalTask', done: false, user: image },
    { id: 3, name: 'daillyTask', done: false, user: image },
  ];

  const list = ({ item, index }) => {
    return (
      <View style={{ marginTop: 15 }}>
        {(() => {
          switch (item.name) {
            case 'simpleTask':
              return <SimpaleTaskCard data={item} />;
            case 'multipalTask':
              return <MultipalTaskCard data={item} key={item.id} />;
            case 'daillyTask':
              return <DaillyTaskCard data={item} />;
            default:
              return null;
          }
        })()}
      </View>
    );
  };

  return (
    <View style={{}}>
      <FlatList
        data={task}
        renderItem={list}
        keyExtractor={(item) => item.id.toString()}
        style={{ paddingHorizontal: 15 }}
      />
    </View>
  );
};

export default App;

const SimpaleTaskCard = ({ data }) => {
  const [done, setdone] = useState(false);

  return (
    <View
      style={{
        height: 96,
        paddingHorizontal: 18,
        paddingVertical: 12,
        backgroundColor: done ? '#EAFFFE' : 'white',
        elevation: 5,
        borderRadius: 5,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { setdone(!done); }}>
          <Image
            style={{ height: 20, width: 20, tintColor: done ? '#01D6C9' : '#7B7B7B' }}
            source={{
              uri: done
                ? 'https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-3/32/checkbox--checked--filled-512.png'
                : 'https://cdn1.iconfinder.com/data/icons/systemui/21/checkbox_empty-512.png',
            }}
          />
        </TouchableOpacity>
        <View style={{ marginLeft: 5, flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Text style={{ fontSize: 14, color: '#01D6C9', fontWeight: 'semibold' }}>This is simple task</Text>
            <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#FB4B4E' }} />
          </View>
          <Text style={{ color: done ? '#7B7B7B' : '#CBCBCB', fontSize: 12, marginTop: 5 }}>Simple Task</Text>
        </View>
        <Text style={{ color: done ? '#7B7B7B' : '#CBCBCB', fontSize: 12 }}>07.50 PM</Text>
      </View>
      <View style={{ marginTop: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {data.user.map((img, ind) => {
            return (
              <Image
                key={`${img}-${ind}`}
                style={{
                  height: 22,
                  width: 22,
                  borderRadius: 15,
                  marginLeft: ind === 0 ? 0 : -5,
                }}
                source={{ uri: img }}
              />
            );
          })}
          {data.user.length > 4 && data.user.length - 4 > 0 && (
            <Text style={{ fontSize: 10, color: '#01D6C9', fontWeight: 'bold', marginLeft: 6 }}>
              {'+' + (data.user.length - 4)}
            </Text>
          )}
        </View>
        {done && <Text style={{ color: '#7B7B7B', fontSize: 12 }}>Done</Text>}
      </View>
    </View>
  );
};

const MultipalTaskCard = ({ data }) => {
  const done = data.done;
  return (
    <View
      style={{
        height: 96,
        paddingHorizontal: 18,
        paddingVertical: 12,
        backgroundColor: done ? '#EAFFFE' : 'white',
        elevation: 5,
        borderRadius: 5,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 14, color: '#01D6C9', fontWeight: 'semibold' }}>This is simple task</Text>
        <Text style={{ color: '#7B7B7B', fontSize: 12 }}>18-2-2025</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
        <Text style={{ color: done ? '#7B7B7B' : '#CBCBCB', fontSize: 12 }}>Multiple Task</Text>
        <Text style={{ color: done ? '#7B7B7B' : '#CBCBCB', fontSize: 12 }}>07.50 PM</Text>
      </View>
      <View style={{ marginTop: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {data.user.map((img, ind) => {
            return (
              <Image
                key={`${img}-${ind}`} // Unique key with image and index
                style={{
                  height: 22,
                  width: 22,
                  borderRadius: 15,
                  marginLeft: ind === 0 ? 0 : -5,
                }}
                source={{ uri: img }}
              />
            );
          })}
          {data.user.length > 4 && data.user.length - 4 > 0 && (
            <Text style={{ fontSize: 10, color: '#01D6C9', fontWeight: 'bold', marginLeft: 6 }}>
              {'+' + (data.user.length - 4)}
            </Text>
          )}
        </View>
        {done ? <Text style={{ color: '#7B7B7B', fontSize: 12 }}>Done</Text> : <Text style={{ color: '#7B7B7B', fontSize: 12 }}>{'8/10 completed'}</Text>}
      </View>
    </View>
  );
};

const DaillyTaskCard = ({ data }) => {
  const done = data.done;
  return (
    <View
      style={{
        height: 96,
        paddingHorizontal: 18,
        paddingVertical: 12,
        backgroundColor: done ? '#EAFFFE' : 'white',
        elevation: 5,
        borderRadius: 5,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 14, color: '#01D6C9', fontWeight: 'semibold' }}>This is simple task</Text>
        <Text style={{ color: '#7B7B7B', fontSize: 12 }}>18-2-2025</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
        <Text style={{ color: done ? '#7B7B7B' : '#CBCBCB', fontSize: 12 }}>Dailly Task</Text>
        <Text style={{ color: done ? '#7B7B7B' : '#CBCBCB', fontSize: 12 }}>07.50 PM</Text>
      </View>
      <View style={{ marginTop: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {data.user.map((img, ind) => {
            return (
              <Image
                key={`${img}-${ind}`} // Unique key with image and index
                style={{
                  height: 22,
                  width: 22,
                  borderRadius: 15,
                  marginLeft: ind === 0 ? 0 : -5,
                }}
                source={{ uri: img }}
              />
            );
          })}
          {data.user.length > 4 && data.user.length - 4 > 0 && (
            <Text style={{ fontSize: 10, color: '#01D6C9', fontWeight: 'bold', marginLeft: 6 }}>
              {'+' + (data.user.length - 4)}
            </Text>
          )}
        </View>
        {done ? <Text style={{ color: '#7B7B7B', fontSize: 12 }}>Done</Text> : <Text style={{ color: '#7B7B7B', fontSize: 12 }}>{'8/10 completed'}</Text>}
      </View>
    </View>
  );
};
