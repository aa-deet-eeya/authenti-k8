const customer = require('./customer');
const db = require('../config/db')

module.exports = {
  add: function (user_data) {
    return customer.create(user_data, {
      raw: true
    })
      .then(data => data.dataValues)
      .catch(error => {
        throw error;
      })
  },

  checkUserExists: function (email) {
    let condition = { email };

    return customer.findOne({
      attributes: ['email', 'id', 'name'],
      where: condition,
      raw: true
    })
      .then(data => data)
      .catch(error => {
        throw error;
      })
  },

  validate: function (user_data) {
    delete user_data.type;
    return customer.findOne({
      attributes: ['id', 'email', 'name'],
      where: user_data,
      raw: true
    })
      .then(data => {
        if (!data) {
          return {};
        }
        return data;
      })
      .catch(error => {
        throw error;
      })
  },
}