import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
//import * as React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Keyboard, StatusBar } from 'react-native';

import Routes from './assets/router';


export default function App() {
  return (
    <> 
      <StatusBar style="light" backgroundColor="#000"translucent={true} />
      <Routes/>
    </>
  )


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    padding: 20,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
});

