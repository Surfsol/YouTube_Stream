import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const MenuItem = ({ title, image, videoId, setVideo }) => {
  return (
    <>
      <TouchableOpacity onPress={()=>setVideo(videoId)} style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.image} source={{ uri: image.url }} />
      </TouchableOpacity>
    </>
  );
};
export default MenuItem;

const styles = StyleSheet.create({
  item: {
    marginTop: 50,
    marginBottom: 10,
    padding: 10,
    height: 140,
  },
  title: {
    color: 'blue',
  },
  image: {
    height: 90,
    width: 120,
    marginBottom: 10,
  },
});
