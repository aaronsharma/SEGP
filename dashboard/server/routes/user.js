const express = require('express');
const router = express.Router();
const User = require('../../models/user');

//suposed to get back all the users
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message:err});
    }
});

//add a user
router.post('/', async (req, res) => {
    const user = new User({
        user_name: req.body.user_name,
        password: req.body.password,
        powerUsage: req.body.powerUsage,
        device0 : req.body.device0,
        device1 : req.body.device1,
        device2 : req.body.device2,
        device3 : req.body.device3,
        device4 : req.body.device4,
        device5 : req.body.device5,
        device6 : req.body.device6,
        device7 : req.body.device7
    });
    try{
    const savedUser = await user.save()
        res.json(savedUser);
    } catch(err) {
        res.json({ message: err});
    }
});

//specific user
router.get('/:userId', async (req,res) => {
    try{
    const user = await User.findById(req.params.userId);
    res.json(user);
    }catch(err){
        res.json({message:err})
    }
});

//Delete a  specific user
router.delete('/:userId', async (req,res) =>{
    try{
    const removedUser = await User.remove({_id: req.params.userId});
    res.json(removedUser);
    }catch(err){
        res.json({message: err});
    }
});
module.exports = router;

//update a user
router.patch('/:userId', async (req,res) => {
    try{
        const updatedUser =  await User.updateOne(
            {_id: req.params.userId}, 
            {$set: {name: req.body.name} }
        );
        res.json(updatedUser);
    }catch(err){
        res.json({message: err});
    }
})