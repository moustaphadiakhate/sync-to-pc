// partie des imports
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView } from 'react-native';

export default function App() {
  // logique du composant JS
  const [tache, setTache] = useState(''); // initialisation de la variable d'etat

  const [tacheList, setTacheList] = useState([]); // initialisation de la variable d'etat

  // fonction pour ajouter une tache
  const AddTask = (tache) => {
    if (tache === '') {
      alert('Veuillez saisir une tache');
      return;
    }
    const newTache = {
      id: Math.random().toString(),
      text: tache,
    }
    setTacheList([...tacheList, newTache]); // ajout de la nouvelle tache dans la liste
    setTache(''); // vide la zone de saisie
  }

  // fonction pour supprimer une tache
  const deleteTask = (taskToDelete) => {
    const newList = tacheList.filter((tache) => tache.id !== taskToDelete.id)   // filter la taache de la liste en fonction de l' ID
    setTacheList(newList); // retourne la liste sans la tache sans la tache supprimée

  }


  // rendue visuel du composant

  return (
    <View style={styles.container}>

      <View style={styles.TextInputContainer}>
        <TextInput
          placeholder='Ecrire une tache'
          style={styles.textInput}
          value={tache}
          onChangeText={(text) => setTache(text)}
        />
        <Button title="Ajouter"
          onPress={() => AddTask(tache)}
        />
      </View>


      <View style={styles.tacheListContainer}>

        {tacheList.map((tache, index) => ( // for
          <View style={styles.todoItem}>
            <Text style={styles.toDoText}>{tache.text}</Text>
            <Button title="Supprimer"
              onPress={() => deleteTask(tache)} // id et un text {id : 1, text: 'tache 1'}
            />

          </View>
        )
        )}

      </View>


    </View>
  );
}

// le style du composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#275ab2',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  TextInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: '#e1ebf0',
    borderWidth: 2,
    borderRadius: 8,
    width: '50%',
    height: 40,
  },
  tacheListContainer: {
    height: '50%',
    width: '90%',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: '#b24027',
    borderRadius: 8,
    borderWidth: 2,
  },
  toDoText: {
    color: 'white',
    fontSize: 20,
  },
});
