# CircularNetworkFacilitator
Reference : https://hack.opendata.ch/project/181</p>
Date du Hackathon : 18.05.2018</p>
Hôte : HES-SO Valais Wallis, Technopole, Sierre (VS) http://www.hevs.ch

## Informations

<i>Keywords: Circular Economy Lab Region - Valais Circular Economy Network - Réseau d'échange dans une démarche d'économie circulaire </i>


<b>Transformez vos surplus en ressource ! </b>

Il s'agit de favoriser les échanges. Cette application vise à mettre en relation des offreurs et des demandeurs de produits agricoles (fruits, légumes, matières intermédiaires ou fin de cycle) et/ou des matériels agricoles (en état, ou à réparer), à donner ou à vendre.

<b>Problèmes à résoudre</b> </p>
    Identifier les ressources inexploitées</p>
    Mettre en relation des acteurs </p>
    Concevoir un modèle d’affaires durable</p>

<b>Proposition d’approche</b>

    Qu’est-ce qui existe déjà ? Recenser les solutions open source existantes (éventuellement adapter ou développer l'initiative : https://github.com/emfoundation/ce100-app).

    Quels avantages une nouvelle solution peut-elle apporter aux entreprises de la région ? Identifier les forces et faiblesses et les opportunités pour le Valais. Possibilité d’aller sur le terrain pour interroger de potentielles parties prenantes.

    Quelle solution folle apporterait une plus-value à l’existant ?
    Proposer des fonctionnalités et de nouveaux modes de partages (par exemple: réparation, location, symbiose industrielle, etc.).

    A qui s’adresse-t-on et comment ? Designer un ou plusieurs cas d’utilisation et proposition de nouveaux modes d'échanges. Identifier où se trouve le besoin et la plus-value potentielle (voir l'Exemple d'utilisation ci-dessous).

    Comment retrouve-t-on l’information pertinente rapidement ? Concevoir des chapitres dans l’application pour chaque région, et en fonction des produits et services.

    Comment gagner la confiance de l’utilisateur ? Prévoir un score pour les utilisateurs de confiance, des commentaires et discussion sur des pages produits et services.

    Comment faire adhérer les futurs utilisateurs ? Prévoir un site de démonstration/communication pour attirer les premiers utilisateurs.

    Comment rendre le système durable économiquement ? Concevoir un business model durable.

<b>Exemple d’utilisation</b>

Tiré d’un réel cas réalisé au Parc de Finges (VS).

Des arbres fruitiers abandonnés ont été identifiés (ressource inexploitée). Le Parc de Finges s’est interrogé sur les solutions pour éviter la perte des fruits ? (besoin 1)

Il a ensuite identifié des écoliers et des personnes en situation de handicap qui cherchent à faire des sorties éducatives ou de loisirs (besoin 2), qui étaient d’accord pour ramasser les fruits. Ensuite, il a fait livrer les fruits à un cuisinier de la commune, qui a produit des confitures, et qui ont été mises sur le marché.


## Documentation technique

Documentation technique pour la mise en ligne du projet CIEL.

### Prérequis

Ce projet utilise **node.js** et le moteur de base de données **MongoDb**.
`pm2` est utilisé pour gérer le processus de l'application sur le serveur

- Installation de [node.js](https://nodejs.org/en/download/package-manager/)
- Installation de [mongodb](https://docs.mongodb.com/manual/installation/)
- Installation de [pm2](http://pm2.keymetrics.io/)
- Installation de [ruby](https://www.ruby-lang.org/fr/)
- Installation de [compass](http://www.rubycompass.com/)

### Mise en ligne

1. Cloner le code source sur le serveur
    ```
    git clone git@github.com:R-Men/CIEL.git
    ```

1. Configurer la base de donnée MongoDb selon le fichier
    ```
    /assets/mongo_db_creation.txt
    ```

1. Se déplacer dans le dossier du projet
    ```
    cd /.../ciel
    ```

1. Installer les dépendences node.js
    ```
    npm install
    ```

1. Lancer l'application via le gestionnaire de processus Node
    ```
    pm2 start ciel.js
    ```

1. Contrôlez le bon déroulement de l'application
    ```
    pm2 logs ciel.js
    ```

### Demo live du prototype de l'app

La démonstration est disponible sur ce lien : [Plateforme CIEL](http://ciel.r-men.ch).

