# 📚 **Styles et mise en forme des composants**  

## 🎯 **Objectif du cours**  
Ce cours te permettra de **maîtriser les styles en React** et **Flexbox** pour concevoir des interfaces **responsives et bien structurées**.  

À la fin du cours, tu seras capable de :  
✅ Comprendre les différentes méthodes de styling en React.  
✅ Maîtriser **Flexbox** pour créer des layouts modernes.  
✅ Manipuler les propriétés **`flexDirection`**, **`justifyContent`**, **`alignItems`**, etc.  
✅ Appliquer les concepts avec un **exercice pratique**.  

---

# 🟢 **1. Méthodes de styling en React**  

En React, il existe plusieurs façons de styliser vos composants :

## 🔹 **1.1. CSS classique (fichiers .css)**

**Avantages :** Simple, familier, bon pour débuter.  
**Inconvénients :** Portée globale (peut créer des conflits).

**Exemple :**

**App.css**
```css
.container {
  background-color: #f0f0f0;
  padding: 20px;
}

.title {
  color: #333;
  font-size: 2rem;
}
```

**App.jsx**
```jsx
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Mon Application</h1>
    </div>
  );
}
```

## 🔹 **1.2. CSS Modules**

**Avantages :** Portée locale, évite les conflits.  
**Inconvénients :** Nécessite une configuration.

**Exemple :**

**App.module.css**
```css
.container {
  background-color: #f0f0f0;
  padding: 20px;
}

.title {
  color: #333;
}
```

**App.jsx**
```jsx
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mon Application</h1>
    </div>
  );
}
```

## 🔹 **1.3. Inline Styles (Styles en ligne)**

**Avantages :** Styles dynamiques faciles.  
**Inconvénients :** Pas de pseudo-classes (`:hover`), pas de media queries.

**Exemple :**

```jsx
function App() {
  const containerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#333', fontSize: '2rem' }}>Mon Application</h1>
    </div>
  );
}
```

**⚠️ Note :** Utilisez **camelCase** pour les propriétés CSS : `backgroundColor` au lieu de `background-color`.

## 🔹 **1.4. Styled Components (CSS-in-JS)**

**Avantages :** Composants stylisés réutilisables, portée locale.  
**Inconvénients :** Dépendance externe.

**Installation :**
```bash
npm install styled-components
```

**Exemple :**

```jsx
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2rem;
`;

function App() {
  return (
    <Container>
      <Title>Mon Application</Title>
    </Container>
  );
}
```

## 🔹 **1.5. Tailwind CSS**

**Avantages :** Classes utilitaires, développement rapide.  
**Inconvénients :** Syntaxe à apprendre, HTML peut devenir verbeux.

**Installation :**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Exemple :**

```jsx
function App() {
  return (
    <div className="bg-gray-100 p-5 rounded-lg">
      <h1 className="text-3xl text-gray-800 font-bold">Mon Application</h1>
    </div>
  );
}
```

---

# 🟠 **2. Introduction à Flexbox**  

Flexbox est **le principal système de mise en page moderne** en CSS. Il permet de créer des layouts flexibles et responsives facilement.

### 🔹 **Pourquoi utiliser Flexbox ?**  
✅ **Alignement facile** : Centrer des éléments devient trivial.  
✅ **Dispositions flexibles** : Les éléments s'adaptent automatiquement.  
✅ **Responsive design** : Fonctionne sur tous les écrans.  
✅ **Moins de code** : Remplace les anciens hacks CSS.  

---

# 🟡 **3. Les propriétés principales de Flexbox**  

## 🔹 **3.1. `display: flex` (Activer Flexbox)**

Pour utiliser Flexbox, vous devez d'abord définir `display: flex` sur le conteneur parent.

```css
.container {
  display: flex;
}
```

```jsx
<div style={{ display: 'flex' }}>
  <div>Élément 1</div>
  <div>Élément 2</div>
  <div>Élément 3</div>
</div>
```

Par défaut, les éléments sont alignés **horizontalement** (en ligne).

---

## 🔹 **3.2. `flex-direction` (Définir l'axe principal)**

Cette propriété définit **l'orientation des éléments** dans un conteneur.  

| Valeur | Effet |
|--------|--------------------------------|
| `row` | Les éléments sont alignés **horizontalement** (par défaut). |
| `column` | Les éléments sont alignés **verticalement**. |
| `row-reverse` | Alignement horizontal **inversé**. |
| `column-reverse` | Alignement vertical **inversé**. |

📌 **Exemple :**
```jsx
<div style={{ display: 'flex', flexDirection: 'row' }}>
  <div style={{ backgroundColor: 'red', width: 100, height: 100 }}>1</div>
  <div style={{ backgroundColor: 'blue', width: 100, height: 100 }}>2</div>
  <div style={{ backgroundColor: 'green', width: 100, height: 100 }}>3</div>
</div>
```
👉 Les éléments sont alignés **horizontalement**.  

**Avec `flexDirection: 'column'` :**
```jsx
<div style={{ display: 'flex', flexDirection: 'column' }}>
  {/* Même code */}
