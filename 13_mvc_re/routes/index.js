const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main); // /로 들어왔을 때 controller의 main을 실행하라

router.get("/comments", controller.comments);

router.get("/comment/:id", controller.comment);
module.exports = router;
