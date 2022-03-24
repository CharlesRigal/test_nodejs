# Express Esimed

## TP n°1

### First steps

- Fichier de configuration de l'app
- Fichier dédié à la DB (table "user" avec : id, firstName, lastName, password)
- Fichier dédié à l'intéraction avec la DB
- Route pour récupérer tous les "user"
- Route pour récupérer un "user" via son firstName
- Route pour créer un "user"
- Route pour modifier un "user"
- Route pour supprimer un "user"
- Les routes créées doivent retourner le bon code HTTP et doivent utiliser le bon verbe HTTP
- Ajouter un fichier `.gitignore` à la racine de votre projet pour faire en sorte de ne pas pousser les `node_modules` ainsi que le répertoire `.idea`
- Si les `node_modules` avaient déjà été poussé sur le repository, trouver la commande git qui permettra de supprimer ce répertoire seulement sur le dépôt GitHub et non en local

### Optional steps

- Créez toutes vos routes dans un autre fichier, de façon à sortir cette logique du fichier index.js => [Express Doc](https://expressjs.com/fr/guide/routing.html)
- Encrypter en md5 le password de l'utilisateur
- Logger chaque requête avec: Date, IP de l'appelant, durée de la requête, verbe + route HTTP
- Pour la gestion des dates, vous pouvez utiliser la librairie de votre choix disponible sur npm (a condition qu'elle vous semble viable)
- Pour l'insertion des utilisateurs, et plus particulièrement leur identifiant "id", il faut un uuid et non un entier qui va être auto increment
- Middleware pour la gestion des erreurs