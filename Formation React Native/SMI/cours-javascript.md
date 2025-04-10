# Cours JavaScript pour Débutants : Les Types String et Number

## Introduction

Bienvenue dans ce cours spécial débutants sur les deux types de données les plus utilisés en JavaScript : les chaînes de caractères (String) et les nombres (Number). Nous allons tout expliquer depuis le début, avec des exemples simples.

## Partie 1 : Les Chaînes de Caractères (String)

### Qu'est-ce qu'une String ?

Une string, c'est tout simplement du texte. Par exemple :
- "Bonjour"
- 'Comment ça va ?'
- `Mon nom est Jean`

### Comment créer une string ?

Il y a 3 façons principales :

```javascript
// 1. Avec des apostrophes (simples quotes)
let message1 = 'Hello';

// 2. Avec des guillemets (doubles quotes)
let message2 = "World";

// 3. Avec des backticks (accents graves)
let message3 = `Hello World`;
```

### Exemples concrets

```javascript
let prenom = "Marie";
let age = "25"; // Même si c'est un nombre, avec "" c'est une string

console.log(prenom); // Affiche: Marie
console.log(age);     // Affiche: 25 (mais c'est du texte, pas un nombre)
```

### Longueur d'une string

On peut savoir combien de lettres contient une string avec `.length` :

```javascript
let mot = "JavaScript";
console.log(mot.length); // Affiche 10 (car il y a 10 lettres)
```

### Concaténation (mettre des strings ensemble)

```javascript
let debut = "Bonjour";
let fin = "à tous";

// Méthode 1 : avec l'opérateur +
let message = debut + " " + fin;
console.log(message); // "Bonjour à tous"

// Méthode 2 : avec les backticks
let messageModerne = `${debut} ${fin}`;
console.log(messageModerne); // "Bonjour à tous"
```

### Méthodes utiles

1. **Mettre en majuscules/minuscules** :
```javascript
let texte = "Bonjour";
console.log(texte.toUpperCase()); // "BONJOUR"
console.log(texte.toLowerCase()); // "bonjour"
```

2. **Remplacer du texte** :
```javascript
let phrase = "J'aime les pommes";
let nouvellePhrase = phrase.replace("pommes", "bananes");
console.log(nouvellePhrase); // "J'aime les bananes"
```

3. **Couper une string** :
```javascript
let complet = "Jean Dupont";
let prenomOnly = complet.substring(0, 4);
console.log(prenomOnly); // "Jean"
```

## Partie 2 : Les Nombres (Number)

### Qu'est-ce qu'un Number ?

En JavaScript, un Number peut être :
- Un nombre entier : `10`, `-5`, `0`
- Un nombre à virgule : `3.14`, `-0.5`
- Des valeurs spéciales : `Infinity`, `-Infinity`, `NaN` (Not a Number)

### Opérations de base

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13 (addition)
console.log(a - b); // 7 (soustraction)
console.log(a * b); // 30 (multiplication)
console.log(a / b); // 3.333... (division)
console.log(a % b); // 1 (reste de la division)
```

### Arrondir des nombres

```javascript
let decimal = 3.14159;

console.log(Math.round(decimal)); // 3 (arrondi à l'entier le plus proche)
console.log(decimal.toFixed(2)); // "3.14" (2 chiffres après la virgule)
```


## Partie 3 : Différences importantes

### Comparaisons

```javascript
console.log("5" == 5);  // true (valeur égale)
console.log("5" === 5); // false (type différent)

// Conseil : utilisez toujours === pour éviter les surprises
```

# **Cours Débutant sur les Template Strings en JavaScript**

---

## **1. Introduction aux Template Strings**
Les **template strings** (ou *template literals*) sont une syntaxe améliorée pour travailler avec des chaînes de caractères en JavaScript.  
Elles sont délimitées par des **backticks** (`` ` ``) au lieu des guillemets simples (`'`) ou doubles (`"`).

### **Avantages :**
✅ **Interpolation de variables** : Permet d'insérer des variables directement dans la chaîne.  
✅ **Multi-lignes** : Pas besoin de `\n` pour les sauts de ligne.  
✅ **Expressions JavaScript** : Possibilité d'exécuter du code dans la chaîne.  

