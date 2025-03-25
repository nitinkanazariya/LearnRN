import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Alert, Linking, TouchableOpacity, Image } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import Share from 'react-native-share'; // Importing the share functionality
import CustomButton from '../../Component/Button';
import DatePicker from 'react-native-date-picker'
import { formatDateTime } from './ConvertDateAndTime';

const PdfBill = () => {

  const [bookingDateOpen, setBookingDateOpen] = useState(false)
  const [laiJavaNiDateOpen, setLaiJavaNiDateOpen] = useState(false)
  const [bhaduApiyaNiDateOpen, setBhaduApiyaNIDateOpen] = useState(false)
  const [pachiApvaNiDateOpen, setPachiApvaNiDateOpen] = useState(false)
  const [userDetails, setUserDetails] = useState({
    name: '',
    billNo: 11,
    addresh: '',
    bookingDate: new Date(),
    phone1: '',
    phone2: '',
    laiJavaNiDate: new Date(),
    TotalBhadu: '',
    bhaduDate: new Date(),
    advance: '',
    pachiAapvaniDate: new Date(),
    bakiBhadu: '',
  });
  const [items, setItems] = useState(
    new Array(13).fill({ name: '', price: '' })
  );

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setItems(updatedItems);
  };
  const addItem = () => {
    const updatedItems = [...items];
    updatedItems.push({ name: '', price: '' });
    setItems(updatedItems);
  };
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index); // Removes the item at the given index
    setItems(updatedItems);
  };
  const generatePDF = async () => {
    try {
      const htmlContent = `
     <html>

<head>
  <style>
    @page {
      size: A4 landscape;
    }

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }

    .container {
      display: flex;
      width: 100%;
      height: 100%;
    }

    .section {
      border: 2px solid rgb(146, 35, 35);
      width: 46%;
      box-sizing: border-box;
      height: auto;
      overflow: hidden;
      page-break-inside: avoid;
    }

    .items-table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
    }

    .items-table th,
    .items-table td {
      border: 1px solid rgb(146, 35, 35);
      padding: 5px;
      text-align: left;
      word-wrap: break-word;
      margin-left: -10px;
    }

    .items-table th {
      background-color: #f2f2f2;
    }



    .container {
      height: 100%
    }

    .section .items-table {
      font-size: 12px;
    }

    .items-table th,
    .items-table td {
      font-size: 12px;
    }
  </style>
</head>

<body>
  <div class="container">

    <div class="section" style="margin-left: 30px ">
    <div style="background:rgb(146, 35, 35); height: 150;">

      </div>
      <p
        style="font-size: 12px; font-weight: 900; letter-spacing: 1px; background: #faf884;text-align: center;margin-top: 0;padding:2px;">
        ૨૦૩,
        શાશ્વત મોલ, શુભ
        કોમ્પ્લેક્સ ની બાજુ માં,
        બોટાદ-૩૬૪૭૧૦</p>
        <div style="display: flex; flex-direction: row; justify-content:space-between; padding-left: 10px;margin-top: -15px;;
       padding-right: 10px;">
        <div style="flex-direction: row; display: flex;width: 100%;">
          <p style="font-weight: bold; font-size: 12px;  color: rgb(146, 28, 28);">નામ</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 85%;margin-left: 5px; padding-left: 10px ; font-size: 12px; font-weight: bold;color: black;">
    ${userDetails.name}</p>
        </div>
        <div style="display: flex; flex-direction: row; width: 50%;">
          <p style="font-weight: bold; font-size: 12px;  color:rgb(146, 28, 28);">બિલ નં.</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 67%;margin-left: 5px; padding-left: 10px ;  font-size: 12px; font-weight: bold;">
    ${userDetails.billNo}</p>
        </div>
      </div>


      <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 10px;
       padding-right: 10px;">
        <div style="flex-direction: row; display: flex;width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">અડ્રેસ</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 85%;margin-left: 5px; padding-left: 10px ; font-size: 12px; font-weight: bold;color: black;">
    ${userDetails.addresh}</p>
        </div>
        <div style="display: flex; flex-direction: row; width: 60%;">
          <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">બુકિંગ તા.</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 65%;padding-left: 10px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
    ${formatDateTime(userDetails.bookingDate)}</p>
        </div>
      </div>


      <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 10px;
       padding-right: 10px;">
        <div style="flex-direction: row; display: flex;width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">મો.</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 100%;margin-left: 5px; padding-left: 10px ; font-size: 12px; font-weight: bold;color: black;">
    ${userDetails.phone1}</p>
        </div>
        <div style="display: flex; flex-direction: row; width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">મો.</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 88%;padding-left: 10px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
    ${userDetails.phone2}</p>
        </div>
      </div>
      <div style="border-bottom: 1px solid; margin-left: -20px; margin-right: -20; border-color: rgb(146, 35, 35);">
      </div>
      <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -5px;  padding-left: 10px;
       padding-right: 10px;">
        <div style="flex-direction: row; display: flex;width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">લઈ જવાની તા:-</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 57%;margin-left: 5px; padding-left: 10px ; font-size: 12px; font-weight: bold;color: black;">
    ${formatDateTime(userDetails.laiJavaNiDate)}</p>
        </div>
        <div style="display: flex; flex-direction: row; width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">ટોટલ ભાડુ:-</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 71%;padding-left: 10px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
    ${userDetails.TotalBhadu}</p>
        </div>
      </div>
      <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 10px;
       padding-right: 10px;">
        <div style="flex-direction: row; display: flex;width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">ભાડુ તા:-</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 71%;margin-left: 5px; padding-left: 10px ; font-size: 12px; font-weight: bold;color: black;">
    ${formatDateTime(userDetails.bhaduDate)}</p>
        </div>
        <div style="display: flex; flex-direction: row; width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">એડવાન્સ:-</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 72%;padding-left: 10px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
    ${userDetails.advance}</p>
        </div>
      </div>
      <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 10px;
       padding-right: 10px;">
        <div style="flex-direction: row; display: flex;width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">પાછી આપવાની તા:-</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 50%;margin-left: 5px; padding-left: 10px ; font-size: 12px; font-weight: bold;color: black;">
    ${formatDateTime(userDetails.pachiAapvaniDate)}</p>
        </div>
        <div style="display: flex; flex-direction: row; width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">બાકી ભાડુ:-</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 71%;padding-left: 10px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
    ${userDetails.bakiBhadu}</p>
        </div>

      </div>
     
      <table class="items-table" style="margin-top: 0px; ">
        <thead>
          <tr>
            <th style="width: 5%; text-align: center; border-left: 0; ">ક્રમ</th>
            <th style=" text-align: center; ">વિગત</th>
            <th style="width: 5%; text-align: center; ">નંગ</th>
            <th style="width: 10%; text-align: center; ">ભાવ</th>
            <th style="width: 10%; text-align: center;border-right: 0; ">રકમ</th>
          </tr>
        </thead>
        <tbody>
         ${items.map((item, index) => {
        return `
            <tr>
              <td style="text-align: center; border-left: 0;">${index + 1}</td>
              <td>${item.name}</td>
              <td style="text-align: center;">5</td>
              <td style="text-align: center;">${item.price}</td>
              <td style="text-align: center; border-right: 0;">${item.price * 10}</td>
            </tr>
          `;
      }).join('')}

        </tbody>
      </table>
        <p
        style="font-weight: bold;font-size: 8px; background: rgb(146, 35, 35); margin-top: 0;text-align: center; color: white;padding: 2px;letter-spacing: 1;">
        (૧)ડિપોઝિટ ભાડુ ડિલિવરી
        લેવા આવો ત્યારે
        ફરજીયાત લાવવુ <span style="margin-left: 5px;"> </span>(ર)કારણ ગમે તે
        હોય એડવાન્સ રીટર્ન મળશે નહી. </p>
      <p style="font-size: 11px; font-weight: bold;color:rgb(146, 35, 35);padding-left: 10px;line-height: 20px;">
        (૧) <span style="margin-left: 3px;"></span>બુકિંગ કરાવેલ ટ્રે કૅન્સલ કે તેમા ફેરફાર થશે નહિ.<br>
        (ર)<span style="margin-left: 3px;"></span> કોઈ પણ ટ્રે માં ડેમેજ થાય તો તેનો ચાર્જ અલગ થી લેવા મા આવશે.<br>
        (3)<span style="margin-left: 3px;"></span> ટ્રે ની રીટર્ન તારીખ, સમય થી લેટ આપનાર પાસે ડબલ ભાડુ લેવા મા
        આવશે.<br>

      </p>
    </div>












    <div class="section" style="margin-left: 25px">
    <div style="display: flex; flex-direction: row; justify-content:space-between; padding-left: 10px;
       padding-right: 10px;">
        <div style="flex-direction: row; display: flex;width: 100%;">
          <p style="font-weight: bold; font-size: 12px;  color: rgb(146, 28, 28);">નામ</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 85%;margin-left: 5px; padding-left: 10px ; font-size: 12px; font-weight: bold;color: black;">
            nitin</p>
        </div>
        <div style="display: flex; flex-direction: row; width: 50%;">
          <p style="font-weight: bold; font-size: 12px;  color:rgb(146, 28, 28);">બિલ નં.</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 67%;margin-left: 5px; padding-left: 10px ;  font-size: 12px; font-weight: bold;">
            1K215</p>
        </div>
      </div>


      <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 10px;
       padding-right: 10px;">
        <div style="flex-direction: row; display: flex;width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">અડ્રેસ</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 85%;margin-left: 5px; padding-left: 10px ; font-size: 12px; font-weight: bold;color: black;">
            meghaninager-1 turkhaturkhaturkhaturkha roa d shree nath</p>
        </div>
        <div style="display: flex; flex-direction: row; width: 50%;">
          <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">બુકિંગ તા.</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 62%;padding-left: 10px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
            20/03/2025</p>
        </div>
      </div>


      <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 10px;
       padding-right: 10px;">
        <div style="flex-direction: row; display: flex;width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">મો.</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 100%;margin-left: 5px; padding-left: 10px ; font-size: 12px; font-weight: bold;color: black;">
            9589355825</p>
        </div>
        <div style="display: flex; flex-direction: row; width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">મો.</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 88%;padding-left: 10px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
            9158485965</p>
        </div>
      </div>
      <div style="border-bottom: 1px solid; margin-left: -20px; margin-right: -20; border-color: rgb(146, 35, 35);">
      </div>
      <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -5px;  padding-left: 10px;
       padding-right: 10px;">
        <div style="flex-direction: row; display: flex;width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">લઈ જવાની તા:-</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 57%;margin-left: 5px; padding-left: 10px ; font-size: 12px; font-weight: bold;color: black;">
            20/10/2025</p>
        </div>
        <div style="display: flex; flex-direction: row; width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">ટોટલ ભાડુ:-</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 71%;padding-left: 10px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
            2500/-</p>
        </div>
      </div>
      <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 10px;
       padding-right: 10px;">
        <div style="flex-direction: row; display: flex;width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">ભાડુ તા:-</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 71%;margin-left: 5px; padding-left: 10px ; font-size: 12px; font-weight: bold;color: black;">
            20/10/2025</p>
        </div>
        <div style="display: flex; flex-direction: row; width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">એડવાન્સ:-</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 72%;padding-left: 10px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
            2500/-</p>
        </div>
      </div>
      <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 10px;
       padding-right: 10px;">
        <div style="flex-direction: row; display: flex;width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">પાછી આપવાની તા:-</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 50%;margin-left: 5px; padding-left: 10px ; font-size: 12px; font-weight: bold;color: black;">
            20/10/2025</p>
        </div>
        <div style="display: flex; flex-direction: row; width: 100%;">
          <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">બાકી ભાડુ:-</p>
          <p
            style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 71%;padding-left: 10px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
            2500/-</p>
        </div>

      </div>
      <!-- <div style="border-bottom: 1px solid; margin-left: -20px; margin-right: -20; border-color: rgb(146, 35, 35);">
      </div> -->

      <table class="items-table">
        <thead>
          <tr>
            <th style="width: 5%; text-align: center; border-left: 0; ">ક્રમ</th>
            <th style=" text-align: center; ">વિગત</th>
            <th style="width: 5%; text-align: center; ">નંગ</th>
            <th style="width: 10%; text-align: center; ">ભાવ</th>
            <th style="width: 10%; text-align: center;border-right: 0; ">રકમ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: center;border-left: 0;">1</td>
            <td>Item 1</td>
            <td style=" text-align: center; ">5</td>
            <td style=" text-align: center; ">$25.00</td>
            <td style="text-align: center;border-right: 0;">$25.00</td>
          </tr>

        </tbody>
      </table>
    </div>
    </div>
  </div>
</body>

</html>

      `;

      const options = {
        html: htmlContent,
        fileName: 'bill',
        directory: 'Documents',
        orientation: 'landscape',
      };

      const file = await RNHTMLtoPDF.convert(options);
      Alert.alert('PDF Created', `Your PDF file is saved at ${file.filePath}`);
      sharePDFToPhone(file.filePath);

    } catch (error) {
      console.error('Error generating PDF:', error);
      Alert.alert('Error', 'Failed to generate PDF');
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
          Alert.alert('Error', 'WhatsApp is not installed on this device');
        }
      };
      openWhatsapp();
    } catch (error) {
      console.error('Error sharing PDF:', error);
    }
  };




  // name: '',
  // billNo: '',
  // addresh: '',
  // bookingDate: '',
  // phone1: '',
  // phone2: '',
  // laiJavaNiDate: '',
  // TotalBhadu: '',
  // bhaduDate: '',
  // advance: '',
  // pachiAapvaniDate: '',
  // bakiBhadu: '',

  return (
    <View style={{ flex: 1 }}>

      <ScrollView style={styles.container}>
        <View style={styles.userDetailsContainer}>
          <Text style={styles.header}>User Details</Text>
          <TextInput
            placeholderTextColor={'gray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, name: txt })}
            placeholder="ગ્રાહક નું નામ"
            style={styles.input}
          />
          <TextInput
            placeholderTextColor={'gray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, addresh: txt })}
            placeholder="સરનામું "
            style={styles.input}
          />
          <DatePick placeholder={'બુકિંગ તારીખ'} title={formatDateTime(userDetails.bookingDate)} onPress={() => { setBookingDateOpen(true) }} />

          <TextInput
            placeholderTextColor={'gray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, phone1: txt })}
            placeholder="ગ્રાહક નો ફોન નંબર_૧ "
            keyboardType="phone-pad"
            style={styles.input}
          />
          <TextInput
            placeholderTextColor={'gray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, phone2: txt })}
            placeholder="ગ્રાહક નો ફોન નંબર_ર"
            keyboardType="phone-pad"
            style={styles.input}
          />
          {/* <TextInput
                placeholderTextColor={'gray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, laiJavaNiDate: txt })}
            placeholder="લઇ જવાની તારીખ "
            keyboardType="phone-pad"
            style={styles.input}
          /> */}
          <DatePick placeholder={'લઇ જવાની તારીખ'} title={formatDateTime(userDetails.laiJavaNiDate)} onPress={() => { setLaiJavaNiDateOpen(true) }} />

          <TextInput
            placeholderTextColor={'gray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, TotalBhadu: txt })}
            placeholder="ટોટલ ભાડુ"
            keyboardType="phone-pad"
            style={styles.input}
          />
          {/* <TextInput
            placeholderTextColor={'gray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, bhaduDate: txt })}
            placeholder="ભાડુ આપ્યાં ની તારીખ "
            keyboardType="phone-pad"
            style={styles.input}
          /> */}
          <DatePick placeholder={'ભાડુ આપ્યાં ની તારીખ'} title={formatDateTime(userDetails.bhaduDate)} onPress={() => { setBhaduApiyaNIDateOpen(true) }} />

          <TextInput
            placeholderTextColor={'gray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, advance: txt })}
            placeholder="એડવાન્સ"
            keyboardType="phone-pad"
            style={styles.input}
          />
          {/* <TextInput
            placeholderTextColor={'gray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, pachiAapvaniDate: txt })}
            placeholder="પાછી આપવાની તારીખ"
            keyboardType="phone-pad"
            style={styles.input}
          /> */}
          <DatePick placeholder={'પાછી આપવાની તારીખ'} title={formatDateTime(userDetails.pachiAapvaniDate)} onPress={() => { setPachiApvaNiDateOpen(true) }} />

          <TextInput
            placeholderTextColor={'gray'}
            onChangeText={(txt) => setUserDetails({ ...userDetails, bakiBhadu: txt })}
            placeholder="બાકી ભાડુ"
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>


        {/* //item section */}
        <View style={styles.itemsContainer}>
          <Text style={styles.header}>Items</Text>
          {items.map((item, index) => (
            <View key={index} style={styles.itemContainer}>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold', }}>{'Item ' + (index + 1)}</Text>
                <TouchableOpacity style={{}} onPress={() => removeItem(index)}>
                  <Image style={{ height: 18, width: 18, tintColor: 'red' }} source={{ uri: 'https://cdn0.iconfinder.com/data/icons/ui-essentials-2-3/32/user_interface_ui_basic_app_trash_bin_delete-512.png' }} />
                </TouchableOpacity>
              </View>
              <TextInput
                placeholderTextColor={'gray'}
                style={styles.input}
                placeholder={`Enter item name`}
                value={item.name}
                onChangeText={(value) => handleItemChange(index, 'name', value)}
              />
              <TextInput
                style={styles.input}
                placeholder={`Enter item Price`}
                value={item.price}
                onChangeText={(value) => handleItemChange(index, 'price', value)}
                keyboardType="numeric"
              />
            </View>
          ))}
          <CustomButton style={{
            height: 50, width: 50, borderRadius: 50, alignSelf: 'flex-end',
            marginBottom: 100

          }} title="+" onPress={addItem} />
        </View>
      </ScrollView>
      <CustomButton style={{ position: 'absolute', bottom: 10, left: 10, right: 10 }} title="Generate Bill PDF" onPress={generatePDF} />
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
    backgroundColor: '#000',
    padding: 15,

  },
  billDetailsContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  itemsContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10

  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 10,

  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#888',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    fontSize: 15,
    backgroundColor: '#fff',
    fontWeight: 'bold'
  },
  textArea: {
    height: 80,
  },
});

const DatePick = ({ title, onPress, placeholder }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ backgroundColor: 'white', height: 40, borderRadius: 10, justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ color: 'gray', flex: 1, fontWeight: 'bold', fontSize: 15 }}>{placeholder}</Text>
      <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>
  )
}
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
