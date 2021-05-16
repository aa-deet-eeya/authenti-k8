const DB = require('../config/db');
const db_sequelize = DB.Sequelize;
const manufacturer = DB.define('customer',
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
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = manufacturer;
