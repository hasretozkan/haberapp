import React from 'react';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login'
import Home from './components/home'
import Detail from './components/detail'

var config = {
    apiKey: "AIzaSyC4hWPbFCjuW2AqBB9OwpksDgMAy2Sgd-A",
    authDomain: "haber-app-a7e1c.firebaseapp.com",
    databaseURL: "https://haber-app-a7e1c.firebaseio.com",
    projectId: "haber-app-a7e1c",
    storageBucket: "haber-app-a7e1c.appspot.com",
    messagingSenderId: "708037067351"
  };
  firebase.initializeApp(config);

  const RouteConfigs = {
    Login:{screen:Login},
    Home:{screen:Home},
    Detail:{screen:Detail},
  }

  const StackNavigatorConfig={
    headerMode:'none'
  }

  export default StackNavigator(RouteConfigs,StackNavigatorConfig);