---

## **2. Syntaxe de Base**
### **a) Ancienne méthode (sans template strings)**
```javascript
let nom = "Alice";
let message = "Bonjour " + nom + " !";
console.log(message); // "Bonjour Alice !"
```

### **b) Nouvelle méthode (avec template strings)**
```javascript
let nom = "Alice";
let message = `Bonjour ${nom} !`;
console.log(message); // "Bonjour Alice !"
```

---

## **3. Interpolation de Variables**
On peut **insérer des variables** directement avec `${variable}`.

**Exemple :**
```javascript
let age = 25;
let texte = `J'ai ${age} ans.`;
console.log(texte); // "J'ai 25 ans."
```

---

## **4. Chaînes Multi-lignes**
Avec les template strings, on peut écrire du texte sur **plusieurs lignes** sans utiliser `\n`.

### **Ancienne méthode :**
```javascript
let texte = "Ligne 1\nLigne 2\nLigne 3";
```

### **Nouvelle méthode :**
```javascript
let texte = `
  Ligne 1
  Ligne 2
  Ligne 3
`;
console.log(texte);
```
**Résultat :**
```
  Ligne 1
  Ligne 2
  Ligne 3
```

---

## **5. Évaluation d'Expressions**
On peut **calculer des expressions** directement dans `${...}`.

**Exemple :**
```javascript
let a = 5;
let b = 10;
console.log(`La somme est ${a + b}.`); // "La somme est 15."
```

**Autre exemple :**
```javascript
let estMajeur = true;
console.log(`Statut : ${estMajeur ? "Majeur" : "Mineur"}`); // "Statut : Majeur"
```

# **Cours Débutant sur les Tableaux (Arrays) en JavaScript**

---

## **1. Introduction aux Tableaux**
Un **tableau** (array) est une structure de données qui permet de stocker **plusieurs valeurs dans une seule variable**.

### **À quoi ça sert ?**
📌 Stocker une liste d'éléments (noms, nombres, etc.)  
📌 Garder un ordre précis  
📌 Accéder facilement aux éléments par leur position  

---

## **2. Créer un Tableau**
### **Syntaxe :** `[]` ou `new Array()`
```javascript
// Méthode recommandée (avec crochets [])
let fruits = ["pomme", "banane", "orange"];

// Avec new Array (moins utilisé)
let nombres = new Array(1, 2, 3);
```

### **Exemple :**
```javascript
let animaux = ["chien", "chat", "oiseau"];
console.log(animaux); // ["chien", "chat", "oiseau"]
```

---

## **3. Accéder aux Éléments**
Chaque élément a un **index** (position) qui commence à **0**.

### **Syntaxe :** `tableau[index]`
```javascript
let fruits = ["pomme", "banane", "orange"];

console.log(fruits[0]); // "pomme" (1er élément)
console.log(fruits[1]); // "banane" (2ème élément)
console.log(fruits[2]); // "orange" (3ème élément)
console.log(fruits[3]); // undefined (n'existe pas)
```

---

## **4. Modifier un Tableau**
### **a) Remplacer un élément**
```javascript
let fruits = ["pomme", "banane", "orange"];
fruits[1] = "kiwi"; // Remplace "banane" par "kiwi"
console.log(fruits); // ["pomme", "kiwi", "orange"]
```

### **b) Ajouter un élément**
```javascript
// .push() → Ajoute à la fin
fruits.push("ananas"); // ["pomme", "kiwi", "orange", "ananas"]

// .unshift() → Ajoute au début
fruits.unshift("fraise"); // ["fraise", "pomme", "kiwi", "orange", "ananas"]
```

### **c) Supprimer un élément**
```javascript
// .pop() → Supprime le dernier
fruits.pop(); // ["fraise", "pomme", "kiwi", "orange"]

