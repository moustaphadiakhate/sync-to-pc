# QCM - Cours 5 : Navigation avec React Navigation

## Questions

**Question 1:** Quelle bibliothèque est utilisée pour la navigation en React Native dans ce cours ?
- A) React Router
- B) React Navigation
- C) Native Navigation
- D) Expo Navigation

**Question 2:** Quel type de navigation permet de naviguer entre différents écrans avec une pile (stack) ?
- A) Tab Navigation
- B) Stack Navigation
- C) Drawer Navigation
- D) Modal Navigation

**Question 3:** Quel package est utilisé pour créer une navigation en pile ?
- A) @react-navigation/stack
- B) @react-navigation/native-stack
- C) @react-navigation/screen
- D) @react-navigation/pages

**Question 4:** Quel package est utilisé pour créer une navigation en onglets ?
- A) @react-navigation/tabs
- B) @react-navigation/bottom-tabs
- C) @react-navigation/tab-bar
- D) @react-navigation/navigator

**Question 5:** Comment naviguer vers un autre écran nommé "Details" ?
- A) `navigation.goTo('Details')`
- B) `navigation.push('Details')`
- C) `navigation.navigate('Details')`
- D) B et C sont corrects

**Question 6:** Comment passer des paramètres lors de la navigation ?
- A) `navigation.navigate('Details', { id: 1 })`
- B) `navigation.navigate('Details').params({ id: 1 })`
- C) `navigation.goTo('Details', params: { id: 1 })`
- D) On ne peut pas passer de paramètres

**Question 7:** Comment récupérer les paramètres passés dans un écran ?
- A) `navigation.params.id`
- B) `route.params.id`
- C) `this.props.id`
- D) `getParams('id')`

**Question 8:** Quelle bibliothèque fournit les icônes dans les projets Expo ?
- A) react-native-icons
- B) @expo/vector-icons
- C) expo-icons
- D) react-navigation-icons

**Question 9:** Quel composant wrapping est nécessaire pour utiliser React Navigation ?
- A) NavigationProvider
- B) NavigationContainer
- C) NavigationWrapper
- D) RouterContainer

**Question 10:** Comment retourner à l'écran précédent ?
- A) `navigation.back()`
- B) `navigation.previous()`
- C) `navigation.goBack()`
- D) `navigation.return()`

---

## Réponses

1. **B** - React Navigation
2. **B** - Stack Navigation
3. **B** - @react-navigation/native-stack
4. **B** - @react-navigation/bottom-tabs
5. **D** - B et C sont corrects
6. **A** - `navigation.navigate('Details', { id: 1 })`
7. **B** - `route.params.id`
8. **B** - @expo/vector-icons
9. **B** - NavigationContainer
10. **C** - `navigation.goBack()`
