## **Plan de Formation WordPress**

### **Module 1 : Découverte et Fondations (Niveau Débutant)**
**Objectif :** Comprendre ce qu'est WordPress et installer un site de test localement sur son ordinateur.

*   **1.1 - Introduction à WordPress**
    *   Qu'est-ce qu'un CMS (Content Management System) ?
    *   La différence cruciale : WordPress**.com** (hébergé et limité) vs WordPress**.org** (auto-hébergé et puissant).
    *   Pourquoi WordPress.org est le choix idéal pour un site professionnel ?
    *   Présentation de l'écosystème (thèmes, plugins, communauté).

*   **1.2 - Pourquoi développer en local ? Présentation de Local**
    *   Les avantages du développement local : rapidité, sécurité, gratuité, travail sans connexion internet.
    *   Présentation de l'outil **Local** (par Flywheel) : l'outil le plus simple pour créer un environnement WordPress sur son PC/Mac.
    *   Téléchargement et installation de Local.

*   **1.3 - Installation de WordPress en 1 clic avec Local**
    *   Création d'un nouveau site : choix du nom (ex: `monsiteformation.local`).
    *   Choix de l'environnement : "Preferred" (recommandé pour la simplicité).
    *   Configuration des identifiants administrateur (à conserver précieusement !).
    *   **Local crée tout automatiquement** : l'environnement (PHP, MySQL), la base de données et installe WordPress.
    *   Démarrer le site et accéder à l'administration (`monsiteformation.local/wp-admin`).

*   **1.4 - Comprendre l'Installation Manuelle (Théorie)**
    *   **Objectif :** Comprendre "la magie" derrière l'installation automatique de Local.
    *   Les 4 éléments indispensables pour faire tourner WordPress :
        1.  **Les fichiers sources** (téléchargés sur wordpress.org).
        2.  **Un serveur web** (Apache/Nginx) pour livrer les pages.
        3.  **PHP** le langage de programmation qui exécute WordPress.
        4.  **Une base de données MySQL** pour stocker tous les contenus et réglages.
    *   Les étapes clés de l'installation manuelle :
        1.  Télécharger les fichiers WordPress et les placer dans le dossier du site.
        2.  Créer une base de données MySQL et un utilisateur associé.
        3.  Lancer l'installation via le navigateur (`monsite.local`).
        4.  Remplir le fichier `wp-config.php` avec les identifiants de la base de données.
    *   **Conclusion :** Local automatise toutes ces étapes complexes pour nous.

*   **1.5 - Première Connexion et Découverte de l'Interface**
    *   Connexion au Tableau de bord (Dashboard) de votre site Local.
    *   Présentation des menus principaux : Articles, Pages, Médias, Commentaires, Apparence, Extensions, Utilisateurs, Réglages.
    *   Faire un tour rapide : où se trouve le site public ? Où se trouve l'administration ?

---

#### **Module 2 : Gérer le Contenu (Niveau Intermédiaire)**
**Objectif :** Savoir créer et organiser tout type de contenu.

*   **2.1 - Articles vs Pages : Comprendre la Différence**
    *   Quand utiliser une Page ? (Page "À propos", "Contact", "Services").
    *   Quand utiliser un Article ? (Actualités, billets de blog).
*   **2.2 - Rédiger et Formater du Contenu**
    *   Utiliser l'éditeur Gutenberg (blocs par défaut : paragraphe, image, titre, liste, galerie).
    *   Bonnes pratiques de rédaction web.
*   **2.3 - Organiser les Articles avec les Catégories et Étiquettes (Tags)**
    *   Créer une structure logique pour son blog.
*   **2.4 - Gérer la Bibliothèque de Médias**
    *   Ajouter des images, PDF, vidéos.
    *   Optimiser les images pour le web (poids et nom de fichier).
*   **2.5 - Gérer les Commentaires**
    *   Modérer, approuver, supprimer.

---

#### **Module 3 : Personnaliser l'Apparence (Niveau Intermédiaire)**
**Objectif :** Changer le design de son site sans coder.

*   **3.1 - Comprendre le Système de Thèmes**
    *   Choisir un thème (gratuit vs premium, critères de choix).
    *   Installation et activation d'un thème (ex: Astra, OceanWP, Kadence).
*   **3.2 - Utiliser l'Éditeur de Site Full Site Editing (FSE) - WordPress Moderne**
    *   Personnaliser l'en-tête, le pied de page et le contenu des pages avec des blocs.
    *   Comprendre les modèles (Templates) et les parties de modèles (Template Parts).
    *   Gérer les styles globaux (couleurs, polices).
*   **3.3 - Personnalisation avec le Customizer (Méthode Classique)**
    *   Modifier le logo, le titre, le slogan, les couleurs.
*   **3.4 - Les Menus de Navigation**
    *   Créer et gérer les menus (menu principal, pied de page).
*   **3.5 - Les Pages Builder (une introduction)**
    *   Présentation d'Elementor, Divi, Beaver Builder (avantages/inconvénients).

---

#### **Module 4 : Étendre les Fonctionnalités avec les Extensions (Plugins)**
**Objectif :** Savoir choisir et installer des plugins pour ajouter des fonctionnalités.

*   **4.1 - Principes de Base des Plugins**
    *   Comment choisir un plugin de qualité ? (notes, avis, mises à jour, compatibilité).
    *   Installation et activation d'un plugin.
*   **4.2 - Plugins Essentiels et Indispensables**
    *   **Sécurité :** Wordfence ou Solid Security.
    *   **Sauvegarde :** UpdraftPlus ou BlogVault.
    *   **SEO (Référencement) :** Rank Math ou Yoast SEO.
    *   **Performance (Cache) :** WP Rocket (payant) ou LiteSpeed Cache (gratuit).
    *   **Formulaire de contact :** Contact Form 7 ou WPForms.
*   **4.3 - Gestion des Plugins**
    *   Mettre à jour ses plugins.
    *   Désactiver et supprimer les plugins inutiles.

---

#### **Module 5 : Gestion des Utilisateurs et Réglages (Niveau Intermédiaire)**
**Objectif :** Configurer son site et gérer les accès.

*   **5.1 - Gestion des Utilisateurs et Rôles**
    *   Comprendre les rôles : Administrateur, Éditeur, Auteur, Contributeur, Abonné.
    *   Créer et gérer les comptes utilisateurs.
*   **5.2 - Les Réglages Importants**
    *   **Général :** Titre, slogan, fuseau horaire.
    *   **Permaliens :** Choisir une structure d'URL propre (ex: `/%postname%/`).
    *   **Lecture :** Définir la page d'accueil (page statique vs articles récents).

---

#### **Module 6 : Création boutique en ligne avec WOOCOMMERCE**
**Objectif :** Transformer le site en boutique e-commerce

- **6.1** - Introduction à WooCommerce (présentation, écosystème)
- **6.2** - Installation et configuration de base
- **6.3** - Gestion des produits (simples, variables, téléchargeables)
- **6.4** - Configuration des transports et livraisons
- **6.5** - Configuration des paiements (PayPal, carte bancaire)
- **6.6** - Personnalisation de la boutique (thèmes compatibles)
- **6.7** - Gestion des commandes et clients
- **6.8** - Optimisation et performance e-commerce

---

### **Projet Final**
Pour valider la formation, le stagiaire doit concevoir, construire et mettre en ligne un site complet de A à Z, avec un cahier des charges précis, par exemple :
*   Un site vitrine pour un artisan avec un formulaire de devis.
*   Un blog personnel avec une newsletter.
*   Une petite boutique en ligne avec 10 produits.
