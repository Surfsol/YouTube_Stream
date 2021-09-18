import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {wp} from '../utils/dimensions';
import BackArrow from '../assets/BackArrow';

const PlayVideo = ({videoId, clearVideo}) => {
  const uri = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={clearVideo}>
        <BackArrow style={styles.arrow} />
        <Text style={styles.back}>Videos</Text>
      </Pressable>
      <WebView
        style={styles.webView}
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
  container: {
    flex: 1,
    width: wp(100),
  },
  back: {
    color: '#000000',
    fontSize: 20,
    marginLeft: 35,
    fontWeight: '500',
  },
  backButton: {
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
  webView: {
    marginTop: 0,
  },
});
