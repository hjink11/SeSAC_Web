// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

//GET 회원가입/로그인 링크 보여주기
router.get("/user", controller.main);

//GET 회원가입 페이지 보여주기
router.get("/user/signup", controller.getsignUp);

//POST 회원가입
router.post("/user/signup", controller.postsignUp);

//GET 로그인 페이지 보여주기
router.get("/user/signin", controller.getsignIn);
//POST 로그인
router.post("/user/signin", controller.postsignIn);

//POST 프로필
router.post("/user/profile", controller.postProfile);

//PATCH
router.patch("/user/profile/edit", controller.patchProfile);

//DELETE
router.delete("/user/profile/delete", controller.delete);

module.exports = router;
