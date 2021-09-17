import React from 'react';
import {NodePlayerView} from 'react-native-nodemediaclient';
import {Pressable, StyleSheet, Text} from 'react-native'
//import VideoPlayer from 'react-native-video-controls';

const PlayVideo = ({videoId, clearVideo}) => {
  console.log({videoId});
  const uri = `https://www.youtube.com/watch?v=${videoId}`
  //https://www.youtube.com/watch?v=Z-Nwo-ypKtM
  return (
//     <VideoPlayer
//   source={{uri: `https://www.youtube.com/watch?v=${videoId}`}}
//   navigator={this.props.navigator}
// />
    // <ReactNativeVideo
    //       resizeMode="contain"
    //       onError={console.log}
    //       style={styles.video}
    //       paused={false}
    //       source={{ uri }}
    //       ignoreSilentSwitch="ignore"
    //       repeat
    //       controls
    //     />
    <>
    <Pressable style={styles.button} onPress={clearVideo}><Text>Back</Text></Pressable>
    <NodePlayerView
      style={{height: 200}}
      ref={vp => {
        this.vp = vp;
      }}
      inputUrl={`https://www.youtube.com/watch?v=${videoId}`}
      scaleMode={'ScaleAspectFit'}
      bufferTime={300}
      maxBufferTime={1000}
      autoplay={true}
    />
    </>
  );
};

export default PlayVideo;

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginLeft: 20,
      marginRight: 20,
    }
})