# Cours 2 : Composants, State et Props

Bienvenue dans ce deuxième cours de formation ! Dans cette session, nous allons explorer en profondeur les concepts essentiels des **composants**, du **state** (état) et des **props** dans React. Vous apprendrez à :

- Créer et utiliser des composants réutilisables (fonctionnels et de classe)
- Gérer l'état local avec le hook `useState`
- Transmettre des données entre composants via les props

Ce cours très détaillé est riche en exemples, explications pas-à-pas, liens utiles et comprend un TP complet pour mettre en pratique ces concepts.

---

## 1. Introduction aux composants

### 1.1 Qu'est-ce qu'un composant ?
Un **composant** est une brique réutilisable de l'interface utilisateur. En React, tout est un composant : boutons, formulaires, pages entières, etc.

**Pensez aux composants comme des LEGO :** Chaque pièce peut être assemblée pour construire quelque chose de plus grand.

**Exemple simple :**

```jsx
import React from 'react';

export default function Bonjour() {
  return <h1>Bonjour, bienvenue dans l'application !</h1>;
}
```
Ce composant `Bonjour` retourne simplement un titre à afficher.

### 1.2 Composants fonctionnels vs Composants de classe

Il existe deux manières principales de créer des composants :

#### Composants fonctionnels (Recommandé)
Ils sont définis comme des fonctions JavaScript. Grâce aux **Hooks** (introduits en 2019), ils sont désormais la méthode privilégiée.

**Exemple de composant fonctionnel :**

```jsx
import React from 'react';

const WelcomeMessage = () => {
  return (
    <div>
      <h1>Bienvenue sur l'application!</h1>
      <p>Commencez à gérer vos tâches dès maintenant.</p>
    </div>
  );
};

export default WelcomeMessage;
```

#### Composants de classe (Ancien style)
Historiquement, les composants de classe étaient utilisés pour gérer l'état et le cycle de vie. Aujourd'hui, ils sont moins courants mais utiles à connaître.

**Exemple de composant de classe :**

```jsx
import React, { Component } from 'react';

class WelcomeMessageClass extends Component {
  render() {
    return (
      <div>
        <h1>Bienvenue sur l'application (composant de classe)!</h1>
      </div>
    );
  }
}

export default WelcomeMessageClass;
```

**🎯 Recommandation :** Utilisez toujours les **composants fonctionnels** avec les **Hooks** dans vos projets modernes.

**Liens utiles :**
- [Introduction aux composants React](https://react.dev/learn/your-first-component)
- [Hooks en React](https://react.dev/reference/react)

---

## 2. Le State dans React

### 2.1 Introduction à useState

Le **state** (état) permet de stocker et de gérer des données dynamiques dans un composant. Dans les composants fonctionnels, le hook `useState` est utilisé pour créer cet état.

**Syntaxe :**

```jsx
const [state, setState] = useState(initialState);
```

- **`state`** : La valeur actuelle de l'état.
- **`setState`** : Fonction pour mettre à jour l'état.
- **`initialState`** : La valeur initiale de l'état.

### 2.2 Exemple d'utilisation de useState

Créons un composant de compteur qui incrémente une valeur à chaque clic.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={increment}>Incrémenter</button>
    </div>
  );
}

export default Counter;
```

**Explication :**
1. `useState(0)` initialise le compteur à 0.
2. `count` contient la valeur actuelle.
3. `setCount(count + 1)` met à jour l'état.
4. React re-rend automatiquement le composant avec la nouvelle valeur.

### 2.3 Plusieurs états dans un composant

Vous pouvez avoir plusieurs états dans un même composant :

```jsx
import React, { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState('Alice');
  const [age, setAge] = useState(25);
  const [city, setCity] = useState('Paris');

  return (
    <div>
      <p>Nom : {name}</p>
      <p>Âge : {age}</p>
      <p>Ville : {city}</p>
      <button onClick={() => setAge(age + 1)}>Anniversaire 🎂</button>
    </div>
  );
}

export default UserProfile;
```

### 2.4 État avec des objets

Vous pouvez également stocker des objets dans l'état :

```jsx
import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({
    name: 'Alice',
    age: 25,
    city: 'Paris'
  });

  const updateAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      <p>Nom : {user.name}</p>
      <p>Âge : {user.age}</p>
      <p>Ville : {user.city}</p>
      <button onClick={updateAge}>Anniversaire 🎂</button>
    </div>
  );
}

export default UserProfile;
```

**⚠️ Important :** Utilisez le spread operator `...` pour ne pas perdre les autres propriétés de l'objet.

---

## 3. Les Props dans React

### 3.1 Introduction aux Props

Les **props** (propriétés) permettent de **transmettre des données** d'un composant parent à un composant enfant.

**Analogie :** Les props sont comme des arguments de fonction que vous passez à un composant.

### 3.2 Passer des props

**Composant parent :**

```jsx
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

export default App;
```

**Composant enfant (Greeting) :**

```jsx
import React from 'react';

function Greeting(props) {
  return <h2>Bonjour {props.name} ! 👋</h2>;
}

export default Greeting;
```

### 3.3 Destructuring des props

Pour un code plus propre, utilisez la **déstructuration** :

```jsx
function Greeting({ name }) {
  return <h2>Bonjour {name} ! 👋</h2>;
}
```

### 3.4 Plusieurs props

Vous pouvez passer plusieurs props :

```jsx
import React from 'react';

function UserCard({ name, age, city }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Âge : {age} ans</p>
      <p>Ville : {city}</p>
    </div>
  );
}

export default UserCard;
```

**Utilisation :**

```jsx
<UserCard name="Alice" age={25} city="Paris" />
<UserCard name="Bob" age={30} city="Lyon" />
```

### 3.5 Props par défaut

Vous pouvez définir des valeurs par défaut :

```jsx
function Greeting({ name = "Invité" }) {
  return <h2>Bonjour {name} ! 👋</h2>;
}

