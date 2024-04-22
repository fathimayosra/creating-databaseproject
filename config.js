const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql_database', {dialect: 'mysql'});
module.exports = sequelize;