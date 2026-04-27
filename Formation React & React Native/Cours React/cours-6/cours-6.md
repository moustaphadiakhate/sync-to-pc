# 🗄️ **Leçon 6 : Gestion du contexte et stockage des données**

## ✅ Objectifs :
- Comprendre le problème du "prop drilling".
- Utiliser **Context API** pour gérer l'état global.
- Créer un `TodoContext` pour partager les données.
- Persister les données avec **LocalStorage**.
- Synchroniser l'état avec le stockage local.

---

## 🔸 **1. Le problème du Prop Drilling**

### Qu'est-ce que le Prop Drilling ?

Le **prop drilling** se produit lorsque vous devez passer des props à travers plusieurs niveaux de composants pour atteindre un composant enfant profond.

**Exemple du problème :**

```jsx
function App() {
  const [user, setUser] = useState({ name: 'Alice' });
  return <Header user={user} />;
}

function Header({ user }) {
  return <Navbar user={user} />;
}

function Navbar({ user }) {
  return <UserProfile user={user} />;
}

function UserProfile({ user }) {
  return <p>Bonjour {user.name}</p>;
}
```

**Problème :** `user` doit traverser `Header` et `Navbar` juste pour arriver à `UserProfile`. 😓

**Solution :** Utiliser **Context API** !

---

## 🔸 **2. Introduction à Context API**

**Context API** permet de partager des données entre composants sans passer par les props.

### Quand utiliser Context ?

✅ Authentification de l'utilisateur  
✅ Thème (dark/light mode)  
✅ Langue de l'application  
✅ Données partagées (panier, todos, etc.)  

⚠️ **Attention :** N'abusez pas du Context. Pour des cas simples, les props suffisent.

---

## 🔸 **3. Créer un Context**

### Étape 1 : Créer le Context

**src/context/TodoContext.jsx**

```jsx
import React, { createContext, useState, useContext } from 'react';

// 1. Créer le Context
const TodoContext = createContext();

// 2. Créer le Provider
export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Apprendre React', completed: false },
    { id: 2, title: 'Maîtriser Context API', completed: false }
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const value = {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

// 3. Créer un hook personnalisé pour utiliser le Context
export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos doit être utilisé dans un TodoProvider');
  }
  return context;
}
```

### Étape 2 : Envelopper l'application avec le Provider

**src/main.jsx**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TodoProvider } from './context/TodoContext'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <App />
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
```

### Étape 3 : Utiliser le Context dans les composants

**src/pages/TodoList.jsx**

```jsx
import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';
import './TodoList.css';

function TodoList() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="todo-container">
      <h1>📝 Ma Todo List</h1>

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Ajouter une tâche..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-message">Aucune tâche pour le moment</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#999' : '#333'
              }}>
                {todo.title}
              </span>
              <button 
                onClick={() => deleteTodo(todo.id)}
                className="delete-btn"
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>

      <div className="todo-stats">
        <p>Total : {todos.length} tâches</p>
        <p>Complétées : {todos.filter(t => t.completed).length}</p>
        <p>Actives : {todos.filter(t => !t.completed).length}</p>
      </div>
    </div>
  );
}

export default TodoList;
```

---

## 🔸 **4. Introduction à LocalStorage**

**LocalStorage** permet de stocker des données dans le navigateur de manière persistante.

### Méthodes principales :

```javascript
// Sauvegarder une donnée
localStorage.setItem('key', 'value');

// Récupérer une donnée
const value = localStorage.getItem('key');

// Supprimer une donnée
localStorage.removeItem('key');

// Tout supprimer
localStorage.clear();
```

⚠️ **Important :** LocalStorage ne stocke que des **chaînes de caractères**. Utilisez `JSON.stringify()` et `JSON.parse()` pour les objets.

**Exemple :**

```javascript
// Sauvegarder un objet
const user = { name: 'Alice', age: 25 };
localStorage.setItem('user', JSON.stringify(user));

// Récupérer l'objet
const savedUser = JSON.parse(localStorage.getItem('user'));
console.log(savedUser.name); // 'Alice'
```

---

## 🔸 **5. Persister les Todos avec LocalStorage**

Modifions notre `TodoContext` pour sauvegarder et restaurer les todos.

**src/context/TodoContext.jsx (Version avec LocalStorage)**

```jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const TodoContext = createContext();

