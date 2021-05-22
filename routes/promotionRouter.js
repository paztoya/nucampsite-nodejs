const express = require("express");
const promotionsRouter = express.Router();

promotionsRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the promotions to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the promotions: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })
  .delete((req, res) => {
    res.end("Deleting all promotions");
  });

promotionsRouter
  .route("/:promotionId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the promotionID to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the promotionId: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.write(`updating the campsite site: ${req.params.promotionId} \n`);
    res.end(
      `will update the promotion: ${req.body.name} \n
       with description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end("Deleting all promotionId");
  });

module.exports = promotionsRouter;
