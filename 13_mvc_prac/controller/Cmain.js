const rogin = require("../model/Rogin");

//get
exports.main = (req, res) => {
  console.log(rogin.roginInfo());

  res.render("index");
};

//exports.roginForm =()=>
exports.Login = (req, res) => {
  const { userId, userPw } = req.body;
  const { realId, realPw } = rogin.roginInfo()[0];

  if (userId === realId && userPw === realPw) {
    res.send({ isSuccess: true, userId: userId });
  } else {
    res.send({
      isSuccess: false,
    });
  }
};