</div>
```
👉 Les éléments sont alignés **verticalement**.  

---

## 🔹 **3.3. `justify-content` (Alignement sur l'axe principal)**

Cette propriété contrôle **comment les éléments sont distribués** sur l'axe principal (horizontal si `flex-direction: row`).  

| Valeur | Effet |
|--------|----------------------------------|
| `flex-start` | Aligne les éléments au **début** (défaut). |
| `flex-end` | Aligne les éléments à **la fin**. |
| `center` | **Centre** les éléments. |
| `space-between` | Répartit l'espace **entre** les éléments. |
| `space-around` | Ajoute de l'espace **autour** des éléments. |
| `space-evenly` | Répartit l'espace de manière **égale**. |

📌 **Exemple :**
```jsx
<div style={{ 
  display: 'flex', 
  justifyContent: 'space-between',
  border: '2px solid black',
  padding: '10px'
}}>
  <div style={{ backgroundColor: 'red', width: 50, height: 50 }}>1</div>
  <div style={{ backgroundColor: 'blue', width: 50, height: 50 }}>2</div>
  <div style={{ backgroundColor: 'green', width: 50, height: 50 }}>3</div>
</div>
```
👉 Les boîtes seront réparties avec **un espace égal entre elles**.  

**Centrer des éléments :**
```jsx
<div style={{ 
  display: 'flex', 
  justifyContent: 'center',
  height: '100vh'
}}>
  <h1>Texte centré horizontalement</h1>
</div>
```

---

## 🔹 **3.4. `align-items` (Alignement sur l'axe secondaire)**

Cette propriété contrôle l'alignement **perpendiculaire** à l'axe principal.  
- Si `flex-direction: row` → aligne **verticalement**.  
- Si `flex-direction: column` → aligne **horizontalement**.  

| Valeur | Effet |
|--------|--------------------------------|
| `flex-start` | Aligne au **début**. |
| `flex-end` | Aligne à **la fin**. |
| `center` | **Centre** les éléments. |
| `stretch` | **Étire** les éléments pour remplir l'espace (défaut). |
| `baseline` | Aligne selon la ligne de base du texte. |

📌 **Exemple :**
```jsx
<div style={{ 
  display: 'flex', 
  alignItems: 'center',
  height: '200px',
  border: '2px solid black'
}}>
  <div style={{ backgroundColor: 'red', width: 50, height: 50 }}>1</div>
  <div style={{ backgroundColor: 'blue', width: 50, height: 80 }}>2</div>
  <div style={{ backgroundColor: 'green', width: 50, height: 60 }}>3</div>
</div>
```
👉 Tous les éléments seront **centrés verticalement** malgré leurs tailles différentes.  

**Centrer parfaitement un élément :**
```jsx
<div style={{ 
  display: 'flex', 
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}}>
  <h1>Parfaitement centré !</h1>
</div>
```

---

## 🔹 **3.5. `flex` (Répartition de l'espace disponible)**

La propriété `flex` définit **comment un élément occupe l'espace disponible**.

| Valeur | Effet |
|--------|----------------------------------|
| `flex: 1` | L'élément prend **tout l'espace disponible**. |
| `flex: 2` | L'élément prend **deux fois plus d'espace** qu'un autre avec `flex: 1`. |

📌 **Exemple :**
```jsx
<div style={{ display: 'flex', height: '100px' }}>
  <div style={{ backgroundColor: 'red', flex: 1 }}>Flex 1</div>
  <div style={{ backgroundColor: 'blue', flex: 2 }}>Flex 2</div>
  <div style={{ backgroundColor: 'green', flex: 1 }}>Flex 1</div>
</div>
```
👉 La boîte bleue sera **deux fois plus grande** que les autres.  

---

## 🔹 **3.6. `gap` (Espacement entre éléments)**

Au lieu d'utiliser des marges, utilisez `gap` pour espacer les éléments.

```jsx
<div style={{ display: 'flex', gap: '20px' }}>
  <div style={{ backgroundColor: 'red', width: 100, height: 100 }}>1</div>
  <div style={{ backgroundColor: 'blue', width: 100, height: 100 }}>2</div>
  <div style={{ backgroundColor: 'green', width: 100, height: 100 }}>3</div>
</div>
```
👉 Ajoute **20px d'espacement** entre chaque élément.

---

# 🔵 **4. Exercice pratique : Créer un layout avec Flexbox**  

🎯 **Objectif : Construire une interface avec un header, un body et un footer.**

**Code complet :**

```jsx
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>📝 Ma Todo List</h1>
      </header>
      
      <main className="main-content">
        <div className="sidebar">Menu</div>
        <div className="content">Contenu principal</div>
      </main>
      
      <footer className="footer">
        <p>© 2026 - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
```

**App.css :**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #646cff;
  color: white;
  padding: 1.5rem;
  text-align: center;
}

.main-content {
  display: flex;
  flex: 1;
}

.sidebar {
  background-color: #f0f0f0;
  width: 200px;
  padding: 1rem;
}

.content {
  flex: 1;
  padding: 2rem;
  background-color: white;
}

.footer {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}
```

**Résultat :** Une mise en page complète avec header, sidebar, contenu principal et footer ! 🎉

---

# 🎓 **5. Résumé du cours**

✅ Il existe plusieurs méthodes de styling en React (CSS classique, modules, inline, styled-components, Tailwind)  
✅ Flexbox est le système de layout moderne par excellence  
✅ `display: flex` active Flexbox  
✅ `flex-direction` définit l'orientation (row/column)  
✅ `justify-content` aligne sur l'axe principal  
✅ `align-items` aligne sur l'axe secondaire  
✅ `flex` permet de gérer la répartition de l'espace  
✅ `gap` espace les éléments facilement  

---

## 📚 **Ressources complémentaires**

- [Guide complet Flexbox (MDN)](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Flexbox Froggy (jeu pour apprendre)](https://flexboxfroggy.com/#fr)
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Styled Components Documentation](https://styled-components.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Prochaine étape :** Dans le cours 4, nous allons apprendre à afficher des listes dynamiques, gérer les événements utilisateur, et ajouter des tâches à notre Todo List ! 🚀
