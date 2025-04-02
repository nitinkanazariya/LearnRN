import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Alert, Linking, TouchableOpacity, Image, StatusBar } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import Share from 'react-native-share'; // Importing the share functionality
import CustomButton from '../../Component/Button';
import DatePicker from 'react-native-date-picker'
import { ButtonComp, DatePick, formatDateTime, InputTitle, } from './Custom';
import ItemModal from './ItemModal';
import { HtmlContent } from './PdfHtmlContant';
import { useDispatch, useSelector } from 'react-redux';
import { itemCountDecrease, itemCountIncrease, RemoveToCart } from '../../service/redux/CartSlice';

const PdfBill = () => {

  const [bookingDateOpen, setBookingDateOpen] = useState(false)
  const [laiJavaNiDateOpen, setLaiJavaNiDateOpen] = useState(false)
  const [bhaduApiyaNiDateOpen, setBhaduApiyaNIDateOpen] = useState(false)
  const [pachiApvaNiDateOpen, setPachiApvaNiDateOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [userDetails, setUserDetails] = useState({
    name: '',
    billNo: 'T021585',
    addresh: '',
    bookingDate: new Date(),
    phone1: '',
    phone2: '',
    laiJavaNiDate: new Date(),
    TotalBhadu: 0,
    bhaduDate: new Date(),
    advance: '',
    pachiAapvaniDate: new Date(),
    bakiBhadu: 0,
  });

  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.cart.cart;
  })
  const total = data?.reduce((a, b) => a + Number(b.price * b.itemCount), 0);
  const baki = total - userDetails.advance;
  useEffect(() => {
    setUserDetails(prevState => ({
      ...prevState,
      TotalBhadu: total,
      bakiBhadu: Number(baki)
    }));
  }, [total, userDetails.TotalBhadu, userDetails.advance, userDetails.bakiBhadu])
  const generatePDF = async () => {

    try {
      const options = {
        html: HtmlContent(userDetails, data),
        fileName: 'bill',
        directory: 'Documents',
        orientation: 'landscape',
      };

      const file = await RNHTMLtoPDF.convert(options);
      sharePDFToPhone(file.filePath);

    } catch (error) {
      console.error('Error generating PDF:', error);

    }
  };

  const sharePDFToPhone = async (filePath) => {
    try {
      const phoneNumber = userDetails.phone1 || userDetails.phone2

      // const emptyField = Object.keys(userDetails).find((key) => userDetails[key] === '');

      // if (emptyField) {
      //   Alert.alert('Error', `Please fill in the ${emptyField}`);
      //   return;
      // }
      const url = `whatsapp://send?phone=${phoneNumber}&text=Here is the bill PDF`;
      const options = {
        url: 'file://' + filePath,
        type: 'application/pdf',
        title: 'Share Bill PDF',
        social: Share.Social.WHATSAPP,
        message: 'Sending you the bill PDF',
        subject: 'Bill PDF'
      };

      await Share.open(options);
      const openWhatsapp = async () => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
          await Linking.openURL(url);
        } else {
          // Alert.alert('Error', 'WhatsApp is not installed on this device');
        }
      };
      openWhatsapp();
    } catch (error) {
      console.error('Error sharing PDF:', error);
    }
  };


  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View>

      </View>
      <ScrollView style={styles.container}>
        {<View style={styles.userDetailsContainer}>
          <Text style={styles.header}>ગ્રાહક ની માહિતી </Text>

          <InputTitle title={'ગ્રાહક નું નામ'} />
          <TextInput
            placeholderTextColor={'lightgray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, name: txt })}
            placeholder="ગ્રાહક નું નામ..."
            style={styles.input}
          />


          <InputTitle title={'ગ્રાહક નો ફોન નંબર_૧'} />
          <TextInput
            placeholderTextColor={'lightgray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, phone1: txt })}
            placeholder="ગ્રાહક નો ફોન નંબર_૧"
            keyboardType="phone-pad"
            style={styles.input}
          />

          <InputTitle title={'ગ્રાહક નો ફોન નંબર_ર'} />
          <TextInput
            placeholderTextColor={'lightgray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, phone2: txt })}
            placeholder="ગ્રાહક નો ફોન નંબર_ર"
            keyboardType="phone-pad"
            style={styles.input}
          />
          <InputTitle title={'સરનામું'} />
          <TextInput
            maxLength={90}
            multiline={true}
            placeholderTextColor={'lightgray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, addresh: txt })}
            placeholder="સરનામું"
            style={[styles.input, {
              height: 70, textAlign: 'left',
              textAlignVertical: 'top'
            }]}
          />

          <Text style={styles.header}>બુકિંગ ની માહિતી </Text>
          {/* <DatePick disabled={true} placeholder={'બુકિંગ તારીખ'} title={formatDateTime(userDetails.bookingDate)} onPress={() => { setBookingDateOpen(true) }} /> */}

          <InputTitle title={'ટ્રે લઇ જવાની તારીખ'} />
          <DatePick placeholder={'લઇ જવાની તારીખ'} title={formatDateTime(userDetails.laiJavaNiDate)} onPress={() => { setLaiJavaNiDateOpen(true) }} />
          <InputTitle title={'ટ્રે પાછી આપવાની તારીખ'} />
          <DatePick placeholder={'પાછી આપવાની તારીખ'} title={formatDateTime(userDetails.pachiAapvaniDate)} onPress={() => { setPachiApvaNiDateOpen(true) }} />

          <View>
            <InputTitle title={'એડવાન્સ'} />
            <TextInput
              placeholderTextColor={'gray'}
              value={userDetails.advance.toString()}
              onChangeText={(txt) => setUserDetails({ ...userDetails, advance: txt })}
              placeholder="એડવાન્સ"
              keyboardType="phone-pad"
              style={[styles.input, { alignSelf: 'flex-start' }]}
            />

            {/* <InputTitle title={'બાકી ભાડુ'} />
            <DatePick title={userDetails.bakiBhadu} disabled={true} />

            <InputTitle title={'ટોટલ ભાડુ'} />
            <DatePick title={userDetails.TotalBhadu} disabled={true} /> */}

          </View>
          <InputTitle title={'ભાડુ આપ્યાં ની તારીખ'} />
          <DatePick placeholder={'ભાડુ આપ્યાં ની તારીખ'} title={formatDateTime(userDetails.bhaduDate)} onPress={() => { setBhaduApiyaNIDateOpen(true) }} />

        </View>}


        {<View style={styles.itemsContainer}>
          <Text style={[styles.header, { paddingHorizontal: 20, marginTop: -5 }]}>ટ્રે ની માહિતી </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginHorizontal: 10 }}>
            {data.map((item, index) => (
              <View key={index} style={{ width: '48%', marginBottom: 15, backgroundColor: 'white', elevation: 5, padding: 10, borderRadius: 8 }}>
                <View style={{ flexDirection: 'row', }}>
                  <Image source={{ uri: item.img }} style={{ height: 50, width: 50, borderRadius: 5 }} />
                  <View style={{ flexDirection: 'column', marginLeft: 10, flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, }} numberOfLines={2}>{item.name + ' ' + item.trayNo}</Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 2, fontSize: 15, color: 'green', opacity: 0.8 }}>{'Rs.' + item.price}</Text>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7, marginTop: 5 }}>
                    <TouchableOpacity onPress={() => dispatch(itemCountDecrease(item.trayNo))} style={{ height: 20, width: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightyellow', borderRadius: 5 }}  >
                      <Text style={{ textAlign: 'center', color: 'rgb(146, 35, 35)', fontSize: 18, lineHeight: 19, fontWeight: 'bold' }}>-</Text>
                    </TouchableOpacity>
                    <Text>{item.itemCount}</Text>
                    <TouchableOpacity onPress={() => dispatch(itemCountIncrease(item.trayNo))} style={{ height: 20, width: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightyellow', borderRadius: 5 }}  >
                      <Text style={{ textAlign: 'center', color: 'rgb(146, 35, 35)', lineHeight: 19, fontWeight: 'bold' }}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={() => dispatch(RemoveToCart(item))}>
                    <Image
                      style={{ height: 18, width: 18, tintColor: 'red' }}
                      source={{ uri: 'https://cdn0.iconfinder.com/data/icons/ui-essentials-2-3/32/user_interface_ui_basic_app_trash_bin_delete-512.png' }}
                    />
                  </TouchableOpacity>
                </View>

              </View>
            ))}
          </View>
          <TouchableOpacity onPress={() => setVisible(true)} style={{
            backgroundColor: 'rgb(146, 35, 35)', height: 45, width: 45, borderRadius: 50,
            marginBottom: 80, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginRight: 5
          }}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 16 }}>+</Text>
          </TouchableOpacity>
        </View>}
      </ScrollView>
      <ButtonComp Total={'Rs.' + userDetails.TotalBhadu + '/-'}
        style={{ position: 'absolute', bottom: 10, left: 10, right: 10 }}
        title="Generate Order" onPress={generatePDF} />
      <DatePicker
        modal
        open={bookingDateOpen}
        date={userDetails.bookingDate}
        onConfirm={(date) => {
          setBookingDateOpen(false)
          setUserDetails({ ...userDetails, bookingDate: new Date(date) })
        }}
        onCancel={() => {
          setBookingDateOpen(false)
        }}
      />
      <DatePicker
        modal
        open={laiJavaNiDateOpen}
        date={userDetails.laiJavaNiDate}
        onConfirm={(date) => {
          setLaiJavaNiDateOpen(false)
          setUserDetails({ ...userDetails, laiJavaNiDate: new Date(date) })
        }}
        onCancel={() => {
          setLaiJavaNiDateOpen(false)
        }}
      />
      <DatePicker
        modal
        open={bhaduApiyaNiDateOpen}
        date={userDetails.bhaduDate}
        onConfirm={(date) => {
          setBhaduApiyaNIDateOpen(false)
          setUserDetails({ ...userDetails, bhaduDate: new Date(date) })
        }}
        onCancel={() => {
          setBhaduApiyaNIDateOpen(false)
        }}
      />
      <DatePicker
        modal
        open={pachiApvaNiDateOpen}
        date={userDetails.pachiAapvaniDate}
        onConfirm={(date) => {
          setPachiApvaNiDateOpen(false)
          setUserDetails({ ...userDetails, pachiAapvaniDate: new Date(date) })
        }}
        onCancel={() => {
          setPachiApvaNiDateOpen(false)
        }}
      />
      <ItemModal visible={visible} save={() => setVisible(false)} />

    </View>

  );
};

