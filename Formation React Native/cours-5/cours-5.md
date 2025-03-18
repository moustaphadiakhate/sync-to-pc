## 🚀 **Leçon 5 : Navigation avec React Navigation**

### **Objectif**
Dans ce TP, nous allons apprendre à utiliser la navigation avec `react-navigation` dans une application React Native. Nous allons :
- Modulariser notre application en plusieurs fichiers.
- Ajouter un champ `descriptionTache` pour les détails des tâches.
- Créer un écran de détails pour afficher plus d'informations sur une tâche.
- Implémenter une navigation entre les écrans.
- Ajouter une navigation en onglets (`Bottom Tab Navigation`) avec une page de profil et des icônes.

---

### **1️⃣ Pré-requis**
Assurez-vous d'avoir installé `react-navigation` et ses dépendances :
```sh
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm install @expo/vector-icons
```

---

### **2️⃣ Structure du projet**
```
/src
  ├── /screens
  │   ├── ToDoListScreen.js     # Liste des tâches avec saisie et suppression
  │   ├── DetailScreen.js       # Affichage des détails d'une tâche
  │   └── ProfileScreen.js      # Page de profil avec statistiques
  └── App.js                    # Configuration de la navigation
```

---

### **3️⃣ Création des fichiers et code**

#### **📌 `ToDoListScreen.js`**

Cet écran permet d'ajouter des tâches avec une description, de les afficher sous forme de liste et de naviguer vers leur détail.

Fonctionnalités principales :
- Ajout et suppression des tâches avec validation.
- Affichage sous forme de liste avec un bouton pour voir les détails.
- Navigation vers `DetailScreen` en cliquant sur une tâche.

```jsx
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
```
---

#### **📌 `DetailScreen.js`**

Cet écran affiche les détails d'une tâche sélectionnée depuis `ToDoListScreen`.

Fonctionnalités principales :
- Récupération des paramètres passés en navigation.
- Affichage du nom de la tâche et de sa description.

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.text}</Text>
      <Text style={styles.description}>{task.description}</Text>
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
    color: '#2c3e50',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#34495e',
    lineHeight: 24,
  },
});
```

---

#### **📌 `ProfileScreen.js`**

Cet écran affiche une photo de profil et des informations sur le nombre de tâches ajoutées.

Fonctionnalités principales :
- Affichage d'une image de profil.
- Indication du nombre de tâches créées.

```jsx
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ProfileScreen({ route }) {
  const listeTaches = [];

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image} />
      <Text style={styles.welcome}>Bienvenue!</Text>
      <Text style={styles.todoCount}>Vous avez {listeTaches.length} tâches créées.</Text>
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
    borderwidth: 5
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

---

#### **📌 `App.js`**

Ce fichier met en place la navigation entre les écrans via :
- Un `Stack Navigator` pour gérer la navigation entre `ToDoListScreen` et `DetailScreen`.
- Un `Bottom Tab Navigator` pour basculer entre la liste des tâches et le profil.
- Des icônes pour chaque onglet de navigation.

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ToDoListScreen from './screens/ToDoListScreen';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';

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
  );
}
```
---

### **4️⃣ Navigation dans l'application**

#### **Navigation en pile (`Stack Navigator`)**
- Utilisée pour passer de `ToDoListScreen` à `DetailScreen`.
- Permet de revenir en arrière automatiquement.

#### **Navigation en onglets (`Bottom Tab Navigation`)**
- Ajoute une barre de navigation en bas de l'écran.
- Deux onglets : `Taches` (liste des tâches) et `Profile`.
- Utilisation d'icônes personnalisées via `@expo/vector-icons`.

---

### **5️⃣ Exemple de rendu final**

Voici un aperçu de l'application avec la navigation implémentée :
- **Écran principal** : Liste des tâches avec ajout et suppression.
- **Écran de détails** : Affiche les informations détaillées d'une tâche.
- **Écran de profil** : Affiche une image de profil et le nombre de tâches créées.

---

### **6️⃣ Résumé**

Dans cette leçon, nous avons appris à :
- Configurer `react-navigation` dans une application React Native.
- Implémenter une navigation en pile (`Stack Navigator`) et en onglets (`Bottom Tab Navigator`).
- Modulariser le code en plusieurs fichiers pour une meilleure organisation.

---