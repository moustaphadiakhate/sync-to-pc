import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import icon from "../../assets/icon.png";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icon} />
      <Text style={styles.name}>Bienvenue !!</Text>
      <Text style={styles.bio}>Développeur passionné par le mobile et le web.</Text>
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
    backgroundColor: '#f9f9f9', // Light grey background
    padding: 30, // Increased padding
  },
  image: {
    width: 150, // Larger image
    height: 150,
    borderRadius: 75, // Increased border radius for a more circular image
    marginBottom: 25, // Increased margin
  },
  name: {
    fontSize: 28, // Larger font size
    fontWeight: 'bold',
    color: '#2c3e50', // Darker color for the name
    marginBottom: 15, // Increased margin
    textAlign: 'center', // Center the text
  },
  bio: {
    fontSize: 18, // Larger font size
    color: '#7f8c8d', // Grey color for the bio
    textAlign: 'center',
    marginBottom: 30, // Increased margin
    lineHeight: 24, // Improved line height for readability
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdc3c7', // Light grey border color
    padding: 15, // Increased padding
    width: '100%', // Full width
    borderRadius: 10, // Increased border radius
    marginBottom: 20, // Increased margin
    fontSize: 18, // Larger font size
    backgroundColor: '#fff', // White background
    color: '#34495e', // Dark grey text color
  },
  button: {
    backgroundColor: '#3498db', // Blue button color
    color: '#fff',
    padding: 15, // Increased padding
    borderRadius: 10, // Increased border radius
    fontSize: 20, // Larger font size
    width: '100%', // Full width
    textAlign: 'center',
    fontWeight: 'bold', // Bold text
    overflow: 'hidden', // Ensure text doesn't overflow
  },
});