export default PdfBill;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  userDetailsContainer: {
    backgroundColor: 'white',
    padding: 20,

  },

  itemsContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,

  },
  itemContainer: {
    backgroundColor: '#f9f9f9', borderRadius: 10, marginTop: 10, marginHorizontal: 10,
    padding: 10,

  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: -20,
    color: 'white',
    backgroundColor: 'rgb(146, 35, 35)', width: 180, paddingHorizontal: 10, borderTopRightRadius: 20, borderBottomRightRadius: 20, height: 35, lineHeight: 35,
  },

  input: {
    height: 45,
    borderWidth: 2,
    borderColor: 'rgb(146, 35, 35)',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 8,
    fontSize: 15,
    backgroundColor: '#fff',
    fontWeight: 'bold'
  },

});


// import React from 'react';
// import { View, Button, Linking } from 'react-native';
// import Share from 'react-native-share';

// const ShareFileToSpecificWhatsApp = () => {
//   const phoneNumber = '1234567890'; // Replace with the target phone number (international format, without '+')
//   const filePath = 'file://path_to_your_file'; // Replace with your file path

//   const shareFileToWhatsApp = async () => {
//     try {
//       // First, open the WhatsApp chat using the phone number
//       const whatsappLink = `https://wa.me/${phoneNumber}`;
//       await Linking.openURL(whatsappLink);

//       // Now, share the file to WhatsApp
//       const shareOptions = {
//         title: 'Share File',
//         url: filePath,
//         social: Share.Social.WHATSAPP,
//       };

//       const result = await Share.open(shareOptions);
//       console.log(result);
//     } catch (error) {
//       console.error('Error sharing file to WhatsApp:', error);
//     }
//   };

//   return (
//     <View>
//       <Button title="Share File to WhatsApp" onPress={shareFileToWhatsApp} />
//     </View>
//   );
// };

// export default ShareFileToSpecificWhatsApp;
