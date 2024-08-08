const Post = require("../models/Post")
const User = require("../models/User")
const Comment = require("../models/Comment")

const route = require('express').Router();

// return home page
route.get("", async(req,res)=>{
    try{

        const data = await Post.findAll(
            {
                include:[
                    {
                        model: User,
                        attribute:['id', 'name']

                    },
                    {
                        model: Comment,
                        attribute:['id', 'content'],

                        include:[
                                    {
                                         model:User,
                                         attribute:['name']
                                     }   
                                ]

                    }
                ]

            }     
    )
    // serialize data to keep a plain json 
    const posts = data.map((post)=>post.get({plain:true}));
 


    res.render("home",{posts, logged_in: req.session.logged_in, user_name:req.session.name, user_id:req.session.userId})

    }catch(err){
        res.status(500).json(err);
   
    }
})
// return dashboard **********************************************************************
route.get("/dashboard", async(req,res)=>{

    const loggedinUserId = req.session.userId;
      
    try{
        const data = await Post.findAll({
            include:[
                {
                    model: User,
                    attribute:['id', 'name']
                }
            ],

            where:{
                user_id : req.session.userId,

            }

        })

        const mypost = data.map((post)=>post.get({plain:true}))

      
        res.render("dashboard",{mypost, logged_in: req.session.logged_in, user_name:req.session.name, user_id:req.session.userId})


    }catch(err){
        res.status(500).json(err);
        
    }
  
    
})

module.exports= route;