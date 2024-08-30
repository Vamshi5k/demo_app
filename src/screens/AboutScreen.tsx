import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AboutScreen</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // A light background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // A dark color for better readability
  },
});
