import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  View,
} from 'react-native';
import {getVideos} from '../services/getVideos';
import {youtubeArray} from './temp';
import MenuItem from './MenuItem';
import PlayVideo from './PlayVideo';

function Menu({navigation}) {
  const [request, setRequest] = useState();
  const [youtubeResponse, setYouTubeResponse] = useState();
  const [video, setVideo] = useState();

  useEffect(() => {
    getVideos().then(res => {
      if (res === 'error') {
        Alert.alert(
          'Something went wrong with your request.',
          'Please try again.',
          [{cancelable: true}],
        );
      }
      setYouTubeResponse(res.items);
    });
  }, [request]);

  useEffect(() => {
    console.log({video});
  }, [video]);

  const clearVideo = () => {
    console.log('in clear video');
    setVideo();
  };

  if (video) {
    console.log('in if video', video);
    return (
      <View style={styles.container}>
        <PlayVideo videoId={video} clearVideo={clearVideo} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {/* <Text style={styles.title}> Menu </Text> */}
        {youtubeResponse &&
          youtubeResponse.map((item, index) => {
            return (
              <MenuItem
                key={index}
                title={item.snippet.title}
                image={item.snippet.thumbnails.default}
                videoId={item.id.videoId}
                setVideo={setVideo}
              />
            );
          })}
      </View>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {},
  menu: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
  },
});
