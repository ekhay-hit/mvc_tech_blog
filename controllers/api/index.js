const router = require('express').Router();
const userRoutes = require('./userRoute');
const postRoutes = require('./postRoute');
const commentRoutes= require("./commentRoute")

//full url  /api/user
router.use('/post', postRoutes);
router.use('/user', userRoutes)
router.use('/comment',commentRoutes)

module.exports=router;