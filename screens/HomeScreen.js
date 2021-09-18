import React, {useState} from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import { wp } from '../utils/dimensions';

function HomeScreen({ navigation }) {
  const [search, setSearch] = useState()

  const saveSearch = (search) => {
    
const nameCleaned = search.replace(/\s/g, '%20')
console.log({nameCleaned})
  setSearch(nameCleaned)
 

  }

 console.log({search})
    return (
      <View style={styles.container}>
        <Text style={styles.title}>YouTube Live Streaming</Text>
        
        <TextInput
        style={styles.input}
        onChangeText={(search)=>saveSearch(search)}
        value={search}
        placeholder="Search"
      />
        <Button
          title="Videos"
          onPress={() => navigation.navigate('Videos', {search: search})}
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
     input: {
      height: 40,
      width: wp(60),
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });