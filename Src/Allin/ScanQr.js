
import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {

  const socialMedia = [
    {
      name: 'Instagram',
      icon: 'https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-512.png'
    },
    {
      name: 'Facebook',
      icon: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png'
    },
    {
      name: 'Twitter',
      icon: 'https://allpngfree.com/apf-prod-storage-api/storage/thumbnails/twitter-new-logo-png-transparent-images-thumbnail-1697953256.jpg'
    },
    {
      name: 'YouTube',
      icon: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png'
    },
    {
      name: 'Linkedin',
      icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'
    }
  ]
  return (
    <View style={{ height: 188, backgroundColor: 'white', borderRadius: 10, padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 20, elevation: 5 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Image source={{
            uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
          }} style={{ height: 63, width: 63, borderRadius: 30 }} />
          <View style={{ marginHorizontal: 30, flex: 1 }}>
            <Text numberOfLines={1} style={{ fontSize: 18, color: 'black', fontWeight: 'bold', overflow: 'hidden' }}>Andrey Boro</Text>
            <Text numberOfLines={1} style={{ color: '#959595', fontWeight: 'regular', fontSize: 14, marginTop: 5 }}>ASO specialist</Text>
          </View>


        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, }}>
          <Image source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/bootstrap-vol-4/16/qr-code-512.png'
          }} style={{ height: 75, width: 75, resizeMode: 'contain', }} />
          <View style={{ flex: 1, marginHorizontal: 18, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Image style={{ height: 18, width: 18, tintColor: '#01D6C9' }} source={{ uri: 'https://cdn3.iconfinder.com/data/icons/feather-5/24/phone-call-512.png' }} />
              <Text numberOfLines={1} style={{ fontSize: 12, color: '#7b7b7b', fontWeight: 'medium', marginLeft: 11, flex: 1, }}>+01 202-555-01021 </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 9 }}>
              <Image style={{ height: 18, width: 18, tintColor: '#01D6C9' }} source={{ uri: 'https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/mail4-512.png' }} />
              <Text numberOfLines={1} style={{ fontSize: 12, color: '#7b7b7b', fontWeight: 'medium', marginLeft: 11, flex: 1, }}>myemail@gmail.com</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 9, }}>
              <Image style={{ height: 18, width: 18, tintColor: '#01D6C9' }} source={{ uri: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/globe-512.png' }} />
              <Text numberOfLines={1} style={{ fontSize: 12, color: '#7b7b7b', fontWeight: 'medium', marginLeft: 11, flex: 1, }}>www.loremipsum</Text>
            </View>
          </View>
        </View>
      </View>


      <View>
        {socialMedia.map((i) => {
          return (
            <Image key={i.name} source={{ uri: i.icon }}
              style={{ height: 22, width: 22, borderRadius: 22, marginTop: 7 }} />
          )
        })}
      </View>

    </View>
  )
}

export default App