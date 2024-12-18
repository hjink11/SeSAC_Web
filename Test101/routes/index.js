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
router.post("/registerIdCheck", controller.postIdCheck);

//post /user/register
router.post("/register", controller.postRegister);

// get /mainani
router.get("/ani", controller.getAni);

//get /users
router.get("/users", controller.getUsers);

module.exports = router;
