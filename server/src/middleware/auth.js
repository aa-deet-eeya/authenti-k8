const jwt = require('jsonwebtoken');
const cookies = require('cookies');

let fetchData = function (req, res) {
  let auth_token = req.headers.authorization;

  if (auth_token) {
    auth_token = auth_token.split(',')[0];
    return auth_token.split(' ')[1];
  } else if (req.cookies) {
    return new cookies(req, res).get('token');
  } else if (req.body.token) {
    return req.body.token;
  } else if (req.query.token) {
    let get_token = req.query.token;

    return get_token;
  }
}

module.exports = (req, res, next, type) => {
  let token = fetchData(req, res);
  // console.log(token, req.cookies, req.body.token);

  console.log('auth_token for req---', token, req.path);
  if(token) {
    let decoded_data = {};
    let auth = false;

    jwt.verify(token, 'secret', function (error, decoded) {
      if (error) {
        console.log('Error: ', error);
        return res.send({
          not_verified: true,
          message: 'Session expired. Please logout and login again'
        });
      } else {
        if(type === decoded.type) {
          auth = true;
          // console.log('decoded data-----',decoded);
          decoded_data = decoded;
          req.token_data = {
            data: decoded_data,
            auth: auth
          };
          res.locals.type = decoded_data.type;
          next();
        } else {
          return res.send({
            success: false,
            verified: false
          })
        }
      }
    })
  
  } else {
    return res.send({
      success: false,
      verified: false
    })
  }

}