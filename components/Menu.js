import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { getVideos } from '../services/getVideos';
import { youtubeArray } from './temp';
import MenuItem from './MenuItem';

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=direct%20tv&key=AIzaSyDpcrJuY4lCNTkWu5WuWaaMQC4n72zRVcA

function Menu({ navigation }) {
  const [request, setRequest] = useState();
  const [youtubeResponse, setYouTubeResponse] = useState(youtubeArray);
  const [video, setVideo] = useState() 

  useEffect(() => {
    // getVideos().then((res) => {
    //   if (res === 'error'){
    //     Alert.alert(
    //       "Something went wrong with your request.",
    //       "Please try again.",
    //       [{ cancelable: true }]
    //     );
    //   }
    //   setYouTubeResponse(res.items);
    // })
  }, [request]);

  useEffect(() => {
    console.log({video})
    
  },[video])
 
//   if(video) {
//     console.log('in if video', video)

//   } 

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.title}> Menu </Text>
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
            
           
            )
          })
          
          }
      </View>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
  },
  item:{
    height: 150,
    width:200,
    backgroundColor:'red',
  }
});