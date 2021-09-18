import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {getVideos} from '../services/getVideos';
import {youtubeArray} from './temp';
import PlayVideo from './PlayVideo';
import {wp} from '../utils/dimensions';
import {useDeviceOrientation} from '@react-native-community/hooks';


const MenuParent = ({navigation}) => {
  const [youtubeResponse, setYouTubeResponse] = useState();
  const [video, setVideo] = useState();
  const {landscape} = useDeviceOrientation();

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
    }, []);

  const clearVideo = () => {
    console.log('in clear video');
    setVideo();
  };

  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => setVideo(item.id.videoId)}
          style={landscape ? styles.itemLand : styles.item}>
          <Image
            style={landscape ? styles.imageLand : styles.image}
            source={{uri: item.snippet.thumbnails.default.url}}
          />
          <Text style={landscape ? styles.titleLand : styles.title}>{item.snippet.title}</Text>
        </TouchableOpacity>
      </>
    );
  };

  if (video) {
    console.log('in if video', video);
    return (
      <View style={styles.container}>
        <PlayVideo videoId={video} clearVideo={clearVideo} navigation={navigation}/>
      </View>
    );
  } 

  return (
    <SafeAreaView style={landscape ? styles.containerLand : styles.container}>
      <FlatList
        data={youtubeResponse}
        renderItem={renderItem}
        keyExtractor={item => item.etag}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerLand: {
    flex: 1,
    flexDirection: 'column',
     alignItems: 'center',
     marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
  },
  item: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
    marginBottom: 15,
  },
  itemLand: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: wp(100),
    padding: 20
  },
  title: {
    color: 'black',
    width: wp(90),
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 15,
  },
  titleLand: {
    color: 'black',
    width: wp(40),
  },
  image: {
    height: 200,
    width: wp(100),
    marginBottom: 10,
  },
  imageLand: {
    height: 120,
    width: wp(70),
    marginBottom: 10,
    marginRight: 15,
  },
});

export default MenuParent;
