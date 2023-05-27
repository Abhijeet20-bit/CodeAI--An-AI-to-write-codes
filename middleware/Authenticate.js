const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../database/models/UserModel");

const Authenticate = async (req,res,next) => {
    try{
        //console.log("Inside Authenticate");
        //console.log("Cookies: ", req.cookies);
        const accesstoken = req.cookies.UserToken;
        //console.log(accesstoken, " Printing access token ");
        const verifytoken =  jwt.verify(accesstoken, process.env.ACCESS_TOKEN_SECRET) 

        //console.log(verifytoken);
        const UserInfo = await User.findById(verifytoken.user.id);
        //console.log(`MongoDb returned data ${UserInfo}`)
        if(!UserInfo)
        {
            throw new Error('User Not Found');
        }
        req.UserData = UserInfo;
        next();
    } catch(err) {
        res.status(401).send("Unauthorized Person");
        console.log(err);
    }
}

module.exports = Authenticate