const LOCAL_STORAGE_KEY = 'todos';

export function TodoProvider({ children }) {
  // Initialiser avec les données du LocalStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Sauvegarder dans LocalStorage à chaque changement
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const updateTodo = (id, newTitle) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const value = {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo,
    clearCompleted
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos doit être utilisé dans un TodoProvider');
  }
  return context;
}
```

**Explication :**

1. **Initialisation :**
   ```jsx
   const [todos, setTodos] = useState(() => {
     const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
     return savedTodos ? JSON.parse(savedTodos) : [];
   });
   ```
   - On récupère les todos du LocalStorage au premier rendu.
   - Si aucune donnée n'existe, on initialise avec un tableau vide.

2. **Sauvegarde automatique :**
   ```jsx
   useEffect(() => {
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
   }, [todos]);
   ```
   - À chaque modification de `todos`, on sauvegarde dans LocalStorage.

---

## 🔸 **6. Créer un Context pour le Thème (Bonus)**

**src/context/ThemeContext.jsx**

```jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

**Utilisation :**

```jsx
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1>Mon App</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}
```

**CSS (index.css) :**

```css
body.light {
  background-color: white;
  color: black;
}

body.dark {
  background-color: #1a1a1a;
  color: white;
}
```

---

## 🔸 **7. Patterns avancés avec Context**

### A. Combiner plusieurs Contexts

```jsx
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TodoProvider>
          <AppContent />
        </TodoProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
```

### B. Context avec useReducer (pour état complexe)

```jsx
import { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
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

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (title) => {
    dispatch({ 
      type: 'ADD_TODO', 
      payload: { id: Date.now(), title, completed: false } 
    });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
```

---

## 🔸 **8. Bonnes pratiques**

✅ **Un Context par fonctionnalité** : TodoContext, AuthContext, ThemeContext  
✅ **Créer des hooks personnalisés** : `useTodos()`, `useAuth()`  
✅ **Vérifier que le Context existe** : `throw new Error` si utilisé hors Provider  
✅ **Optimiser les re-renders** : Séparer les valeurs qui changent souvent  
✅ **Documenter votre Context** : Commentaires sur les fonctions disponibles  

---

## 🔸 **9. LocalStorage vs SessionStorage vs Cookies**

| Critère | LocalStorage | SessionStorage | Cookies |
|---------|-------------|----------------|---------|
| **Persistance** | Permanent | Jusqu'à fermeture de l'onglet | Selon expiration |
| **Taille max** | ~5-10 MB | ~5-10 MB | ~4 KB |
| **Envoi serveur** | ❌ Non | ❌ Non | ✅ Oui |
| **Accès** | JavaScript | JavaScript | JavaScript + HTTP |

**Recommandation :** Utilisez LocalStorage pour les préférences utilisateur et SessionStorage pour les données temporaires.

---

## 🔸 **10. Exercice pratique**

### 🎯 Objectif :
Créer un système complet avec :
1. ✅ Context API pour gérer les todos
2. ✅ LocalStorage pour persister les données
3. ✅ Ajout, suppression, modification de tâches
4. ✅ Compteur de tâches actives/complétées
5. ✅ Bouton pour effacer les tâches complétées

**Solution :** Utilisez les exemples ci-dessus !

---

## 📚 **Ressources complémentaires**

- [Context API Documentation](https://react.dev/reference/react/useContext)
- [LocalStorage MDN](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)
- [When to use Context](https://react.dev/learn/passing-data-deeply-with-context)

---

## 🎓 **Résumé du cours**

✅ Context API résout le problème du prop drilling  
✅ `createContext()` crée un contexte  
✅ `Provider` fournit les valeurs aux composants enfants  
✅ `useContext()` consomme le contexte  
✅ LocalStorage permet de persister les données  
✅ `useEffect()` synchronise l'état avec LocalStorage  
✅ Utilisez `JSON.stringify()` et `JSON.parse()` pour les objets  

---

**Prochaine étape :** Dans le cours 7-8, nous allons approfondir les **Hooks avancés** (useEffect, useReducer, useMemo, useCallback) et faire des appels API ! 🚀
