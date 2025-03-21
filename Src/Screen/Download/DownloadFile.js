
import React, { useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';
import RNFS from 'react-native-fs';
import { getFileNameFromUrl } from 'react-native-fs'; // Optionally use this to extract file name.

const FileDownloadExample = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState('');

  const downloadFile = async () => {
    const fileUrl = 'https://jktourism.ae/wp-content/uploads/2024/09/img-2.jpg'; // Replace with the actual file URL

    try {
      setIsDownloading(true);
      setDownloadStatus('Starting download...');

      // Get the file name from the URL (you can use a custom function or just split the URL)
      const fileName = fileUrl.split('/').pop(); // Get the last part of the URL as the filename
      const fileExtension = fileName.split('.').pop(); // Extract file extension

      const folderPath = RNFS.DownloadDirectoryPath + '/myAppFolder'; // Your custom folder name

      // Check if the folder exists, and create it if it does not
      const folderExists = await RNFS.exists(folderPath);
      if (!folderExists) {
        await RNFS.mkdir(folderPath);
        setDownloadStatus('Folder created...');
      }

      // Define the file path for saving the media with correct extension
      const destPath = folderPath + '/' + fileName;

      // Download the file and save it to the app's folder
      const download = RNFS.downloadFile({
        fromUrl: fileUrl,
        toFile: destPath,
      });

      // Start the download
      await download.promise;

      setDownloadStatus(`Download complete! File saved as: ${fileName}`);
      console.log('File saved to:', destPath);
    } catch (error) {
      setIsDownloading(false);
      setDownloadStatus('Download failed.');
      Alert.alert('Error', 'Failed to download the file');
      console.error(error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title={isDownloading ? 'Downloading...' : 'Download File'}
        onPress={downloadFile}
        disabled={isDownloading}
      />
      {isDownloading && <Text>{downloadStatus}</Text>}
      {!isDownloading && downloadStatus && <Text>{downloadStatus}</Text>}
    </View>
  );
};

export default FileDownloadExample;
