// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

// TODO: 모델 코드

//전체목록 조회 (연결확인위해)
exports.getsignUp = (cb) => {
  conn.query(`SELECT * FROM user`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("테이블 전체 조회", rows);
    cb(rows);
  });
};

//POST roginup 회원가입 등록
exports.postsignUp = (data, cb) => {
  conn.query(
    `INSERT INTO user VALUES(null, "${data.userid}","${data.name}","${data.password}")`,
    (err, rows) => {
      if (err) throw err;
      console.log("model post", rows);
      /*
      req.body { userid: 'd', password: 's', name: 'd' }
      model post OkPacket {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 6,
      serverStatus: 2,
      warningCount: 0,
      message: '',
      protocol41: true,
      changedRows: 0
} 
       */
      cb(rows.insertId);
    }
  );
};

// signin POST 특정 데이터 조회
exports.signIn = (id, cb) => {
  conn.query(`SELECT * FROM user WHERE userid = "${id}"`, (err, rows) => {
    if (err) {
      throw err;
    }
    cb(rows[0]);
  });
};

//PATCH 데이터 수정
exports.patchProfile = (data, cb) => {
  console.log("model data?", data);
  conn.query(
    `UPDATE user SET name="${data.name}", pw="${data.password}" WHERE userid="${data.id}"`,
    (err, row) => {
      if (err) throw err;
      cb();
    }
  );
};

exports.delete = (id, cb) => {
  conn.query(`DELETE FROM user WHERE userid="${id}"`, (err, rows) => {
    if (err) throw err;
    console.log("모델 데이터 삭제", rows);
    cb();
  });
};