// .shift() → Supprime le premier
fruits.shift(); // ["pomme", "kiwi", "orange"]
```

---

## **5. Longueur d'un Tableau**
### **`tableau.length` → Nombre d'éléments**
```javascript
let fruits = ["pomme", "banane", "orange"];
console.log(fruits.length); // 3
```

### **Exemple : Accéder au dernier élément**
```javascript
let dernierFruit = fruits[fruits.length - 1];
console.log(dernierFruit); // "orange"
```

---

## **6. Méthodes Utiles**
### **a) `concat()` → Fusionner des tableaux**
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let combine = arr1.concat(arr2); // [1, 2, 3, 4]
```

### **b) `slice()` → Extraire une partie**
```javascript
let nombres = [10, 20, 30, 40, 50];
let extrait = nombres.slice(1, 4); // [20, 30, 40] (index 1 à 3)
```

### **c) `splice()` → Ajouter/Supprimer**
```javascript
let fruits = ["pomme", "banane", "orange"];

// Supprimer 1 élément à partir de l'index 1
fruits.splice(1, 1); // ["pomme", "orange"]

// Ajouter "kiwi" à l'index 1
fruits.splice(1, 0, "kiwi"); // ["pomme", "kiwi", "orange"]
```

Bien sûr ! Voici la suite avec les méthodes `map()` et `filter()`, très pratiques pour **transformer** et **filtrer** des tableaux en JavaScript :

---

### **d) `map()` → Transformer un tableau**

> `map()` crée un **nouveau tableau** en appliquant une fonction à **chaque élément** du tableau d’origine.

```javascript
let nombres = [1, 2, 3, 4];

// Multiplier chaque élément par 2
let doublés = nombres.map((n) => n * 2); // [2, 4, 6, 8]
```

---

### **e) `filter()` → Filtrer des éléments**

> `filter()` crée un **nouveau tableau** avec les éléments qui passent un **test** (fonction de filtrage).

```javascript
let nombres = [5, 12, 8, 20, 3];

// Garder uniquement les nombres supérieurs à 10
let grands = nombres.filter((n) => n > 10); // [12, 20]
```
---

## **7. Parcourir un Tableau**
### **a) Boucle `for` classique**
```javascript
let fruits = ["pomme", "banane", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Résultat :
// "pomme"
// "banane"
// "orange"
```

### **c) `for...of` → Plus simple**
```javascript
for (let fruit of fruits) {
  console.log(fruit);
}
```

---

## **8. Recherche dans un Tableau**
### **a) `includes()` → Vérifier si un élément existe**
```javascript
let fruits = ["pomme", "banane", "orange"];
console.log(fruits.includes("banane")); // true
console.log(fruits.includes("kiwi")); // false
```

### **b) `indexOf()` → Trouver l'index d'un élément**
```javascript
console.log(fruits.indexOf("orange")); // 2
console.log(fruits.indexOf("kiwi")); // -1 (non trouvé)
```

---

## **9. Transformation de Tableaux**
### **a) `map()` → Créer un nouveau tableau transformé**
```javascript
let nombres = [1, 2, 3];
let carres = nombres.map(n => n * n); // [1, 4, 9]
```

### **b) `filter()` → Filtrer selon une condition**
```javascript
let nombres = [10, 15, 20, 25];
let pairs = nombres.filter(n => n % 2 === 0); // [10, 20]
```
---


## **12. Conclusion**
✅ **Les tableaux stockent plusieurs valeurs** dans une seule variable.  
✅ **Accès via `tableau[index]`** (commence à 0).  
✅ **Modification avec `push`, `pop`, `splice`, etc.**  
✅ **Parcours avec `for`, `forEach`, `for...of`.**  
✅ **Transformation avec `map`, `filter`, `reduce`.**  

# **Cours Débutant sur les Objets en JavaScript**

---

## **1. Introduction aux Objets**
Un **objet** est une structure de données qui permet de stocker des **propriétés** (clés/valeurs).  
Contrairement aux tableaux, les objets utilisent des **noms** (clés) au lieu d'index numériques.

### **À quoi ça sert ?**
📌 Représenter des entités complexes (utilisateur, produit, etc.)  
📌 Organiser des données de manière logique  
📌 Stocker des informations liées sous un même "toit"  

