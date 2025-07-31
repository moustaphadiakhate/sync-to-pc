### Cours SQL Complet : Fondamentaux à Avancé  
**Basé sur l'exercice de gestion de développeurs et projets**

---

#### **Partie 1 : Fondamentaux SQL**
**1. Structure d'une base de données**  
- **Tables** : Collections de données structurées (ex: `developers`, `project`)  
- **Colonnes** : Attributs des données (ex: `hourly_rate`, `start_date`)  
- **Clés** :  
  - Primaire (`PRIMARY KEY`) : Identifiant unique (`id`)  
  - Étrangère (`FOREIGN KEY`) : Lien entre tables (`developer_id`)

**2. Requête de base : `SELECT`**  
```sql
-- Sélectionner toutes les colonnes
SELECT * FROM developers;

-- Sélectionner des colonnes spécifiques
SELECT first_name, hourly_rate FROM developers;
```

---

#### **Partie 2 : Filtrage et Tri**
**1. Clause `WHERE`**  
```sql
-- Développeurs avec taux horaire > 100
SELECT * FROM developers 
WHERE hourly_rate > 100;

-- Combinaison de conditions (AND/OR)
SELECT * FROM project
WHERE budget > 15000 AND end_date IS NULL;
```

**2. Tri avec `ORDER BY`**  
```sql
-- Trier par taux horaire décroissant
SELECT * FROM developers 
ORDER BY hourly_rate DESC;

-- Trier par multiple colonnes
SELECT * FROM developers_project
ORDER BY project_id ASC, date_join DESC;
```

---

