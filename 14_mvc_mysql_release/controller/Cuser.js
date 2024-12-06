// TODO: 컨트롤러 코드

//모델 불러오기
const User = require("../model/User");

//main GET
exports.main = (req, res) => {
  res.render("index");
};

//signup GET
exports.getsignUp = (req, res) => {
  //연결 확인 위해 전체목록 조회
  User.getsignUp((result) => {
    //console.log("전체목록 Cuser", result);
    res.render("signup");
  });

  //원래 페이지 연결 아래만
  //res.render("signup");
};
//signup POST
exports.postsignUp = (req, res) => {
  console.log("req.body", req.body); //{ userid: 'bana', password: '1234', name: 'bana' }
  User.postsignUp(req.body, (result) => {
    console.log("Cuser.js", result); //7
    res.send({
      id: req.body.id,
      userid: req.body.userid,
      password: req.body.password,
      name: req.body.name,
    });
  });
};

//signin GET
exports.getsignIn = (req, res) => {
  console.log("body", req.body);
  res.render("signin");
};

//signin POST
exports.postsignIn = (req, res) => {
  console.log("req.body.userid", req.body.userid);
  /* req.body.userid apple  */
  User.signIn(req.body.userid, (result) => {
    console.log(result);
    //RowDataPacket { id: 3, userid: 'apple', name: 'apple', pw: '1234' }
    if (req.body.password === result.pw) {
      res.send({ success: true, id: req.body.userid });
    } else {
      res.send({ success: false });
    }
  });
};

exports.postProfile = (req, res) => {
  console.log("req.body", req.body); //{ userid: 'apple' }
  User.signIn(req.body.userid, (result) => {
    console.log("result", result); // { id: 3, userid: 'apple', name: 'apple', pw: '1234' }
    res.render("profile", { userdata: result });
  });
};

exports.patchProfile = (req, res) => {
  console.log(req.body);
  User.patchProfile(req.body, () => {
    res.send({ success: true });
    console.log(req.body);
  });
};

exports.delete = (req, res) => {
  User.delete(req.body.userid, () => {
    res.send({ success: true });
  });
};
