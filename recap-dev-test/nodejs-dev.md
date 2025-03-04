# 📌 **Guide complet sur les Buffers, Streams, `this`, Copies (Shallow vs Deep), Events et l'objet Global en Node.js**  

Node.js offre des outils puissants pour gérer les données et les événements de manière efficace. Voici une documentation détaillée avec explications et exemples.

---

# **1️⃣ Buffers en Node.js**  

Les **buffers** sont utilisés pour manipuler des données binaires directement en mémoire, sans conversion en chaînes de caractères.

## 🛠 **Méthodes et Propriétés principales**
| Méthode / Propriété | Description | Exemple |
|----------------|-------------------------------|------------------------------|
| `Buffer.alloc(size)` | Alloue un buffer de `size` octets | `const buf = Buffer.alloc(10);` |
| `Buffer.from(data, encoding?)` | Crée un buffer à partir de données | `const buf = Buffer.from("Hello");` |
| `buf.length` | Retourne la taille du buffer | `buf.length` |
| `buf.toString(encoding?)` | Convertit en string | `buf.toString("utf8")` |
| `buf.write(string, offset?, length?)` | Écrit dans le buffer | `buf.write("Hi", 0)` |
| `buf.slice(start, end)` | Crée une vue du buffer | `buf.slice(0, 3)` |
| `buf.copy(target, targetStart, sourceStart, sourceEnd)` | Copie dans un autre buffer | `buf.copy(buf2, 0, 0, 3)` |
| `Buffer.concat([buf1, buf2])` | Concatène plusieurs buffers | `Buffer.concat([buf1, buf2])` |

### ✅ **Exemple d'utilisation**
```js
const buf = Buffer.from("Hello, world!");
console.log(buf.toString()); // "Hello, world!"
```

---

# **2️⃣ Streams en Node.js**  

Les **streams** sont utilisés pour traiter des données en continu (lecture/écriture).  

## 🛠 **Types de Streams**
| Type | Description | Exemple |
|------|------------|---------|
| `Readable` | Lecture des données | `fs.createReadStream("file.txt")` |
| `Writable` | Écriture des données | `fs.createWriteStream("output.txt")` |
| `Duplex` | Lecture + écriture | `new stream.Duplex()` |
| `Transform` | Modification des données | `new stream.Transform()` |

### ✅ **Exemple de lecture d'un fichier**
```js
const fs = require("fs");
const readable = fs.createReadStream("input.txt", { encoding: "utf8" });

readable.on("data", chunk => {
    console.log("Chunk reçu :", chunk);
});
```

---

# **3️⃣ Le mot-clé `this` en Node.js**  

Le comportement de `this` dépend du contexte dans lequel il est utilisé.

## 🛠 **Différents Contextes**
| Contexte | `this` représente | Exemple |
|----------|------------------|---------|
| **Global** | L'objet `global` | `console.log(this === global); // true` |
| **Fonction** | `global` (en mode non strict) | `function test() { console.log(this); }` |
| **Objet** | L'objet appelant | `obj.method()` |
| **Classe** | L'instance de la classe | `this.nom = "Node.js";` |
| **Flèche (`=>`)** | Hérite du `this` parent | `const arrow = () => console.log(this);` |

### ✅ **Exemple d'une mauvaise gestion de `this`**
```js
const obj = {
  name: "Node",
  sayHello: function() {
    setTimeout(function() {
      console.log(this.name); // `undefined` car `this` est `global`
    }, 1000);
  }
};
obj.sayHello();
```

### ✅ **Solution avec `arrow function`**
```js
const obj = {
  name: "Node",
  sayHello: function() {
    setTimeout(() => {
      console.log(this.name); // `Node`
    }, 1000);
  }
};
obj.sayHello();
```

---

# **4️⃣ Shallow Copy vs Deep Copy**

### **📌 Différence entre les copies**
- **Shallow Copy (copie superficielle)** : copie l’objet mais garde les références aux objets imbriqués.
- **Deep Copy (copie profonde)** : crée une copie complète et indépendante.

## 🛠 **Exemples**
| Type | Description | Exemple |
|------|------------|---------|
| **Shallow Copy** | Copie sans dupliquer les objets imbriqués | `const obj2 = {...obj1};` |
| **Deep Copy** | Copie récursive, objet entièrement dupliqué | `const obj2 = JSON.parse(JSON.stringify(obj1));` |

### ✅ **Exemple de Shallow Copy**
```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };

obj2.b.c = 42; 
console.log(obj1.b.c); // 42 (modifié)
```

### ✅ **Exemple de Deep Copy**
```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.b.c = 42;
console.log(obj1.b.c); // 2 (pas modifié)
```

---

# **5️⃣ Events en Node.js**  

Le module `events` permet de créer et d'écouter des événements personnalisés.

## 🛠 **Méthodes principales**
| Méthode | Description | Exemple |
|---------|------------|---------|
| `on(event, callback)` | Écoute un événement | `emitter.on("test", callback);` |
| `emit(event, ...args)` | Déclenche un événement | `emitter.emit("test", data);` |
| `once(event, callback)` | Écoute une seule fois | `emitter.once("test", callback);` |
| `removeListener(event, callback)` | Supprime un listener | `emitter.removeListener("test", callback);` |

### ✅ **Exemple d'utilisation**
```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("hello", (name) => {
    console.log(`Hello, ${name}!`);
});

emitter.emit("hello", "Moustapha");
```

---

# **6️⃣ L'objet `global` en Node.js**  

L'objet `global` est équivalent à `window` dans un navigateur.

## 🛠 **Quelques propriétés utiles**
| Propriété | Description | Exemple |
|-----------|------------|---------|
| `globalThis` | Référence globale universelle | `console.log(globalThis === global); // true` |
| `console` | Accès à la console | `console.log("Hello")` |
| `setTimeout(fn, delay)` | Exécute une fonction après un délai | `setTimeout(() => console.log("Done"), 1000);` |
| `setInterval(fn, delay)` | Exécute une fonction en boucle | `setInterval(() => console.log("Tick"), 1000);` |
| `__dirname` | Répertoire actuel | `console.log(__dirname);` |
| `__filename` | Nom du fichier actuel | `console.log(__filename);` |

### ✅ **Exemple d'utilisation de `global`**
```js
global.myVar = "Bonjour";
console.log(global.myVar); // "Bonjour"
```

---

# **🚀 Conclusion**
- **Buffers** : Manipulation de données binaires en mémoire.
- **Streams** : Gestion efficace des fichiers et flux de données.
- **`this`** : Différent selon le contexte (global, fonction, objet...).
- **Shallow vs Deep Copy** : Différence dans la duplication des objets.
- **Events** : Système de gestion d'événements avec `EventEmitter`.
- **Global** : Accès aux fonctionnalités de base de Node.js.

Avec ces connaissances, tu peux manipuler les concepts clés de Node.js efficacement ! 🚀