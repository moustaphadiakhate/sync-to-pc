Voici **20 questions techniques** avec leurs réponses pour un développeur **Senior Node.js** spécialisé en **tests et qualité logicielle**.  

---

### **1. Quelle est la différence entre un test unitaire et un test d'intégration ?**  
- **Test unitaire** : Vérifie **une seule unité de code** (fonction, classe, module) de manière isolée.  
- **Test d’intégration** : Vérifie que **plusieurs composants fonctionnent ensemble** correctement.  

---

### **2. Quels frameworks recommandes-tu pour tester une application Node.js ?**  
- **Mocha** : Framework de tests flexible.  
- **Jest** : Solution complète avec assertions, mocks et spies intégrés.  
- **Chai** : Librairie d'assertions pour Mocha.  
- **Supertest** : Pour tester les API HTTP.  
- **Sinon.js** : Pour les **mocks, spies et stubs**.  

---

### **3. Quelle est la différence entre un mock, un stub et un spy ?**  
- **Mock** : Simule **un objet entier** avec des comportements prédéfinis.  
- **Stub** : Remplace **une fonction spécifique** pour éviter des effets secondaires.  
- **Spy** : Observe les appels à une fonction (combien de fois, avec quels arguments…).  

---

### **4. Comment tester une API REST avec Mocha et Chai ?**  
Utilisation de **Supertest** pour tester un endpoint :  
```js
const request = require('supertest');
const app = require('../app'); // Import de l'application

describe("Test API /users", function () {
  it("devrait retourner la liste des utilisateurs", function (done) {
    request(app)
      .get("/users")
      .expect(200)
      .expect("Content-Type", /json/)
      .end(done);
  });
});
```

---

### **5. Comment tester une fonction asynchrone en Jest ?**  
Avec `async/await` ou `.resolves` :  
```js
test("récupération des données", async () => {
  const data = await fetchData();
  expect(data).toEqual({ id: 1, name: "Test" });
});
```
Ou avec `.resolves` :  
```js
test("récupération des données", () => {
  return expect(fetchData()).resolves.toEqual({ id: 1, name: "Test" });
});
```

---

### **6. Que fait la commande `npm test` ?**  
Elle exécute le script `"test"` défini dans `package.json`, souvent :  
```json
"scripts": {
  "test": "mocha"
}
```

---

### **7. Pourquoi utiliser des tests de charge et comment les exécuter en Node.js ?**  
Les **tests de charge** mesurent la performance sous forte demande. Outils :  
- **Artillery**  
- **k6**  
- **JMeter**  

Exemple avec **Artillery** :  
```bash
artillery run load-test.yml
```

---

### **8. Quelle est la différence entre `beforeEach` et `beforeAll` ?**  
- **beforeEach** : Exécuté avant **chaque** test.  
- **beforeAll** : Exécuté **une seule fois** avant **tous** les tests.  

---

### **9. Comment éviter les dépendances dans les tests unitaires ?**  
- **Utiliser des mocks/stubs** pour isoler la fonction testée.  
- **Injecter les dépendances** au lieu d’importer directement des modules.  

---

### **10. Comment simuler un appel HTTP externe dans un test ?**  
Avec **Sinon.js** pour stubber `axios` :  
```js
const sinon = require("sinon");
const axios = require("axios");

sinon.stub(axios, "get").resolves({ data: { user: "John" } });
```

---

### **11. Quelle est la différence entre un test fonctionnel et un test de bout en bout (E2E) ?**  
- **Test fonctionnel** : Vérifie que **chaque fonctionnalité** fonctionne comme prévu.  
- **Test E2E** : Vérifie **tout le parcours utilisateur** dans l’application.  

---

### **12. Comment mesurer la couverture des tests en Node.js ?**  
Avec **nyc** (istanbul) :  
```bash
npx nyc --reporter=text mocha
```

---

### **13. Comment gérer les bases de données dans les tests ?**  
- Utiliser une **base de test** (ex: SQLite en mémoire).  
- Nettoyer les données avec **beforeEach**/**afterEach**.  
- Mocker les requêtes avec **Sinon.js** ou **jest-mock**.  

---

### **14. Comment tester un WebSocket en Node.js ?**  
Utiliser **ws** et **supertest** :  
```js
const WebSocket = require("ws");

test("Connexion WebSocket", (done) => {
  const ws = new WebSocket("ws://localhost:8080");
  
  ws.on("open", () => {
    ws.send("ping");
  });

  ws.on("message", (data) => {
    expect(data).toBe("pong");
    done();
  });
});
```

---

### **15. Comment organiser ses tests dans une application Node.js ?**  
Structure recommandée :  
```
/src
  /services
  /controllers
/tests
  /unit
    userService.test.js
  /integration
    userAPI.test.js
```

---

### **16. Comment éviter les effets de bord entre les tests ?**  
- Utiliser **beforeEach/afterEach** pour réinitialiser l’état.  
- Utiliser des **bases de données en mémoire** (SQLite, MongoDB-memory-server).  
- Utiliser des **containers Docker jetables**.  

---

### **17. Comment tester un middleware Express.js ?**  
Exemple avec **supertest** :  
```js
const express = require("express");
const request = require("supertest");

const app = express();
app.use((req, res, next) => {
  res.header("X-Test", "ok");
  next();
});

test("Middleware ajoute l'en-tête X-Test", async () => {
  const res = await request(app).get("/");
  expect(res.headers["x-test"]).toBe("ok");
});
```

---

### **18. Comment détecter les fuites de mémoire dans un test ?**  
Utiliser `heapdump` ou `memwatch-next` :  
```js
const memwatch = require("memwatch-next");

memwatch.on("leak", (info) => {
  console.log("Fuite mémoire détectée !", info);
});
```

---

### **19. Pourquoi et comment tester les logs dans une application Node.js ?**  
Les logs doivent être testés pour vérifier **qu’ils enregistrent correctement les erreurs**.  
Avec **Sinon.js** :  
```js
const sinon = require("sinon");
const logger = require("../logger");

test("Logger doit enregistrer un message", () => {
  const spy = sinon.spy(console, "log");
  logger.info("Test log");
  expect(spy.calledWith("Test log")).toBeTruthy();
  spy.restore();
});
```

---

### **20. Comment intégrer les tests dans un pipeline CI/CD ?**  
- Ajouter `npm test` dans GitHub Actions, GitLab CI ou Jenkins.  
- Exemple GitHub Actions :  
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm test
```

---

### **🚀 Conclusion**  
Ces **20 questions** couvrent les **meilleures pratiques** pour un **développeur Senior Node.js** en **tests et qualité logicielle**. Maîtriser ces concepts garantit un code **robuste, maintenable et performant**. 🚀🔥