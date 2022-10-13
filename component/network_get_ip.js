/* import { View, Text ,Button } from "react-native";
 import { useState } from 'react';
//import { usePreventScreenCapture } from "expo-screen-capture";
export const ShowIp = ( ) => {
 // usePreventScreenCapture();
 
   const[ipAdd,setIpAdd]=useState("");
   const displayIp=()=>{
    const ip= Network.getIpAddressAsync();
    setIpAdd("ip");
   }
  return (
    <View>
      <Text> Your Ip is {ipAdd}</Text>
      <Button title="Get Ip" omPress={()=>{displayIp()}}></Button>
     
    </View>
  );
}; */
///////////////////////////////////////////////////
import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import * as Network from 'expo-network';
import Constants from 'expo-constants';

export default function ShowIp() {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await Network.getIpAddressAsync();
    setResult(result);
  };
  return (
    <View style={styles.container}>
      <Button title="Show Ip" onPress={_handlePressButtonAsync} />
      <Text>{result && JSON.stringify(result)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

