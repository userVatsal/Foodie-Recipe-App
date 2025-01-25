import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const AddRecipeForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleImageUpload = () => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response.uri);
      }
    });
  };

  const handleSave = () => {
    onSave({ name, image, ingredients, instructions });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Recipe Name" value={name} onChangeText={setName} style={styles.input} />
      <TouchableOpacity onPress={handleImageUpload} style={styles.imageUpload}>
        <Text>Upload Image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TextInput placeholder="Ingredients" value={ingredients} onChangeText={setIngredients} style={styles.input} multiline />
      <TextInput placeholder="Instructions" value={instructions} onChangeText={setInstructions} style={styles.input} multiline />
      <Button title="Save Recipe" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  imageUpload: {
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default AddRecipeForm;

