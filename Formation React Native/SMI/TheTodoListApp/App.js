import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue !!</Text>
      <TextInput style={styles.input} placeholder='Votre nom' />
      <Button style={styles.button} title='GO' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
  },
});
