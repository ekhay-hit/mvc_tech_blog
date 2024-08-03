const router = require('express').Router();
const Post = require('../../models/Post');

// post request for Post
router.post("/", async (req, res) =>{

    try{
        const postData = await Post.create(
            {
                title: req.body.title,
                content: req.body.content,
                user_id: req.body.user_id
            }
        )

        res.status(200).json({ message:"post has been added"})

    }catch(err){
        res.status(500).json(err);
    }

})

module.exports = router;



