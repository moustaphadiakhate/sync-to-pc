# TP CORRIGÉ FINALE (Todo App) - SMI 2026

# 1) Structure du projet

```text
TheTodoTistApp/
│
├── src/
│   ├── api/
│   │   └── supabase.js
│   │
│   ├── components/
│   │   └── TodoCard.jsx
│   │
│   ├── navigation/
│   │   └── AppNavigator.jsx
│   │
│   ├── screens/
│   │   ├── HomeScreen.jsx
│   │   └── AddTodoScreen.jsx
│   │
│   └── styles/
│       └── theme.js
│
├── App.js
└── package.json
```

---

# 2) Installation des dépendances

```bash
npx expo install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

npm install @react-navigation/native-stack
npm install @supabase/supabase-js
npm install react-native-vector-icons
```

---

# 3) Supabase Setup

## Qu'est-ce que Supabase ?

Supabase est une **base de données en ligne gratuite** qui facilite le stockage et la récupération de données sans gérer un serveur complexe.

Pense à ça comme une "feuille Google Sheets" mais pour des données structurées, accessible via une API.

### Avantages :
- Gratuit pour débuter
- Base de données PostgreSQL (SQL standard)
- API REST/JavaScript facile d'accès
- Authentification intégrée (on verra plus tard)
- Temps réel (real-time updates)

---

## Comment ça marche ?

```
Mon App React Native
       ↓
   HTTP API
       ↓
  Supabase Cloud
       ↓
  Base de données PostgreSQL
```

Au lieu de faire `SELECT * FROM todos` directement, tu dis à Supabase :
"Donne-moi tous les todos" → Supabase exécute la requête et te renvoie les résultats en JSON.

---

## Etapes pour créer ton projet Supabase

### Étape 1 : Aller sur https://supabase.com

### Étape 2 : S'inscrire (gratuit)

Clique sur "Sign up" → Utilise GitHub ou Email

### Étape 3 : Créer un nouveau projet

- Clique "New Project"
- Nomme-le "todo-app"
- Crée une password pour la DB
- Choisis une région (Europe si tu es en France)

### Étape 4 : Attendre que le projet démarre (~2 min)

Une fois prêt, tu verras un dashboard

---

## Créer la table SQL

Dans le dashboard Supabase, va dans : **SQL Editor** → **New Query**

Copie/colle ce code SQL :

## Table SQL

```sql
create extension if not exists "uuid-ossp";

create table todos (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  created_at timestamp default now()
);
```

### Explication du SQL

```sql
create extension if not exists "uuid-ossp";
```
Charge une extension PostgreSQL pour générer des ID uniques (UUID)

```sql
create table todos (
```
Crée une table appelée `todos`

```sql
id uuid primary key default uuid_generate_v4(),
```
- **id** : Colonne d'identifiant unique
- **uuid** : Type de donnée (chaîne de 36 caractères unique)
- **primary key** : C'est LA clé unique de chaque ligne
- **default uuid_generate_v4()** : Génère automatiquement un UUID unique à chaque insertion

```sql
title text not null,
```
- **title** : Le contenu de la tâche
- **text** : Type de donnée (du texte)
- **not null** : On DOIT toujours avoir une valeur (pas vide)

```sql
created_at timestamp default now()
```
- **created_at** : Date/heure de création
- **timestamp** : Type de donnée (date + heure)
- **default now()** : Rempli automatiquement avec la date/heure actuelle

---

## Récupérer les clés d'accès Supabase

Une fois la table créée, tu dois récupérer tes clés pour connecter ton app.

### Dans le dashboard Supabase :

**Settings** → **API** (onglet à gauche)

Tu verras deux clés importantes :

