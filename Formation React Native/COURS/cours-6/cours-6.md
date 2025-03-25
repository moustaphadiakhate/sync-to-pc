Voici la suite de la fiche de TP qui aborde les deux points supplémentaires :

---

## 🚀 **Suite du TP : Améliorations – Changement de photo de profil & Gestion globale des tâches via Context**

Nous allons ajouter deux fonctionnalités complémentaires à votre application :

1. **Changer la photo de profil**  
   Permettre à l’utilisateur de mettre à jour son image de profil via la galerie (en utilisant par exemple [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)).

2. **Utiliser le Context pour partager le nombre total de tâches**  
   Créer un contexte global pour stocker et mettre à jour le nombre de tâches créées, et l’afficher sur l’écran de profil.

---

### 1️⃣ **Mise en place du Context pour les tâches**

#### **Création du fichier `TodoContext.js`**

Nous allons créer un contexte pour gérer la liste des tâches et leur nombre total. Ce fichier permettra de centraliser la gestion de l’état des tâches. Par exemple :

```jsx
// /src/context/TodoContext.js
import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [listeTache, setListeTache] = useState([]);

  const ajouterTache = (tache) => {
    setListeTache(prev => [...prev, tache]);
  };

  const supprimerTache = (id) => {
    setListeTache(prev => prev.filter(item => item.id !== id));
  };

  return (
    <TodoContext.Provider value={{ listeTache, ajouterTache, supprimerTache }}>
      {children}
    </TodoContext.Provider>
  );
}
```

> **Note :** Vous allez maintenant utiliser ce contexte dans vos écrans pour ajouter ou supprimer une tâche.

---

### 2️⃣ **Modification du `ToDoListScreen` pour utiliser le Context**

Dans cet écran, on va remplacer la gestion locale de l’état par celle proposée par le contexte :

```jsx
// /src/src/screens/ToDoListScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TodoContext } from '../context/TodoContext';

export default function ToDoListScreen({ navigation }) {
  const [tache, setTache] = useState('');
  const [descriptionTache, setDescriptionTache] = useState('');
  const { listeTache, ajouterTache, supprimerTache } = useContext(TodoContext);

  const handleAjouterTache = () => {
    if (tache.length > 5 && descriptionTache.length > 10) {
      ajouterTache({
        id: Math.random().toString(),
        text: tache,
        description: descriptionTache,
      });
      setTache('');
      setDescriptionTache('');
    } else {
      alert('La tâche doit avoir 6+ caractères et la description 11+ caractères');
    }
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
          onPress={handleAjouterTache} 
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
              onPress={() => supprimerTache(item.id)}
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

// (Les styles restent inchangés)
```

---

### 3️⃣ **Améliorer l’écran de profil pour changer la photo**

Nous allons modifier `ProfileScreen.js` afin de :
- Afficher la photo de profil actuelle.
- Ajouter un bouton pour lancer la sélection d’une nouvelle photo.
- Utiliser l’API d’Expo Image Picker pour récupérer une image depuis la galerie.

**Installation d’Expo Image Picker**  
Dans un terminal, installez le module suivant :

```sh
expo install expo-image-picker
```

#### **Mise à jour de `ProfileScreen.js`**

Voici un exemple de code permettant de changer la photo de profil :

```jsx
// /src/src/screens/ProfileScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TodoContext } from '../context/TodoContext';

export default function ProfileScreen() {
  const { listeTache } = useContext(TodoContext);
  const [image, setImage] = useState('https://picsum.photos/200/300');

  const pickImage = async () => {
    // Demander la permission d'accéder à la galerie
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission refusée', 'La permission d’accéder à la galerie est nécessaire !');
      return;
    }

    // Ouvrir la galerie
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Button title="Changer la photo" onPress={pickImage} color="#2ecc71" />
      <Text style={styles.welcome}>Bienvenue!</Text>
      <Text style={styles.todoCount}>Vous avez {listeTache.length} tâches créées.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f8f9fa' 
  },
  image: { 
    width: 100, 
    height: 100, 
    borderRadius: 20, 
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#2ecc71'
  },
  welcome: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 5 
  },
  todoCount: { 
    fontSize: 18, 
    color: '#555'
  }
});
```

> **Conseil :** Testez la fonctionnalité sur un appareil réel ou un émulateur qui supporte l’accès à la galerie.

---

### 4️⃣ **Intégrer le Provider dans l’application**

Pour que le contexte soit accessible dans toute l’application, modifiez le fichier `App.js` pour envelopper la navigation avec le `TodoProvider` :

```jsx
// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ToDoListScreen from './src/screens/ToDoListScreen';
import DetailScreen from './src/screens/DetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { TodoProvider } from './context/TodoContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TodoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Accueil" 
        component={ToDoListScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Details" 
        component={DetailScreen} 
        options={{ title: 'Détails de la tâche' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "Taches") {
                iconName = "list";
              } else if (route.name === "Profile") {
                iconName = "person";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2ecc71',
            tabBarInactiveTintColor: '#95a5a6',
          })}
        >
          <Tab.Screen name="Taches" component={TodoStack} options={{ headerShown: false }} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
}
```
