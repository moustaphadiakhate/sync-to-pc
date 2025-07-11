import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { tache } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tache.titre}</Text>
      <Text style={styles.description}>{tache.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#34495e',
    lineHeight: 24,
  },
});
