/* 
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./HomePage";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { MyCamera } from "./MyCamera";
import { ImgPic } from "./ImgPic";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    
    <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name="Page2" component={Page2} />
      <Stack.Screen name="MyCamera" component={MyCamera} />

      <Stack.Screen name="img" component={ImgPic} />
    </Stack.Navigator>
  </NavigationContainer>
  );
} */
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './component/HomePage';
import { Page1 } from './component/Page1';
import { Page2 } from './component/Page2';
import { MyCamera } from './component/MyCamera';
import { ImgPic } from './component/ImgPic';
 import WebUrl from './component/web';
 import Location_map from './component/location';
import My_Map from './component/map';
import ShowIp from './component/network_get_ip';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="MyCamera" component={MyCamera} />
        <Stack.Screen name="img" component={ImgPic} />
        <Stack.Screen name="WebUrl" component={WebUrl} />
        <Stack.Screen name="Location_map" component={Location_map} />
        <Stack.Screen name="My_Map" component={My_Map} />
        <Stack.Screen name="ShowIp" component={ShowIp} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;