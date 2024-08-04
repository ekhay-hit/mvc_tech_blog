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
                        attribute:['id', 'contnet'],

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
    console.log(posts);
    res.render("home",{posts, user:req.session})

    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})
// return dashboard
route.get("/dashboard",(req,res)=>{
    res.render("dashboard")
})

module.exports= route;