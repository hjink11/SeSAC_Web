// TODO: 컨트롤러 코드

//모델 불러오기(sequel  주석처리)
//const User = require("../model/User");

//!!sequelize
const { where } = require("sequelize");
const userModel = require("../models/index");

//main GET
exports.main = (req, res) => {
  res.render("index");
};

//signup GET
exports.getsignUp = (req, res) => {
  //연결 확인 위해 전체목록 조회
  //!! 시퀄 전
  // User.getsignUp((result) => {
  //   //console.log("전체목록 Cuser", result);
  //   res.render("signup");
  // });

  //!!!! sequel 후
  // `SELECT * FROM user`
  userModel.User.findAll()
    .then((result) => {
      //console.log("findAll->", result);  //전체 데이터조회 결과
      res.render("signup", { data: result });
    })
    .catch((err) => {
      console.log("getsingup Cotroller Err", err);
      res.status(500).send("sever err");
    });

  //원래 페이지 연결 아래만
  //res.render("signup");
};

//signup POST   (INSERT INTO => create() )
exports.postsignUp = (req, res) => {
  console.log("req.body", req.body); //{ userid: 'bana', password: '1234', name: 'bana' }

  //!!!!sequel 이전
  // User.postsignUp(req.body, (result) => {
  //   console.log("Cuser.js", result); //7
  //   res.send({
  //     id: req.body.id,
  //     userid: req.body.userid,
  //     password: req.body.password,
  //     name: req.body.name,
  //   });
  // });

  //!!!! sequel 이후 `INSERT INTO user VALUES(null, "${data.userid}","${data.name}","${data.password}")`
  userModel.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.password, //pw?
  })
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).send("server err");
    });
};

//signin GET
exports.getsignIn = (req, res) => {
  console.log("body", req.body);
  res.render("signin");
};

//signin POST  (로그인)
exports.postsignIn = (req, res) => {
  console.log("req.body.userid", req.body.userid);
  /* req.body.userid apple  */

  //!!!sequel 이전
  // User.signIn(req.body.userid, (result) => {
  //   console.log(result);
  //   //RowDataPacket { id: 3, userid: 'apple', name: 'apple', pw: '1234' }
  //   if (req.body.password === result.pw) {
  //     res.send({ success: true, id: req.body.userid });
  //   } else {
  //     res.send({ success: false });
  //   }
  // });

  //!!!! sequel 이후
  //`SELECT * FROM user WHERE userid = "${id}"`
  userModel.User.findOne({
    where: {
      userid: req.body.userid,
    },
  })
    .then((result) => {
      console.log("resultttt", result);
      if (req.body.password === result.pw) {
        res.send({ success: true, id: req.body.userid });
      } else {
        res.send({ success: false });
      }
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).send("server err");
    });
};

//프로필로 이동
exports.postProfile = (req, res) => {
  console.log("req.body", req.body); //{ userid: 'apple' }

  //!!!!!sequel 이전
  // User.signIn(req.body.userid, (result) => {
  //   console.log("result", result); // { id: 3, userid: 'apple', name: 'apple', pw: '1234' }
  //   res.render("profile", { userdata: result });
  // });

  //!!!! sequle 이후
  userModel.User.findOne({
    where: {
      userid: req.body.userid,
    },
  })
    .then((result) => {
      console.log("result profile", result);
      res.render("profile", { userdata: result });
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).send("server err");
    });
};

//수정  update
exports.patchProfile = (req, res) => {
  console.log(req.body);

  //!!!!!sequel 이전
  // User.patchProfile(req.body, () => {
  //   res.send({ success: true });
  //   console.log(req.body);
  // });

  //!sequel 이후
  //`UPDATE user SET name="${data.name}", pw="${data.password}" WHERE userid="${data.id}"`
  userModel.User.update(
    {
      name: req.body.name,
      pw: req.body.password,
    },
    {
      where: {
        userid: req.body.id,
      },
    }
  )
    .then((result) => {
      res.send({ success: true });
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).send("server err");
    });
};

//삭제
exports.delete = (req, res) => {
  console.log("delete body", req.body);
  //!!!!! sequel  이전
  // User.delete(req.body.userid, () => {
  //   res.send({ success: true });
  // });

  //`DELETE FROM user WHERE userid="${id}"`
  userModel.User.destroy({
    where: { userid: req.body.userid },
  })
    .then((result) => {
      res.send({ success: true });
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).send("server err");
    });
};
