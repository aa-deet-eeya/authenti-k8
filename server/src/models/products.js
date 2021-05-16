const DB = require('../config/db');
const db_sequelize = DB.Sequelize;
const products = DB.define('products',
{
  id: {
    type: db_sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  txn_id: {
    type: db_sequelize.STRING
  },
  manufacturer_id: {
    type: db_sequelize.INTEGER
  },
  customer_email: {
    type: db_sequelize.STRING
  },
  added_at: {
    type: db_sequelize.DATE
  }
},
{
  freezeTableName: true,
  timestamps: false
});

module.exports = products;
