import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import RecipeCard from './RecipeCard';

const MyRecipesSection = ({ recipes, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Recipes</Text>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <View>
            <RecipeCard recipe={item} />
            <Button title="Edit" onPress={() => onEdit(item)} />
            <Button title="Delete" onPress={() => onDelete(item)} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MyRecipesSection;