// Si aucun nom n'est passé, affiche "Bonjour Invité !"
<Greeting />
```

### 3.6 Props avec des objets

```jsx
const user = {
  name: "Alice",
  age: 25,
  city: "Paris"
};

<UserCard {...user} />
// Équivalent à :
<UserCard name="Alice" age={25} city="Paris" />
```

---

## 4. Créer le composant TodoItem

### 4.1 Objectif

Créons un composant réutilisable **TodoItem** qui affiche une tâche avec un bouton pour la supprimer.

### 4.2 Création du composant

**Fichier : `src/components/TodoItem.jsx`**

```jsx
import React from 'react';
import './TodoItem.css';

function TodoItem({ task, onDelete }) {
  return (
    <div className="todo-item">
      <span className="task-text">{task}</span>
      <button onClick={onDelete} className="delete-btn">
        ❌ Supprimer
      </button>
    </div>
  );
}

export default TodoItem;
```

### 4.3 Styles du composant

**Fichier : `src/components/TodoItem.css`**

```css
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.task-text {
  font-size: 1.1rem;
  color: #333;
}

.delete-btn {
  background: #ff4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.delete-btn:hover {
  background: #cc0000;
}
```

### 4.4 Utilisation dans App.jsx

```jsx
import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    'Apprendre React',
    'Créer une Todo List',
    'Maîtriser les Hooks'
  ]);

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>📝 Ma Todo List</h1>
      <div className="todo-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
```

**Explication :**
- `tasks` est un tableau stocké dans l'état.
- `deleteTask` supprime une tâche en filtrant le tableau.
- `TodoItem` reçoit la tâche et la fonction de suppression via les props.

---

## 5. State vs Props : Quelle différence ?

| Critère | State | Props |
|---------|-------|-------|
| **Définition** | Données locales au composant | Données transmises par le parent |
| **Modifiable** | ✅ Oui (avec `setState`) | ❌ Non (lecture seule) |
| **Propriétaire** | Le composant lui-même | Le composant parent |
| **Usage** | Données dynamiques | Configuration du composant |

**Exemple concret :**

```jsx
function Parent() {
  const [message, setMessage] = useState('Hello'); // State

  return <Child greeting={message} />; // Props
}

function Child({ greeting }) {
  // greeting est une prop (lecture seule)
  return <h1>{greeting}</h1>;
}
```

---

## 6. Exercice Pratique Complet

### 🎯 Objectif :
Créer un composant **TodoItem** qui affiche une tâche avec un bouton pour la supprimer.

### Instructions :

1. **Créer le dossier `components`** dans `src/`
2. **Créer `TodoItem.jsx`** avec :
   - Une prop `task` (le texte de la tâche)
   - Une prop `onDelete` (fonction de suppression)
   - Un bouton qui appelle `onDelete` au clic
3. **Styliser le composant** dans `TodoItem.css`
4. **Utiliser `TodoItem`** dans `App.jsx` avec plusieurs tâches
5. **Ajouter la suppression** en filtrant le tableau

### Solution complète :

Voir le code dans la section 4 ci-dessus.

---

## 7. Concepts avancés (Aperçu)

### 7.1 Passer des fonctions en props

```jsx
function Parent() {
  const handleClick = () => {
    alert('Bouton cliqué !');
  };

  return <Child onClick={handleClick} />;
}

function Child({ onClick }) {
  return <button onClick={onClick}>Cliquez-moi</button>;
}
```

### 7.2 Props children

Les **children** sont un type spécial de props pour encapsuler du contenu :

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Utilisation :
<Card>
  <h2>Titre</h2>
  <p>Contenu de la carte</p>
</Card>
```

---

## 8. Bonnes pratiques

✅ **Nommez vos composants avec une majuscule** : `TodoItem`, pas `todoItem`  
✅ **Un composant = un fichier** : Facilite la maintenance  
✅ **Destructurez les props** : Code plus lisible  
✅ **Utilisez `const` pour les composants fonctionnels**  
✅ **Gardez les composants simples** : Une seule responsabilité  
✅ **Commentez votre code** si nécessaire  

---

## 9. Erreurs courantes à éviter

❌ **Modifier directement l'état :**
```jsx
// ❌ FAUX
tasks.push('Nouvelle tâche');

// ✅ CORRECT
setTasks([...tasks, 'Nouvelle tâche']);
```

❌ **Oublier la key dans les listes :**
```jsx
// ❌ FAUX
{tasks.map(task => <TodoItem task={task} />)}

// ✅ CORRECT
{tasks.map((task, index) => <TodoItem key={index} task={task} />)}
```

❌ **Modifier les props :**
```jsx
// ❌ FAUX
function Child({ name }) {
  name = "Nouveau nom"; // Interdit !
}
```

---

## 10. 📚 Ressources complémentaires

- [Composants et Props](https://react.dev/learn/passing-props-to-a-component)
- [State : A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [useState Hook](https://react.dev/reference/react/useState)
- [Thinking in React](https://react.dev/learn/thinking-in-react)

---

## 11. Résumé du cours

✅ Les composants sont les briques de base de React  
✅ `useState` permet de gérer l'état local  
✅ Les props transmettent des données du parent à l'enfant  
✅ Le state est modifiable, les props sont en lecture seule  
✅ Utilisez la déstructuration pour un code plus propre  
✅ Toujours utiliser `setState` pour modifier l'état  

---

**Prochaine étape :** Dans le cours 3, nous allons apprendre à styliser nos composants avec CSS, Flexbox, et découvrir les différentes approches de styling en React ! 🎨
