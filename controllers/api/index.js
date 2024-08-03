const router = require('express').Router();
const userRoutes = require('./userRoute');
const postRoute = require('./postRoute');

//full url  /api/user
router.use('/post', postRoute);
router.use('/user', userRoutes)

module.exports=router;