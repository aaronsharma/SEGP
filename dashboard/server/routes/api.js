const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const data = require('./data.json')


/* GET api listing. */
router.get('/', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
});


module.exports = router;
