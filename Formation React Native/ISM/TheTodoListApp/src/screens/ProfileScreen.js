import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ProfileScreen({ route }) {
  const listeTaches = [];

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image} />
      <Text style={styles.welcome}>Bienvenue!</Text>
      <Text style={styles.todoCount}>Vous avez {listeTaches.length} tâches créées.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
    borderwidth: 5
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5
  },
  todoCount: {
    fontSize: 18,
    color: '#555'
  }
});
