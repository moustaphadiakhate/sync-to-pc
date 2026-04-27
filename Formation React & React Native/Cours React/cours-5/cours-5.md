# 🚀 **Leçon 5 : Navigation avec React Router**

## ✅ Objectifs :
- Comprendre le routing dans les applications React (SPA).
- Installer et configurer **React Router v6**.
- Créer une navigation entre différentes pages.
- Utiliser les hooks `useNavigate`, `useParams`, et `useLocation`.
- Passer des paramètres entre les routes.
- Créer des routes imbriquées et protégées.

---

## 🔸 **1. Introduction au Routing**

### Qu'est-ce que le routing ?

Dans une application web traditionnelle, chaque URL correspond à une page HTML différente. En React, on crée des **Single Page Applications (SPA)** où une seule page HTML est chargée, et le contenu change dynamiquement.

**React Router** permet de gérer la navigation et l'URL sans recharger la page.

### Avantages du routing :
✅ Navigation fluide et rapide  
✅ Gestion de l'historique du navigateur (boutons précédent/suivant)  
✅ URLs significatives et partageables  
✅ SEO amélioré (avec le rendu côté serveur)  

---

## 🔸 **2. Installation de React Router**

```bash
npm install react-router-dom
```

---

## 🔸 **3. Configuration de base**

### Structure du projet :

```
src/
├── App.jsx
├── main.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── TodoList.jsx
│   ├── TodoDetail.jsx
│   └── NotFound.jsx
└── components/
    └── Navbar.jsx
```

### Créer les pages :

**src/pages/Home.jsx**
```jsx
import React from 'react';

function Home() {
  return (
    <div>
      <h1>🏠 Page d'accueil</h1>
      <p>Bienvenue sur votre application Todo List !</p>
    </div>
  );
}

export default Home;
```

**src/pages/About.jsx**
```jsx
import React from 'react';

function About() {
  return (
    <div>
      <h1>📖 À propos</h1>
      <p>Cette application a été créée avec React et React Router.</p>
    </div>
  );
}

export default About;
```

**src/pages/TodoList.jsx**
```jsx
import React from 'react';
import { Link } from 'react-router-dom';

function TodoList() {
  const todos = [
    { id: 1, title: 'Apprendre React' },
    { id: 2, title: 'Maîtriser React Router' },
    { id: 3, title: 'Créer une application complète' }
  ];

  return (
    <div>
      <h1>📝 Liste des tâches</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

**src/pages/NotFound.jsx**
```jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default NotFound;
```

---

## 🔸 **4. Configuration du Router dans main.jsx**

**src/main.jsx**
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

---

## 🔸 **5. Définir les routes dans App.jsx**

**src/App.jsx**
```jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import TodoList from './pages/TodoList';
import TodoDetail from './pages/TodoDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
```

**Explication :**
- `<Routes>` : Conteneur de toutes les routes.
- `<Route path="/" element={<Home />} />` : Définit une route.
- `path="*"` : Route par défaut (404).
- `:id` : Paramètre dynamique.

---

## 🔸 **6. Créer une barre de navigation**

**src/components/Navbar.jsx**
```jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">📝 TodoApp</Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/todos" className={({ isActive }) => isActive ? 'active' : ''}>
            Tâches
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
```

**src/components/Navbar.css**
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #646cff;
  padding: 1rem 2rem;
  color: white;
}

.nav-brand a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background 0.3s;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-links a.active {
  background-color: rgba(255, 255, 255, 0.3);
  font-weight: bold;
}
```

**Différence entre `Link` et `NavLink` :**
- **`Link`** : Simple lien de navigation.
- **`NavLink`** : Lien avec support de la classe `active` automatique.

---

## 🔸 **7. Utiliser les paramètres d'URL avec `useParams`**

