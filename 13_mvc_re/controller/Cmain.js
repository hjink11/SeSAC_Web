const Comment = require("../model/Comment"); //모델을 불러옴

// GET /
exports.main = (req, res) => {
  //함수 표현식으로  페이지를 렌더 시킴
  res.render("index");
};

// GET /comments
exports.comments = (req, res) => {
  console.log(Comment.commentInfos()); //모델의 댓글 사용
  res.render("comments", { commentInfos: Comment.commentInfos() });
};

// GET /comment/:id
exports.comment = (req, res) => {
  const comments = Comment.commentInfos();
  console.log(req.params);
  //   console.log(req.query);
  const commentId = req.params.id; //
  console.log("commentId:", commentId); // 1,2,3,4

  console.log(comments[commentId - 1]); // 댓글 실제 정보
  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }

  if (isNaN(commentId)) {
    res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
