import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [tache, setTache] = useState();
  const [listeTache, setListeTache] = useState([]);

  const ajouterTache = () => {
    if (tache.length > 5) {
      setListeTache([...listeTache, { id: Math.random().toString(), text: tache }]);
      setTache('');
    } else {
      alert('Veuillez saisir une tâche valide');
    }
  };

  const supprimerTodo = (todoAsupprimer) => {
    const nouvelleListe = listeTache.filter((tache) => tache.id !== todoAsupprimer.id);
    setListeTache(nouvelleListe);
  };

  return (
    <View style={styles.container}>
      {/* Zone du champs de texte et du bouton ajouter */}
      <View style={styles.zoneAjoutToDo}>
        <TextInput
          value={tache}
          style={styles.textInput}
          placeholder="Ajouter une tâche"
          placeholderTextColor="#ccc"
          onChangeText={(text) => setTache(text)}
        />
        <Button title="AJOUTER" onPress={ajouterTache} />
      </View>

      {/* Liste des tâches avec scroll

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

      {/* Liste des tâches VERSION FLATLIST*/}
      <FlatList
        data={listeTache}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <Button title="SUPPRIMER" onPress={() => supprimerTodo(item)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.zoneListeToDo}
      />
    </View>
  );
}

// StyleSheet amélioré
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
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textInput: {
    width: '60%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#333',
    backgroundColor: '#fff',
  },
  zoneListeToDo: {
    paddingVertical: 10,
    gap: 5,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#a6e8c2',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  todoText: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  todoButton: {
    color: 'white',
  },
});
