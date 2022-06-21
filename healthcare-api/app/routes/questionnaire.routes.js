module.exports = (app) => {
  const questionnaire = require("../controllers/questionnaire.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.get("/findRole", questionnaire.findRole);

  router.post("/submit", questionnaire.submit);

  // Retrieve all Tutorials
  // router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  app.use("/api", router);
};
