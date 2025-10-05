# **MODULE 1 : DÉCOUVERTE ET INSTALLATION DE WORDPRESS**

## **1.1 - COMPRÉHENSION DE WORDPRESS : FONDAMENTAUX ET ÉCOSYSTÈME**

### **Qu'est-ce qu'un CMS ?**

**Définition approfondie :**
Un Content Management System (CMS) ou Système de Gestion de Contenu est une application web qui permet de créer, gérer et modifier du contenu sur un site web sans avoir besoin de compétences techniques en programmation.

**Analogie concrète :**
Imaginez que votre site web est une maison. Sans CMS, vous devriez être architecte, maçon, électricien et plombier pour faire la moindre modification. Avec un CMS comme WordPress, vous avez les clés d'une maison déjà construite : vous pouvez réarranger les meubles (contenu), repeindre les murs (design), et ajouter des pièces (fonctionnalités) sans toucher aux fondations.

**Les composants d'un CMS :**
- **Interface d'administration** : Le "tableau de bord" où vous gérez tout
- **Base de données** : L'entrepôt où tout est stocké de manière organisée
- **Système de templates** : Les "modèles" qui définissent l'apparence
- **Éditeur de contenu** : L'outil pour créer et modifier vos pages

### **WordPress.org vs WordPress.com : Le choix crucial**

**WordPress.org (NOTRE CHOIX) :**
C'est le logiciel libre et open-source que nous allons utiliser.

**Avantages détaillés :**
- **Liberté totale** : Vous possédez votre site à 100%
- **Personnalisation illimitée** : Accès à tous les thèmes et plugins
- **Monétisation libre** : Publicités, affiliation, e-commerce sans restrictions
- **Contrôle technique** : Accès à la base de données et aux fichiers
- **Hébergement choisi** : Vous sélectionnez votre hébergeur selon vos besoins

**Inconvénients :**
- **Responsabilité technique** : Vous gérez les sauvegardes, sécurité, mises à jour
- **Coûts d'hébergement** : Environ 5-20€/mois pour un site professionnel

**WordPress.com :**
Service d'hébergement géré utilisant le logiciel WordPress.

**Limitations importantes :**
- **Plan gratuit** : Sous-domaine (monsite.wordpress.com), pas de plugins, publicités imposées
- **Plans payants** : Restrictions selon le forfait, thèmes limités
- **Verrouillage** : Difficulté à migrer vers un autre hébergeur
- **Monétisation contrôlée** : Part des revenus sur certains plans

**Tableau comparatif détaillé :**

| Aspect | WordPress.org | WordPress.com (Business) |
|--------|---------------|--------------------------|
| Coût initial | Gratuit (+ hébergement) | ~300€/an |
| Plugins | Illimités | Limités aux autorisés |
| Thèmes | Tous les thèmes | Sélection restreinte |
| Publicité | 100% pour vous | Restrictions |
| Code personnalisé | Totalement possible | Limitée |
| Maintenance | À votre charge | Incluse |

### **L'écosystème WordPress : Un univers de possibilités**

**Les statistiques impressionnantes :**
- **43% du web** : Près de la moitié des sites utilisent WordPress
- **60 000+ plugins** : Boutique en ligne, formulaires, SEO, réseaux sociaux...
- **10 000+ thèmes** : Designs pour tous les secteurs d'activité
- **Communauté mondiale** : Support, traductions, événements

**Exemples de sites célèbres utilisant WordPress :**
- Le site de la Maison Blanche
- BBC America
- Sony Music
- Le blog de Microsoft

## **1.2 - INSTALLATION AVEC LOCAL : NOTRE ENVIRONNEMENT DE DÉVELOPPEMENT**

### **Pourquoi développer en local ?**

**Les avantages décisifs :**

1. **Rapidité extrême** :
   - Pas de latence réseau
   - Traitement instantané
   - Tests immédiats des modifications

