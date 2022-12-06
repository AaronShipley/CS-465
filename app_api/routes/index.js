const express = require("express");
const router = express.Router();

const authController = require("../controllers/authentication");
const tripsController = require("../controllers/trips");

router.route("/login").post(authController.login);

router.route("/register").post(authController.register);

router
  .route("/trips")
  .get(tripsController.tripsList)
  .post(tripsController.tripsAddTrip);

router
  .route("/trips/:tripCode")
  .get(tripsController.tripsList)
  .put(tripsController.tripsUpdateTrip);

router.route("/trips/:tripCode").get(tripsController.tripsFindCode);

module.exports = router;