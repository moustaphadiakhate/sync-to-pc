import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function TodoListScreen({ navigation }) {
  const [tacheTitre, setTacheTitre] = useState('');
  const [tacheDescription, setTacheDescription] = useState('');

  const [listeTaches, setListeTaches] = useState([]);

  const ajouterTache = () => {
    setListeTaches([...listeTaches, { tire: tacheTitre, description: tacheDescription }]);
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

            <Text style={styles.listeTitle}>{tache.tire}</Text>
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
    paddingTop: 40,
    gap: 20,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  zoneInput: {
    width: '90%',
    gap: 5,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#11baf7',
    elevation: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    color: '#11baf7',
  },
  input: {
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
  },
  button: {
    backgroundColor: '#007BFF',
  },
  zoneListe: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  listeTitle: {
    fontSize: 20,
    color: '#FFF',
  },
  zoneTitle: {
    padding: 5,
    backgroundColor: '#11baf7',
    marginBottom: 5,
    elevation: 5,
    flexDirection: "row",
    justifyContent: 'space-between',
  }
});
