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

### Optional steps

- Créez toutes vos routes dans un autre fichier, de façon à sortir cette logique du fichier index.js => [Express Doc](https://expressjs.com/fr/guide/routing.html)
- Encrypter en md5 le password de l'utilisateur
- Logger chaque requête avec: Date, IP de l'appelant, durée de la requête
- Middleware pour la gestion des erreurs