const express = require('express');
const router = express.Router();
const Device = require('../../models/device');

//suposed to get back all the posts
router.get('/', async (req, res) => {
    try{
        const devices = await Device.find();
        res.json(devices);
    }catch(err){
        res.json({message:err});
    }
});

//submits a post
router.post('/', async (req, res) => {
    const device = new Device({
        name: req.body.name,
        powerUsage: req.body.powerUsage
    });
    try{
    const savedDevice = await device.save()
        res.json(savedDevice);
    } catch(err) {
        res.json({ message: err});
    }
});

//specific posts
router.get('/:deviceId', async (req,res) => {
    try{
    const device = await Device.findById(req.params.deviceId);
    res.json(device);
    }catch(err){
        res.json({message:err});
    }
});

//Delete a  specific post
router.delete('/:deviceId', async (req,res) =>{
    try{
    const removedDevice = await Device.remove({_id: req.params.deviceId});
    res.json(removedDevice);
    }catch(err){
        res.json({message: err});
    }
});
module.exports = router;

//update a device
router.patch('/:deviceId', async (req,res) => {
    try{
        const updatedDevice =  await Device.updateOne(
            {_id: req.params.deviceId}, 
            {$set: {name: req.body.name} }
        );
        res.json(updatedDevice);
    }catch(err){
        res.json({message: err});
    }
})