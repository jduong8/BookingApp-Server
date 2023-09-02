const db = require('../db.js')
const Reservation = db.reservation;

exports.findAll = (req, res) => {
    Reservation.findAll().then(reservations => {
        res.send(reservations)
    })
}

exports.create = (req, res) => {
    const {
        // id_user,
        number_of_customers,
        reservation_date,
        reservation_name,
        reservation_note
    } = req.body;

    // if (typeof id_user !== 'number') {
    //     return res.status(422).json({ error: "L'identifiant de l'utilisateur doit être un nombre" });
    // }
    if (typeof number_of_customers !== 'number') {
        return res.status(422).json({ error: "Le nombre de personne doit être un nombre" });
    }
    if (typeof reservation_date !== 'string') {
        return res.status(422).json({ error: "La date doit être une chaine de caractères" });
    }
    if (typeof reservation_name !== 'string') {
        return res.status(422).json({ error: "Le nom de reservation doit être une chaine de caractères" });
    }
    if (typeof reservation_note !== 'string') {
        return res.status(422).json({ error: "Les notes doivent être une chaine de caractères" });
    }

    Reservation.create({
        number_of_customers: number_of_customers,
        reservation_date: reservation_date,
        reservation_name: reservation_name,
        reservation_note: reservation_note,
        reservation_status: 1,
    }).then(reservation => {
        res.send(reservation)
    });
};


exports.update = (req, res) => {
    const reservationId = req.params.id
    Reservation.update({
        number_of_customers: req.body.number_of_customers,
        reservation_date: req.body.reservation_date,
        reservation_name: req.body.reservation_name,
        reservation_note: req.body.reservation_note,
        reservation_status: 1,
    }, {
        where: {
            id: reservationId
        }
    }).then(() => {
        res.status(200).send({
            message: `Reservation updated for reservationID: ${reservationId}`
        });
    });
};

exports.delete = (req, res) => {
    const reservationId = req.params.id
    Reservation.destroy({
        where: {
            id: reservationId
        }
    }).then(() => {
        res.status(200).send({
            message: `Reservation deleted for reservationID: ${reservationId}`
        });
    });
};