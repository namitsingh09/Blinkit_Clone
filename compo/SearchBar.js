import React from 'react'
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { SearchBar } from '@rneui/themed';
export default function SearchsBar() {
  const [search, setSearch] = useState("");
  const styles = StyleSheet.create({
    view: {
      margin: 10,
      padding: 2,
      top: -8,
      
      
    },
    });

const updateSearch = (search) => {
  setSearch(search);
};
  
  return (
    <View style={styles.view}>
    <SearchBar  style={{borderRadius:10, backgroundColor: "#212a28", }}

      placeholder="Search butter "
      onChangeText={updateSearch}
      value={search}
    />
  </View>
);
};



