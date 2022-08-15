import React from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FlatDataList from './componnts/FlatDataList';
import { Flexbox } from './componnts/Flexbox';
import ScrollRefresh from './componnts/ScrollRefresh';
import TextInputKeyBoard from './componnts/TextInputKeyBoard';


const App = () => {
  return (
    <View style={styles.body}>
      {/* <Text style={styles.text}>Try editing me</Text>
      <Button title='Click Here' onPress={() => Linking.openURL('https://github.com/tezz94820')}></Button> */}
      {/* Addition of button */}

      {/* 1<Flexbox/> */}
      {/* 2<ScrollRefresh/> */}
      {/* 3<FlatDataList/> */}
      <TextInputKeyBoard/>
    </View>
  );
};


const styles = StyleSheet.create({
  body:{
    height: '100%',
    width: '100%',
    backgroundColor:'red',
  } ,
  // text:{
  //   fontSize:'10px',
  // }
})


export default App;
