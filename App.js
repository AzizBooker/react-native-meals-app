import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Color from './utils/Colors'
import * as Font from 'expo-font'
import { AppLoading} from 'expo';
import MealsNavigator from './navigation/Meals.navigation'

export default function App() {

  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:Colors.primary,

  }
});
