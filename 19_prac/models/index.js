"use strict";
const Sequelize = require("sequelize");

let config = require(__dirname + "/../config/config.json")["development"];
console.log("config", config); //여기 까지 나옴
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 설정 정보를 sequelize라는 키에 넣어주는 중
db.sequelize = sequelize;
//시퀄라이즈 모듈을 Sequelize 라는 키에 넣는 중
db.Sequelize = Sequelize;

db.User1 = require("./User1")(sequelize, Sequelize);

module.exports = db;
