const router = require('express').Router();
const userRoutes = require('./userRoute');

//full url  /api/user

router.use('/user', userRoutes)

module.exports=router;