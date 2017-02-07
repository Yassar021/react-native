/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class SampleApk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: {
        Nama: '',
        Asal: '',
      },
    };
  }
  render() {
    return (
      <View>
        <Text style={styles.textheader}>Belajar React</Text>
        <TextInput placeholder="Nama ..." style={{paddingDown:20, backgroundColor: 'white', marginBottom: 10,}}/>
        <TextInput
        placeholder="Asal ..." style={{marginBottom: 20, paddingBottom: 10,}}
        />
        <Button
            title="Simpan"
            color="#44916C"
            style={{fontWeight: 'bold', fontSize: 15, fontColor: 'black',}} 
         />

        <Text style={{marginTop: 60,}}> Nama .....</Text>
        <Text style={{marginTop: 20,}}> Asal .....</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textheader:{marginBottom:20,marginTop: 20, paddingBottom: 10,textAlign: 'center', paddingTop: 10, backgroundColor: 'grey', fontWeight: 'bold', fontSize: 25,},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SampleApk', () => SampleApk);
