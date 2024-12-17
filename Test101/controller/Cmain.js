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
  res.send({ result: true, userid: userid, userpw: userpw }); // result 박스에 넣을 려고
  //응답으로 successs로 보냄
  //select문
};

// get /register
exports.getRegister = (req, res) => {
  res.render("register");
  // res.render("register", {
  //   title: { title: "회원가입" },
  // });
};

//post /registeIdCheck
exports.postIdCheck = (req, res) => {
  console.log("Cmain_req.body.userId", req.body.userId);
  const { userId } = req.body;
  res.send({ result: true, success: true, userId: userId });
};

//post /user/register
exports.postRegister = (req, res) => {
  console.log("Cmain_Birth", req.body.userBirth);
  const { userId, userPw, userName, userBirth } = req.body;
  console.log("Cmain:", userId, userPw);
  //  success: true, 로 해야지 로그인 성공함    실패를 보려면 지움
  res.send({
    success: true,
    result: true,
    userId: userId,
    userPw: userPw,
    userName: userName,
    userBirth: userBirth,
  });
};

//get /mainani
exports.getAni = (req, res) => {
  res.render("mainani");
};
