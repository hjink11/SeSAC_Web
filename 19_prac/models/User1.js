const User1Model = function (Sequelize, DataType) {
  const User1 = Sequelize.define(
    "user1", // 모델이름
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pw: {
        type: DataType.STRING(255),
        allowNull: false,
      },
      name: {
        type: DataType.STRING(15),
        allowNull: false,
      },
      userid: {
        type: DataType.STRING(15),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return User1;
};

module.exports = User1Model;