---

## **2. Créer un Objet**
### **Syntaxe :** `{}` ou `new Object()`
```javascript
// Méthode recommandée (avec accolades {})
let utilisateur = {
  nom: "Alice",
  age: 25,
  estAdmin: false
};

// Avec new Object (moins utilisé)
let voiture = new Object();
voiture.marque = "Toyota";
voiture.modele = "Corolla";
```

### **Exemple :**
```javascript
let livre = {
  titre: "JavaScript pour débutants",
  auteur: "Pierre Dupont",
  pages: 200,
  estDisponible: true
};
```

---

## **3. Accéder aux Propriétés**
### **a) Notation point (.)**
```javascript
console.log(livre.titre); // "JavaScript pour débutants"
console.log(livre.pages); // 200
```
## **4. Modifier un Objet**
### **a) Ajouter une propriété**
```javascript
livre.prix = 19.99;
console.log(livre);
// { titre: "...", auteur: "...", ..., prix: 19.99 }
```

### **b) Modifier une propriété**
```javascript
livre.pages = 210;
console.log(livre.pages); // 210
```

### **c) Supprimer une propriété**
```javascript
delete livre.estDisponible;
console.log(livre.estDisponible); // undefined
```

---

## **5. Méthodes dans les Objets**
Une **méthode** est une **fonction** stockée comme propriété d'un objet.

### **Syntaxe :**
```javascript
let utilisateur = {
  nom: "Bob",
  direBonjour: function() {
    console.log("Bonjour !");
  }
};

// Appel de la méthode
utilisateur.direBonjour(); // "Bonjour !"
```

### **Syntaxe raccourcie (ES6)**
```javascript
let utilisateur = {
  nom: "Bob",
  direBonjour() {  // Plus simple !
    console.log(`Bonjour, je suis ${this.nom}`);
  }
};

utilisateur.direBonjour(); // "Bonjour, je suis Bob"
```

---

## **7. Parcourir un Objet**
### **a) `for...in` → Parcourir les propriétés**
```javascript
for (let cle in utilisateur) {
  console.log(`${cle} : ${utilisateur[cle]}`);
}
// nom : Bob
// direBonjour : function()...
```

### **b) `Object.keys()` → Liste des clés**
```javascript
let cles = Object.keys(utilisateur);
console.log(cles); // ["nom", "direBonjour"]
```

### **c) `Object.values()` → Liste des valeurs**
```javascript
let valeurs = Object.values(utilisateur);
console.log(valeurs); // ["Bob", function...]
```

---

## **8. Objets Imbriqués**
Un objet peut contenir d'autres objets.

```javascript
let compte = {
  titulaire: {
    nom: "Alice",
    email: "alice@example.com"
  },
  solde: 1000,
  devise: "EUR"
};

console.log(compte.titulaire.email); // "alice@example.com"
```

---

## **Partie 1 : Spread Operator (`...`)**

### **1. Introduction**
Le **spread operator** (`...`) permet de :
- **Étendre** un tableau ou un objet dans un autre
- **Copier** facilement des tableaux/objets
- **Fusionner** des structures de données

### **2. Utilisation avec les Tableaux**
#### **a) Copier un tableau**
```javascript
let fruits = ["pomme", "banane"];
let copieFruits = [...fruits]; // Crée une nouvelle copie

console.log(copieFruits); // ["pomme", "banane"]
```

#### **b) Fusionner des tableaux**
```javascript
let legumes = ["carotte", "poireau"];
let epicerie = [...fruits, ...legumes];

console.log(epicerie); // ["pomme", "banane", "carotte", "poireau"]
```

#### **c) Ajouter un élément**
```javascript
let nouveauxFruits = [...fruits, "orange"];
console.log(nouveauxFruits); // ["pomme", "banane", "orange"]
```

---

### **3. Utilisation avec les Objets**
#### **a) Copier un objet**
```javascript
let utilisateur = { nom: "Alice", age: 25 };
let copieUtilisateur = { ...utilisateur };

console.log(copieUtilisateur); // { nom: "Alice", age: 25 }
```

