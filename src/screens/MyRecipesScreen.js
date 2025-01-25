import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MyRecipesSection from '../components/MyRecipesSection';

const MyRecipesScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([
    // Array of recipe objects
  ]);

  const handleEdit = (recipe) => {
    // Navigate to edit screen
  };

  const handleDelete = (recipe) => {
    // Delete recipe
  };

  return (
    <View style={styles.container}>
      <MyRecipesSection recipes={recipes} onEdit={handleEdit} onDelete={handleDelete} />
      <Button title="Add New Recipe" onPress={() => navigation.navigate('AddRecipe')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default MyRecipesScreen;