```
Project URL:     https://XXXXXXXXXXXX.supabase.co
Anon Key:        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Copie ces deux valeurs**

---

## API Supabase

# 4) Connexion Supabase

## src/api/supabase.js

```js
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
```

---

# 5) Theme UI

## src/styles/theme.js

```js
export const colors = {
  primary: "#4F46E5",
  background: "#F3F4F6",
  card: "#FFFFFF",
  text: "#111827",
  danger: "#EF4444",
};
```

---

# 6) Navigation

## src/navigation/AppNavigator.js

```js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import AddTodoScreen from "../screens/AddTodoScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddTodo" component={AddTodoScreen} />
    </Stack.Navigator>
  );
}
```

---

# 7) App Entry

## App.js

```js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
```

---

# 8) Composant Todo (UI Card)

## src/components/TodoCard.js

```js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../styles/theme";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function TodoCard({ todo, onDelete }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{todo.title}</Text>

      <TouchableOpacity onPress={() => onDelete(todo.id)}>
        <Icon name="delete" size={22} color={colors.danger} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 3,
  },
  title: {
    fontSize: 16,
    color: colors.text,
  },
});
```

---

# 9) HomeScreen (READ + DELETE)

## src/screens/HomeScreen.js

```js
import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../api/supabase";
import TodoCard from "../components/TodoCard";
import { colors } from "../styles/theme";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [todos, setTodos] = useState([]);

  // READ
  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setTodos(data);
  };

  // DELETE
  const deleteTodo = async (id) => {
    await supabase.from("todos").delete().eq("id", id);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        <Text style={styles.empty}>Aucune tâche</Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoCard todo={item} onDelete={deleteTodo} />
          )}
        />
      )}

      {/* FAB */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddTodo")}
      >
        <Icon name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 15,
  },
  empty: {
    textAlign: "center",
    marginTop: 50,
    color: "#6B7280",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
```

---

# 10) AddTodoScreen (CREATE)

## src/screens/AddTodoScreen.js

```js
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../api/supabase";
import { colors } from "../styles/theme";

export default function AddTodoScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");

  const addTodo = async () => {
    if (!title) return;

    await supabase.from("todos").insert([{ title }]);

    setTitle("");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nouvelle tâche..."
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
```

---

# Résultat final

### Fonctionnel :

* Lire todos (Supabase SELECT)
* Ajouter todo (INSERT)
* Supprimer todo (DELETE)
* Navigation entre écrans

### UI améliorée :

* cards modernes
* bouton flottant (+)
* écran vide stylé
* design propre type Notion

---

# TRAVAIL À FAIRE

## Objectif : Implémenter la feature Edit Todo

### Tâches à réaliser :

#### 1) Mettre à jour theme.js

Ajouter une couleur `warning` pour les boutons d'édition :

```js
warning: "#F59E0B"
```

#### 2) Créer EditTodoScreen

Créer un nouveau fichier `src/screens/EditTodoScreen.js` qui :
- Récupère les params du route (le todo à modifier)
- Affiche un TextInput pré-rempli avec le titre actuel
- Utilise `useNavigation()` et `useRoute()` hooks
- Appelle `supabase.from("todos").update({ title }).eq("id", todo.id)`
- Revient à l'écran précédent après l'update

#### 3) Mettre à jour AppNavigator

Ajouter la route `EditTodo` au Stack Navigator :

```js
<Stack.Screen name="EditTodo" component={EditTodoScreen} />
```

#### 4) Mettre à jour TodoCard

Modifier le composant pour :
- Afficher 2 icônes : edit et delete
- Passer une prop `onEdit` 
- Appeler `onEdit(todo)` quand on clique sur edit

#### 5) Mettre à jour HomeScreen

Ajouter une fonction `editTodo` qui navigue vers l'écran d'édition :

```js
const editTodo = (todo) => {
  navigation.navigate("EditTodo", { todo });
};
```

Passer cette fonction au composant `TodoCard`

---

# Indices

- Regarder comment `AddTodoScreen` est structuré pour le modèle
- La méthode `update()` de Supabase fonctionne comme `insert()` et `delete()`
- Utiliser `.eq()` pour filtrer par ID
- Rafraîchir la liste après l'update avec `fetchTodos()`
