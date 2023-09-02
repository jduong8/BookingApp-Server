// Importation des dépendances et du contrôleur:
/*
    Ici, on importe le module Express et le contrôleur de réservation.
*/
const reservationController = require('../controllers/reservation.controller.js'); // Assurez-vous que le chemin est correct
var express = require('express');

// Création d'un routeur Express:
/*
    On crée un nouveau routeur Express 
    qui sera utilisé pour définir les routes relatives aux réservations.
*/
var router = express.Router();

// Définition des routes:

/* 
    GET /reservations: 
    Cette route appelle la méthode findAll du contrôleur de réservation
    pour obtenir toutes les réservations.
*/
router.get('/reservations', reservationController.findAll);

/* 
    POST /reservations:
    Cette route utilise la méthode create du contrôleur 
    pour créer une nouvelle réservation.
*/
router.post('/reservations', reservationController.create);

/* 
    PUT /reservations/:id:
    Cette route utilise la méthode update du contrôleur 
    pour mettre à jour une réservation existante. 
    L'identifiant (id) de la réservation est passé comme paramètre dans l'URL.
*/
router.put('/reservations/:id', reservationController.update);

/* 
    DELETE /reservations/:id:
    Cette route utilise la méthode delete du contrôleur 
    pour supprimer une réservation. 
    L'identifiant est passé comme paramètre dans l'URL.
*/
router.delete('/reservations/:id', reservationController.delete);

// Exportation du routeur pour être utilisé dans d'autres parties de l'application
module.exports = router;
