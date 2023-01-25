const express = require("express");
const projectAddRouter = express.Router();
const authGuard = require("../customDependencies/authGuard.js");
const ProjectModel = require('../models/project.js');
const upload = require('../customDependencies/multer.js');

projectAddRouter.get("/addProject", authGuard, async (req, res) => {
    try {
      
      res.render("addProject.twig");
    } catch (err) {
      res.send(err);
    }
  });

projectAddRouter.post("/addProject", authGuard, upload.single('image'), async (req, res) => {
try{
    req.body.image = req.filename;
    let project = new ProjectModel(req.body);
    await project.save();
    res.redirect('/addProject');

} catch(err){
    console.error(err)
    res.send(err)
}
})


  module.exports = projectAddRouter;