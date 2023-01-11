const express = require('express');
const mongoose = require('mongoose');
const projectRouter = require('./routes/projectRouter.js');

const db = "mongodb+srv://YassirKarmati:Yassir84@cluster0.zpocj40.mongodb.net/portfolioYassirKarmati?retryWrites=true&w=majority" //path bdd a mettre ici
const app = express();

app.use(express.static('./assets')); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(projectRouter);

app.listen(3000,(err)=>{
    if (err) {
       console.log(err); 
    }else{
        console.log('Je suis connecté');
    }
})

mongoose.set('strictQuery', false);
mongoose.connect(db,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("connecter a la bdd");
    }
})