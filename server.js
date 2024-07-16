const express = require("express");
const path = require("path");

//initializing the port and app
const PORT = process.env.PORT || 3001;
const app = express();
// parse json
app.use(express.json());
// getting params and queries from url
app.use(express.urlencoded({extended:true}));




app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
})