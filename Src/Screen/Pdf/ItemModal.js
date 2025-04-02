import { View, Text, Modal, FlatList, TouchableOpacity, TextInput, Image, } from 'react-native'
import React, { useState, } from 'react'
import { Data } from './DummyData'
import { ButtonComp, HEIGHT } from './Custom';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveToCart } from '../../service/redux/CartSlice';

const ItemModal = ({ visible, save }) => {
  const [filterData, setFilterData] = useState(Data);
  const [searchText, setSearchText] = useState('');
  const [selectedItemId, setSelectedItemId] = useState(null);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.cart);


  const filteringData = (txt) => {
    setSearchText(txt);
    const filtered = Data.filter(item =>
      item.name.toLowerCase().includes(txt.toLowerCase()) || item.trayNo.toString().includes(txt)
    );
    setFilterData(filtered);
  };

  const toggleSelection = (item) => {
    if (selectedItemId == null) {
      dispatch(AddToCart(item));
      setSelectedItemId([item.trayNo]);
    } else {
      setSelectedItemId((prevState) => {
        if (prevState.includes(item.trayNo)) {
          dispatch(RemoveToCart(item));
          return prevState.filter((id) => id !== item.trayNo);
        } else {
          dispatch(AddToCart(item));
          return [...prevState, item.trayNo];
        }
      });
    }
  };

  const LIST = ({ item, index }) => {
    const isSelected = data.some((cartItem) => cartItem.trayNo === item.trayNo);

    return (
      <View style={{ backgroundColor: '#f2f2f2', borderRadius: 10, marginBottom: 15, marginTop: index === 0 ? 25 : 0 }}>
        <View style={{ flexDirection: 'row', flex: 1, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
          <Image source={{ uri: item.img }} style={{ height: 80, width: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
          <View style={{ paddingHorizontal: 10, flex: 1, justifyContent: 'center' }}>
            <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'green', marginTop: 2 }}>
              {'Rs.' + item.price}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{
                flex: 1,
                fontSize: 14, marginTop: 2,
                fontWeight: 'bold',
                color: 'gray',
              }}>
                {'Tray No.' + item.trayNo}
              </Text>
              <TouchableOpacity onPress={() => toggleSelection(item)} style={{
                borderRadius: 5, padding: 5, paddingHorizontal: 10,
                backgroundColor: isSelected ? 'red' : 'green',
              }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>
                  {isSelected ? 'Remove Item' : 'Select Item'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Modal visible={visible}>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{ elevation: 10, shadowOpacity: 1, shadowColor: 'black', backgroundColor: 'gray' }}>
          <TextInput
            style={{
              margin: 20,
              marginTop: 30,
              backgroundColor: '#f9f9f9',
              borderRadius: 10,
              color: 'black',
              fontWeight: 'bold',
              paddingHorizontal: 10
            }}
            placeholder='Search Item...'
            value={searchText}
            onChangeText={(t) => filteringData(t)}
          />
        </View>

        <FlatList
          style={{ paddingHorizontal: 25 }}
          data={filterData}
          renderItem={LIST}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={() => {
            return (
              <View style={{ height: HEIGHT - 150, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  style={{ height: 100, width: 100, marginBottom: 10 }}
                  source={{ uri: 'https://cdn4.iconfinder.com/data/icons/scenarium-graphite-office-documents/128/024_029_trash_bin_empty-512.png' }} />
                <Text style={{ textAlign: 'center', color: 'gray', fontWeight: 'bold', fontSize: 16 }}>Oops, Not Found Tray!</Text>
              </View>
            );
          }}
        />
        <ButtonComp style={{ marginHorizontal: 20, marginBottom: 10 }} onPress={() => {
          save();
          setSelectedItemId(null);
          setFilterData(Data);
          setSearchText('');
        }} title={`Select (${data?.length ? data?.length : 0})`} />
      </View>
    </Modal>
  );
};

export default ItemModal;
