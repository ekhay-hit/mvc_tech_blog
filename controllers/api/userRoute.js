const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');



// get request to return login page
router.get("/login" ,async(req,res)=>{
    res.render('login')
});

// git request to return signup page
router.get("/signup" ,async(req,res)=>{
    res.render('signup')
});

// POST REQUEST FOR THE USER
// post request for creating new user*******************************************************************
// /api/users/signup
router.post("/signup", async (req, res)=>{
    try{
        // assinging the new user info to varaible newUserData
        const newUserData = req.body;
        // encrypt the password first before creating the user this moved to user model
        // newUserData.password = await bcrypt.hash(req.body.password, 8) ;

        const newUser = await User.create(newUserData);

        // res.status(200).json({message:'user created successfully'})
        req.session.save(()=>{
            req.session.user_id = newUser.id;
            req.session.user_name = newUser.name;
            req.session.logged_in = true;
            res.status(200).json({newUser, message: "user account created successfully"})
        
        })
        // res.status(200).json({newUser,message:"user account created successfully"});

    }catch(err){
        // res.status(500).json({message:"creating new user failed"})
       
        res.status(500).json(err);
    

    }
});

// post request for user logi ************************************************************************

router.post("/login", async(req,res) =>{

    try{
        // find user email if there is data
       
        const loginData = await User.findOne({where:{email:req.body.email}});;

        if(!loginData){
            res.status(404).json({message:"please provide your login credintial"})
            return;
        }
     
                // check if the password is valid 
            const pwIsValid = await bcrypt.compare(
                req.body.password, loginData.password
            )    
        
        if (!pwIsValid){
            res.status(400).json({message: "Wrong login credintial"})
        }

        req.session.save(()=>{
            req.session.userId = parseInt(loginData.id);
            req.session.name = loginData.name;
            req.session.logged_in = true;

            res.status(200).json({user_name:req.session.name, logged_in:req.session.logged_in, user_id:req.session.userId ,message: "you are logged in successfully"});
        
        })
    

    }catch(err){
        // res.status(500).json({message:"500 server error"})
        res.status(500).json(err);
       
    }

})

// post request for logout /api/user/logout
router.post("/logout",(req, res)=>{
  
    if(req.session.logged_in){
        req.session.destroy(()=>{
            res.status(204).end();

        })
    }else{
        res.status(404).end();
    }
})

module.exports=router;