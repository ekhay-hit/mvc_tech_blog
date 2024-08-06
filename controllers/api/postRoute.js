const router = require('express').Router();
const Post = require('../../models/Post');

//************* */ post request for Post *************************************
router.post("/", async (req, res) =>{
    // try this if it fail catch
    try{
        // create a post and assing it to postData
        const postData = await Post.create(
            { 
                // assiging value from req.body to post property
                title: req.body.title,
                content: req.body.content,
                user_id: req.body.user_id
            }
        )
            // return success result 
        res.status(200).json({ message:"post has been added"})

    }catch(err){
        res.status(500).json(err);
    }
})


// ********************************* update the post 

router.patch("/:id", async(req, res)=>{

    try{
        // retrieve the id from the url
        const post_id= req.params.id;

        // find the post using the id
        const newPost = await Post.findByPk(post_id);

        // if it is not exist return not found
        if(!newPost){
           return res.status(404).json({message:"no post found with requestd id"})   
        }
        
        // continue to udpate the post
        await Post.update({
            title: req.body.title,
            content:req.body.content,    
        },
        {
            where:{
                id:post_id,
            }
        })

        // retrieve the post after it is updated and return the response
        const updatedPost = await Post.findByPk(post_id);
        res.status(200).json(updatedPost)

    }catch(err){
        res.status(500).json(err)
       
    }
})
module.exports = router;



