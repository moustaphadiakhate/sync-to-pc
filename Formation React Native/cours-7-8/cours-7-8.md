Voici un cours détaillé sur **Les Hooks avancés et la gestion des effets de bord** en React Native avec **useEffect, useContext et useMemo**.  

---  

# 📖 **Leçon 7 -8 : Hooks avancés et gestion des effets de bord**  

Dans cette leçon, nous allons explorer trois concepts essentiels pour optimiser nos applications React Native :  

1. **Utilisation de `useEffect` pour gérer les effets de bord.**  
2. **Gestion des dépendances dans `useEffect`.**  
3. **Utilisation de `useContext` pour partager des états globaux.**  
4. **Optimisation des performances avec `useMemo`.**  

## 📌 **1. Utilisation de `useEffect` pour gérer les effets de bord**  

Le Hook `useEffect` est utilisé pour exécuter du code après le rendu du composant. Il est souvent utilisé pour :  
✅ Effectuer des appels API.  
✅ Écouter des événements.  
✅ Mettre à jour le titre de la page.  
✅ Synchroniser des données avec le stockage local ou une base de données.  

### ⚡ **Exemple : Récupérer des données depuis une API**  
Imaginons une application qui affiche une liste d’utilisateurs depuis une API.  

```tsx
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Appel API pour récupérer les utilisateurs
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []); // 👈 Exécuté une seule fois au montage du composant

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default UserList;
```

### Explication :
- `useEffect` est appelé après le premier rendu du composant.
- On effectue un **fetch** vers une API externe.
- Les utilisateurs sont stockés dans **useState** et affichés dans une **FlatList**.
- L’effet ne s’exécute qu’une seule fois grâce au tableau de dépendances `[]`.

---

## 📌 **2. Gestion des dépendances dans `useEffect`**  

Le deuxième paramètre de `useEffect` est un tableau de dépendances. Il permet de contrôler quand l'effet doit être ré-exécuté.  

### ⚡ **Exemple : Exécuter `useEffect` lorsque l'utilisateur change**  

```tsx
import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

const UserProfile = () => {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [userId]); // 👈 useEffect est ré-exécuté à chaque changement de userId

  return (
    <View>
      {user ? <Text>{user.name}</Text> : <Text>Chargement...</Text>}
      <Button title="Utilisateur suivant" onPress={() => setUserId(userId + 1)} />
    </View>
  );
};

export default UserProfile;
```

### Explication :
- L’effet s’exécute **chaque fois que `userId` change**.
- Lorsque l'on clique sur le bouton, `userId` change et `useEffect` est ré-exécuté.

---

## 📌 **3. Utilisation de `useContext` pour partager des états globaux**  

Le Hook `useContext` permet de partager des données entre plusieurs composants sans prop drilling (passer des props à chaque niveau).  

### ⚡ **Exemple : Création d’un contexte utilisateur**  

**1️⃣ Créons un `UserContext` global :**  

```tsx
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Moustapha", age: 30 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
```

**2️⃣ Utilisation du contexte dans un composant enfant :**  

```tsx
import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <View>
      <Text>Nom : {user.name}</Text>
      <Text>Âge : {user.age}</Text>
      <Button title="Vieillir" onPress={() => setUser({ ...user, age: user.age + 1 })} />
    </View>
  );
};

export default UserProfile;
```

**3️⃣ Enveloppons l’application avec le Provider :**  

```tsx
import React from "react";
import { UserProvider } from "./UserContext";
import UserProfile from "./UserProfile";

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
};

export default App;
```

### Explication :
- `createContext` crée un contexte global.
- `UserProvider` stocke l'état de l'utilisateur.
- `useContext` permet d’accéder directement aux données du contexte.

---

## 📌 **4. Optimisation des performances avec `useMemo`**  

Le Hook `useMemo` optimise les calculs coûteux en **mémorisant** le résultat d’une fonction tant que les dépendances ne changent pas.  

### ⚡ **Exemple : Calculer une valeur optimisée**  

```tsx
import React, { useState, useMemo } from "react";
import { View, Text, Button } from "react-native";

const HeavyComputation = ({ number }) => {
  const expensiveCalculation = (num) => {
    console.log("Calcul en cours...");
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(number), [number]);

  return <Text>Résultat : {result}</Text>;
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <HeavyComputation number={count} />
      <Button title="Incrémenter" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default App;
```

### Explication :
- Sans `useMemo`, `expensiveCalculation` s'exécuterait à **chaque rendu**.
- Avec `useMemo`, **le calcul est évité** si `number` ne change pas.

---

## 🎯 **Résumé de la leçon**  
| Concept | Utilisation |
|---------|------------|
| `useEffect` | Exécuter des effets après le rendu |
| Dépendances dans `useEffect` | Exécuter un effet seulement si certaines valeurs changent |
| `useContext` | Partager un état global sans passer des props |
| `useMemo` | Optimiser des calculs coûteux |

---
