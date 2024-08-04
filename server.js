const express = require("express");
// import config connection for database
const sequelize = require("./config/connection.js")
const path = require("path");
// import user model
const model= require('./models/index.js')
// import controllers
const routes = require("./controllers");
//import for session
const session = require("express-session")
// handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//initializing the port and app
const PORT = process.env.PORT || 3001;
const app = express();

// setting the engine to use handlebars
app.engine("handlebars",hbs.engine);
// set the view to use handlebars
app.set("view engine","handlebars")

// set up session
const mysession = {
    secret: 'sec secret sec',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave:false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };
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



sequelize.sync({force:false}).then(()=>{

    app.listen(PORT, ()=>{
        console.log(`Listening at port ${PORT}`);
    })
})