import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import CategoryBar from '../components/CategoryBar';

const MainFeed = ({ navigation }) => {
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snacks', 'Drinks', 'Salads', 'Soups', 'Baking', 'Vegan'];
  const [recipes, setRecipes] = useState([
    // Array of recipe objects
  ]);

  const handleCategoryPress = (category) => {
    // Filter recipes by category
  };

  const handleRecipePress = (recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };

  return (
    <View>
      <CategoryBar categories={categories} onCategoryPress={handleCategoryPress} />
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleRecipePress(item)}>
            <RecipeCard recipe={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MainFeed;

