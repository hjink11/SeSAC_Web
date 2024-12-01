const User = require("../model/User");

//GET /user
exports.getUser = (req, res) => {
  console.log(User.userInfo());
  res.render("user", { ...User.userInfo() });
  /* 
  { ...User.userInfo() }
  { realId: 'cocoa', realPw: 'qwer1234*', name: ' 홍길동', age: 20 }
  
  {userInfo: User.userInfo()}
  {userInfo: { 
      realId: 'cocoa', 
      realPw: 'qwer1234*', 
      name: ' 홍길동', 
      age: 20 }
  }
  */
};
