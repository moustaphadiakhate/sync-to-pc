# 📖 **Leçon 7-8 : Hooks avancés et gestion des effets de bord**

Dans cette leçon, nous allons explorer les concepts essentiels pour optimiser vos applications React :

1. **Utilisation de `useEffect` pour gérer les effets de bord.**
2. **Gestion des dépendances dans `useEffect`.**
3. **Utilisation de `useReducer` comme alternative à `useState`.**
4. **Optimisation des performances avec `useMemo` et `useCallback`.**
5. **Requêtes API avec `fetch` et gestion des états de chargement.**

---

## 📌 **1. Utilisation de `useEffect` pour gérer les effets de bord**

Le Hook `useEffect` est utilisé pour exécuter du code après le rendu du composant. Il est souvent utilisé pour :

✅ Effectuer des appels API.  
✅ S'abonner à des événements (scroll, resize, etc.).  
✅ Mettre à jour le titre de la page.  
✅ Synchroniser avec LocalStorage ou une base de données.  
✅ Nettoyer des ressources (timers, subscriptions).  

### ⚡ **Syntaxe de base :**

```jsx
useEffect(() => {
  // Code à exécuter après le rendu
  
  return () => {
    // Code de nettoyage (optionnel)
  };
}, [dependencies]); // Tableau de dépendances
```

### ⚡ **Exemple 1 : Appel API au montage du composant**

```jsx
import React, { useEffect, useState } from "react";

function UserList() {
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
      .catch((error) => {
        console.error("Erreur:", error);
        setLoading(false);
      });
  }, []); // 👈 Tableau vide = exécuté une seule fois au montage

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

### ⚡ **Exemple 2 : Mettre à jour le titre de la page**

```jsx
import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  }, [count]); // 👈 Re-exécuté à chaque changement de count

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}
```

### ⚡ **Exemple 3 : Écouter un événement (avec nettoyage)**

```jsx
import { useEffect, useState } from 'react';

function WindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener('resize', handleResize);

    // Fonction de nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Exécuté une seule fois

  return <p>Largeur de la fenêtre : {windowWidth}px</p>;
}
```

---

## 📌 **2. Gestion des dépendances dans `useEffect`**

Le deuxième paramètre de `useEffect` est un **tableau de dépendances** qui contrôle quand l'effet doit être ré-exécuté.

### 📋 **Règles des dépendances :**

| Tableau de dépendances | Comportement |
|------------------------|--------------|
| `[]` (vide) | Exécuté **une seule fois** au montage |
| `[count, name]` | Exécuté à chaque changement de `count` ou `name` |
| Pas de tableau | Exécuté **après chaque rendu** (⚠️ Attention aux boucles infinies !) |

### ⚡ **Exemple : Exécuter `useEffect` lorsque l'utilisateur change**

```jsx
import React, { useEffect, useState } from "react";

function UserProfile() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [userId]); // 👈 Re-exécuté à chaque changement de userId

  return (
    <div>
      {loading ? (
        <p>Chargement...</p>
      ) : user ? (
        <div>
          <h2>{user.name}</h2>
          <p>Email : {user.email}</p>
          <p>Ville : {user.address.city}</p>
        </div>
      ) : null}
      
      <button onClick={() => setUserId(userId + 1)}>
        Utilisateur suivant
      </button>
    </div>
  );
}

export default UserProfile;
```

---

## 📌 **3. Utilisation de `useReducer` comme alternative à `useState`**

`useReducer` est utile pour **gérer un état complexe** avec plusieurs actions.

### ⚡ **Quand utiliser `useReducer` ?**

✅ État avec plusieurs sous-valeurs  
✅ Logique de mise à jour complexe  
✅ Besoin de plusieurs actions (add, delete, update)  

### ⚡ **Syntaxe :**

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### ⚡ **Exemple : Gestion d'une Todo List avec `useReducer`**

```jsx
import React, { useReducer, useState } from 'react';

// Fonction reducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), title: action.payload, completed: false }];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload 
          ? { ...todo, completed: !todo.completed } 
          : todo
      );
    default:
      return state;
  }
};

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Todo List avec useReducer</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ajouter une tâche..."
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

---

## 📌 **4. Optimisation des performances avec `useMemo` et `useCallback`**

### A. `useMemo` - Mémoriser des valeurs calculées

`useMemo` permet de **mémoriser le résultat d'un calcul coûteux** pour éviter de le recalculer à chaque rendu.

**Syntaxe :**
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

**Exemple :**

```jsx
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ numbers }) {
  const sum = useMemo(() => {
    console.log('Calcul de la somme...');
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]); // Recalculé uniquement si 'numbers' change

  return <p>Somme : {sum}</p>;
}

function App() {
  const [count, setCount] = useState(0);
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <ExpensiveCalculation numbers={numbers} />
      <button onClick={() => setCount(count + 1)}>
        Compteur : {count}
      </button>
    </div>
  );
}
```

### B. `useCallback` - Mémoriser des fonctions

`useCallback` permet de **mémoriser une fonction** pour éviter de la recréer à chaque rendu.

**Syntaxe :**
```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**Exemple :**

```jsx
import React, { useState, useCallback } from 'react';

function Child({ onClick }) {
  console.log('Child rendu');
  return <button onClick={onClick}>Cliquez-moi</button>;
}

const MemoizedChild = React.memo(Child);

function Parent() {
  const [count, setCount] = useState(0);

  // Sans useCallback, cette fonction est recréée à chaque rendu
  const handleClick = useCallback(() => {
    console.log('Bouton cliqué !');
  }, []);

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <MemoizedChild onClick={handleClick} />
    </div>
  );
}
```

---

## 📌 **5. Requêtes API complètes avec gestion des états**

### ⚡ **Pattern complet pour les appels API**

```jsx
import React, { useState, useEffect } from 'react';

function TodosFromAPI() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        
        const data = await response.json();
        setTodos(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setTodos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Chargement en cours...</p>
        <div className="spinner">⏳</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ color: 'red', padding: '2rem' }}>
        <h2>❌ Erreur</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Tâches depuis l'API</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodosFromAPI;
```

### ⚡ **Créer un hook personnalisé pour les appels API**

```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Erreur réseau');
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Utilisation :
function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      {data.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 📚 **Ressources complémentaires**

- [useEffect Documentation](https://react.dev/reference/react/useEffect)
- [useReducer Documentation](https://react.dev/reference/react/useReducer)
- [useMemo Documentation](https://react.dev/reference/react/useMemo)
- [useCallback Documentation](https://react.dev/reference/react/useCallback)
- [Fetch API MDN](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)

---

## 🎓 **Résumé du cours**

✅ `useEffect` gère les effets de bord (API, événements, etc.)  
✅ Le tableau de dépendances contrôle quand l'effet s'exécute  
✅ Retourner une fonction de nettoyage pour éviter les fuites mémoire  
✅ `useReducer` est idéal pour un état complexe  
✅ `useMemo` mémorise des calculs coûteux  
✅ `useCallback` mémorise des fonctions  
✅ Toujours gérer `loading`, `error`, et `data` pour les appels API  
✅ Créez des hooks personnalisés pour réutiliser la logique  

---

**Prochaine étape :** Dans le TP final, nous allons intégrer tous ces concepts pour créer une application Todo List complète avec API, Context, LocalStorage, et Router ! 🚀
