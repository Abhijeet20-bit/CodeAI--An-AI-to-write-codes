const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Userquery = require('../database/models/UserQueriesModel')
const Authenticate = require("../middleware/Authenticate")

router.use(Authenticate)
router.route("/Store").post( async (req,res) => {
    //console.log(req.body);
    try{
        const UserQuery = await Userquery.create({
            Question: req.body.Q,
            Answer: req.body.A,
            Usermail: req.UserData.email
        })
        return res.status(200).json({"message": "Data Stored in Database"});
    } catch(err) {
        
        console.log(err)
        console.log("Unable to create UserQuery Collection");
        return res.json({status : 'Error '})
    }
})

module.exports = router;