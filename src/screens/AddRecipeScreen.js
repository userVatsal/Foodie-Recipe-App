import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddRecipeForm from '../components/AddRecipeForm';

const AddRecipeScreen = ({ navigation }) => {
  const handleSave = (recipe) => {
    // Save recipe and navigate back
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AddRecipeForm onSave={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default AddRecipeScreen;

