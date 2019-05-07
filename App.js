import React from 'react';
import * as firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';


var config = {
    apiKey: "AIzaSyC4hWPbFCjuW2AqBB9OwpksDgMAy2Sgd-A",
    authDomain: "haber-app-a7e1c.firebaseapp.com",
    databaseURL: "https://haber-app-a7e1c.firebaseio.com",
    projectId: "haber-app-a7e1c",
    storageBucket: "haber-app-a7e1c.appspot.com",
    messagingSenderId: "708037067351"
  };
  firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
