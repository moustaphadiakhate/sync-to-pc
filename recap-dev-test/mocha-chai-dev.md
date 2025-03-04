# 📌 **Cours Complet sur Mocha et Chai : Tests, Mocks, Stubs et Spies**  

Mocha et Chai sont des outils puissants pour tester des applications Node.js. Ce cours couvre **les bases du testing, les assertions, les spies, stubs, mocks et les tests asynchrones**.  

---

# **1️⃣ Introduction aux tests en JavaScript**  

### **📌 Pourquoi tester son code ?**
- **Détection des bugs** avant la mise en production.  
- **Amélioration de la qualité du code**.  
- **Facilité de maintenance** grâce à des tests automatisés.  

### **📌 Types de tests**
| Type | Description |
|------|------------|
| **Test Unitaire** | Vérifie une fonction spécifique. |
| **Test d'Intégration** | Vérifie que plusieurs modules fonctionnent ensemble. |
| **Test de bout en bout (E2E)** | Simule l’expérience utilisateur complète. |

---

# **2️⃣ Mocha : Le framework de test**
Mocha est un **framework de tests pour Node.js** qui permet d’exécuter des tests synchrones et asynchrones.  

### **📌 Installation**
```sh
npm install --save-dev mocha chai sinon
```

### **📌 Configuration**
Ajoutez ce script dans `package.json` :
```json
"scripts": {
  "test": "mocha"
}
```
Exécutez les tests avec :
```sh
npm test
```

### **📌 Structure d’un test avec Mocha**
```js
const { expect } = require("chai");

describe("Math", function () {
  it("should add two numbers correctly", function () {
    expect(2 + 3).to.equal(5);
  });
});
```

👉 `describe()` : Définit un groupe de tests.  
👉 `it()` : Définit un test unitaire.  

---

# **3️⃣ Chai : La bibliothèque d’assertions**
Chai fournit trois styles d’assertions :
| Style | Exemple |
|-------|---------|
| **Assert** | `assert.equal(add(2, 3), 5);` |
| **Expect** | `expect(add(2, 3)).to.equal(5);` |
| **Should** | `add(2, 3).should.equal(5);` |

### **📌 Exemples avec Chai**
```js
const { expect, assert } = require("chai");

describe("Assertions avec Chai", function () {
  it("Utilisation de expect", function () {
    expect("hello").to.be.a("string");
  });

  it("Utilisation de assert", function () {
    assert.equal(2 + 2, 4);
  });
});
```

---

# **4️⃣ Tests Asynchrones avec Mocha**
Mocha prend en charge les **promesses** et les **async/await**.  

### **📌 Exemple avec Promises**
```js
const { expect } = require("chai");

function fetchData() {
  return new Promise((resolve) => setTimeout(() => resolve("data"), 1000));
}

describe("Test asynchrone avec Promises", function () {
  it("devrait retourner 'data'", function () {
    return fetchData().then((data) => {
      expect(data).to.equal("data");
    });
  });
});
```

### **📌 Exemple avec `async/await`**
```js
describe("Test asynchrone avec async/await", function () {
  it("devrait retourner 'data'", async function () {
    const data = await fetchData();
    expect(data).to.equal("data");
  });
});
```

---

# **5️⃣ Spies, Stubs et Mocks avec Sinon.js**  

## **📌 Spies (Espions)**
Les **spies** permettent de surveiller les appels à une fonction (nombre d’appels, arguments, etc.).

### ✅ **Exemple avec un Spy**
```js
const sinon = require("sinon");

describe("Spies avec Sinon", function () {
  it("devrait surveiller les appels d'une fonction", function () {
    const spy = sinon.spy(console, "log");

    console.log("Hello");
    expect(spy.calledOnce).to.be.true;

    console.log.restore();
  });
});
```
👉 **`spy.calledOnce`** vérifie si la fonction a été appelée une seule fois.

---

## **📌 Stubs (Simulateurs de Fonction)**
Les **stubs** permettent de **remplacer une fonction** et contrôler son comportement.

### ✅ **Exemple avec un Stub**
```js
describe("Stubs avec Sinon", function () {
  it("devrait remplacer une fonction", function () {
    const stub = sinon.stub(console, "log").returns("Stubbed log");

    console.log("Hello");
    expect(console.log()).to.equal("Stubbed log");

    console.log.restore();
  });
});
```
👉 **`stub.returns(value)`** force la fonction à retourner une valeur spécifique.

---

## **📌 Mocks (Objets simulés)**
Les **mocks** sont utilisés pour vérifier qu'une fonction a été **appelée avec des paramètres spécifiques**.

### ✅ **Exemple avec un Mock**
```js
describe("Mocks avec Sinon", function () {
  it("devrait vérifier les appels de fonction", function () {
    const mock = sinon.mock(console);
    mock.expects("log").once().withArgs("Hello");

    console.log("Hello");

    mock.verify();
    mock.restore();
  });
});
```
👉 **`mock.expects(method).once().withArgs(arg)`** s’assure que `console.log("Hello")` a été appelé **exactement une fois** avec `"Hello"`.

---

# **6️⃣ Tests avec Hooks (`before`, `after`)**
Mocha permet d’exécuter du code avant et après chaque test.

### **📌 Exemple**
```js
describe("Hooks dans Mocha", function () {
  before(() => console.log("Avant tous les tests"));
  after(() => console.log("Après tous les tests"));
  beforeEach(() => console.log("Avant chaque test"));
  afterEach(() => console.log("Après chaque test"));

  it("Test 1", function () {
    console.log("Test 1 exécuté");
  });

  it("Test 2", function () {
    console.log("Test 2 exécuté");
  });
});
```
🔹 `before()` : Exécuté **une seule fois** avant tous les tests.  
🔹 `after()` : Exécuté **une seule fois** après tous les tests.  
🔹 `beforeEach()` : Exécuté **avant chaque** test.  
🔹 `afterEach()` : Exécuté **après chaque** test.  

---

# **7️⃣ Tests avec Fake Timers**
Les **Fake Timers** permettent de simuler le temps pour tester les fonctions asynchrones.

### ✅ **Exemple avec `sinon.useFakeTimers()`**
```js
describe("Fake Timers avec Sinon", function () {
  it("simule un setTimeout", function () {
    const clock = sinon.useFakeTimers();
    const callback = sinon.spy();

    setTimeout(callback, 2000);
    clock.tick(2000); // Simule 2 secondes

    expect(callback.calledOnce).to.be.true;
    clock.restore();
  });
});
```

---

# **🚀 Conclusion**
- **Mocha** : Un framework de tests flexible pour Node.js.  
- **Chai** : Une bibliothèque d’assertions avec `expect`, `should`, `assert`.  
- **Sinon.js** : Pour espionner (`spy`), remplacer (`stub`) et simuler (`mock`) des fonctions.  
- **Tests asynchrones** : Gérés avec `done()`, `Promise`, ou `async/await`.  
- **Hooks (`before`, `after`)** : Permettent d’exécuter du code avant/après les tests.  

Avec ces outils, tu peux écrire des tests puissants pour garantir la stabilité de ton application ! 🚀