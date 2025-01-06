const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);

router.get("/login", controller.getLogin);

router.get("/twin", controller.getTwin);

router.get("/refri", controller.getRefri);

module.exports = router;
