const express=require('express');
const router=express.Router();

router.route("/Logout").get(async (req,res) => {
    //console.log("Inside logout api")
    res.clearCookie("UserToken", { path: "/" });
    return res.status(200).json({"message": "Logout Successful"});
})

module.exports = router;