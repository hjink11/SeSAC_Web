const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);

//  get /login
router.get("/login", controller.getLogin);

//post /login
router.post("/login", controller.postLogin);

//get /reigster
router.get("/register", controller.getRegister);

//post /registeIdCheck
router.post("/registeIdCheck", controller.getIdCheck);

module.exports = router;