#### **b) Fusionner des objets**
```javascript
let infosSupplementaires = { ville: "Paris" };
let profilComplet = { ...utilisateur, ...infosSupplementaires };

console.log(profilComplet);
// { nom: "Alice", age: 25, ville: "Paris" }
```

#### **c) Surcharger une propriété**
```javascript
let miseAJour = { ...utilisateur, age: 26 };
console.log(miseAJour); // { nom: "Alice", age: 26 }
```

---

## **Partie 2 : Déstructuration**

### **2. Déstructuration d'Objets**
Extraire des propriétés dans des variables.

#### **Syntaxe de base**
```javascript
let utilisateur = { nom: "Alice", age: 25 };

let { nom, age } = utilisateur;
console.log(nom); // "Alice"
console.log(age); // 25
```

#### **Renommer une variable**
```javascript
let { nom: userName, age: userAge } = utilisateur;
console.log(userName); // "Alice"
```

#### **Valeurs par défaut**
```javascript
let { nom, ville = "Paris" } = utilisateur;
console.log(ville); // "Paris" (valeur par défaut)
```

---

### **3. Cas Pratiques**
#### **a) Échanger des variables**
```javascript
let a = 1, b = 2;
[a, b] = [b, a]; // Échange les valeurs

console.log(a); // 2
console.log(b); // 1
```

#### **b) Paramètres de fonction**
```javascript
function afficherInfos({ nom, age }) {
  console.log(`${nom} a ${age} ans`);
}

afficherInfos(utilisateur); // "Alice a 25 ans"
```

#### **c) Retour de fonction**
```javascript
function getCoordonnees() {
  return { x: 10, y: 20 };
}

let { x, y } = getCoordonnees();
console.log(x, y); // 10 20
```

---

## **Conclusion**
✅ **Spread Operator (`...`)** :  
- Copie/Fusion de tableaux et objets  
- Conversion tableau → arguments de fonction  

✅ **Déstructuration** :  
- Extraction propre de valeurs  
- Syntaxe intuitive pour les objets/tableaux  

# **Cours Débutant sur les Conditions en JavaScript**

---

## **1. Introduction aux Conditions**
Les conditions permettent d'**exécuter du code uniquement si une certaine condition est vraie**.  
C'est essentiel pour créer des programmes qui prennent des décisions !

### **Pourquoi utiliser des conditions ?**
- Afficher un message spécial si un utilisateur est connecté
- Vérifier si un formulaire est correctement rempli
- Adapter le comportement en fonction de l'input utilisateur

---

## **2. La Structure `if`**
### **Syntaxe de base :**
```javascript
if (condition) {
  // Code exécuté si la condition est vraie
}
```

### **Exemple :**
```javascript
let age = 18;

if (age >= 18) {
  console.log("Vous êtes majeur !");
}
```

---

## **3. `else` : Alternative si la condition est fausse**
```javascript
if (condition) {
  // Code si vrai
} else {
  // Code si faux
}
```

### **Exemple :**
```javascript
let heure = 14;

if (heure < 12) {
  console.log("Bon matin !");
} else {
  console.log("Bonne après-midi !");
}
```

---

## **4. `else if` : Plusieurs conditions**
```javascript
if (condition1) {
  // Code 1
} else if (condition2) {
  // Code 2
} else {
  // Code par défaut
}
```

### **Exemple :**
```javascript
let note = 75;

if (note >= 90) {
  console.log("A");
} else if (note >= 80) {
  console.log("B");
} else if (note >= 70) {
  console.log("C");
} else {
  console.log("Échec");
}
// Affiche "C"
```

---

## **5. Opérateurs de Comparaison**
Pour créer des conditions, on utilise ces opérateurs :

| Opérateur | Description | Exemple |
|-----------|-------------|---------|
| `===` | Égalité stricte (valeur ET type) | `5 === 5` → `true` |
| `!==` | Inégalité stricte | `5 !== "5"` → `true` |
| `>` | Plus grand que | `10 > 5` → `true` |
| `<` | Plus petit que | `10 < 5` → `false` |
| `>=` | Plus grand ou égal | `10 >= 10` → `true` |
| `<=` | Plus petit ou égal | `10 <= 5` → `false` |

