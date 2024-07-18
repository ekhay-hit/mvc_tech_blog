const express = require("express");
const sequelize = require("./config/connection.js")
const path = require("path");
const model= require('./models/User.js')
//initializing the port and app
const PORT = process.env.PORT || 3001;
const app = express();
// parse json
app.use(express.json());
// getting params and queries from url
app.use(express.urlencoded({extended:true}));



sequelize.sync().then(()=>{

    app.listen(PORT, ()=>{
        console.log(`Listening at port ${PORT}`);
    })
})