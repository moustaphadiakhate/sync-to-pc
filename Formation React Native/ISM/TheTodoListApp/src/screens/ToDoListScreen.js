import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function ToDoListScreen({ navigation }) {
  const [tache, setTache] = useState('');
  const [descriptionTache, setDescriptionTache] = useState('');
  const [listeTache, setListeTache] = useState([]);

  // Validation des saisies
  const ajouterTache = () => {
    if (tache.length > 5 && descriptionTache.length > 10) {
      setListeTache([...listeTache, {
        id: Math.random().toString(),
        text: tache,
        description: descriptionTache
      }]);
      setTache('');
      setDescriptionTache('');
    } else {
      alert('La tâche doit avoir 6+ caractères et la description 11+ caractères');
    }
  };

  const supprimerTodo = (id) => {
    setListeTache(listeTache.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Zone de saisie */}
      <View style={styles.zoneAjoutToDo}>
        <TextInput
          value={tache}
          style={styles.textInput}
          placeholder="Nouvelle tâche"
          placeholderTextColor="#999"
          onChangeText={setTache}
        />
        <TextInput
          value={descriptionTache}
          style={styles.textInput}
          placeholder="Description"
          placeholderTextColor="#999"
          onChangeText={setDescriptionTache}
          multiline
        />
        <Button
          title="AJOUTER"
          onPress={ajouterTache}
          color="#2ecc71"
        />
      </View>

      {/* Liste des tâches */}
      <FlatList
        data={listeTache}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <TouchableOpacity
              style={styles.todoContent}
              onPress={() => navigation.navigate('Details', { task: item })}
            >
              <Text style={styles.todoText}>{item.text}</Text>
              <Text style={styles.todoDescription} numberOfLines={1}>
                {item.description}
              </Text>
            </TouchableOpacity>
            <Button
              title="supprimer"
              onPress={() => supprimerTodo(item.id)}
              color="#e74c3c"
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.zoneListeToDo}
      />
    </View>
  );
}

// Styles cohérents avec le TP précédent
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#ffffff',
    gap: 15,
  },
  zoneAjoutToDo: {
    backgroundColor: '#9ee8ad',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    gap: 10,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#a6e8c2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  todoContent: {
    flex: 1,
    marginRight: 10,
  },
  todoText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  todoDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
