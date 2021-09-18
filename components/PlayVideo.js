import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';
import { wp } from '../utils/dimensions';

const PlayVideo = ({videoId, clearVideo, navigation}) => {
  const uri = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <View style={{flex: 1, width: wp(100)}}>
      <Pressable style={styles.button} onPress={clearVideo}>
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    backgroundColor: 'pink',
    backgroundColor: '#FFFFFF',
  },
  back:{
    color: '#000000',
    fontSize: 25, 
  }
});
