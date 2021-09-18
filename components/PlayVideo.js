import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';
import { wp } from '../utils/dimensions';
import BackArrow from '../assets/BackArrow';

const PlayVideo = ({videoId, clearVideo}) => {
  const uri = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <View style={{flex: 1, width: wp(100)}}>
      <Pressable style={styles.button} onPress={clearVideo}>
        <BackArrow style={styles.arrow}/>
         <Text style={styles.back}>Menu</Text>
      </Pressable>
      <WebView
        style={{marginTop: 0}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsFullscreenVideo={true}
        source={{uri: uri}}
      />
    </View>
  );
};

export default PlayVideo;

const styles = StyleSheet.create({
  back:{
    color: '#000000',
    fontSize: 20,
    marginLeft: 35, 
    fontWeight: "500",
  },
  button: {
    flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'flex-start',
     marginLeft: 17,
     marginTop: 0,
     marginRight: 20,
     marginBottom: 5,
     backgroundColor: '#FFFFFF',
   height: 35,
   },
});
