import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.name}>{recipe.name}</Text>
      <Text style={styles.section}>Ingredients:</Text>
      <Text>{recipe.ingredients}</Text>
      <Text style={styles.section}>Instructions:</Text>
      <Text>{recipe.instructions}</Text>
      <Text style={styles.section}>Preparation Time: {recipe.preparationTime}</Text>
      <Text style={styles.section}>Servings: {recipe.servings}</Text>
      <Text style={styles.section}>Calories: {recipe.calories}</Text>
      <Text style={styles.section}>Difficulty: {recipe.difficulty}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default RecipeDetailScreen;

