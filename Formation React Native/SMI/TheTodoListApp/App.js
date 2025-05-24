import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [tache, setTache] = useState('');
  const [listeTaches, setListeTaches] = useState([]);

  const ajouterTache = () => {
    setListeTaches([...listeTaches, tache]);
    setTache('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>THE TODO LIST APP</Text>
      <View style={styles.zoneInput}>
        <TextInput
          style={styles.input} placeholder="Ajouter une tâche"
          onChangeText={(text) => setTache(text)}
          value={tache}
        />
        <Button style={styles.button} title="Ajouter" onPress={ajouterTache} />
      </View>
      <View style={styles.zoneListe}>
        <Text style={styles.listeTitle}>{listeTaches}</Text>
      </View>
    </View>
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
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
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
    width: '60%',
  },
  button: {
    backgroundColor: '#007BFF',
  },
  zoneListe: {
    width: '90%',
    height: '50%',
    backgroundColor: '#11baf7',
    borderRadius: 10,
    padding: 10,
  },
  listeTitle: {
    fontSize: 20,
    color: '#FFF',
  },
});
