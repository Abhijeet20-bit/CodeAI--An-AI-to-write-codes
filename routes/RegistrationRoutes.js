const express =  require('express');
//const UserData = require('../database/models/UserModel');
const router = express.Router();
const mongoose = require('mongoose')
const User = require('../database/models/UserModel');
const bcrypt = require('bcrypt');
router.route("/Register").post(async (req,res) => {
    try{
        //console.log(req.body);
        const hashedPassword = await bcrypt.hash(req.body.pass,10);
        const user = await User.create({
            fullname : req.body.fullname,
            email: req.body.email,
            password: hashedPassword
        })
        res.json({status: 'Ok'})
    } catch(error) {
        res.json({status : 'Error '})
        console.log(error)
        console.log("Unable to create User Collection");
    }
    
});

module.exports = router;