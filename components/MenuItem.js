import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {wp} from '../utils/dimensions';
import { useDeviceOrientation } from "@react-native-community/hooks";



const MenuItem = ({title, image, videoId, setVideo}) => {
  const { landscape } = useDeviceOrientation();
  return (
    <>
      <TouchableOpacity
        onPress={() => setVideo(videoId)}
        style={landscape ? styles.rowLand : styles.row}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={landscape ? styles.imageLand : styles.image}
          source={{uri: image.url}}
        />
      </TouchableOpacity>
    </>
  );
};
export default MenuItem;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'center',
     marginTop: 50,
     marginBottom: 10,
     padding: 10,
     height: wp(95),
  },
  itemLand: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    height: 250,
  },
  title: {
    color: 'blue',
    width: wp(95),
    height: wp(10),
  },
  image: {
    height: wp(75),
    width: wp(95),
    marginBottom: 10,
  },
  imageLand: {
    height: 160,
    width: 200,
    marginLeft: 15,
    marginBottom: 10,
  },
});
