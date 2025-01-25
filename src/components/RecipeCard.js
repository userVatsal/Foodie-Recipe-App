import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RecipeCard = ({ recipe, onFavoritePress }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.name}>{recipe.name}</Text>
      <TouchableOpacity onPress={onFavoritePress} style={styles.favoriteButton}>
        <Text style={styles.favoriteIcon}>❤️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  favoriteIcon: {
    fontSize: 20,
  },
});

export default RecipeCard;

