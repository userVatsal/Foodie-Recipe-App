import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const CategoryBar = ({ categories, onCategoryPress }) => {
  return (
    <ScrollView horizontal style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} onPress={() => onCategoryPress(category)} style={styles.categoryButton}>
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  categoryButton: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 16,
  },
});

export default CategoryBar;

