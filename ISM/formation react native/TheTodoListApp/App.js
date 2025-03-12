import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  // logique du composant JS
  const [tache, setTache] = useState();
  const [listeTache, setListeTache] = useState([]);

  const ajouterTache = () => {


    setListeTache([...listeTache, { id: Math.random().toString(), text: tache }]);
    setTache('');

  }

  const supprimerTodo = (todoAsupprimer) => {
    const nouvelleListe = listeTache.filter((tache) => tache.id !== todoAsupprimer.id)
    setListeTache(nouvelleListe)
  }

  return (
    <View style={styles.container}>

      {/* Zone du champs de texte et du button ajouter */}
      <View style={styles.zoneAjoutToDo}>
        <TextInput
          value={tache}
          style={styles.textInput}
          placeholder="Ajouter une tâche"
          onChangeText={(text) => setTache(text)}
        />
        <Button
          title="AJOUTER"
          onPress={() => ajouterTache(tache)}
        />
      </View>

      {/* Zone daffichage de la liste de todo 

      <ScrollView style={styles.zoneListeToDo}>
        {listeTache.map((tache, index) => (
          <View style={styles.todoItem}>
          <Text style={styles.todoText} key={index}>{tache.text}</Text>
          <Button style={styles.todoButton}
          title='SUPPRIMER'
          onPress={(() => supprimerTodo(tache))}
          ></Button>
          </View>
        ))}

      </ScrollView>
      */}

      <FlatList

        data={listeTache}

        renderItem={(item) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.item.text}</Text>
            <Button style={styles.todoButton}
              title='SUPPRIMER'
              onPress={(() => supprimerTodo(item.item))}
            ></Button>
          </View>
        )}

        keyExtractor={(item) => item.id}

      />


    </View>
  );
}

// le style du composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#ffffff',
    gap: 10,
  },
  zoneAjoutToDo: {
    flexDirection: 'row',
    backgroundColor: '#9ee8ad',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  textInput: {
    width: '60%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ffffff',
    fontSize: 20,
    color: 'white'
  },
  zoneListeToDo: {
    height: 200,
    alignItems: 'center',
    backgroundColor: '#fffff',
    gap: 5,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: '#9ee8ad'
  },
  todoText: {
    flex: 1,
    fontSize: 20,
    color: 'white'
  },
  todoButton: {
    color: 'white'
  }
});
