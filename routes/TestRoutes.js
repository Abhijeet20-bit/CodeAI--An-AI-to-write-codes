const express =  require('express');
const router = express.Router();

router.route("/Test").post(async (req,res)=>{
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
            
            res.status(201).json({TestRes: "Test Successful"});
        } 
    } catch(err) {
        console.log(err);
        return { status: 'error', error: 'Invalid login' }
    }
    //res.status(201).json({Message: "Successful"})
});

module.exports = router;