---

## **6. Opérateurs Logiques**
Combiner plusieurs conditions :

| Opérateur | Description | Exemple |
|-----------|-------------|---------|
| `&&` | ET (les deux doivent être vrais) | `age > 18 && estEtudiant` |
| `||` | OU (au moins un doit être vrai) | `estAdmin || estModerateur` |
| `!` | NON (inverse la condition) | `!estBanni` |

### **Exemple :**
```javascript
let age = 20;
let estEtudiant = true;

if (age >= 18 && estEtudiant) {
  console.log("Étudiant majeur");
}
```

---

## **8. Conditions Ternaires (Rapides)**
Syntaxe condensée pour des conditions simples.

### **Structure :**
```javascript
condition ? siVrai : siFaux;
```

### **Exemple :**
```javascript
let age = 20;
let message = age >= 18 ? "Majeur" : "Mineur";
console.log(message); // "Majeur"
```

---

## **9. Bonnes Pratiques**
1. **Utilisez `===`** au lieu de `==` pour éviter les conversions implicites
2. **Gardez les conditions simples** (décomposez les conditions complexes)
3. **Utilisez des parenthèses** pour clarifier l'ordre des opérations
   ```javascript
   if ((age > 18 && estEtudiant) || estAdmin)
   ```

---

## **12. Conclusion**
✅ **`if/else`** pour les décisions basiques  
✅ **`else if`** pour plusieurs conditions  
✅ **`switch`** pour comparer une variable à plusieurs valeurs  
✅ **Opérateurs** (`===`, `&&`, `||`) pour des conditions précises  
✅ **Ternaire** (`? :`) pour des conditions simples en une ligne  


# **Cours Débutant sur les Fonctions et Fonctions Fléchées en JavaScript**

---

## **Partie 1 : Les Fonctions Classiques**

### **1. Qu'est-ce qu'une fonction ?**
Une fonction est un **bloc de code réutilisable** qui effectue une tâche spécifique.

**Analogies :**
- Une machine à café : vous donnez des grains (paramètres), elle retourne du café (valeur de retour)
- Une recette de cuisine : instructions pré-définies pour obtenir un résultat

### **2. Déclarer une fonction**
#### **Syntaxe de base :**
```javascript
function nomDeLaFonction(parametre1, parametre2) {
  // Corps de la fonction
  return resultat; // Optionnel
}
```

#### **Exemple simple :**
```javascript
function direBonjour() {
  console.log("Bonjour !");
}

// Appel de la fonction
direBonjour(); // Affiche "Bonjour !"
```

### **3. Fonctions avec paramètres**
```javascript
function saluer(nom) {
  console.log(`Bonjour ${nom} !`);
}

saluer("Alice"); // Affiche "Bonjour Alice !"
```

### **4. Fonctions avec retour**
```javascript
function calculerCarre(nombre) {
  return nombre * nombre;
}

let resultat = calculerCarre(5);
console.log(resultat); // Affiche 25
```

### **5. Paramètres par défaut (ES6)**
```javascript
function multiplier(a, b = 2) {
  return a * b;
}

console.log(multiplier(3)); // 6 (prend b=2 par défaut)
console.log(multiplier(3, 4)); // 12
```

---

## **Partie 2 : Les Fonctions Fléchées (=>)**

### **1. Introduction (ES6)**
Syntaxe plus concise pour écrire des fonctions anonymes.

**Comparaison :**
```javascript
// Fonction classique
function somme(a, b) {
  return a + b;
}

// Fonction fléchée
const somme = (a, b) => {
  return a + b;
};
```

### **2. Syntaxes raccourcies**
#### **a) Un seul paramètre : pas besoin de parenthèses**
```javascript
const carre = x => {
  return x * x;
};
```

#### **b) Une seule ligne : pas besoin de `return` ni d'accolades**
```javascript
const carre = x => x * x;
```

