# QCM - Cours 2 : Composants, State et Props

## Questions

**Question 1:** Qu'est-ce qu'un composant en React Native ?
- A) Une fonction mathématique
- B) Une brique de l'interface utilisateur réutilisable
- C) Un fichier CSS
- D) Un type de base de données

**Question 2:** Quelle est la différence principale entre un composant fonctionnel et un composant de classe ?
- A) Les composants de classe sont plus rapides
- B) Les composants fonctionnels utilisent des hooks, les composants de classe utilisent `this.state`
- C) Il n'y a aucune différence
- D) Les composants fonctionnels ne peuvent pas afficher de texte

**Question 3:** Quel hook permet de gérer l'état dans un composant fonctionnel ?
- A) useComponent
- B) useData
- C) useState
- D) useClass

**Question 4:** Quelle est la syntaxe correcte pour utiliser useState ?
- A) `const state = useState(0)`
- B) `const [state, setState] = useState(0)`
- C) `useState(state, setState, 0)`
- D) `const state = new State(0)`

**Question 5:** À quoi servent les props ?
- A) À styliser les composants
- B) À transmettre des données d'un composant parent à un composant enfant
- C) À créer des animations
- D) À stocker des données dans la base de données

**Question 6:** Comment accède-t-on aux props dans un composant fonctionnel ?
- A) `this.props.nomProp`
- B) `props.nomProp` (en paramètre de la fonction)
- C) `getProps('nomProp')`
- D) `useState(props)`

**Question 7:** Que se passe-t-il quand on appelle setState dans useState ?
- A) Rien ne se passe
- B) Le composant se re-rend avec la nouvelle valeur
- C) L'application redémarre
- D) Les props sont modifiées

**Question 8:** Peut-on modifier directement les props dans un composant enfant ?
- A) Oui, toujours
- B) Non, les props sont en lecture seule
- C) Oui, mais seulement dans les composants de classe
- D) Seulement le dimanche

**Question 9:** Quel est le type de composant privilégié aujourd'hui en React Native ?
- A) Les composants de classe
- B) Les composants fonctionnels avec hooks
- C) Les composants HTML
- D) Les composants natifs uniquement

**Question 10:** Quelle est la valeur initiale d'un state si on écrit `useState()` sans paramètre ?
- A) 0
- B) null
- C) undefined
- D) ""

---

## Réponses

1. **B** - Une brique de l'interface utilisateur réutilisable
2. **B** - Les composants fonctionnels utilisent des hooks, les composants de classe utilisent `this.state`
3. **C** - useState
4. **B** - `const [state, setState] = useState(0)`
5. **B** - À transmettre des données d'un composant parent à un composant enfant
6. **B** - `props.nomProp` (en paramètre de la fonction)
7. **B** - Le composant se re-rend avec la nouvelle valeur
8. **B** - Non, les props sont en lecture seule
9. **B** - Les composants fonctionnels avec hooks
10. **C** - undefined
