const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);

router.get("/login", controller.getLogin);

module.exports = router;
