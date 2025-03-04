# 📌 **Cours Complet sur les Principes SOLID en JavaScript et Node.js**  

Les principes **SOLID** sont **cinq règles fondamentales** qui aident à concevoir du **code propre, maintenable et évolutif**. Ils sont essentiels en **programmation orientée objet (POO)** et sont particulièrement utiles en **Node.js** et **JavaScript** malgré leur nature orientée prototype.  

> **SOLID** est un acronyme pour :  
> - **S**ingle Responsibility Principle (**SRP**)  
> - **O**pen/Closed Principle (**OCP**)  
> - **L**iskov Substitution Principle (**LSP**)  
> - **I**nterface Segregation Principle (**ISP**)  
> - **D**ependency Inversion Principle (**DIP**)  

---

# **1️⃣ Single Responsibility Principle (SRP) – Principe de responsabilité unique**  
Une classe, une fonction ou un module **ne doit avoir qu'une seule responsabilité**.  

### ❌ **Mauvais exemple :**  
Une classe qui fait **plusieurs choses en même temps** (ex: gérer un utilisateur + envoyer un email).  
```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  saveToDatabase() {
    console.log("Utilisateur enregistré !");
  }

  sendWelcomeEmail() {
    console.log(`Bienvenue ${this.name} !`);
  }
}
```
👉 **Problème** : La classe User a **deux responsabilités** :  
1️⃣ Gérer les utilisateurs  
2️⃣ Envoyer des emails  

### ✅ **Bon exemple (Refactoring)**  
Séparer en **deux classes distinctes** :  
```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserService {
  save(user) {
    console.log("Utilisateur enregistré !");
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    console.log(`Bienvenue ${user.name} !`);
  }
}
```
👉 **Chaque classe a UNE seule responsabilité.**  

---

# **2️⃣ Open/Closed Principle (OCP) – Principe ouvert/fermé**  
Une classe doit **être ouverte à l'extension**, mais **fermée à la modification**.  

### ❌ **Mauvais exemple :**  
Si on veut ajouter un **nouveau type de paiement**, on doit modifier la classe `Payment`.  
```js
class Payment {
  process(type, amount) {
    if (type === "creditCard") {
      console.log(`Paiement de ${amount}€ par carte`);
    } else if (type === "paypal") {
      console.log(`Paiement de ${amount}€ via PayPal`);
    }
  }
}
```
👉 **Problème** : À chaque nouveau type de paiement, on doit modifier cette classe.  

### ✅ **Bon exemple (Refactoring avec le pattern Strategy)**  
Créer une interface qui permet d’ajouter facilement **de nouveaux types de paiement**.  
```js
class PaymentStrategy {
  pay(amount) {
    throw new Error("Méthode non implémentée");
  }
}

class CreditCardPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paiement de ${amount}€ par carte`);
  }
}

class PayPalPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paiement de ${amount}€ via PayPal`);
  }
}

class PaymentProcessor {
  constructor(strategy) {
    this.strategy = strategy;
  }

  process(amount) {
    this.strategy.pay(amount);
  }
}

// Utilisation
const payment = new PaymentProcessor(new PayPalPayment());
payment.process(50);
```
👉 **Ajout d'un nouveau type de paiement sans modifier la classe existante !**  

---

# **3️⃣ Liskov Substitution Principle (LSP) – Principe de substitution de Liskov**  
Les classes dérivées doivent pouvoir **remplacer** leur classe parente **sans problème**.  

### ❌ **Mauvais exemple :**  
Une classe `Penguin` qui **ne peut pas voler**, contrairement à `Bird`.  
```js
class Bird {
  fly() {
    console.log("Je vole !");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Je ne peux pas voler !");
  }
}
```
👉 **Problème** : `Penguin` casse l'héritage car il **ne respecte pas** le contrat de la classe `Bird`.  

### ✅ **Bon exemple (Refactoring avec composition au lieu d’héritage)**  
```js
class Bird {}

class FlyingBird extends Bird {
  fly() {
    console.log("Je vole !");
  }
}

class Penguin extends Bird {
  swim() {
    console.log("Je nage !");
  }
}
```
👉 **Chaque classe respecte bien le principe d'héritage.**  

---

# **4️⃣ Interface Segregation Principle (ISP) – Principe de ségrégation des interfaces**  
Une interface ne doit pas **forcer une classe** à implémenter des méthodes inutiles.  

### ❌ **Mauvais exemple :**  
Une classe `Printer` qui oblige une **imprimante classique** et une **imprimante 3D** à implémenter les mêmes méthodes.  
```js
class Printer {
  print() {}
  scan() {}
  fax() {}
}
```
👉 **Problème** : Une imprimante 3D **n'a pas besoin de scanner ou de fax**.  

### ✅ **Bon exemple (Refactoring avec des interfaces spécifiques)**  
Créer des **interfaces séparées** pour chaque fonctionnalité.  
```js
class Printer {
  print() {}
}

class Scanner {
  scan() {}
}

class Fax {
  fax() {}
}

class BasicPrinter extends Printer {}

class MultifunctionPrinter extends Printer {
  constructor() {
    super();
    this.scanner = new Scanner();
    this.fax = new Fax();
  }
}
```
👉 **Chaque classe n'implémente que ce dont elle a besoin.**  

---

# **5️⃣ Dependency Inversion Principle (DIP) – Principe d’inversion des dépendances**  
Un module **haut niveau** ne doit pas dépendre d’un module **bas niveau**.  

### ❌ **Mauvais exemple :**  
Une classe `UserService` dépend **directement** de `MySQLDatabase`.  
```js
class MySQLDatabase {
  save(data) {
    console.log("Données sauvegardées en MySQL");
  }
}

class UserService {
  constructor() {
    this.db = new MySQLDatabase();
  }

  saveUser(user) {
    this.db.save(user);
  }
}
```
👉 **Problème** : Si on veut utiliser **PostgreSQL**, il faut modifier `UserService`.  

### ✅ **Bon exemple (Refactoring avec une abstraction)**  
Utiliser une **interface** pour découpler la base de données du service.  
```js
class Database {
  save(data) {
    throw new Error("Méthode non implémentée");
  }
}

class MySQLDatabase extends Database {
  save(data) {
    console.log("Données sauvegardées en MySQL");
  }
}

class UserService {
  constructor(database) {
    this.db = database;
  }

  saveUser(user) {
    this.db.save(user);
  }
}

// Utilisation
const db = new MySQLDatabase();
const userService = new UserService(db);
userService.saveUser({ name: "Alice" });
```
👉 **Changement facile de base de données sans modifier `UserService` !**  

---

# **🚀 Conclusion : Récapitulatif des principes SOLID**
✅ **SRP** : Une classe doit avoir **une seule responsabilité**  
✅ **OCP** : Le code doit être **ouvert à l’extension mais fermé à la modification**  
✅ **LSP** : Les classes dérivées doivent pouvoir **remplacer leurs classes parentes**  
✅ **ISP** : Ne pas forcer une classe à implémenter **des méthodes inutiles**  
✅ **DIP** : Un module haut niveau ne doit **pas dépendre directement d’un module bas niveau**  

Avec SOLID, votre code sera **plus lisible, évolutif et robuste** ! 🚀🔥