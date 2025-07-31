# Aide-mémoire React : Principes Techniques et Bonnes Pratiques

## Principes Fondamentaux de React

### 1. Composants et Props
**Principe** : Découpage de l'UI en composants réutilisables
```jsx
// Composant fonctionnel
function Welcome(props) {
  return <h1>Bonjour, {props.name}</h1>;
}

// Composant classe
class Welcome extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}

// Utilisation
<Welcome name="Alice" />
```

### 2. État Local (State)
**Principe** : Gestion des données internes du composant
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Compteur: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrémenter
      </button>
    </div>
  );
}
```

### 3. Cycle de Vie (Lifecycle)
**Principe** : Gestion des phases de vie d'un composant

| Méthode | Description |
|---------|-------------|
| `useEffect` | Effets de bord (remplace les méthodes de classe) |
| `useLayoutEffect` | Similaire à useEffect mais s'exécute après rendu DOM |

```jsx
useEffect(() => {
  // Équivalent componentDidMount
  fetchData();
  
  return () => {
    // Équivalent componentWillUnmount
    cleanup();
  };
}, []); // [] = Exécution unique
```

## Hooks Essentiels

### 1. useState
Gestion d'état local
```jsx
const [state, setState] = useState(initialValue);
```

### 2. useEffect
Gestion des effets secondaires
```jsx
useEffect(() => {
  // Code à exécuter
  document.title = `Vous avez ${count} messages`;
  
  return () => {
    // Nettoyage
    clearInterval(interval);
  };
}, [count]); // Déclenché quand count change
```

### 3. useContext
Accès au contexte global
```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Thème actuel: {theme}</div>;
}
```

### 4. useRef
Référence à des éléments DOM ou valeurs persistantes
```jsx
function TextInput() {
  const inputEl = useRef(null);
  
  const focusInput = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```

### 5. useReducer
Gestion d'état complexe (alternative à useState)
```jsx
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```

## Performance et Optimisation

### 1. Mémoïsation
**Principe** : Éviter les rendus inutiles
```jsx
// Composant mémoïsé
const MemoizedComponent = React.memo(function MyComponent(props) {
  /* rendu avec props */
});

// Fonction mémoïsée
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// Valeur mémoïsée
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### 2. Lazy Loading
**Principe** : Charger les composants seulement quand nécessaire
```jsx
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <OtherComponent />
    </Suspense>
  );
}
```

### 3. Virtualisation de listes
**Principe** : Optimiser l'affichage de longues listes
```jsx
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

const App = () => (
  <List
    height={600}
    itemCount={1000}
    itemSize={35}
    width={300}
  >
    {Row}
  </List>
);
```

## Gestion d'État Avancée

### 1. Architecture Flux
**Principe** : Flux unidirectionnel de données

```
Action → Dispatcher → Store → View
```

### 2. Redux avec Redux Toolkit
```jsx
// store.js
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Component.js
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <button onClick={() => dispatch(increment())}>
      {count}
    </button>
  );
}
```

### 3. Context API
**Principe** : Partage d'état sans prop drilling
```jsx
const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const { user } = useContext(UserContext);
  return <div>{user?.name}</div>;
}
```

## Routing avec React Router v6

### Configuration de base
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />}>
          <Route path=":projectId" element={<ProjectDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Navigation
```jsx
import { Link, useNavigate, useParams } from 'react-router-dom';

function ProjectCard() {
  return <Link to="/projects/123">Projet 123</Link>;
}

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Projet {projectId}</h1>
      <button onClick={() => navigate('/projects')}>
        Retour
      </button>
    </div>
  );
}
```

## Data Fetching

### 1. Utilisation de useEffect
```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  return <ProfileCard user={user} />;
}
```

### 2. Bibliothèques avancées (React Query)
```jsx
import { useQuery } from 'react-query';

function UserProfile({ userId }) {
  const { data, isLoading, error } = useQuery(
    ['user', userId],
    () => fetch(`/api/users/${userId}`).then(res => res.json())
  );

  // ... même rendu que précédemment
}
```

## Formulaires

### 1. Composants contrôlés
```jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Soumission du formulaire
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {/* Autres champs */}
      <button type="submit">Envoyer</button>
    </form>
  );
}
```

### 2. Bibliothèques de formulaires (Formik)
```jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';

function ContactForm() {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) errors.email = 'Required';
        // Autres validations
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // Soumission
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          
          <button type="submit" disabled={isSubmitting}>
            Envoyer
          </button>
        </Form>
      )}
    </Formik>
  );
}
```

## Tests

### 1. Testing Library
```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('affiche et incrémente le compteur', () => {
  render(<Counter />);
  
  // Vérifie le compteur initial
  const countElement = screen.getByText(/Compteur: 0/i);
  expect(countElement).toBeInTheDocument();
  
  // Simule un clic
  const button = screen.getByText(/Incrémenter/i);
  fireEvent.click(button);
  
  // Vérifie l'incrémentation
  expect(screen.getByText(/Compteur: 1/i)).toBeInTheDocument();
});
```

### 2. Tests de composants avec contexte
```jsx
test('affiche le nom d\'utilisateur', () => {
  const user = { name: 'Alice' };
  
  render(
    <UserContext.Provider value={{ user }}>
      <Profile />
    </UserContext.Provider>
  );
  
  expect(screen.getByText('Alice')).toBeInTheDocument();
});
```

## Bonnes Pratiques et Patterns

### 1. Composition vs Héritage
**Principe** : Préférer la composition à l'héritage

```jsx
function Layout({ sidebar, content }) {
  return (
    <div className="layout">
      <div className="sidebar">{sidebar}</div>
      <div className="content">{content}</div>
    </div>
  );
}

function App() {
  return (
    <Layout
      sidebar={<UserMenu />}
      content={<Dashboard />}
    />
  );
}
```

### 2. Render Props
**Principe** : Partage de code via une prop qui est une fonction

```jsx
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  
  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

function App() {
  return (
    <MouseTracker render={({ x, y }) => (
      <h1>Position: ({x}, {y})</h1>
    )} />
  );
}
```

### 3. Hooks Personnalisés
**Principe** : Extraction de logique réutilisable

```jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

function ResponsiveComponent() {
  const { width } = useWindowSize();
  return <div>Taille: {width}px</div>;
}
```

### 4. Error Boundaries
**Principe** : Capturer les erreurs dans l'arbre de composants

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, info) {
    logErrorToService(error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return <FallbackUI />;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <UnstableComponent />
    </ErrorBoundary>
  );
}
```

## Écosystème React

| Catégorie | Outils populaires |
|-----------|-------------------|
| **Routing** | React Router, Next.js |
| **State Management** | Redux, MobX, Recoil, Zustand |
| **Styling** | CSS Modules, Styled Components, Emotion, Tailwind CSS |
| **Forms** | Formik, React Hook Form |
| **Testing** | Jest, React Testing Library, Cypress |
| **Data Fetching** | React Query, SWR, Apollo Client |
| **Server Rendering** | Next.js, Gatsby |
| **Mobile** | React Native |
| **Desktop** | Electron, React Native Windows |

## Checklist de Performance

1. Utiliser `React.memo` pour les composants purs
2. Éviter les rendus inutiles avec `useMemo`/`useCallback`
3. Diviser le code avec `React.lazy` et `Suspense`
4. Virtualiser les longues listes
5. Optimiser les images et ressources statiques
6. Utiliser le code splitting au niveau des routes
7. Minimiser les re-rendus avec des sélecteurs précis (Redux)
8. Profiler avec React DevTools

```jsx
import { Profiler } from 'react';

function App() {
  const callback = (id, phase, actualTime) => {
    console.log(`${id} took ${actualTime}ms to render`);
  };
  
  return (
    <Profiler id="App" onRender={callback}>
      {/* Composants */}
    </Profiler>
  );
}
```

Ce mémo couvre les concepts essentiels de React, des hooks fondamentaux aux patterns avancés. Gardez-le comme référence pour vos développements et n'hésitez pas à approfondir chaque sujet avec la documentation officielle.