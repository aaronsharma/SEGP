const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const data = require('./data.json')
const User = require('../../models/user');

/* GET api listing. */
router.get('/', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
});

// router.post('/', function (req, res) {
  
// });


router.post('/save', async(req,res) => {
  const user = new User({
    user_name: req.body.user_name,
    password: req.body.password,
    powerUsage: req.body.powerUsage,
});
  try{
    const savedUser = await user.save()
        res.json(savedUser);
    } catch(err) {
        res.json({ message: err});
    }
})

module.exports = router;
