const express = require('express');

const router = express.Router();

router.get('/', (req, res)=> {
  console.log("yay!!");
  res.send("WORKING")
})

module.exports = router;