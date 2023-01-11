const express = require("express");
const projectRouter = express.Router();

projectRouter.get("/", async (req, res) => {
  try {
    
    res.render("index.twig");
  } catch (err) {
    res.send(err);
  }
});




module.exports = projectRouter;