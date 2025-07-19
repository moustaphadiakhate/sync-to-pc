import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

export default function TodoListScreen({ navigation }) {
  const [tacheTitre, setTacheTitre] = useState('');
  const [tacheDescription, setTacheDescription] = useState('');

  const [listeTaches, setListeTaches] = useState([]);

  const ajouterTache = () => {
    if (!tacheTitre || !tacheDescription) {
      Alert.alert('Erreur', 'Le titre et la description sont obligatoires.');
      return;
    }
    setListeTaches([...listeTaches, { titre: tacheTitre, description: tacheDescription }]);
    setTacheTitre('');
    setTacheDescription('');
  }

  supprimerTache = (index) => {
    const nouvellesTaches = listeTaches.filter((tache, i) => i !== index);
    setListeTaches(nouvellesTaches);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>THE TODO LIST APP</Text>
      <View style={styles.zoneInput}>
        <TextInput
          style={styles.input} placeholder="Ajouter un titre"
          onChangeText={(text) => setTacheTitre(text)}
          value={tacheTitre}
        />
        <TextInput
          style={styles.input} placeholder="Ajouter une description"
          onChangeText={(text) => setTacheDescription(text)}
          value={tacheDescription}
        />
        <Button style={styles.button} title="Ajouter" onPress={ajouterTache} />
      </View>
      <ScrollView style={styles.zoneListe}>
        {listeTaches.map((tache, index) => (
          <TouchableOpacity key={index} style={styles.zoneTitle}
            onPress={() => navigation.navigate('Detail', { tache: tache })}>

            <Text style={styles.listeTitle}>{tache.titre}</Text>
            <Button title="Supprimer" onPress={() => supprimerTache(index)} />

          </TouchableOpacity>
        ))
        }
      </ScrollView >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  zoneInput: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15, // Plus de coins arrondis
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15, // Rembourrage plus grand
    marginBottom: 15, // Plus d'espace en dessous
    borderRadius: 10, // Plus de coins arrondis
    fontSize: 18, // Taille de police plus grande
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  zoneListe: {
    width: '90%',
  },
  zoneTitle: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listeTitle: {
    fontSize: 18,
    color: '#333',
  },
});
