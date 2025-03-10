Parfait Moustapha ! Voici le cours **"Leçon 5 : Navigation avec React Navigation"**, bien structuré pour ta formation.

---

## 🚀 **Leçon 5 : Navigation avec React Navigation**

### ✅ Objectifs :
- Comprendre le fonctionnement de `react-navigation`.
- Naviguer entre plusieurs écrans.
- Passer des paramètres d’un écran à un autre.

---

### 🔸 1. Installation de `react-navigation` (Expo)

Dans ton terminal ou Snack, installe les dépendances :

```bash
npx expo install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npx expo install @react-navigation/native-stack
```

---

### 🔸 2. Configuration de la navigation

Crée un fichier `App.js` :

```tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

### 🔸 3. Création des écrans

#### `screens/HomeScreen.tsx`

```tsx
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [tasks] = useState([
    { id: '1', title: 'Faire les courses', description: 'Acheter lait, pain, oeufs' },
    { id: '2', title: 'Coder une app', description: 'Créer un écran de login' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des tâches</Text>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.taskItem}
              onPress={() => navigation.navigate('Details', { task: item })}
            >
              <Text style={styles.taskTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  taskItem: {
    padding: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 10,
  },
  taskTitle: { fontSize: 18 },
});

export default HomeScreen;
```

---

#### `screens/DetailScreen.tsx`

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détail de la tâche</Text>
      <Text style={styles.label}>Titre :</Text>
      <Text style={styles.content}>{task.title}</Text>
      <Text style={styles.label}>Description :</Text>
      <Text style={styles.content}>{task.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 18, fontWeight: '600' },
  content: { fontSize: 16, marginBottom: 15 },
});

export default DetailScreen;
```

---

### 📦 Résumé :
- Tu as mis en place une navigation `Stack`.
- Tu sais naviguer d’un écran à l’autre.
- Tu peux passer des objets ou des paramètres via `navigate`.

---

## 📝 **Exercice : Créer un écran de détails pour une tâche**
1. À partir de la `HomeScreen`, clique sur une tâche.
2. Navigue vers `DetailScreen` avec les données de la tâche.
3. Affiche le titre et la description sur la page de détail.

---
