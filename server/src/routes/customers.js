const router = require('express').Router();
const cookies = require('cookies');

const auth = require('../middleware/customer_auth');
const util = require('../helpers/utils');
const customerController = require('../controllers/customer')

router.get('/validateSession', auth, (req, res)=> {
  console.log("Customer Login");
  res.send({
    success: true,
    verified: true
  });
});

router.post('/login', (req, res) => {
  let data = Object.assign({}, req.body);

  data.password = util.getHash(data.password);
  console.log(data.password);
  customerController.verifyAndAuthorize(data)
    .then(data => {
      if(data.success === false || data.success) {
        console.log(data);
        res.send(data);
      } else {
        let result = util.getToken({...data, type: 1})
        if (result && result.success) {
          // console.log("cookie")
          new cookies(req, res).set('token', result.token, {
            httpOnly: true
          });
        }
        res.send(result);
      }
    })
    .catch(error => {
      res.status(404).send({
        success: false,
        error: 'Server Error'
      });
    })
});

router.post('/register', (req, res) => {
  let data = Object.assign({}, req.body);

  data.password = util.getHash(data.password);
  console.log(data.password);

  customerController.register(data)
    .then(data => {
      if(data.success === false || data.success)
        res.send(data)
      else {
        let result = util.getToken({...data, type: 1})
        if (result && result.success) {
          // console.log("cookie")
          new cookies(req, res).set('token', result.token, {
            httpOnly: true
          });
        }
        res.send({...result, message: "Registered and Logged In Successfully"});
      }
      // res.send(data)
    })
    .catch(error => {
      console.log(error)
      res.status(404).send({
        success: false,
        error: 'Server Error'
      });
    })
});

module.exports = router;