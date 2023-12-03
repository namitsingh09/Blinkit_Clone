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
} from 'react-native';
import Buttonx from './compo/Button';
import SearchsBar from './compo/SearchBar';

export default function App() {
  return (
    <View
    style={[
      styles.container,
      {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
        width: "100%",
        top: 24,
      },
    ]}>
    <View style={{ flex: 0, backgroundColor: 'white',}} >
      
    <Text style={styles.text}>Delivery in 15 minutes</Text>
    <Text style={{fontSize:18,bottom: 21, left: 8 }}>Kiverli, Aburoad</Text>


    <SearchsBar />




  </View>
    <View style={{height: 800, backgroundColor: 'darkorange'}}>
    <ScrollView  style={{height: 999}}>
        <Text style={{fontSize: 99}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>

    <Image source={{uri: 'https://cdn.grofers.com/cdn-cgi/image/q=70,metadata=none,w=3200/layout-engine/2023-09/01_1.png'}}
       style={{ flex: null,
        width: null,
        height: 200,
        
        resizeMode: 'stretch'}}  />
       
       
       <ScrollView style={styles.btn}>   
       
      
       <Buttonx  />
      
       
       </ScrollView>
       

      
    </View>
    <View style={{flex: 3, backgroundColor: '#097933'}} />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  
},
text: {
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: "left",
  bottom: 20,
  left: 8,
  
  
},
btn: {
  height: 200,
  backgroundColor: 'black',
  flexDirection: "row",
  borderRadius: 4,
  
},
});
  

