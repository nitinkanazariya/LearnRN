
import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';  // Import react-native-fs

const LocalExcelData = () => {
  const [excelData, setExcelData] = useState([]);

  const readExcelFile = async () => {
    try {
      // Open document picker to choose the file
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.plainText, DocumentPicker.types.xlsx],
      });

      console.log("Selected file URI: ", res[0].uri);  // Log URI for debugging

      // Copy the content:// URI to a local file path
      const localFilePath = `${RNFS.DocumentDirectoryPath}/tempExcelFile.xlsx`;

      // Use RNFS to copy the content URI to a local path
      await RNFS.copyFile(res[0].uri, localFilePath);

      console.log("File copied to local path: ", localFilePath);

      // Read the file content as base64
      const fileContent = await RNFS.readFile(localFilePath, 'base64');

      // Decode the base64 file content into a buffer
      const fileBuffer = new Uint8Array(atob(fileContent).split("").map(c => c.charCodeAt(0)));

      // Parse the Excel file using XLSX
      const wb = XLSX.read(fileBuffer, { type: 'array' });
      const sheet = wb.Sheets[wb.SheetNames[0]];  // First sheet
      const data = XLSX.utils.sheet_to_json(sheet);  // Convert sheet to JSON

      // Set the parsed data in the state
      setExcelData(data);
    } catch (err) {
      console.log('Error picking file:', err);
    }
  };

  const list = ({ item }) => {
    console.log(item);

    return (
      <View>
        <Text>{item['First Name']}</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, }}>
      <Button title="Select Excel File" onPress={readExcelFile} />

      <FlatList
        data={excelData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={list}
      />
    </View>
  );
};

export default LocalExcelData;
