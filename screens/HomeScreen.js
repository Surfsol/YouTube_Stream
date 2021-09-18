import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>YouTube Live Streaming</Text>
        <Button
          title="Videos"
          onPress={() => navigation.navigate('Videos')}
        />
      </View>
    );
  }

  export default HomeScreen

  const styles = StyleSheet.create({
    container:{ flex: 1, alignItems: 'center', justifyContent: 'center' },
    title:{ marginBottom: 60, fontSize: 30},
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