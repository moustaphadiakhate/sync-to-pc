import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import icon from "./assets/icon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icon} />
      <Text style={styles.text}>Bienvenue !!</Text>
      <TextInput style={styles.input} placeholder='Votre nom' />
      <Button style={styles.button} title='GO' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9bf5fa',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }
});