#### **Partie 3 : Jointures de Tables**
**1. Principe des jointures**  
![Schéma de jointure](https://i.imgur.com/8Zk2D4G.png)

**2. Types de jointures**  
```sql
-- INNER JOIN (intersection)
SELECT d.first_name, p.name
FROM developers d
INNER JOIN developers_project dp ON d.id = dp.developer_id
INNER JOIN project p ON dp.project_id = p.id;

-- LEFT JOIN (tous les développeurs même sans projet)
SELECT d.first_name, p.name
FROM developers d
LEFT JOIN developers_project dp ON d.id = dp.developer_id
LEFT JOIN project p ON dp.project_id = p.id;
```

**Exercice pratique** :  
*Afficher les projets sans développeurs assignés*  
```sql
SELECT p.name 
FROM project p
LEFT JOIN developers_project dp ON p.id = dp.project_id
WHERE dp.developer_id IS NULL;
```

---

#### **Partie 4 : Agrégations et Groupement**
**1. Fonctions d'agrégation**  
```sql
-- Moyenne des salaires
SELECT AVG(hourly_rate) FROM developers;

-- Nombre de projets actifs
SELECT COUNT(*) FROM project WHERE end_date IS NULL;
```

**2. Clause `GROUP BY`**  
```sql
-- Budget moyen par type de contrat
SELECT type_of_contract, AVG(budget)
FROM project p
JOIN developers_project dp ON p.id = dp.project_id
JOIN developers d ON dp.developer_id = d.id
GROUP BY d.type_of_contract;
```

**Exercice corrigé** :  
*Compter les développeurs par projet*  
```sql
SELECT p.name, COUNT(dp.developer_id) AS num_devs
FROM project p
JOIN developers_project dp ON p.id = dp.project_id
GROUP BY p.id;
```

---

#### **Partie 5 : Sous-requêtes (Subqueries)**
**1. Sous-requêtes dans `WHERE`**  
```sql
-- Développeurs avec salaire > moyenne
SELECT first_name, last_name
FROM developers
WHERE hourly_rate > (SELECT AVG(hourly_rate) FROM developers);
```

**2. Sous-requêtes corrélées**  
```sql
-- Projets avec au moins 1 développeur
SELECT name 
FROM project p
WHERE EXISTS (
  SELECT 1 
  FROM developers_project dp 
  WHERE dp.project_id = p.id
);
```

**Solution de l'exercice initial** :  
```sql
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
WHERE d.hourly_rate >= (
  SELECT AVG(hourly_rate) 
  FROM developers
  WHERE started_work <= '2019-12-31'
    AND (stopped_work IS NULL OR stopped_work >= '2019-01-01')
)
AND p.end_date IS NULL
AND d.stopped_work IS NULL
ORDER BY p.name, dp.is_leader DESC;
```

---

#### **Partie 6 : Gestion des Données**
**1. Insertion de données (`INSERT`)**  
```sql
INSERT INTO developers (id, first_name, last_name, hourly_rate)
VALUES (5, 'Emma', 'Watson', 180);
```

**2. Mise à jour (`UPDATE`)**  
```sql
UPDATE developers
SET hourly_rate = hourly_rate * 1.10  -- Augmentation de 10%
WHERE type_of_contract = 'Full_time';
```

**3. Suppression (`DELETE`)**  
```sql
DELETE FROM project
WHERE end_date < '2020-01-01';  -- Projets terminés avant 2020
```

---

#### **Partie 7 : Fonctions Avancées**
**1. Fonctions de date**  
```sql
-- Durée des projets en jours
SELECT 
  name,
  DATEDIFF(COALESCE(end_date, CURDATE()), start_date) AS duration_days
FROM project;
```

**2. Expressions conditionnelles (`CASE`)**  
```sql
-- Catégoriser les budgets
SELECT name,
  CASE
    WHEN budget > 20000 THEN 'Élevé'
    WHEN budget BETWEEN 10000 AND 20000 THEN 'Moyen'
    ELSE 'Faible'
  END AS budget_category
FROM project;
```

---

#### **Partie 8 : Optimisation et Bonnes Pratiques**
**1. Indexation**  
```sql
CREATE INDEX idx_hourly_rate ON developers(hourly_rate);  -- Accélère les WHERE sur hourly_rate
```

**2. Prévention des injections SQL**  
- Utiliser des requêtes paramétrées :  
  ```python
  # Exemple Python
  cursor.execute("SELECT * FROM users WHERE email = %s", (user_email,))
  ```

**3. Normalisation**  
- 1NF : Valeurs atomiques  
- 2NF : Dépendance fonctionnelle complète  
- 3NF : Aucune dépendance transitive  

---

#### **Partie 9 : Exercices Pratiques**
**1. Défi 1**  
*Lister les "Project Leaders" avec leur projet et salaire, triés par salaire décroissant*  
```sql
SELECT p.name, d.first_name, d.last_name, d.hourly_rate
FROM developers d
JOIN developers_project dp ON d.id = dp.developer_id
JOIN project p ON dp.project_id = p.id
WHERE dp.is_leader = 1
ORDER BY d.hourly_rate DESC;
```

**2. Défi 2**  
*Trouver les développeurs travaillant sur plusieurs projets actifs*  
```sql
SELECT d.first_name, d.last_name, COUNT(*) AS project_count
FROM developers d
JOIN developers_project dp ON d.id = dp.developer_id
JOIN project p ON dp.project_id = p.id
WHERE p.end_date IS NULL
GROUP BY d.id
HAVING COUNT(*) > 1;
```

---

#### **Partie 10 : Ressources & Outils**
- **SGBD populaires** : MySQL, PostgreSQL, SQLite, SQL Server  
- **Sandbox en ligne** : [SQL Fiddle](http://sqlfiddle.com/), [DB Fiddle](https://www.db-fiddle.com/)  
- **Jeu d'apprentissage** : [SQL Murder Mystery](https://mystery.knightlab.com/)  
- **Documentation** : [SQL Style Guide](https://www.sqlstyle.guide/fr/)

```sql
-- Pour s'entraîner sur l'exercice initial
EXPLAIN ANALYZE  -- Analyse de performance
SELECT ... [votre requête ici];
```

Ce cours couvre 90% des besoins en SQL pour le développement web et l'analyse de données. Pour approfondir, explorez les fenêtrages (`WINDOW functions`) et les déclencheurs (`TRIGGERS`) ! 🚀