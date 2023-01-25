const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
require ('dotenv').config();
const projectRouter = require('./routes/projectRouter.js');
const projectAddRouter = require('./routes/projectAddRouter.js');
const { array }= require('./customDependencies/multer.js');
const userRouter = require('./routes/userRouter.js');


const db = process.env.BDD_URL
const app = express();

app.use(express.static('./assets')); 
app.use(express.json());
app.use(session({secret:"oui", saveUninitialized: true, resave: true}));
app.use(express.urlencoded({extended: true}));
app.use(projectRouter);
app.use(projectAddRouter);
app.use(userRouter);


app.listen(3000,(err)=>{
    if (err) {
       console.log(err); 
    }else{
        console.log('Connected');
    }
})

mongoose.set('strictQuery', false);
mongoose.connect(db,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("BDD connected");
    }
})