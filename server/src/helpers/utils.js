let crypto = require('crypto');
let jwt = require('jsonwebtoken');

module.exports = {
  getHash: (password) => {
    return crypto.createHash('sha1').update(password).digest('base64');
  },
  
  getToken: (user) => {
    let token = jwt.sign(user, 'secret');
  
    return {
      success: true,
      message: 'Logged In Successfully',
      token: token
    };
  }

}