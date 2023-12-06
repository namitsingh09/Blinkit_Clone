import React, { useEffect } from 'react';
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
import BestSeller from './compo/Product/BestSeller';
import BestCard from './compo/Product/BestCard';


export default function App() {
  

  return (
    <ScrollView  
    showsVerticalScrollIndicator={false}
    style={[
      styles.container,
      {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
        flex: 1,
        width: "100%",
        top:10,
      },
    ]}>
    <View style={{ flex: null, backgroundColor: 'white',}} >
      
    <Text style={styles.text}>Delivery in 15 minutes</Text>
    <Text style={{fontSize:18,bottom: 21, left: 9, top: 1}}>Kiverli, Aburoad</Text>


    <SearchsBar />




  </View>
    <View style={{flex: 1, backgroundColor: 'darkorange'}}>
    <View  style={{height: 200}}>
    <Image style={{height: 200,  resizeMode: "stretch", width: 400}} source={require('./vpnwan.png')} />
      </View>

    <Image source={{uri: 'https://cdn.grofers.com/cdn-cgi/image/q=70,metadata=none,w=3200/layout-engine/2023-09/01_1.png'}}
       style={{ flex: null,
        width: null,
        height: 400,
        top: -5,
        
        resizeMode: 'stretch'}}  />
       
       
       <View style={styles.btn}>   
       
      
       <Buttonx  />
       
      
       
       </View>
       

      
    </View>
    
    <View style={{flex: 3, backgroundColor: '#097933'}} />
    <BestSeller />
<BestCard />

  </ScrollView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  
},
text: {
  fontWeight: 'bold',
  fontSize: 35,
  padding: 1,
  textAlign: "left",
  bottom: 20,
  left: 8,
  top: 2,
  
  
},
btn: {
  height: 70,
  backgroundColor: 'white',
  flexDirection: "row",
  borderRadius: 4,
  top: -5,
  "transition": "all 100ms ease",
  "transform": "scale(1.05)",
  "boxShadow": "0 0 8px rgba(0, 0, 0, 0.5)"
},
});
  

