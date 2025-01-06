// 모델 불러오

exports.main = (req, res) => {
  res.render("index");
};

//login
exports.getLogin = (req, res) => {
  res.render("login");
};

//Twin
exports.getTwin = (req, res) => {
  res.render("twin");
};

//Refri
exports.getRefri = (req, res) => {
  res.render("refri");
};
