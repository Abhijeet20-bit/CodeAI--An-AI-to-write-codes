const express =  require('express');
const Authenticate = require('../middleware/Authenticate')
const router = express.Router();
const jwt = require('jsonwebtoken');

router.use(Authenticate);
router.route("/Home").get( async (req,res)=>{
    const UserData = req.UserData; 
    //console.log(`geeting data ${UserData}`);
    //console.log("From Home page");
    return res.status(200).json({"UserData": UserData});
})


module.exports= router;