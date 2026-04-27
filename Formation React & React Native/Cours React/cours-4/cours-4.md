# 📜 **Leçon 4 : Listes et gestion des événements**

## ✅ Objectifs :
- Afficher des listes dynamiques avec la méthode `.map()`.
- Gérer les interactions utilisateur avec les événements (`onClick`, `onChange`, etc.).
- Créer des formulaires contrôlés avec `useState`.
- Ajouter, supprimer et modifier des éléments dans une liste.
- Comprendre l'importance de la prop `key`.

---

## 🔸 **1. Afficher des listes avec `.map()`**

En React, pour afficher une liste d'éléments, on utilise la méthode JavaScript `.map()` qui transforme un tableau en éléments JSX.

### Exemple simple :

```jsx
import React from 'react';

function FruitList() {
  const fruits = ['Pomme', 'Banane', 'Orange', 'Fraise'];

  return (
    <div>
      <h2>Liste de fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
```

**Explication :**
- `fruits.map()` parcourt chaque élément du tableau.
- Pour chaque `fruit`, on retourne un élément `<li>`.
- **`key={index}`** est obligatoire pour aider React à identifier chaque élément.

---

## 🔸 **2. L'importance de la prop `key`**

React utilise la prop `key` pour identifier les éléments d'une liste et optimiser le rendu.

### ⚠️ Règles importantes :

- ✅ **Utilisez toujours une `key` unique** (ID, index).
- ❌ **N'utilisez pas l'index si la liste change** (ajout/suppression).
- ✅ **Préférez un ID unique** provenant des données.

**Exemple avec un ID unique :**

```jsx
const tasks = [
  { id: 1, title: 'Apprendre React' },
  { id: 2, title: 'Faire les courses' },
  { id: 3, title: 'Lire un livre' }
];

return (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>{task.title}</li>
    ))}
  </ul>
);
```

---

## 🔸 **3. Gestion des événements**

React gère les événements de manière similaire au HTML, mais avec quelques différences :

| HTML | React |
|------|-------|
| `onclick` | `onClick` |
| `onchange` | `onChange` |
| `onsubmit` | `onSubmit` |

### Exemple avec `onClick` :

```jsx
import React from 'react';

function Button() {
  const handleClick = () => {
    alert('Bouton cliqué !');
  };

  return (
    <button onClick={handleClick}>
      Cliquez-moi
    </button>
  );
}

export default Button;
```

### Exemple avec un paramètre :

```jsx
function Button() {
  const handleClick = (name) => {
    alert(`Bonjour ${name} !`);
  };

  return (
    <button onClick={() => handleClick('Alice')}>
      Cliquez-moi
    </button>
  );
}
```

**⚠️ Important :** Utilisez une fonction fléchée `() => handleClick('Alice')` pour passer des arguments, sinon la fonction s'exécute immédiatement.

---

## 🔸 **4. Formulaires contrôlés**

Un **formulaire contrôlé** est un formulaire dont la valeur est gérée par l'état React.

### Exemple : Input contrôlé

```jsx
import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleChange}
      />
      <p>Vous recherchez : {searchTerm}</p>
    </div>
  );
}

export default SearchBar;
```

**Explication :**
- `value={searchTerm}` : La valeur de l'input est contrôlée par l'état.
- `onChange={handleChange}` : À chaque frappe, l'état est mis à jour.
- **Résultat :** L'input et l'état sont toujours synchronisés.

---

## 🔸 **5. Créer une Todo List complète**

Créons une application Todo List avec :
- Ajout de tâches
- Affichage de la liste
- Suppression de tâches

### Code complet :

```jsx
import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Ajouter une tâche
  const addTask = () => {
    if (task.trim()) {
      const newTask = {
        id: Date.now(),
        title: task
      };
      setTasks([...tasks, newTask]);
      setTask(''); // Vider l'input
    }
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Gérer l'appui sur "Entrée"
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="todo-container">
      <h1>📝 Ma Todo List</h1>
      
      <div className="input-container">
        <input
          type="text"
          placeholder="Ajouter une tâche..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>Ajouter</button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-message">Aucune tâche pour le moment</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span>{task.title}</span>
              <button 
                className="delete-btn" 
                onClick={() => deleteTask(task.id)}
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
```

