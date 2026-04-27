# COURS 1 : Introduction à React et mise en place du projet

Bienvenue dans cette première séance de formation ! Dans ce module, nous allons explorer les bases de React, découvrir l'écosystème Vite, comprendre l'intérêt de ES6, et mettre en place votre premier projet web. Vous apprendrez également à afficher un simple texte dans votre application. Ce cours détaillé inclut de nombreux exemples, explications étape par étape, et liens utiles pour approfondir vos connaissances.

---

## 1. Introduction à React

### 1.1 Qu'est-ce que React ?
React est une **bibliothèque JavaScript** développée par Facebook (Meta) qui permet de créer des interfaces utilisateur interactives pour le web.

**Principaux avantages :**
- **Composants réutilisables :** Construisez des briques d'interface que vous pouvez réutiliser partout.
- **Virtual DOM :** React optimise les mises à jour en ne modifiant que ce qui a changé.
- **Écosystème riche :** Des milliers de bibliothèques et d'outils disponibles.
- **Communauté massive :** Support actif et ressources abondantes.

### 1.2 React vs Vanilla JavaScript

**Sans React (Vanilla JS) :**
```javascript
// Manipulation directe du DOM
document.getElementById('root').innerHTML = '<h1>Bonjour !</h1>';
```

**Avec React :**
```jsx
// Déclaratif et facile à maintenir
function App() {
  return <h1>Bonjour !</h1>;
}
```

### 1.3 React vs autres frameworks

| Framework | Type | Philosophie |
|-----------|------|-------------|
| **React** | Bibliothèque | Flexibilité, composants |
| **Vue.js** | Framework progressif | Simplicité, template |
| **Angular** | Framework complet | Structure rigide, TypeScript |
| **Svelte** | Compilateur | Performance, moins de code |

**Pourquoi choisir React ?**
- ✅ Le plus populaire (demande élevée sur le marché)
- ✅ Utilisé par les grandes entreprises
- ✅ Écosystème mature
- ✅ React Native pour le mobile

---

## 2. Introduction à Vite

### 2.1 Qu'est-ce que Vite ?
Vite (prononcé "vite", comme en français ⚡) est un **outil de build** moderne et ultra-rapide pour les applications web.

**Pourquoi utiliser Vite ?**
- ⚡ **Démarrage instantané** : Le serveur de développement démarre en millisecondes.
- 🔥 **Hot Module Replacement (HMR)** : Voir les changements en temps réel sans recharger la page.
- 📦 **Build optimisé** : Production build ultra-rapide avec Rollup.
- 🎯 **Configuration minimale** : Fonctionne out-of-the-box.

### 2.2 Vite vs Create React App (CRA)

| Critère | Vite | Create React App |
|---------|------|------------------|
| **Vitesse de démarrage** | ⚡ Instantané | 🐢 Lent |
| **HMR** | ⚡ Ultra-rapide | 🐢 Plus lent |
| **Configuration** | Simple | Plus complexe |
| **Taille du build** | Optimisé | Plus lourd |

**Vite est le choix moderne recommandé !**

---

## 3. Présentation de Javascript ES6 et son intérêt

### 3.1 Les Variables : `let` et `const`

**Avant ES6 (var) :**
```javascript
var name = "Alice";
var name = "Bob"; // ❌ Peut créer des bugs
```

**Avec ES6 :**
```javascript
let age = 25;
age = 26; // ✅ OK, modifiable

const pi = 3.14159;
pi = 3.14; // ❌ Erreur ! Une constante ne peut pas être modifiée
```

**Règle d'or :** Utilisez `const` par défaut, `let` uniquement si la valeur change.

### 3.2 Les Arrow Functions

**Avant ES6 :**
```javascript
function greet(name) {
  return "Bonjour " + name;
}
```

**Avec ES6 :**
```javascript
const greet = (name) => {
  return `Bonjour ${name}`;
};

// Ou encore plus court :
const greet = (name) => `Bonjour ${name}`;
```

### 3.3 Template Literals (Chaînes de caractères améliorées)

**Avant ES6 :**
```javascript
const name = "Alice";
const message = "Bonjour " + name + ", tu as " + age + " ans.";
```

**Avec ES6 :**
```javascript
const name = "Alice";
const age = 25;
const message = `Bonjour ${name}, tu as ${age} ans.`;
```

### 3.4 Destructuring (Déstructuration)

**Objets :**
```javascript
const user = { name: "Alice", age: 25, city: "Paris" };

// Avant ES6
const name = user.name;
const age = user.age;

// Avec ES6
const { name, age } = user;
console.log(name); // "Alice"
```

**Tableaux :**
```javascript
const colors = ["red", "green", "blue"];

const [first, second] = colors;
console.log(first); // "red"
```

### 3.5 Spread Operator (`...`)

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Fusionner des tableaux
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copier un tableau
const copy = [...arr1];

// Fusionner des objets
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26 };
```

### 3.6 Les modules (`import` / `export`)

**Fichier `math.js` :**
```javascript
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

**Fichier `app.js` :**
```javascript
import { add, multiply } from './math.js';

console.log(add(2, 3)); // 5
```

---

## 4. Installation de l'environnement de développement

### 4.1 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

