import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const buttonData = [
  { id: '1', label: 'Snacks' },
  { id: '2', label: 'Drinks' },
  { id: '3', label: 'PetFood' },
  { id: '4', label: 'Oils' },
  { id: '5', label: 'Mens' },
];

const Buttonx = () => {
  const flatListRef = useRef(1);


  const renderButton = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => console.log(`Button ${item.label} clicked`)}>
      <Text style={styles.buttonText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={buttonData}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderButton}
      pagingEnabled
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 30,
    margin: 9,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Buttonx;
