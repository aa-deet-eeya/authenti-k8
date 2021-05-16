const products = require('./products');
const db = require('../config/db')

module.exports = {
  add: function (data) {
    return products.create(data, {
      raw: true
    })
      .then(data => data.dataValues)
      .catch(error => {
        throw error;
      })
  },

  get: function (product_id, txn_id) {
    let query = 
    `SELECT P.txn_id, P.customer_email, P.added_at
     M.name, M.email, M.location 
     FROM products P LEFT JOIN manufacturer M
     ON P.manufacturer_id = M.id
     WHERE P.id = :id OR P.txn_id = :txn_id LIMIT 1`;

    return db.query(query, {
      replacements: { 
        id: product_id, 
        txn_id
      },
      type: db.QueryTypes.SELECT
    })
      .then(data => data)
      .catch(error => {
        console.log(error);
        throw error;
      });
  },
}

