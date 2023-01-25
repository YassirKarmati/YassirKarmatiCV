const express = require("express");
const userRouter = express.Router();
const userModel = require('../models/user.js');


userRouter.get("/login", async (req, res) => {
    try {
      req.session.destroy();
      res.render("login.twig");
      
    } catch (err) {
      res.send(err);
    }
  });

userRouter.post("/login", async (req, res) => {
try{
    
    let user = await userModel.findOne({
      name: req.body.name,
      password: req.body.password
    })
    if(user){
      req.session.userId = user._id
       res.redirect('/home');

    }
    else{
      console.log('Erreur : veuillez ressaisir les infos de connexion')
      res.redirect('/login');
    }

   
} catch(err){
    console.error(err)
    res.send(err)
}
})
  module.exports = userRouter;