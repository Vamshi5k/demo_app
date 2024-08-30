import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SavedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SavedScreen</Text>
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
  },
});
