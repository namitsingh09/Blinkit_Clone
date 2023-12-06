import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Product 1', price: '$19.99', imageUrl: 'https://example.com/product1.jpg' },
  { id: '2', title: 'Product 2', price: '$29.99', imageUrl: 'https://example.com/product2.jpg' },
  // Add more product data as needed
  { id: '3', title: 'Product 3', price: '$39.99', imageUrl: 'https://example.com/product3.jpg' },
  { id: '4', title: 'Product 4', price: '$49.99', imageUrl: 'https://example.com/product4.jpg' },
  { id: '5', title: 'Product 5', price: '$59.99', imageUrl: 'https://example.com/product5.jpg' },
  { id: '6', title: 'Product 6', price: '$69.99', imageUrl: 'https://example.com/product6.jpg' },
  { id: '7', title: 'Product 7', price: '$79.99', imageUrl: 'https://example.com/product7.jpg' },
  { id: '8', title: 'Product 8', price: '$89.99', imageUrl: 'https://example.com/product8.jpg' },
  { id: '9', title: 'Product 9', price: '$99.99', imageUrl: 'https://example.com/product9.jpg' },
  { id: '10', title: 'Product 10', price: '$109.99', imageUrl: 'https://example.com/product10.jpg' },
  { id: '11', title: 'Product 11', price: '$119.99', imageUrl: 'https://example.com/product11.jpg' },

];

const SmallBuyCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.smallCardContainer} onPress={() => console.log('Card clicked')}>
      <Image source={{ uri: item.imageUrl }} style={styles.smallCardImage} resizeMode="cover" />
      <View style={styles.smallCardContent}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.buyButton} onPress={() => console.log('Buy button clicked')}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const BestCard = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <SmallBuyCard item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  smallCardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    width: 150,
  
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 9,
  },
  smallCardImage: {
    height: 100,
    width: '100%',
  },
  smallCardContent: {
    padding: 10,
    
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  buyButton: {
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default BestCard;
