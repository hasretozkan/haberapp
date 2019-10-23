import React from 'react';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login'
import Home from './components/home'
import Detail from './components/detail'

var config = {
    //Firebase Config
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
