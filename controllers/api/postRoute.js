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

// ********************************* Get requist to return all the post 
module.exports = router;