**src/pages/TodoDetail.jsx**
```jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simuler des données
  const todos = {
    1: { id: 1, title: 'Apprendre React', description: 'Maîtriser les concepts de base', completed: false },
    2: { id: 2, title: 'Maîtriser React Router', description: 'Comprendre le routing', completed: true },
    3: { id: 3, title: 'Créer une application', description: 'Projet complet', completed: false }
  };

  const todo = todos[id];

  if (!todo) {
    return <div>Tâche non trouvée</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📋 Détails de la tâche #{id}</h1>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <p>Statut : {todo.completed ? '✅ Complétée' : '⏳ En cours'}</p>
      
      <button onClick={() => navigate('/todos')}>
        ← Retour à la liste
      </button>
      <button onClick={() => navigate(-1)} style={{ marginLeft: '1rem' }}>
        ← Retour
      </button>
    </div>
  );
}

export default TodoDetail;
```

**Explication :**
- `useParams()` : Récupère les paramètres de l'URL (ici, `id`).
- `useNavigate()` : Permet de naviguer programmatiquement.
- `navigate('/todos')` : Navigue vers la route `/todos`.
- `navigate(-1)` : Revient à la page précédente (historique).

---

## 🔸 **8. Hooks de React Router**

### A. `useNavigate` - Navigation programmée

```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  const goBack = () => {
    navigate(-1); // Retour arrière
  };

  const goForward = () => {
    navigate(1); // Avancer
  };

  return (
    <div>
      <button onClick={goToAbout}>Aller à About</button>
      <button onClick={goBack}>Retour</button>
    </div>
  );
}
```

### B. `useLocation` - Obtenir l'URL actuelle

```jsx
import { useLocation } from 'react-router-dom';

function CurrentPath() {
  const location = useLocation();

  return (
    <div>
      <p>Chemin actuel : {location.pathname}</p>
      <p>Query params : {location.search}</p>
    </div>
  );
}
```

### C. `useSearchParams` - Gérer les query parameters

```jsx
import { useSearchParams } from 'react-router-dom';

function SearchExample() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') || '';

  const updateSearch = (value) => {
    setSearchParams({ q: value });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => updateSearch(e.target.value)}
        placeholder="Rechercher..."
      />
      <p>Recherche : {query}</p>
    </div>
  );
}
```

---

## 🔸 **9. Routes imbriquées (Nested Routes)**

**Exemple : Dashboard avec sous-pages**

```jsx
import { Routes, Route, Outlet, Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="stats">Statistiques</Link> |{' '}
        <Link to="settings">Paramètres</Link>
      </nav>
      <Outlet /> {/* Affiche les routes enfants ici */}
    </div>
  );
}

function Stats() {
  return <h2>📊 Statistiques</h2>;
}

function Settings() {
  return <h2>⚙️ Paramètres</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="stats" element={<Stats />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
```

---

## 🔸 **10. Routes protégées (Protected Routes)**

```jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Usage :
<Route 
  path="/profile" 
  element={
    <ProtectedRoute isAuthenticated={user !== null}>
      <Profile />
    </ProtectedRoute>
  } 
/>
```

---

## 🔸 **11. Exercice pratique**

### 🎯 Objectif :
Créer une navigation complète avec :
1. ✅ Une page d'accueil
2. ✅ Une liste de tâches
3. ✅ Une page de détails pour chaque tâche
4. ✅ Une barre de navigation
5. ✅ Une page 404

**Solution :** Utilisez les exemples ci-dessus !

---

## 📚 **Ressources complémentaires**

- [React Router Documentation](https://reactrouter.com/)
- [Tutorial React Router v6](https://reactrouter.com/en/main/start/tutorial)
- [Upgrading from v5 to v6](https://reactrouter.com/en/main/upgrading/v5)

---

## 🎓 **Résumé du cours**

✅ React Router permet de créer des SPA avec navigation  
✅ `BrowserRouter` enveloppe l'application  
✅ `Routes` et `Route` définissent les chemins  
✅ `Link` et `NavLink` créent des liens  
✅ `useParams` récupère les paramètres d'URL  
✅ `useNavigate` permet la navigation programmée  
✅ `Outlet` affiche les routes imbriquées  
✅ Les routes protégées contrôlent l'accès  

---

**Prochaine étape :** Dans le cours 6, nous allons apprendre à gérer l'état global avec **Context API** et persister les données avec **LocalStorage** ! 🚀
