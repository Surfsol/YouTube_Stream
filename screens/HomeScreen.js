import React, {useState} from 'react';
import {Button, StyleSheet, View, Text, TextInput} from 'react-native';
import {wp} from '../utils/dimensions';

function HomeScreen({navigation}) {
  const [search, setSearch] = useState();
  const [adjustedSearch, setAdjustedSearch] = useState();

  const saveSearch = search => {
    let adjustedSearch = search;
    adjustedSearch = adjustedSearch.replace(/\s/g, '%20');
    setAdjustedSearch(adjustedSearch);
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YouTube Live Streaming</Text>

      <TextInput
        style={styles.input}
        onChangeText={search => saveSearch(search)}
        value={search}
        placeholder="Search"
      />
      <Button
        title="Search"
        onPress={() =>
          navigation.navigate('Videos', {adjustedSearch: adjustedSearch})
        }
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#252324'},
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
