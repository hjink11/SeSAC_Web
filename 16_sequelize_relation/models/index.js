"use strict";

const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")["devel"];
const db = {};

//(1) Sequelize 클래스를 통해서 sequelize 객체 생성

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//(2) 모델을 불러오면서 인자로 정보 전달
const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

//모델 불러오는것(위)) 따로 추가(아래) 따로해야 한다 (지난시간이랑 다름)
//(3) 모델간 관계 설정
// 3-1) Player:Profile = 1:1
PlayerModel.hasOne(ProfileModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: "player_id",
});

ProfileModel.belongsTo(ProfileModel, {
  foreignKey: "player_id", //내가 정해준 이름이지만 원래 이름과 같은걸 사용
});

//3-2) Team:Player 1:N
TeamModel.hasMany(PlayerModel, {
  foreignKey: "teamid", //내가 정해주는 이름(원래이름은 팀모델의 team_id라는 이름 )
  sourceKey: "team_id", //실제로 참조할 이름
  //실제 team model의 컬럼명과 일치해야 함
  //medels/Team.js 의 Primaryey
});
PlayerModel.belongsTo(TeamModel, {
  foreignKey: "teamid", //내가 정해주는 이름으로 위와 같게
  targetKey: "team_id", //실제 참조할 이름
});

//3-3) Team:Game = M:N
//중개테이블 teamgame 활용해야 함
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: "team_id", // 내가 정해주는 이름
});

GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "game_id", //내가 정해주는 이름
});

//db 객체에 모델 추가
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Game = GameModel;
db.Team = TeamModel;
db.TeamGame = TeamGameModel;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
