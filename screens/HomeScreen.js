import React, {useState} from 'react';
import {
  Button,
  Colors,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  NativeModules,
} from 'react-native';
import {wp} from '../utils/dimensions';

const {CustomNative} = NativeModules;

function HomeScreen({navigation}) {
  const [search, setSearch] = useState();
  const [adjustedSearch, setAdjustedSearch] = useState();

  const replaceWhitespace = string => {
    const adjusted = string.replace(/\s/g, '%20');
    return adjusted;
  };

  const saveSearch = search => {
    const adjustedSearch = replaceWhitespace(search);
    setAdjustedSearch(adjustedSearch);
    setSearch(search);
  };

  const kotlinMessage = () => {
    CustomNative.Toastshow(`Searching for ${search}`, CustomNative.LONG);
  };

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>YouTube Live Streaming</Text>

        <TextInput
          style={styles.input}
          onChangeText={search => saveSearch(search)}
          value={search}
          placeholder="Search"
        />
        <Button
          title="Search"
          onPress={() => {
            kotlinMessage();
            navigation.navigate('Videos', {adjustedSearch: adjustedSearch});
          }}
        />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252324',
  },
  title: {marginBottom: 60, fontSize: 30, color: '#FF0000', fontWeight: 'bold'},
  input: {
    height: 40,
    width: wp(60),
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});
