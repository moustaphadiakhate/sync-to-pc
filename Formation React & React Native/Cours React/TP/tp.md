# 🎯 **TP Final : Application Todo List Complète**

## 📋 **Objectif**

Créer une application **Todo List** complète en intégrant **tous les concepts** appris dans la formation :

✅ **Composants réutilisables**  
✅ **Gestion de l'état avec Context API**  
✅ **Navigation avec React Router**  
✅ **Persistance avec LocalStorage**  
✅ **Appels API**  
✅ **Hooks avancés (useEffect, useMemo, useCallback)**  
✅ **Styling avec CSS/Flexbox**  

---

## 🏗️ **Architecture de l'application**

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── TodoItem.jsx
│   ├── TodoForm.jsx
│   ├── TodoFilters.jsx
│   └── TodoStats.jsx
├── pages/
│   ├── Home.jsx
│   ├── TodoList.jsx
│   ├── TodoDetail.jsx
│   ├── ApiTodos.jsx
│   └── About.jsx
├── context/
│   └── TodoContext.jsx
├── hooks/
│   └── useFetch.js
├── App.jsx
└── main.jsx
```

---

## 📝 **Fonctionnalités à implémenter**

### **Page 1 : Accueil (Home.jsx)**
- Message de bienvenue
- Lien vers la liste de tâches
- Statistiques rapides (nombre de tâches)

### **Page 2 : Liste de Tâches (TodoList.jsx)**
- ✅ Afficher toutes les tâches
- ✅ Ajouter une nouvelle tâche
- ✅ Marquer une tâche comme complétée
- ✅ Supprimer une tâche
- ✅ Modifier une tâche
- ✅ Filtrer les tâches (Toutes / Actives / Complétées)
- ✅ Afficher le nombre de tâches actives
- ✅ Bouton pour supprimer toutes les tâches complétées
- ✅ Persistance avec LocalStorage

### **Page 3 : Détails d'une Tâche (TodoDetail.jsx)**
- Afficher les détails complets d'une tâche
- Date de création
- Statut
- Bouton pour revenir à la liste

### **Page 4 : Tâches depuis une API (ApiTodos.jsx)**
- Récupérer des tâches depuis `https://jsonplaceholder.typicode.com/todos`
- Afficher un loader pendant le chargement
- Gérer les erreurs
- Afficher les tâches dans une liste

### **Page 5 : À propos (About.jsx)**
- Informations sur l'application
- Technologies utilisées

---

## 🚀 **Étapes de réalisation**

### **Étape 1 : Initialisation du projet**

```bash
npm create vite@latest todo-app-final -- --template react
cd todo-app-final
npm install
npm install react-router-dom
npm run dev
```

---

### **Étape 2 : Créer le Context (TodoContext.jsx)**

**Mission :**
- Créer un Context pour gérer les tâches
- Implémenter les fonctions : `addTodo`, `deleteTodo`, `toggleTodo`, `updateTodo`, `clearCompleted`
- Sauvegarder automatiquement dans LocalStorage avec `useEffect`
- Initialiser les tâches depuis LocalStorage

**Indice :**
```jsx
const [todos, setTodos] = useState(() => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
});

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
```

---

### **Étape 3 : Créer les composants**

#### **A. Navbar.jsx**
- Logo de l'application
- Liens de navigation (Accueil, Tâches, API, À propos)
- Utiliser `NavLink` pour avoir la classe `active`

#### **B. TodoItem.jsx**
- Afficher une tâche avec :
  - Checkbox pour marquer comme complétée
  - Texte de la tâche (barré si complétée)
  - Bouton de suppression
  - Bouton de modification (optionnel)

#### **C. TodoForm.jsx**
- Input pour saisir une nouvelle tâche
- Bouton "Ajouter"
- Gérer la soumission avec `onSubmit`
- Vider l'input après ajout

#### **D. TodoFilters.jsx**
- Trois boutons : "Toutes", "Actives", "Complétées"
- Appliquer un style différent au filtre actif

#### **E. TodoStats.jsx**
- Afficher le nombre total de tâches
- Nombre de tâches actives
- Nombre de tâches complétées

---

### **Étape 4 : Créer les pages**

#### **A. Home.jsx**
- Message de bienvenue
- Afficher les statistiques avec `TodoStats`
- Lien "Commencer" vers `/todos`

#### **B. TodoList.jsx**
- Importer et utiliser `useTodos()` du Context
- Afficher `TodoForm` pour ajouter une tâche
- Afficher `TodoFilters` pour filtrer
- Mapper les tâches filtrées avec `TodoItem`
- Afficher "Aucune tâche" si la liste est vide
- Bouton "Supprimer les tâches complétées"

#### **C. TodoDetail.jsx**
- Utiliser `useParams()` pour récupérer l'ID
- Trouver la tâche correspondante dans le Context
- Afficher les détails
- Bouton "Retour" avec `useNavigate()`

