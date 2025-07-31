### Cours SQL : Création d'une Liste de Développeurs Bien Rémunérés  
**Basé sur un cas réel de gestion de base de données**  

---

#### **1. Introduction au Problème**  
**Objectif** : Extraire une liste de développeurs bien rémunérés avec leurs projets et rôles, selon des critères spécifiques.  
**Tables utilisées** :  
- `developers` (informations sur les développeurs)  
- `project` (détails des projets)  
- `developers_project` (relation développeurs-projets)  

---

#### **2. Concepts SQL Clés Expliqués**  
**a. Jointures (`JOIN`)**  
Combinaison de données de plusieurs tables :  
```sql
SELECT ...
FROM developers d
JOIN developers_project dp ON d.id = dp.developer_id
JOIN project p ON dp.project_id = p.id
```

**b. Sous-requêtes (`subquery`)**  
Calcul de valeurs dynamiques (ex: moyenne) :  
```sql
WHERE hourly_rate >= (SELECT AVG(hourly_rate) FROM ...)
```

**c. Expressions Conditionnelles (`CASE`)**  
Transformation de valeurs brutes :  
```sql
CASE 
  WHEN dp.is_leader = 1 THEN 'Project Leader'
  ELSE 'Developer'
END AS dev_role
```

**d. Filtrage (`WHERE`)**  
Critères essentiels :  
```sql
WHERE p.end_date IS NULL -- Projets actifs
  AND d.stopped_work IS NULL -- Développeurs employés
```

**e. Tri (`ORDER BY`)**  
Organisation des résultats :  
```sql
ORDER BY p.name ASC, dp.is_leader DESC
```

---

#### **3. Solution Complète Commentée**  
```sql
-- Étape 1 : Calculer le taux horaire moyen des développeurs actifs en 2019
WITH avg_2019 AS (
  SELECT AVG(hourly_rate) AS avg_rate
  FROM developers
  WHERE started_work <= '2019-12-31'
    AND (stopped_work IS NULL OR stopped_work >= '2019-01-01')
)

-- Étape 2 : Sélection finale
SELECT 
  p.name AS project_name,
  d.first_name AS dev_first_name,
  d.last_name AS dev_last_name,
  d.hourly_rate,
  CASE 
    WHEN dp.is_leader = 1 THEN 'Project Leader'
    ELSE 'Developer'
  END AS dev_role
FROM developers d
JOIN developers_project dp ON d.id = dp.developer_id
JOIN project p ON dp.project_id = p.id
WHERE 
  d.hourly_rate >= (SELECT avg_rate FROM avg_2019) -- Taux >= moyenne
  AND d.started_work <= '2019-12-31' -- Présent en 2019
  AND d.stopped_work IS NULL -- Encore employé
  AND p.end_date IS NULL -- Projet actif
ORDER BY 
  p.name ASC,             -- Tri alphabétique projet
  dp.is_leader DESC;      -- Leaders en premier
```

---

#### **4. Analyse des Critères Clés**  
| Critère                  | Code SQL                          | Explication |
|--------------------------|-----------------------------------|-------------|
| Taux horaire ≥ moyenne   | `d.hourly_rate >= (SELECT ...)`   | Sous-requête dynamique |
| Développeurs employés    | `d.stopped_work IS NULL`          | Contrat actif |
| Projets actifs           | `p.end_date IS NULL`              | Pas de date de fin |
| Rôles acceptés           | `CASE ... END`                    | Conversion booléen → texte |
| Tri alphabétique projets | `ORDER BY p.name ASC`             | A → Z |
| Leaders en premier       | `dp.is_leader DESC`               | 1 (Leader) avant 0 (Dev) |

---

#### **5. Pièges Courants & Corrections**  
**Problème 1** : Inclure des développeurs non actifs en 2019  
**Solution** :  
```sql
AND d.started_work <= '2019-12-31'
```

**Problème 2** : Colonnes manquantes dans le résultat  
**Solution** : Vérifier les alias :  
```sql
d.first_name AS dev_first_name  -- Correct
```

**Problème 3** : Projets inactifs inclus  
**Solution** :  
```sql
AND p.end_date IS NULL  -- Critique!
```

---

#### **6. Exercices Pratiques**  
**a. Variante 1** :  
*"Lister les projets avec leur budget total et nombre de développeurs"*  
```sql
SELECT 
  p.name,
  p.budget,
  COUNT(dp.developer_id) AS total_devs
FROM project p
JOIN developers_project dp ON p.id = dp.project_id
WHERE p.end_date IS NULL
GROUP BY p.id;
```

**b. Variante 2** :  
*"Trouver les développeurs travaillant sur >1 projet actif"*  
```sql
SELECT 
  d.first_name,
  d.last_name,
  COUNT(dp.project_id) AS projects_count
FROM developers d
JOIN developers_project dp ON d.id = dp.developer_id
JOIN project p ON dp.project_id = p.id
WHERE p.end_date IS NULL
  AND d.stopped_work IS NULL
GROUP BY d.id
HAVING COUNT(dp.project_id) > 1;
```

---

#### **7. Bonnes Pratiques**  
- **Tests** : Vérifier avec `WHERE 1=0` pour analyser les jointures  
- **Performances** : Indexer `hourly_rate`, `end_date`, `stopped_work`  
- **Lisibilité** :  
  - Utiliser des alias courts (`d` pour `developers`)  
  - Commenter les sous-requêtes complexes  

> 💡 *"Une requête bien structurée est comme un livre : elle se lit de haut en bas sans effort."*

---

#### **8. Ressources**  
- [SQL Fiddle](http://sqlfiddle.com/) : Tester vos requêtes en ligne  
- [MySQL Documentation](https://dev.mysql.com/doc/) : Référence officielle  
- [SQLZoo](https://sqlzoo.net/) : Exercices interactifs  

**Validation** :  
```sql
-- Vérifiez toujours les sous-requêtes séparément !
SELECT AVG(hourly_rate) FROM developers ... -- ≈ 85.00?
```

![Schéma de base de données](https://i.imgur.com/3K7cFQl.png) *(Exemple de relation entre tables)*

Ce cours couvre 100% des besoins de l'exercice. Pour aller plus loin, pratiquez les variantes et explorez les fonctions d'agrégation (`SUM()`, `AVG()`, `GROUP BY`) ! 🚀