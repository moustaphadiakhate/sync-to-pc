# 🚀 Leçon 5 : Navigation avec React Navigation

## 🎯 Objectif

Dans ce TP, nous allons apprendre à utiliser la navigation avec **React Navigation** dans une application React Native.

Nous allons :

* Modulariser notre application en plusieurs fichiers.
* Ajouter un champ `descriptionTache`.
* Créer un écran de détails.
* Implémenter une navigation entre les écrans.
* Ajouter une navigation en onglets avec une page Profil.

---

# 1️⃣ Installation

Installez les dépendances suivantes :

```bash
npx expo install @react-navigation/native
npx expo install @react-navigation/native-stack
npx expo install @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
```

---

# 2️⃣ Structure du projet

```text
src/
 ├── screens/
 │    ├── ToDoListScreen.js
 │    ├── DetailScreen.js
 │    └── ProfileScreen.js
 └── App.js
```

---

# 3️⃣ Création des écrans

## 📌 ToDoListScreen.js

Cet écran permet :

* d'ajouter des tâches ;
* de supprimer des tâches ;
* d'afficher la liste ;
* de naviguer vers les détails.

```jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function ToDoListScreen({ navigation }) {
  const [tache, setTache] = useState('');
  const [descriptionTache, setDescriptionTache] = useState('');
  const [listeTache, setListeTache] = useState([]);

  const ajouterTache = () => {
    if (tache.length > 5 && descriptionTache.length > 10) {
      setListeTache([
        ...listeTache,
        {
          id: Math.random().toString(),
          text: tache,
          description: descriptionTache,
        },
      ]);

      setTache('');
      setDescriptionTache('');
    } else {
      alert(
        'La tâche doit contenir au moins 6 caractères et la description au moins 11 caractères.'
      );
    }
  };

  const supprimerTodo = (id) => {
    setListeTache(listeTache.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.zoneAjoutToDo}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouvelle tâche"
          value={tache}
          onChangeText={setTache}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Description"
          value={descriptionTache}
          onChangeText={setDescriptionTache}
          multiline
        />

        <Button
          title="AJOUTER"
          onPress={ajouterTache}
          color="#2ecc71"
        />
      </View>

      <FlatList
        data={listeTache}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <TouchableOpacity
              style={styles.todoContent}
              onPress={() =>
                navigation.navigate('Details', {
                  task: item,
                })
              }
            >
              <Text style={styles.todoText}>
                {item.text}
              </Text>

              <Text
                style={styles.todoDescription}
                numberOfLines={1}
              >
                {item.description}
              </Text>
            </TouchableOpacity>

            <Button
              title="Supprimer"
              color="#e74c3c"
              onPress={() => supprimerTodo(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  zoneAjoutToDo: {
    marginBottom: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  todoItem: {
    backgroundColor: '#a6e8c2',
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  todoContent: {
    flex: 1,
  },

  todoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  todoDescription: {
    color: '#555',
  },
});
```

---

## 📌 DetailScreen.js

Affiche les détails d'une tâche.

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {task.text}
      </Text>

      <Text style={styles.description}>
        {task.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#ecf0f1',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  description: {
    fontSize: 18,
    lineHeight: 28,
  },
});
```

---

## 📌 ProfileScreen.js

### ✅ Version corrigée

```jsx
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://picsum.photos/200',
        }}
        style={styles.image}
      />

      <Text style={styles.welcome}>
        Bienvenue !
      </Text>

      <Text style={styles.todoCount}>
        Consultez vos informations ici.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#2ecc71',
  },

  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  todoCount: {
    fontSize: 18,
    marginTop: 10,
    color: '#555',
  },
});
```

---

# 4️⃣ Configuration de la navigation

## 📌 App.js

⚠️ Les imports doivent correspondre à la structure du projet :

```jsx
import ToDoListScreen from './ToDoListScreen';
import DetailScreen from './DetailScreen';
import ProfileScreen from './ProfileScreen';
```

### Code complet

```jsx
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import ToDoListScreen from './ToDoListScreen';
import DetailScreen from './DetailScreen';
import ProfileScreen from './ProfileScreen';

const TodoStack = createNativeStackNavigator({
  screens: {
    Accueil: {
      screen: ToDoListScreen,
      options: {
        headerShown: false,
      },
    },

    Details: {
      screen: DetailScreen,
      options: {
        title: 'Détails de la tâche',
      },
    },
  },
});

const RootTabs = createBottomTabNavigator({
  screenOptions: {
    tabBarActiveTintColor: '#2ecc71',
    tabBarInactiveTintColor: '#95a5a6',
  },

  screens: {
    Taches: {
      screen: TodoStack,
      options: {
        headerShown: false,

        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name="list"
            size={size}
            color={color}
          />
        ),
      },
    },

    Profile: {
      screen: ProfileScreen,

      options: {
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name="person"
            size={size}
            color={color}
          />
        ),
      },
    },
  },
});

const Navigation =
  createStaticNavigation(RootTabs);

export default function App() {
  return <Navigation />;
}
```

---

# 5️⃣ Fonctionnement de la navigation

## Stack Navigator

Le Stack Navigator permet de passer :

```text
Liste des tâches
        ↓
Détails d'une tâche
```

Exemple :

```jsx
navigation.navigate('Details', {
  task: item,
});
```

---

## Bottom Tab Navigator

Le Bottom Tab Navigator ajoute une barre de navigation en bas :

```text
📋 Taches    👤 Profile
```

L'utilisateur peut changer d'écran en un clic.

---

# 6️⃣ Résultat final

L'application comporte :

### Onglet Tâches

* Ajouter une tâche
* Ajouter une description
* Supprimer une tâche
* Consulter les détails

### Onglet Profil

* Affichage d'une photo
* Message de bienvenue
* Navigation fonctionnelle

---
