import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>YouTube Live Streaming</Text>
        <Button
          title="Videos"
          onPress={() => navigation.navigate('Videos')}
        />
      </View>
    );
  }

  export default HomeScreen