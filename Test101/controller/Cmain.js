// 모델 불러오기

exports.main = (req, res) => {
  res.render("index");
};

//get login
exports.getLogin = (req, res) => {
  res.render("login", {
    title: {
      title: "로그인",
    },
  });
};

//postlogin
exports.postLogin = (req, res) => {
  console.log("Cmain_req.body.userid", req.body.userid);
  console.log("Cmain_req.body.userpw", req.body.userpw);
  const { userid, userpw } = req.body;
  res.send({ result: true, userid: userid, userpw: userpw });
  //응답으로 successs로 보냄
  //select문
};

// get /register
exports.getRegister = (req, res) => {
  res.render("register", {
    title: { title: "회원가입" },
  });
};
