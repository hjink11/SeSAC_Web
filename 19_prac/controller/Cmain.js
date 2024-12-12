// 모델 불러오기
const user1Model = require("../models/index");
const { where } = require("sequelize");

//GET /
exports.main = (req, res) => {
  res.render("index");
};

//GET /register
exports.register = (req, res) => {
  res.render("register");
};

//POST 회원등록
exports.postRegister = async (req, res) => {
  console.log("req.body", req.body);
  //req.body { userid: '', password: '', name: '' }
  try {
    const newUser1 = await user1Model.User1.create({
      userid: req.body.userid,
      pw: req.body.pw,
      name: req.body.name,
    });
    res.send(newUser1);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("sever error");
  }
};

//GET /login
exports.login = (req, res) => {
  res.render("login");
};