#### **D. ApiTodos.jsx**
- Créer un hook personnalisé `useFetch`
- Appeler l'API `https://jsonplaceholder.typicode.com/todos?_limit=20`
- Gérer les états : `loading`, `error`, `data`
- Afficher les tâches

#### **E. About.jsx**
- Texte libre sur l'application
- Liste des technologies utilisées

---

### **Étape 5 : Configurer le Router (App.jsx)**

**Mission :**
- Importer `BrowserRouter`, `Routes`, `Route`
- Créer les routes :
  - `/` → Home
  - `/todos` → TodoList
  - `/todos/:id` → TodoDetail
  - `/api-todos` → ApiTodos
  - `/about` → About
  - `*` → NotFound (404)

---

### **Étape 6 : Styling**

**Objectifs :**
- Créer une interface moderne et responsive
- Utiliser Flexbox pour le layout
- Ajouter des transitions et animations (hover, etc.)
- Utiliser des couleurs cohérentes
- Rendre l'application mobile-friendly

**Conseil :** Inspirez-vous de services comme Todoist, Microsoft To Do, ou Google Tasks.

---

## 🎨 **Bonus : Fonctionnalités avancées**

Si vous avez le temps, ajoutez ces fonctionnalités :

### 🌟 **1. Mode sombre / clair**
- Créer un `ThemeContext`
- Bouton pour basculer entre les thèmes
- Sauvegarder la préférence dans LocalStorage

### 🌟 **2. Catégories de tâches**
- Ajouter une propriété `category` aux tâches
- Filtrer par catégorie (Travail, Personnel, Urgent, etc.)
- Couleur différente par catégorie

### 🌟 **3. Recherche de tâches**
- Input de recherche
- Filtrer les tâches en temps réel

### 🌟 **4. Drag & Drop**
- Réorganiser les tâches par glisser-déposer
- Utiliser `react-beautiful-dnd` ou HTML5 Drag & Drop API

### 🌟 **5. Date d'échéance**
- Ajouter une date limite pour chaque tâche
- Afficher "En retard" si dépassée
- Trier par date

### 🌟 **6. Animations**
- Animation d'entrée/sortie pour les tâches
- Utiliser `framer-motion` ou CSS animations

### 🌟 **7. Export/Import**
- Bouton pour exporter les tâches en JSON
- Bouton pour importer un fichier JSON

---

## 📊 **Critères d'évaluation**

| Critère | Points |
|---------|--------|
| **Fonctionnalité** : Toutes les fonctionnalités de base fonctionnent | 40 |
| **Code** : Code propre, bien organisé, commenté | 20 |
| **UI/UX** : Interface agréable et intuitive | 20 |
| **React** : Bon usage des hooks, Context, Router | 10 |
| **Bonus** : Fonctionnalités avancées implémentées | 10 |

---

## 🛠️ **APIs utiles pour le projet**

- **JSONPlaceholder Todos** : `https://jsonplaceholder.typicode.com/todos`
- **JSONPlaceholder Users** : `https://jsonplaceholder.typicode.com/users`
- **DummyJSON Todos** : `https://dummyjson.com/todos`

---

## 💡 **Conseils**

✅ **Commencez simple** : Implémentez d'abord les fonctionnalités de base.  
✅ **Testez régulièrement** : Vérifiez que tout fonctionne après chaque étape.  
✅ **Utilisez les DevTools React** : Extension Chrome/Firefox très utile.  
✅ **Commits réguliers** : Utilisez Git pour suivre votre progression.  
✅ **Consultez la documentation** : React, React Router, MDN.  
✅ **Amusez-vous** : C'est un projet créatif, personnalisez-le ! 🎨  

---

## 🎓 **Ressources**

- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [CSS Tricks - Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Framer Motion (animations)](https://www.framer.com/motion/)
- [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd)

---

## 🚀 **Défi supplémentaire**

Une fois le projet terminé :

1. **Déployez votre application** sur Vercel ou Netlify
2. **Partagez le lien** avec vos amis
3. **Ajoutez-le à votre portfolio** GitHub
4. **Écrivez un README.md** expliquant votre projet

---

## ✅ **Checklist finale**

Avant de soumettre votre projet, vérifiez :

- [ ] Toutes les fonctionnalités de base sont implémentées
- [ ] L'application fonctionne sans erreurs dans la console
- [ ] Le code est propre et bien organisé
- [ ] Les composants sont réutilisables
- [ ] LocalStorage fonctionne correctement
- [ ] La navigation fonctionne sur toutes les pages
- [ ] L'application est responsive (mobile-friendly)
- [ ] Le projet est sur GitHub avec un README

---

**Bon courage pour ce TP final ! Vous avez toutes les compétences nécessaires pour réussir. 🚀**

**N'hésitez pas à être créatif et à ajouter votre touche personnelle !** ✨
