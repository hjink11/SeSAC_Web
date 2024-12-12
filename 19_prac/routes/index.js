const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);

// GET /register
router.get("/register", controller.register);
//POST /register
router.post("/register", controller.postRegister);

//GET /login
router.get("/login", controller.login);

module.exports = router;
