const route = require('express').Router();
const apiRoute = require('./api')
const homeRoute = require("./homeRoute.js")

route.use('/api', apiRoute);
route.use("/",homeRoute)

module.exports = route;