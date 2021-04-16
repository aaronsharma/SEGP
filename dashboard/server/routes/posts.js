const express = require('express');
const router = express.Router();
const Device = require('../../models/Device');
const { post } = require('./api');

router.get('/', (req, res) => {
    res.send('We are on Posts');
});

router.get('/specific', (req, res) => {
    res.send('specific Posts');
});

router.post('/', (req, res) => {
    const device = new Device({
        name: req.body.name,
        powerUsage: req.body.powerUsage
    });

    device.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err});
    })
});

module.exports = router;