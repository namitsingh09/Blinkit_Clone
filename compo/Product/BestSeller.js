import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button,
  } from 'react-native';

export default function BestSeller() {
  return (
    <View  style={{ height: 100 }}>
   <View style={{ flexDirection: 'row', justifyContent: 'space-between',  height: 60,  borderRadius: 20, top: 5, padding: 7, fontWeight: 900  }}>
   <Text style={{ fontSize: 30, left: 3 }}>BestSeller</Text> 
    
    <Button 
     style={{ 
         
     }}
     onPress={console.log("hi there")}
     title="See All"
     color="#841584"
     
     accessibilityLabel="Learn more about this purple button"
   />
        

   </View>
   
   
   
   
   
   
   </View>
  )
}
