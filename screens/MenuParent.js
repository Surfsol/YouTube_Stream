import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  NativeModules
} from 'react-native';
import {getVideos} from '../services/getVideos';
import PlayVideo from '../components/PlayVideo';
import {wp} from '../utils/dimensions';
import {useDeviceOrientation} from '@react-native-community/hooks';
import { VideoSelectedModule } from '../utils/IosVideoSelectedModule';

const {CustomNative}=NativeModules;

const MenuParent = ({route, navigation}) => {
  const [youtubeResponse, setYouTubeResponse] = useState();
  const [video, setVideo] = useState();
  const {landscape} = useDeviceOrientation();
  const {adjustedSearch} = route.params;
  const [dateEvent, setDateEvent] = useState()

  useEffect(() => {
    getVideos(adjustedSearch).then(res => {
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
    setVideo();
  };

  const videoEventId = async(title) => {
    try {
      const eventId = await VideoSelectedModule.createVideoEvent(
        title
      );
        setDateEvent(eventId)
    } catch (e) {
      Alert.alert(
        'Error.',
        'Please try again.',
        [{cancelable: true}],
      );
    }
  }

  const videoHandle = (item) => {
    setVideo(item)
    videoEventId(item.snippet.title)
  }

  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => videoHandle(item)}
          style={landscape ? styles.itemLand : styles.item}>
          <Image
            style={landscape ? styles.imageLand : styles.image}
            source={{uri: item.snippet.thumbnails.default.url}}
          />
          <Text style={landscape ? styles.titleLand : styles.title}>
            {item.snippet.title}
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  if (!youtubeResponse) {
    return (
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          width: '100%',
          height: '100%',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  const kotlinMessage = () => {
    CustomNative.Toastshow(`Loading: ${video.snippet.title}`, CustomNative.LONG);
   }

  if (video) {
    kotlinMessage()
    return (
      <View style={styles.container}>
        <PlayVideo
          videoId={video.id.videoId}
          clearVideo={clearVideo}
          navigation={navigation}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  containerLand: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  item: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
    marginBottom: 15,
    width: wp(95),
  },
  itemLand: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: wp(100),
    padding: 20,
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
});

export default MenuParent;
