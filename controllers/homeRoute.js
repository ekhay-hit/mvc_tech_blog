const route = require('express').Router();

// return home page
route.get("",(req,res)=>{
    res.render("home")
})
// return dashboard
route.get("/dashboard",(req,res)=>{
    res.render("dashboard")
})

module.exports= route;