#### **c) Pas de paramètres : parenthèses vides**
```javascript
const direHello = () => console.log("Hello !");
```
---
# **Cours Débutant sur les Import/Export en JavaScript**

---

## **1. Introduction aux Modules**
Les modules permettent de **diviser votre code** en plusieurs fichiers pour :
- **Mieux organiser** votre projet
- **Éviter les conflits** de noms
- **Réutiliser** du code facilement

### **Deux systèmes principaux :**
1. **CommonJS** (Node.js) : `require()` / `module.exports`
2. **ES Modules** (Navigateurs et Node.js moderne) : `import` / `export`

👉 Nous allons nous concentrer sur **ES Modules** (le standard moderne).

---

## **2. Export : Exposer du Code**
### **a) Export par défaut (1 seul par fichier)**
```javascript
// math.js
const pi = 3.14;

export default function calculerAire(rayon) {
  return pi * rayon * rayon;
}
```

### **b) Export nommés (plusieurs par fichier)**
```javascript
// utils.js
export const version = "1.0";

export function logger(message) {
  console.log(`[LOG] ${message}`);
}
```

### **c) Mixte : Export par défaut + nommés**
```javascript
// config.js
const apiKey = "abc123";

export default {
  timeout: 5000,
  retries: 3
};

export { apiKey };
```

---

## **3. Import : Utiliser du Code Exporté**
### **a) Importer un export par défaut**
```javascript
// main.js
import calculerAire from './math.js';

console.log(calculerAire(5)); // 78.5
```

### **b) Importer des exports nommés**
```javascript
// app.js
import { logger, version } from './utils.js';

logger(`Version ${version}`); // [LOG] Version 1.0
```

### **c) Importer tout un module**
```javascript
// app.js
import * as utils from './utils.js';

utils.logger("Test"); // [LOG] Test
console.log(utils.version); // 1.0
```

### **d) Importer avec alias**
```javascript
import { apiKey as cleAPI } from './config.js';
console.log(cleAPI); // "abc123"
```

---

## **4. Cas Pratiques**
### **a) Réorganiser un projet**
```
src/
├── utils/
│   ├── math.js
│   └── logger.js
├── config.js
└── main.js
```

### **b) Exemple complet**
```javascript
// math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// main.js
import { add, multiply } from './utils/math.js';

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
```

---

## **9. Conclusion**
- **`export`** : Rend du code disponible pour d'autres fichiers  
- **`import`** : Utilise du code depuis d'autres fichiers  
- **Modules ES** = Standard moderne pour le JavaScript  


# **Cours Débutant sur les Classes en JavaScript**

---

## **1. Introduction aux Classes**
Les classes sont des **structures de code** qui permettent de créer des objets avec des propriétés et méthodes similaires.  
Elles simplifient la création d'objets complexes et l'**héritage** en JavaScript (qui est basé sur un système de prototypes).

### **Pourquoi utiliser des classes ?**
- ✅ **Organiser** son code de manière logique
- ✅ **Créer plusieurs objets** similaires facilement
- ✅ **Utiliser l'héritage** pour éviter la répétition

---

## **2. Syntaxe de Base**
### **Déclaration d'une classe**
```javascript
class NomDeLaClasse {
  // Méthode spéciale (constructeur)
  constructor(parametres) {
    // Initialisation des propriétés
  }

  // Méthodes
  maMethode() {
    // ...
  }
}
```

### **Exemple concret : Créer une classe `Animal`**
```javascript
class Animal {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  decrire() {
    return `${this.nom} a ${this.age} ans`;
  }
}
```

### **Créer un objet (instance)**
```javascript
const chien = new Animal("Rex", 5);
console.log(chien.decrire()); // "Rex a 5 ans"
```

---

## **3. Les 4 Concepts Principaux (POO)**


### **1. Héritage**
Une classe peut hériter des propriétés/méthodes d'une autre classe.

```javascript
class Chien extends Animal {
  constructor(nom, age, race) {
    super(nom, age); // Appelle le constructeur parent
    this.race = race;
  }

  aboyer() {
    return "Woof!";
  }
}
```
