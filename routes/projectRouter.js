const express = require("express");
const projectRouter = express.Router();

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({ 
service : 'gmail',
auth : {
   user: "fonsat.nodemailer@gmail.com",
   pass: "dlclhbrybfcawlgi",
},
tls: {rejectUnauthorized: false}

})

projectRouter.get("/", async (req, res) => {
  try {
    
    res.render("index.twig");
  } catch (err) {
    res.send(err);
  }
});

projectRouter.post("/sendMail", async(req, res) =>{
  try{
    await transporter.sendMail({
      from: req.body.mail, // sender address
      to: "yassirkarmati@gmail.com", // list of receivers
      subject: "Prise de contact - Portfolio", // Subject line
      text: req.body.msg, // html body
    });
    res.redirect("/")
  } catch (err){
    res.send(err);
  }
})




module.exports = projectRouter;