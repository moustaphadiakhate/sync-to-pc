# QCM - Cours 6 : Context et gestion globale d'état

## Questions

**Question 1:** À quoi sert le Context API en React ?
- A) À créer des animations
- B) À partager des données globalement sans passer les props à chaque niveau
- C) À gérer les styles
- D) À créer des composants

**Question 2:** Quelle fonction permet de créer un Context ?
- A) useState
- B) useContext
- C) createContext
- D) makeContext

**Question 3:** Quel composant doit envelopper l'application pour fournir le Context ?
- A) ContextWrapper
- B) Provider
- C) ContextContainer
- D) ContextProvider

**Question 4:** Quel hook permet de consommer un Context ?
- A) useState
- B) useEffect
- C) useContext
- D) getContext

**Question 5:** Où doit-on placer le Provider dans l'application ?
- A) Dans chaque composant
- B) Au niveau racine, généralement dans App.js
- C) Dans le fichier de styles
- D) Dans les composants enfants uniquement

**Question 6:** Quelle bibliothèque Expo permet de sélectionner une image depuis la galerie ?
- A) expo-image
- B) expo-camera
- C) expo-image-picker
- D) expo-gallery

**Question 7:** Peut-on avoir plusieurs Contexts dans une application ?
- A) Non, un seul Context par application
- B) Oui, on peut créer plusieurs Contexts
- C) Seulement deux maximum
- D) Uniquement dans les applications payantes

**Question 8:** Que se passe-t-il si un composant utilise `useContext` mais n'est pas enveloppé par le Provider ?
- A) Rien, ça fonctionne normalement
- B) On obtient la valeur par défaut du Context ou undefined
- C) L'application plante
- D) Les données sont null

**Question 9:** Le Context API remplace-t-il complètement Redux ?
- A) Oui, toujours
- B) Non, Context est plus simple mais Redux offre plus de fonctionnalités pour les grandes applications
- C) Oui, Redux est obsolète
- D) Non, on ne peut jamais utiliser Context

**Question 10:** Comment transmettre plusieurs valeurs dans un Context ?
- A) On ne peut transmettre qu'une seule valeur
- B) En passant un objet avec plusieurs propriétés dans la value du Provider
- C) En créant un Context par valeur
- D) Ce n'est pas possible

---

## Réponses

1. **B** - À partager des données globalement sans passer les props à chaque niveau
2. **C** - createContext
3. **B** - Provider
4. **C** - useContext
5. **B** - Au niveau racine, généralement dans App.js
6. **C** - expo-image-picker
7. **B** - Oui, on peut créer plusieurs Contexts
8. **B** - On obtient la valeur par défaut du Context ou undefined
9. **B** - Non, Context est plus simple mais Redux offre plus de fonctionnalités pour les grandes applications
10. **B** - En passant un objet avec plusieurs propriétés dans la value du Provider
