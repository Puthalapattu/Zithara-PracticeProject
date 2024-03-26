const router = require("express").Router();

const eventController = require("../controllers/eventController");

// ----------------------------------------------

router.post("/createEvent", eventController.createEvent);

// ------------------

module.exports = router;
