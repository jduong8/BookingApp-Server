/* 
On importe Sequelize depuis le module sequelize. 
*/
const { Sequelize } = require('sequelize');

/*
Nouvelle instance de Sequelize est créée en utilisant une URL de connexion
à une base de données PostgreSQL 
*/

// const sequelize = new Sequelize('postgres://postgres:0123456789@127.0.0.1:5432/postgres')
const sequelize = new Sequelize('postgres://xtwqftmg:zEbZGcBlb1DYoqiIQpa8q0L0lb-Sa9Kt@trumpet.db.elephantsql.com/xtwqftmg')

/* Création d'un objet vide db qui va contenir les modèles de la base de données. */
const db = {};

/* 
Les modèles sont importés et configurés avec l'instance sequelize.
Cela signifie que les modèles user, table, room et reservation
seront accessibles à partir de l'objet db.
*/

db.user = require('./models/user.model.js')(sequelize);
db.table = require('./models/table.model.js')(sequelize);
db.room = require('./models/room.model.js')(sequelize);
db.reservation = require('./models/reservation.model.js')(sequelize);

/* 
La méthode sync crée les tables dans la base de données selon les modèles définis.
L'option { force: true } supprimera toutes les tables existantes et les recréera
*/
sequelize.sync({ force: true })
  .then(() => {
    console.log("Les tables ont été créées !");
  })
  .catch((error) => {
    console.error("Erreur lors de la création des tables :", error);
  });

// try {
//   sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
//   })
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

// Pour que l'objet db puisse être utilisé dans d'autres parties de l'application
module.exports = db;