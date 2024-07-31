const express = require("express");
// import config connection for database
const sequelize = require("./config/connection.js")
const path = require("path");
// import user model
const model= require('./models/User.js')
// import controllers
const routes = require("./controllers");
//import for session
const session = require("express-session")
// handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

//initializing the port and app
const PORT = process.env.PORT || 3001;
const app = express();

// setting the engine to use handlebars
app.engine("handlebars",hbs.engine);
// set the view to use handlebars
app.set("view engine","handlebars")

// set up session
const mysession ={
    secret: " ",
    resave:false,
    saveUninitialized:true,
}

// use section
// use session
app.use(session(mysession))

// parse json
app.use(express.json());
// getting params and queries from url
app.use(express.urlencoded({extended:true}));

// api
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// app.get("/" ,async(req,res)=>{
//     res.render('./layouts/main')
// })
// app.get("/login" ,async(req,res)=>{
//     res.render('login')
// })
// app.get("/signup" ,async(req,res)=>{
//     res.render('signup')
// })


sequelize.sync().then(()=>{

    app.listen(PORT, ()=>{
        console.log(`Listening at port ${PORT}`);
    })
})