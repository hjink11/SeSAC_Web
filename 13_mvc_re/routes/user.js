const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

//get /user
router.get("/", controller.getUser);

//get /user/aa
//router.get('/aa', controller.a)

// POST /user/login
// router.post('/login', controller.login)
module.exports = router;
