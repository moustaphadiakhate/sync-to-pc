# QCM - Cours 7-8 : Hooks avancés et gestion des effets de bord

## Questions

**Question 1:** À quoi sert le hook `useEffect` ?
- A) À créer des états
- B) À gérer les effets de bord (appels API, événements, etc.)
- C) À créer des contextes
- D) À optimiser les performances uniquement

**Question 2:** Quand s'exécute `useEffect` sans tableau de dépendances ?
- A) Jamais
- B) Une seule fois au montage
- C) À chaque rendu du composant
- D) Uniquement au démontage

**Question 3:** Quand s'exécute `useEffect` avec un tableau de dépendances vide `[]` ?
- A) À chaque rendu
- B) Une seule fois au montage du composant
- C) Jamais
- D) Uniquement au démontage

**Question 4:** Que fait le tableau de dépendances dans `useEffect` ?
- A) Rien
- B) Contrôle quand l'effet doit être ré-exécuté
- C) Stocke des données
- D) Crée des animations

**Question 5:** Comment nettoyer un effet (cleanup) dans `useEffect` ?
- A) En appelant clearEffect()
- B) En retournant une fonction de nettoyage
- C) En utilisant useCleanup
- D) Ce n'est pas possible

**Question 6:** À quoi sert `useMemo` ?
- A) À créer des états
- B) À mémoriser le résultat d'un calcul coûteux pour éviter de le recalculer à chaque rendu
- C) À gérer les effets de bord
- D) À créer des contextes

**Question 7:** Quelle est la différence entre `useEffect` et `useMemo` ?
- A) Il n'y a aucune différence
- B) `useEffect` gère les effets de bord, `useMemo` optimise les calculs
- C) `useMemo` est obsolète
- D) `useEffect` est plus rapide

**Question 8:** Quel hook permet de consommer un Context ?
- A) useEffect
- B) useState
- C) useContext
- D) useMemo

**Question 9:** Dans quel cas utiliser `useMemo` ?
- A) Pour tous les calculs
- B) Pour les calculs coûteux qui doivent être optimisés
- C) Jamais
- D) Uniquement pour les strings

**Question 10:** Peut-on avoir plusieurs `useEffect` dans un même composant ?
- A) Non, un seul par composant
- B) Oui, on peut avoir plusieurs useEffect pour séparer les différentes logiques
- C) Seulement deux maximum
- D) Uniquement dans les composants de classe

**Question 11:** Comment faire un appel API au montage du composant avec `useEffect` ?
- A) useEffect(() => { fetch(...) })
- B) useEffect(() => { fetch(...) }, [])
- C) useEffect(() => { fetch(...) }, [data])
- D) useAPI(() => { fetch(...) })

**Question 12:** Que se passe-t-il si on oublie de mettre une dépendance utilisée dans `useEffect` dans le tableau de dépendances ?
- A) Rien
- B) On peut avoir des bugs car l'effet ne se ré-exécutera pas quand la dépendance change
- C) L'application plante
- D) C'est une bonne pratique

---

## Réponses

1. **B** - À gérer les effets de bord (appels API, événements, etc.)
2. **C** - À chaque rendu du composant
3. **B** - Une seule fois au montage du composant
4. **B** - Contrôle quand l'effet doit être ré-exécuté
5. **B** - En retournant une fonction de nettoyage
6. **B** - À mémoriser le résultat d'un calcul coûteux pour éviter de le recalculer à chaque rendu
7. **B** - `useEffect` gère les effets de bord, `useMemo` optimise les calculs
8. **C** - useContext
9. **B** - Pour les calculs coûteux qui doivent être optimisés
10. **B** - Oui, on peut avoir plusieurs useEffect pour séparer les différentes logiques
11. **B** - useEffect(() => { fetch(...) }, [])
12. **B** - On peut avoir des bugs car l'effet ne se ré-exécutera pas quand la dépendance change
