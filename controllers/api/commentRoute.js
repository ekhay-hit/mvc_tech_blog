const router = require('express').Router();
const Comment= require("../../models/Comment")

// post request to create a new comment base on the post_id and user_id
router.post("/", async(req, res)=>{

    try{
        // create new comment and assign it to newComment
        const newComment = await Comment.create(
            {
                content: req.body.content,
                post_id: req.body.post_id,
                user_id: req.body.user_id
            }
        )
        // upon successful request return results
        res.status(200).json({message:"comment has been added"})

        // if the request due to server issue return the catch
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports=router;  