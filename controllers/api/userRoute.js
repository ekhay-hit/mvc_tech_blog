const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');


// router.get("/" ,async(req,res)=>{
//     res.render('./layouts/main')
// })
// get request to return login page
router.get("/login" ,async(req,res)=>{
    res.render('login')
})
// git request to return signup page
router.get("/signup" ,async(req,res)=>{
    res.render('signup')
})

// POST REQUEST FOR THE USER
// post request for creating new user

router.post("/signup", async (req, res)=>{
    try{
        // assinging the new user info to varaible newUserData
        const newUserData = req.body;
        // encrypt the password first before creating the user
        newUserData.password = await bcrypt.hash(req.body.password, 8);

        const newUser = await User.create(newUserData);

        // res.status(200).json({message:'user created successfully'})
        res.status(200).json(newUser);

    }catch(err){
        // res.status(500).json({message:"creating new user failed"})
        console.log("I am here at the error");
        res.status(500).json(err);

    }
} )


module.exports=router;