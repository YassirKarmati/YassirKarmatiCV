const express = require('express');
const mongoose = require('mongoose');
require ('dotenv').config();
const projectRouter = require('./routes/projectRouter.js');

const db = process.env.BDD_URL
const app = express();

app.use(express.static('./assets')); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(projectRouter);

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