const router = require('express').Router();
// const bcrypt = require('bcrypt');
const User = require('../../models/User');


// router.get("/" ,async(req,res)=>{
//     res.render('./layouts/main')
// })
router.get("/login" ,async(req,res)=>{
    res.render('login')
})
router.get("/signup" ,async(req,res)=>{
    res.render('signup')
})

module.exports=router;