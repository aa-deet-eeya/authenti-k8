const DB = require('../config/db');
const db_sequelize = DB.Sequelize;
const manufacturer = DB.define('manufacturer',
  {
    id: {
      type: db_sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: db_sequelize.STRING
    },
    email: {
      type: db_sequelize.STRING
    },
    password: {
      type: db_sequelize.STRING
    },
    location: {
      type: db_sequelize.STRING
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = manufacturer;
