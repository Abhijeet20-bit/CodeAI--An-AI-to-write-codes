const express =  require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../database/models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
router.route("/Login").post(async (req,res)=>{
    //console.log(req.body);
    try {
        //console.log(req.body.email);
        
        const UserInfo=await User.findOne({email: req.body.email});
        if(!UserInfo)
        {
            return res.status(401).json({ status: 'error', error: 'Invalid login' })
        }
        else
        {
            //console.log("User Info print ", UserInfo)
            if(await bcrypt.compare(req.body.password,UserInfo.password))
            {
                const accesstoken = jwt.sign({
                    user : {
                        username: UserInfo.fullname,
                        email: UserInfo.email,
                        id: UserInfo.id
                    }
                },process.env.ACCESS_TOKEN_SECRET, {expiresIn: "5m"});
                res.cookie("UserToken", accesstoken, {
                    expires: new Date(Date.now() + (5*60*1000)),
                    httpOnly: true
                });
                res.status(201).json({Token: accesstoken});
            }
            else
            {
                return res.status(401).json({ status: 'error', error: 'wrong password' })
            }
        } 
    } catch(err) {
        console.log(err);
        return { status: 'error', error: 'Invalid login' }
    }
    //res.status(201).json({Message: "Successful"})
});

module.exports = router;