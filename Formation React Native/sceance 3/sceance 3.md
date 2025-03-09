# 📚 **Cours complet sur Flexbox en React Native**  

## 🎯 **Objectif du cours**  
Ce cours te permettra de **maîtriser Flexbox** en React Native pour concevoir des interfaces **responsives et bien structurées**.  

À la fin du cours, tu seras capable de :  
✅ Comprendre le fonctionnement de **Flexbox** en React Native.  
✅ Manipuler les propriétés **`flexDirection`**, **`justifyContent`**, **`alignItems`**, **`flex`**, etc.  
✅ Gérer l’alignement et l’espacement des éléments efficacement.  
✅ Appliquer les concepts avec un **exercice pratique**.  

---

# 🟢 **1. Introduction à Flexbox en React Native**  
Flexbox est **le principal système de mise en page** en React Native. Contrairement au CSS classique où on utilise `block`, `inline`, ou `float`, **Flexbox gère tout l’alignement et la disposition des éléments**.  

### 🔹 **Différence avec le web**
- **En React Native, l’axe principal (`main axis`) est vertical (`column`) par défaut**.  
- **Sur le web, l’axe principal est horizontal (`row`) par défaut**.  

📌 **Pourquoi utiliser Flexbox ?**  
✅ **Dispositions flexibles et dynamiques**.  
✅ **Un même code pour iOS et Android**.  
✅ **Facilité de gestion des interfaces responsives**.  

---

# 🟠 **2. Les propriétés principales de Flexbox**  

## 🔹 **2.1. `flexDirection` (Définit l’axe principal)**
Cette propriété définit **l’orientation des éléments** dans un conteneur.  

| Valeur | Effet |
|--------|--------------------------------|
| `row` | Les éléments sont alignés **horizontalement**. |
| `column` | Les éléments sont alignés **verticalement** (par défaut). |
| `row-reverse` | Alignement horizontal **inversé**. |
| `column-reverse` | Alignement vertical **inversé**. |

📌 **Exemple :**
```tsx
<View style={{ flexDirection: "row" }}>
  <View style={{ backgroundColor: "red", width: 50, height: 50 }} />
  <View style={{ backgroundColor: "blue", width: 50, height: 50 }} />
</View>
```
👉 Les éléments sont alignés **horizontalement**.  

---

## 🔹 **2.2. `justifyContent` (Alignement sur l’axe principal)**
Cette propriété contrôle **comment les éléments sont distribués** sur l’axe principal.  

| Valeur | Effet |
|--------|----------------------------------|
| `flex-start` | Aligne les éléments au **début**. |
| `flex-end` | Aligne les éléments à **la fin**. |
| `center` | Centre les éléments. |
| `space-between` | Répartit l’espace **sans espace aux extrémités**. |
| `space-around` | Ajoute **de l’espace autour** des éléments. |
| `space-evenly` | Répartit **l’espace de manière égale**. |

📌 **Exemple :**
```tsx
<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
  <View style={{ backgroundColor: "red", width: 50, height: 50 }} />
  <View style={{ backgroundColor: "blue", width: 50, height: 50 }} />
  <View style={{ backgroundColor: "green", width: 50, height: 50 }} />
</View>
```
👉 Les boîtes seront réparties avec **un espace égal entre elles**.  

---

## 🔹 **2.3. `alignItems` (Alignement sur l’axe secondaire)**
Cette propriété contrôle l’alignement **vertical** des éléments quand `flexDirection: "row"`, et l’alignement **horizontal** quand `flexDirection: "column"`.

| Valeur | Effet |
|--------|--------------------------------|
| `flex-start` | Aligne les éléments au **début**. |
| `flex-end` | Aligne les éléments à **la fin**. |
| `center` | Centre les éléments. |
| `stretch` | Étire les éléments pour **remplir l’espace**. |

📌 **Exemple :**
```tsx
<View style={{ flexDirection: "row", alignItems: "center" }}>
  <View style={{ backgroundColor: "red", width: 50, height: 50 }} />
  <View style={{ backgroundColor: "blue", width: 50, height: 80 }} />
  <View style={{ backgroundColor: "green", width: 50, height: 60 }} />
</View>
```
👉 Tous les éléments seront **centrés verticalement** malgré leurs tailles différentes.  

---

# 🟡 **3. Manipulation de la taille des éléments**  

## 🔹 **3.1. `flex` (Répartition de l’espace disponible)**
La propriété `flex` définit **comment un élément occupe l’espace disponible**.

| Valeur | Effet |
|--------|----------------------------------|
| `flex: 1` | L’élément prend **tout l’espace disponible**. |
| `flex: 2` | L’élément prend **deux fois plus d’espace** qu’un autre avec `flex: 1`. |

📌 **Exemple :**
```tsx
<View style={{ flexDirection: "row" }}>
  <View style={{ backgroundColor: "red", flex: 1 }} />
  <View style={{ backgroundColor: "blue", flex: 2 }} />
</View>
```
👉 La boîte bleue sera **deux fois plus grande** que la rouge.  

---

## 🔹 **3.2. `alignSelf` (Alignement individuel d’un élément)**
Cette propriété permet à **un seul élément** d’avoir un alignement différent de `alignItems`.  

📌 **Exemple :**
```tsx
<View style={{ flexDirection: "row", alignItems: "center" }}>
  <View style={{ backgroundColor: "red", width: 50, height: 50 }} />
  <View style={{ backgroundColor: "blue", width: 50, height: 50, alignSelf: "flex-end" }} />
  <View style={{ backgroundColor: "green", width: 50, height: 50 }} />
</View>
```
👉 Seule la **boîte bleue** sera **alignée en bas**.  

---

## 🔹 **3.3. `alignContent` (Alignement des lignes quand `flexWrap` est activé)**
Cette propriété gère **l’alignement des lignes** dans un conteneur avec `flexWrap: "wrap"`.  

📌 **Exemple :**
```tsx
<View style={{ flexWrap: "wrap", flexDirection: "row", alignContent: "space-between" }}>
  <View style={{ backgroundColor: "skyblue", width: 100, height: 100 }} />
  <View style={{ backgroundColor: "coral", width: 100, height: 100 }} />
  <View style={{ backgroundColor: "green", width: 100, height: 100 }} />
</View>
```
👉 Les **lignes** seront réparties **avec un espace entre elles**.  

---

# 🔵 **4. Exercice pratique : Créer un layout avec Flexbox**  
🎯 **Objectif : Construire une interface avec un header, un body et un footer.**

📌 **Code :**
```tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}><Text>Header</Text></View>
      <View style={styles.body}><Text>Body</Text></View>
      <View style={styles.footer}><Text>Footer</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { height: 50, backgroundColor: "lightblue", justifyContent: "center", alignItems: "center" },
  body: { flex: 1, justifyContent: "center", alignItems: "center" },
  footer: { height: 50, backgroundColor: "lightgrey", justifyContent: "center", alignItems: "center" },
});

export default App;
```

---

# 🎯 **Conclusion**
Tu maîtrises maintenant **Flexbox en React Native** ! 🚀