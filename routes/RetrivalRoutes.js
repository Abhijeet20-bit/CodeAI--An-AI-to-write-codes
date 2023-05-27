const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Userquery = require('../database/models/UserQueriesModel')
const Authenticate = require("../middleware/Authenticate")

router.use(Authenticate)
router.route("/AllQueries").get( async (req,res) =>{
    //console.log("Inside all Queries");
    try {
        const AllQueriesData = await Userquery.find({Usermail: req.UserData.email});
        //console.log(AllQueriesData);
        const DataArray = AllQueriesData.map( (item)=>{
            return {
                "key": item.id,
                "Q": item.Question,
                "A": item.Answer
            }
        } )
        //console.log("Modified Array list ", DataArray)
        res.status(200).json({"AllUserQueries": DataArray});
    } catch (err) {
        console.log("Some Error Occureed ", err);
        res.status(400).json({"Message": "Some error occured"});
    }
})

module.exports = router;