### Styles (App.css) :

```css
.todo-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

.input-container {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #646cff;
}

button {
  padding: 0.75rem 1.5rem;
  background: #646cff;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #535bf2;
}

.task-list {
  list-style: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: #f9f9f9;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
}

.delete-btn {
  background: #ff4444;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.delete-btn:hover {
  background: #cc0000;
}

.empty-message {
  text-align: center;
  color: #999;
  font-style: italic;
}
```

---

## 🔸 **6. Fonctionnalités supplémentaires**

### A. Marquer une tâche comme complétée :

```jsx
const [tasks, setTasks] = useState([]);

const toggleComplete = (id) => {
  const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  setTasks(updatedTasks);
};

// Dans le rendu :
<li 
  key={task.id} 
  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
>
  <input
    type="checkbox"
    checked={task.completed}
    onChange={() => toggleComplete(task.id)}
  />
  <span>{task.title}</span>
</li>
```

### B. Filtrer les tâches (Toutes / Actives / Complétées) :

```jsx
const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

const filteredTasks = tasks.filter((task) => {
  if (filter === 'active') return !task.completed;
  if (filter === 'completed') return task.completed;
  return true; // 'all'
});

// Boutons de filtre :
<div>
  <button onClick={() => setFilter('all')}>Toutes</button>
  <button onClick={() => setFilter('active')}>Actives</button>
  <button onClick={() => setFilter('completed')}>Complétées</button>
</div>
```

---

## 🔸 **7. Événements courants en React**

| Événement | Description | Exemple |
|-----------|-------------|---------|
| `onClick` | Clic sur un élément | `<button onClick={handleClick}>` |
| `onChange` | Changement dans un input | `<input onChange={handleChange}>` |
| `onSubmit` | Soumission d'un formulaire | `<form onSubmit={handleSubmit}>` |
| `onKeyPress` | Appui sur une touche | `<input onKeyPress={handleKey}>` |
| `onFocus` | Focus sur un élément | `<input onFocus={handleFocus}>` |
| `onBlur` | Perte de focus | `<input onBlur={handleBlur}>` |
| `onMouseEnter` | Souris entre dans l'élément | `<div onMouseEnter={handleHover}>` |
| `onMouseLeave` | Souris quitte l'élément | `<div onMouseLeave={handleLeave}>` |

---

## 🔸 **8. Empêcher le comportement par défaut**

Pour empêcher le comportement par défaut d'un événement (ex: soumission de formulaire), utilisez `event.preventDefault()`.

```jsx
const handleSubmit = (event) => {
  event.preventDefault(); // Empêche le rechargement de la page
  console.log('Formulaire soumis');
};

return (
  <form onSubmit={handleSubmit}>
    <input type="text" />
    <button type="submit">Envoyer</button>
  </form>
);
```

---

## 🔸 **9. Exercice pratique**

### 🎯 Objectif :
Créer une Todo List avec les fonctionnalités suivantes :
1. ✅ Ajouter une tâche
2. ✅ Supprimer une tâche
3. ✅ Marquer une tâche comme complétée (checkbox)
4. ✅ Filtrer les tâches (Toutes / Actives / Complétées)
5. ✅ Afficher le nombre de tâches actives

**Solution :** Combinez tous les exemples ci-dessus !

---

## 📚 **Ressources complémentaires**

- [Listes et clés en React](https://react.dev/learn/rendering-lists)
- [Gestion des événements](https://react.dev/learn/responding-to-events)
- [Formulaires contrôlés](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)

---

## 🎓 **Résumé du cours**

✅ Utilisez `.map()` pour afficher des listes  
✅ Toujours ajouter une prop `key` unique  
✅ Les événements en React utilisent camelCase (`onClick`)  
✅ Les formulaires contrôlés synchronisent l'état avec l'input  
✅ Utilisez `filter()` pour supprimer des éléments  
✅ Utilisez `map()` pour modifier des éléments  
✅ `event.preventDefault()` empêche le comportement par défaut  

---

**Prochaine étape :** Dans le cours 5, nous allons apprendre à créer une navigation multi-pages avec **React Router** ! 🚀
