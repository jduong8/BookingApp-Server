# Projet de Réservation de Restaurants

- Création d'un backend en utilisant Node.js avec le framework Express.
- Utilisation d'une base de données PostgreSQL avec l'ORM Sequelize pour gérer les données.
- Mise en place du CRUD (Create, Read, Update, Delete) et des routes pour manipuler les données.

```markdown
.
├── __test__
│   └── app.test.js
│   └── math.js
│   └── math.test.js
├── controllers
│   └── reservation.controller.js
│   └── user.controller.js
├── models
│   └── reservation.model.js
│   └── user.model.js
│   └── room.model.js
│   └── table.model.js
├── routes
│   └── reservation.js
│   └── users.js
├── package.json
└── app.js
```

Utilisation d'un modèle MVC

## Outils utilisés

- Node.js v20.0.0 ou plus récent
- PostgreSQL v14.0.0 ou plus récent
- **VSCode** 
- **TablePlus** 
- **Postman** 
- **brew**
- **ohmyzsh**
- **git/github**

---

## Lignes de commande utilisés

| Commande                               | Explication                                                                                         |
| -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `brew install --cask visual-studio-code` | Installe Visual Studio Code en utilisant Homebrew sur macOS.                                           |
| `node nom_du_fichier`                  | Exécute un fichier JavaScript avec Node.js.                                                           |
| `brew install postgresql@15`           | Installe PostgreSQL version 15 via Homebrew sur macOS.                                                 |
| `npm install sequelize`                | Installe Sequelize, un ORM pour Node.js.                                                              |
| `npm install pg pg-hstore`             | Installe les dépendances nécessaires pour utiliser PostgreSQL avec Sequelize.                          |
| `npm run start`                        | Exécute le script "start" défini dans votre fichier `package.json`, souvent pour démarrer votre serveur.|
| `psql -U username -h 127.0.0.1 -d postgres` | Se connecte à la base de données PostgreSQL en tant qu'utilisateur spécifié.                           |
| `brew services restart postgresql@15`  | Redémarre le service PostgreSQL version 15 sur macOS.                                                   |
| `npm install -g sequelize-cli`         | Installe globalement le CLI de Sequelize.                                                             |
| `sequelize init`                       | Initialise un nouveau projet Sequelize.                                                               |
| `npx sequelize-cli init`               | Alternative à `sequelize init` si le CLI n'est pas installé globalement.                               |
| `npm install jsonwebtoken`             | Installe `jsonwebtoken` pour gérer l'authentification via JWT.                                        |
| `npm install bcrypt`                   | Installe `bcrypt` pour le hachage de mots de passe.                                                    |
| `npm install --save-dev jest`          | Installe Jest comme dépendance de développement pour les tests.                                        |
| `npm install --save-dev supertest`     | Installe `supertest` pour effectuer des tests HTTP.                                                     |
| `npm run test`                         | Exécute les tests définis dans votre projet, en général avec Jest.                                      |


## API Endpoints

- `GET /restaurants` : Récupérer la liste des restaurants
- `POST /restaurants` : Créer un nouveau restaurant
- `PUT /restaurants/:id` : Modifier un restaurant existant
- `DELETE /restaurants/:id` : Supprimer un restaurant

---
