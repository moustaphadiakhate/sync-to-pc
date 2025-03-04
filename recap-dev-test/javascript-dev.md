Voici une documentation complète des principales fonctions de manipulation des **chaînes de caractères (string)**, **tableaux (array)**, **objets (object)** et **nombres (number)** en JavaScript, avec des explications et des exemples.

---

# 📌 Manipulation des chaînes de caractères (String)

Les chaînes de caractères en JavaScript sont immuables (on ne peut pas modifier directement une chaîne existante).

## 1️⃣ **Les méthodes de manipulation de chaînes**
| Méthode | Description | Exemple |
|---------|------------|---------|
| `length` | Retourne la longueur d’une chaîne | `"Hello".length` → `5` |
| `charAt(index)` | Retourne le caractère à l’index donné | `"Hello".charAt(1)` → `"e"` |
| `toUpperCase()` | Convertit en majuscules | `"hello".toUpperCase()` → `"HELLO"` |
| `toLowerCase()` | Convertit en minuscules | `"HELLO".toLowerCase()` → `"hello"` |
| `trim()` | Supprime les espaces au début et à la fin | `"  Hello  ".trim()` → `"Hello"` |
| `trimStart()` | Supprime les espaces au début | `"  Hello".trimStart()` → `"Hello"` |
| `trimEnd()` | Supprime les espaces à la fin | `"Hello  ".trimEnd()` → `"Hello"` |
| `indexOf(substr)` | Retourne l’index de la première occurrence | `"Hello".indexOf("l")` → `2` |
| `lastIndexOf(substr)` | Retourne l’index de la dernière occurrence | `"Hello".lastIndexOf("l")` → `3` |
| `includes(substr)` | Vérifie si la chaîne contient un texte | `"Hello".includes("ll")` → `true` |
| `startsWith(substr)` | Vérifie si ça commence par un texte | `"Hello".startsWith("He")` → `true` |
| `endsWith(substr)` | Vérifie si ça finit par un texte | `"Hello".endsWith("o")` → `true` |
| `slice(start, end?)` | Extrait une partie de la chaîne | `"Hello".slice(1, 4)` → `"ell"` |
| `substring(start, end)` | Extrait une portion | `"Hello".substring(1, 4)` → `"ell"` |
| `replace(ancien, nouveau)` | Remplace une partie | `"Hello".replace("l", "X")` → `"HeXlo"` |
| `replaceAll(ancien, nouveau)` | Remplace toutes les occurrences | `"Hello".replaceAll("l", "X")` → `"HeXXo"` |
| `split(separateur)` | Divise la chaîne en tableau | `"a,b,c".split(",")` → `["a", "b", "c"]` |
| `repeat(n)` | Répète la chaîne n fois | `"Hi".repeat(3)` → `"HiHiHi"` |

---

# 📌 Manipulation des tableaux (Array)

Un tableau en JavaScript peut contenir des types différents et peut être modifié.

## 1️⃣ **Méthodes de base**
| Méthode | Description | Exemple |
|---------|------------|---------|
| `length` | Nombre d’éléments | `[1,2,3].length` → `3` |
| `push(valeur)` | Ajoute un élément à la fin | `arr.push(4)` → `[1,2,3,4]` |
| `pop()` | Retire et retourne le dernier élément | `arr.pop()` → `3` |
| `shift()` | Retire et retourne le premier élément | `arr.shift()` → `1` |
| `unshift(valeur)` | Ajoute un élément au début | `arr.unshift(0)` → `[0,1,2,3]` |

## 2️⃣ **Méthodes de modification**
| Méthode | Description | Exemple |
|---------|------------|---------|
| `splice(index, nb, ...éléments)` | Modifie le tableau | `arr.splice(1, 1, 99)` → `[1,99,3]` |
| `slice(start, end?)` | Extrait une partie du tableau | `arr.slice(1,3)` → `[2,3]` |

## 3️⃣ **Méthodes de recherche**
| Méthode | Description | Exemple |
|---------|------------|---------|
| `indexOf(valeur)` | Cherche l’index d’un élément | `[1,2,3].indexOf(2)` → `1` |
| `lastIndexOf(valeur)` | Cherche la dernière occurrence | `[1,2,3,2].lastIndexOf(2)` → `3` |
| `includes(valeur)` | Vérifie la présence d’un élément | `[1,2,3].includes(2)` → `true` |
| `find(callback)` | Trouve le premier élément correspondant | `[1,2,3].find(x => x > 1)` → `2` |
| `findIndex(callback)` | Trouve l’index du premier élément correspondant | `[1,2,3].findIndex(x => x > 1)` → `1` |

## 4️⃣ **Méthodes de transformation**
| Méthode | Description | Exemple |
|---------|------------|---------|
| `map(callback)` | Transforme les éléments | `[1,2,3].map(x => x*2)` → `[2,4,6]` |
| `filter(callback)` | Filtre les éléments | `[1,2,3].filter(x => x > 1)` → `[2,3]` |
| `reduce(callback, initialValue)` | Réduit à une valeur | `[1,2,3].reduce((a,b) => a+b, 0)` → `6` |
| `sort(compareFn?)` | Trie le tableau | `[3,1,2].sort()` → `[1,2,3]` |
| `reverse()` | Inverse l’ordre | `[1,2,3].reverse()` → `[3,2,1]` |
| `join(separateur)` | Convertit en chaîne | `[1,2,3].join("-")` → `"1-2-3"` |

---

# 📌 Manipulation des objets (Object)

## 1️⃣ **Méthodes de manipulation des objets**
| Méthode | Description | Exemple |
|---------|------------|---------|
| `Object.keys(obj)` | Retourne les clés | `Object.keys({a:1, b:2})` → `["a","b"]` |
| `Object.values(obj)` | Retourne les valeurs | `Object.values({a:1, b:2})` → `[1,2]` |
| `Object.entries(obj)` | Retourne un tableau de paires `[clé, valeur]` | `Object.entries({a:1})` → `[["a",1]]` |
| `Object.assign(cible, source)` | Copie les propriétés | `Object.assign({}, obj1, obj2)` |
| `Object.freeze(obj)` | Gèle l’objet (lecture seule) | `Object.freeze(obj)` |
| `Object.seal(obj)` | Empêche l’ajout/suppression de propriétés | `Object.seal(obj)` |

---

# 📌 Manipulation des nombres (Number)

## 1️⃣ **Méthodes utiles**
| Méthode | Description | Exemple |
|---------|------------|---------|
| `Number.parseInt(str, base?)` | Convertit en entier | `parseInt("42")` → `42` |
| `Number.parseFloat(str)` | Convertit en flottant | `parseFloat("3.14")` → `3.14` |
| `toFixed(n)` | Fixe le nombre de décimales | `(3.14159).toFixed(2)` → `"3.14"` |
| `toPrecision(n)` | Fixe la précision | `(3.14159).toPrecision(3)` → `"3.14"` |
| `Math.round(x)` | Arrondit | `Math.round(2.5)` → `3` |
| `Math.floor(x)` | Arrondit à l’inférieur | `Math.floor(2.9)` → `2` |
| `Math.ceil(x)` | Arrondit à l’excès | `Math.ceil(2.1)` → `3` |

---

Avec cette documentation, tu as une référence complète pour manipuler efficacement **les strings, arrays, objets et nombres en JavaScript** ! 🚀🔥