2. **Sécurité totale** :
   - Site inaccessible depuis internet
   - Expérimentation sans risque
   - Tests de plugins potentiellement dangereux

3. **Gratuité** :
   - Pas d'hébergement à payer pendant le développement
   - Ressources illimitées de votre ordinateur

4. **Productivité** :
   - Travail hors ligne possible
   - Environnement de développement professionnel
   - Debugging facilité

### **Installation pas à pas de Local**

**Étape 1 : Téléchargement**
- Rendez-vous sur [localwp.com](https://localwp.com)
- Cliquez sur "Download" pour votre système (Mac/Windows)
- Le téléchargement fait environ 150 Mo

**Étape 2 : Installation**
- Lancez le fichier téléchargé
- Suivez l'assistant d'installation
- Local installera tous les composants nécessaires :
  - Serveur web (NGINX)
  - PHP (version récente)
  - MySQL (base de données)

**Étape 3 : Premier lancement**
- Ouvrez Local après installation
- L'interface s'ouvre sur l'onglet "Sites"
- Cliquez sur "Create a new site"

### **Création de notre premier site**

**Configuration du site :**

1. **Nom du site** :
   - Entrez : `monsiteformation`
   - Local créera automatiquement l'URL : `monsiteformation.local`

2. **Environnement** :
   - Choisissez "Preferred"
   - C'est la configuration optimale pour la plupart des cas

3. **Identifiants administrateur** :
   - **Email** : `admin@monsiteformation.local`
   - **Nom d'utilisateur** : `admin` (ou votre prénom)
   - **Mot de passe** : Choisissez un mot de passe fort que vous noterez
   - **Titre du site** : `Mon Site de Formation WordPress`

4. **Création** :
   - Cliquez sur "Add Site"
   - L'installation prend 1 à 3 minutes
   - Une barre de progression vous montre l'avancement

### **Exploration de l'interface Local**

**Une fois l'installation terminée :**

**Onglet "Site" :**
- **Admin** : Bouton pour accéder à l'administration WordPress
- **Open Site** : Voir le site public
- **SSH** : Accès terminal avancé (pour plus tard)
- **Database** : Accès à phpMyAdmin (gestion base de données)

**Onglet "Database" :**
- **Username/Password** : Identifiants de la base de données
- **Database** : Nom de la base créée automatiquement
- **phpMyAdmin** : Interface web de gestion MySQL

**Onglet "Tools" :**
- **Mailhog** : Capture tous les emails envoyés par le site (très utile !)
- **Logs** : Fichiers de log pour le débogage

**Exercice pratique immédiat :**
1. Cliquez sur "Admin" et connectez-vous avec vos identifiants
2. Explorez le tableau de bord WordPress pendant 5 minutes
3. Revenez à Local et cliquez sur "Open Site"
4. Observez le site public par défaut

## **1.3 - COMPRÉHENSION DE L'INSTALLATION MANUELLE**

### **Les 4 piliers technologiques de WordPress**

**1. Les fichiers sources WordPress :**
- Téléchargeables sur [wordpress.org/download/](https://wordpress.org/download/)
- Contiennent tout le code PHP de WordPress
- Structure typique :
  ```
  /wp-admin/          # Interface d'administration
  /wp-includes/       # Fonctions core de WordPress
  /wp-content/        # Votre contenu (thèmes, plugins, uploads)
  /wp-config.php      # Configuration (à créer)
  ```

**2. Le serveur web (Apache/NGINX) :**
- **Rôle** : Répond aux requêtes des visiteurs
- **Fonctionnement** : Reçoit une URL, exécute le code PHP, renvoie du HTML
- **Exemple** : Quand vous visitez `monsite.local`, le serveur exécute `index.php`

**3. PHP : Le moteur de WordPress**
- **Rôle** : Langage de programmation qui exécute la logique
- **Version requise** : 7.4 ou supérieure
- **Fonctions** : Interaction base de données, génération dynamique de pages

**4. MySQL : La mémoire de WordPress**
- **Rôle** : Base de données qui stocke tout le contenu
- **Ce qui est stocké** : Articles, pages, commentaires, utilisateurs, réglages
- **Structure** : Tables organisées (`wp_posts`, `wp_users`, `wp_options`...)

### **Processus d'installation manuelle détaillé**

**Étape 1 : Préparation des fichiers**
```bash
# Téléchargement et décompression
wget https://wordpress.org/latest.zip
unzip latest.zip
# Ou téléchargement manuel via le navigateur
```

**Étape 2 : Création de la base de données**
- Accéder à l'interface de gestion de bases de données (phpMyAdmin généralement)
- Créer une nouvelle base : `monsite_wp`
- Créer un utilisateur avec tous les privilèges
- Noter : nom base, utilisateur, mot de passe, serveur (généralement localhost)

**Étape 3 : Configuration - Le fichier wp-config.php**
- Copier `wp-config-sample.php` vers `wp-config.php`
- Remplir les informations de connexion :
```php
// ** Réglages MySQL - Votre hébergeur vous communique ces informations ** //
define( 'DB_NAME', 'monsite_wp' );
define( 'DB_USER', 'utilisateur_wp' );
define( 'DB_PASSWORD', 'votre_mot_de_passe_securise' );
define( 'DB_HOST', 'localhost' );
```

**Étape 4 : Installation via le navigateur**
- Visiter `http://monsite.local` dans le navigateur
- Suivre l'assistant en 5 étapes :
  1. Sélection de la langue
  2. Vérification de la configuration
  3. Saisie des informations de la base de données
  4. Création du compte administrateur
  5. Finalisation

### **Ce que Local fait automatiquement pour nous**

**Magie n°1 : Environnement serveur complet**
- Local installe et configure : NGINX + PHP + MySQL
- Plus besoin de logiciels comme XAMPP/MAMP

**Magie n°2 : Configuration automatique**
- Création automatique de la base de données
- Génération du fichier wp-config.php
- Configuration des permissions

**Magie n°3 : Gestion des domaines locaux**
- Création automatique des URLs `.local`
- Configuration DNS locale transparente
- Certificats SSL automatiques (HTTPS local)

**Magie n°4 : Outils intégrés**
- Mailhog pour tester les emails
- Accès base de données en 1 clic
- Sauvegardes faciles

## **1.4 - EXPLORATION COMPLÈTE DE L'INTERFACE WORDPRESS**

### **Première connexion au Tableau de Bord**

**Page de connexion :**
- URL : `monsiteformation.local/wp-admin`
- Saisir le nom d'utilisateur et mot de passe définis dans Local
- Option "Se souvenir de moi" pour rester connecté

**Le Tableau de Bord principal :**

**Section "Bienvenue dans l'éditeur de blocs !"**
- Liens rapides vers les tâches courantes
- Personnalisable selon votre usage

**Colonne de gauche - Votre menu principal :**

### **Détail de chaque section du menu**

**1. Tableau de bord**
- **Accueil** : Vue d'ensemble du site
- **Mises à jour** : Gestion des mises à jour (critical !)

**2. Articles - Le cœur de votre blog**
- **Tous les articles** : Liste et gestion des articles
- **Ajouter** : Créer un nouvel article
- **Catégories** : Organisation thématique
- **Étiquettes** : Mots-clés secondaires

**3. Pages - Contenu statique**
- **Toutes les pages** : Pages comme "Accueil", "Contact", "À propos"
- **Ajouter** : Créer une nouvelle page

**4. Médias - Votre bibliothèque multimédia**
- **Bibliothèque** : Tous les fichiers uploadés
- **Ajouter** : Uploader de nouveaux médias

**5. Commentaires - Interactions des visiteurs**
- Modération, approbation, réponse
- Lutte contre le spam

**6. Apparence - Design et mise en page**
- **Thèmes** : Gestion des apparences
- **Personnaliser** : Modification visuelle en direct
- **Widgets** : Éléments de sidebar/footer
- **Menus** : Navigation du site
- **Éditeur de thème** : Code avancé (attention !)

**7. Extensions - Fonctionnalités additionnelles**
- **Extensions installées** : Gestion des plugins
- **Ajouter** : Installer de nouveaux plugins
- **Éditeur** : Modification du code des plugins

**8. Utilisateurs - Gestion des accès**
- **Tous les utilisateurs** : Liste des comptes
- **Ajouter** : Créer un nouvel utilisateur
- **Votre profil** : Paramètres personnels

**9. Outils - Utilities divers**
- **Import/Export** : Migration de contenu
- **Santé du site** : Diagnostic technique
- **Exportation de données personnelles** : RGPD

**10. Réglages - Configuration globale**
- **Général** : Titre, slogan, fuseau horaire
- **Écriture** : Paramètres de contenu
- **Lecture** : Page d'accueil, visibilité
- **Discussion** : Commentaires et interactions
- **Permaliens** : Structure des URLs (SEO important)

### **Barre d'outils supérieure (Admin Bar)**

**Quand vous êtes connecté :**
- Logo WordPress : Accès rapide au tableau de bord
- Nom du site : Visite du site public
- "+ Nouveau" : Création rapide (article, page, utilisateur...)
- Notifications : Commentaires, mises à jour
- Votre profil : Déconnexion, édition du profil

## **EXERCICE PRATIQUE COMPLET DU MODULE 1**

### **Partie 1 : Installation et Configuration**

1. **Téléchargez et installez Local**
   - Allez sur localwp.com
   - Téléchargez la version pour votre OS
   - Installez le logiciel

2. **Créez un site de test**
   - Nom : `monapprentissagewp`
   - Environnement : Preferred
   - Identifiants : Notez-les soigneusement !
   - Attendez la fin de l'installation

3. **Explorez Local**
   - Cliquez sur chaque onglet (Site, Database, Tools)
   - Ouvrez Mailhog et voyez l'interface
   - Cliquez sur "Database" → "Open Adminer"

### **Partie 2 : Découverte de WordPress**

1. **Accédez à l'administration**
   - Cliquez sur "Admin" dans Local
   - Connectez-vous avec vos identifiants
   - Explorez le tableau de bord 5 minutes

2. **Premières actions**
   - Allez dans "Pages" → "Ajouter"
   - Créez une page "Test" avec du contenu simple
   - Publiez-la
   - Visitez le site public via "Open Site" dans Local

3. **Exploration systématique**
   - Cliquez sur CHAQUE élément du menu de gauche
   - Ne modifiez rien, juste observez
   - Prenez des notes sur ce que vous trouvez intuitif ou confus

### **Partie 3 : Compréhension technique**

1. **Téléchargez WordPress manuellement**
   - Allez sur wordpress.org/download/
   - Téléchargez la dernière version
   - Décompressez l'archive et observez la structure

2. **Analysez les fichiers**
   - Ouvrez le fichier `wp-config-sample.php`
   - Lisez les commentaires pour comprendre la configuration
   - Regardez le dossier `/wp-content/` - c'est là que sera votre contenu

3. **Réflexion**
   - Qu'est-ce que Local a automatisé pour vous ?
   - Quels avantages voyez-vous au développement local ?
   - Quelles questions vous reste-t-il ?

## **RÉSUMÉ**

**Ce que vous maîtrisez maintenant :**
- ✅ La différence entre WordPress.com et WordPress.org
- ✅ L'installation d'un environnement de développement local avec Local
- ✅ La compréhension de l'architecture technique de WordPress
- ✅ La navigation dans l'interface d'administration
- ✅ La création basique de contenu
