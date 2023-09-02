// Importation des modules nécessaires
// On importe le module express et on crée une nouvelle instance du routeur Express.
var express = require('express');
var router = express.Router();

// Importation des routeurs spécifiques:
const reservationsRouter = require('./reservations.js');
const usersRouter = require('./users.js');

// Utilisation des routeurs spécifiques comme middlewares:
/*
    Les routeurs pour les réservations et les utilisateurs sont ajoutés comme middlewares
    à l'instance principale du routeur Express.
    Cela signifie que toutes les routes définies dans reservationsRouter et usersRouter
    seront maintenant gérées par ce routeur principal.
*/
router.use(reservationsRouter);
router.use(usersRouter)

// Exportation du routeur principal
module.exports = router;
