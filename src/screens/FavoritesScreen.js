import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FavoritesSection from '../components/FavoritesSection';

const FavoritesScreen = ({ favorites }) => {
  return (
    <View style={styles.container}>
      <FavoritesSection favorites={favorites} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default FavoritesScreen;

