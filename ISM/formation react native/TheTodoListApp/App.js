// partie des imports
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView } from 'react-native';

export default function App() {
  // logique du composant JS
  const [tache, setTache] = useState(''); // initialisation de la variable d'etat

  const [tacheList, setTacheList] = useState([]); // initialisation de la variable d'etat

  // fonction pour ajouter une tache
  const AddTask = (tache) => {
    // if (tache === '') {
    //   alert('Veuillez saisir une tache');
    //   return;
    // }
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
        <Button title="AJOUTER"
          onPress={() => AddTask(tache)}
        />
      </View>


      <ScrollView style={styles.tacheListContainer}>

        {tacheList.map((tache, index) => ( // 
          <View style={styles.todoItem}>
            <Text style={styles.toDoText}>{tache.text}</Text>
            <Button title="SUPPRIMER"
              onPress={() => deleteTask(tache)} // id et un text {id : 1, text: 'tache 1'}
            />

          </View>
        )
        )}

      </ScrollView>


    </View>
  );
}

// le style du composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa', // Fond clair et moderne
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    gap: 5
  },
  TextInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4CAF50',
    gap: 10,
    padding: 10,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    fontSize: 20
  },
  textInput: {
    borderColor: '#d1d9e6',
    borderWidth: 1,
    borderRadius: 8,
    width: '70%',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  tacheListContainer: {
    width: '90%',
    gap: 20,
  },
  todoItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    backgroundColor: '#4CAF50', // Vert élégant pour la tâche
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,

  },
  toDoText: {
    color: 'white',
    fontSize: 18,
    flex: 1,
  },
});
