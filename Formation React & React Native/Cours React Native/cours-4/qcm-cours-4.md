# QCM - Cours 4 : Listes et gestion des événements

## Questions

**Question 1:** Quelle est la différence principale entre `ScrollView` et `FlatList` ?
- A) Il n'y a aucune différence
- B) `ScrollView` rend tous les éléments d'un coup, `FlatList` les rend au fur et à mesure
- C) `FlatList` ne peut afficher que 10 éléments
- D) `ScrollView` est plus rapide pour les longues listes

**Question 2:** Quel composant est recommandé pour afficher des listes longues et dynamiques ?
- A) ScrollView
- B) ListView
- C) FlatList
- D) MapView

**Question 3:** Quelle prop de `FlatList` est obligatoire pour identifier chaque élément ?
- A) id
- B) key
- C) keyExtractor
- D) itemId

**Question 4:** Quelle prop de `FlatList` définit comment rendre chaque élément ?
- A) renderItem
- B) itemRenderer
- C) showItem
- D) displayItem

**Question 5:** Quel composant permet de rendre un élément cliquable ?
- A) Clickable
- B) Button
- C) TouchableOpacity
- D) Pressable (les deux C et D sont corrects)

**Question 6:** Quelle prop est utilisée pour gérer un événement de clic ?
- A) onClick
- B) onPress
- C) onTap
- D) onTouch

**Question 7:** Quel composant permet à l'utilisateur de saisir du texte ?
- A) Input
- B) TextField
- C) TextInput
- D) EditText

**Question 8:** Quelle prop de `TextInput` récupère la valeur saisie ?
- A) onChange
- B) onChangeText
- C) onInput
- D) onTextChange

**Question 9:** Comment ajouter un élément à un tableau dans le state avec useState ?
- A) `setArray(array.push(item))`
- B) `setArray([...array, item])`
- C) `array.add(item)`
- D) `setArray(array + item)`

**Question 10:** Quelle méthode permet de supprimer un élément d'un tableau basé sur son id ?
- A) `array.remove(id)`
- B) `array.delete(id)`
- C) `array.filter(item => item.id !== id)`
- D) `array.pop(id)`

---

## Réponses

1. **B** - `ScrollView` rend tous les éléments d'un coup, `FlatList` les rend au fur et à mesure
2. **C** - FlatList
3. **C** - keyExtractor
4. **A** - renderItem
5. **C** (ou D) - TouchableOpacity (et Pressable est aussi correct)
6. **B** - onPress
7. **C** - TextInput
8. **B** - onChangeText
9. **B** - `setArray([...array, item])`
10. **C** - `array.filter(item => item.id !== id)`