1. **Node.js** (version 16 ou supérieure)
   - Télécharger sur [nodejs.org](https://nodejs.org/)
   - Vérifier l'installation :
     ```bash
     node --version  # Doit afficher v16.x.x ou supérieur
     npm --version   # Doit afficher 8.x.x ou supérieur
     ```

2. **Un éditeur de code** (VS Code recommandé)
   - Télécharger sur [code.visualstudio.com](https://code.visualstudio.com/)
   - Extensions recommandées :
     - ES7+ React/Redux/React-Native snippets
     - Prettier - Code formatter
     - ESLint

---

## 5. Création du projet avec Vite

### 5.1 Commandes d'installation

Ouvrez votre terminal et exécutez :

```bash
# Créer un nouveau projet React avec Vite
npm create vite@latest todo-list-app -- --template react

# Naviguer dans le dossier du projet
cd todo-list-app

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### 5.2 Que se passe-t-il ?

1. **`npm create vite@latest`** : Crée un nouveau projet avec Vite
2. **`-- --template react`** : Utilise le template React
3. **`npm install`** : Installe toutes les dépendances du projet
4. **`npm run dev`** : Lance le serveur de développement (généralement sur http://localhost:5173)

### 5.3 Ouvrir l'application

Après avoir lancé `npm run dev`, ouvrez votre navigateur à l'adresse affichée (par exemple : http://localhost:5173).

Vous devriez voir une page d'accueil React avec le logo Vite + React !

---

## 6. Structure d'un projet React

Explorons les fichiers et dossiers créés :

```
todo-list-app/
├── node_modules/        # Dépendances (ne jamais modifier)
├── public/              # Fichiers statiques (images, favicon)
├── src/                 # Code source de l'application
│   ├── App.css          # Styles du composant App
│   ├── App.jsx          # Composant principal
│   ├── index.css        # Styles globaux
│   └── main.jsx         # Point d'entrée de l'application
├── index.html           # Page HTML principale
├── package.json         # Configuration et dépendances
└── vite.config.js       # Configuration de Vite
```

### 6.1 Fichiers clés

**`index.html`** :
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Todo List App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**`src/main.jsx`** (Point d'entrée) :
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**`src/App.jsx`** (Composant principal) :
```jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
```

---

## 7. Premier composant : Afficher un simple texte

### 7.1 Modifier App.jsx

Remplacez le contenu de `src/App.jsx` par :

```jsx
function App() {
  return (
    <div className="App">
      <h1>📝 Ma Todo List App</h1>
      <p>Bienvenue dans votre gestionnaire de tâches !</p>
    </div>
  );
}

export default App;
```

Sauvegardez, et votre navigateur se met à jour automatiquement ! ⚡

### 7.2 Ajouter des styles

Modifiez `src/App.css` :

```css
.App {
  text-align: center;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  color: #646cff;
  font-size: 3rem;
}

p {
  color: #888;
  font-size: 1.2rem;
}
```

---

## 8. Comprendre JSX

### 8.1 Qu'est-ce que JSX ?

JSX (JavaScript XML) est une **extension de syntaxe** qui permet d'écrire du HTML dans du JavaScript.

**Sans JSX :**
```javascript
const element = React.createElement('h1', null, 'Bonjour !');
```

**Avec JSX :**
```jsx
const element = <h1>Bonjour !</h1>;
```

### 8.2 Règles du JSX

1. **Un seul élément parent :**
   ```jsx
   // ❌ Erreur
   function App() {
     return (
       <h1>Titre</h1>
       <p>Paragraphe</p>
     );
   }

   // ✅ Correct
   function App() {
     return (
       <div>
         <h1>Titre</h1>
         <p>Paragraphe</p>
       </div>
     );
   }

   // ✅ Alternative avec Fragment
   function App() {
     return (
       <>
         <h1>Titre</h1>
         <p>Paragraphe</p>
       </>
     );
   }
   ```

2. **Utiliser `className` au lieu de `class` :**
   ```jsx
   <div className="container">Contenu</div>
   ```

3. **Les balises auto-fermantes doivent avoir `/` :**
   ```jsx
   <img src="logo.png" alt="Logo" />
   <input type="text" />
   ```

4. **Expressions JavaScript dans `{}` :**
   ```jsx
   const name = "Alice";
   return <h1>Bonjour {name} !</h1>;
   ```

---

## 9. 📝 Exercice Pratique

### Objectif :
Afficher un message de bienvenue personnalisé avec votre nom.

**Instructions :**
1. Créez une constante `name` avec votre nom
2. Affichez un titre `<h1>` avec "Bienvenue {name} !"
3. Ajoutez un paragraphe avec la date du jour
4. Stylisez le tout avec CSS

**Solution :**

```jsx
function App() {
  const name = "Alice";
  const today = new Date().toLocaleDateString('fr-FR');

  return (
    <div className="App">
      <h1>Bienvenue {name} ! 👋</h1>
      <p>Nous sommes le {today}</p>
      <p>Prêt à créer ta première Todo List App ?</p>
    </div>
  );
}

export default App;
```

---

## 10. Commandes utiles

```bash
# Lancer le serveur de développement
npm run dev

# Créer un build de production
npm run build

# Prévisualiser le build de production
npm run preview
```

---

## 11. 📚 Ressources complémentaires

- [Documentation officielle React](https://react.dev/)
- [Documentation Vite](https://vitejs.dev/)
- [ES6 Features](https://es6-features.org/)
- [JSX en profondeur](https://react.dev/learn/writing-markup-with-jsx)

---

## 12. Résumé du cours

✅ React est une bibliothèque pour créer des interfaces web interactives  
✅ Vite est un outil de build ultra-rapide  
✅ ES6 apporte des fonctionnalités modernes à JavaScript  
✅ JSX permet d'écrire du HTML dans JavaScript  
✅ Un projet React a une structure bien organisée  
✅ Le Hot Module Replacement permet de voir les changements en temps réel  

---

**Prochaine étape :** Dans le cours 2, nous allons apprendre à créer des composants réutilisables, gérer l'état avec `useState`, et passer des données avec les props ! 🚀
