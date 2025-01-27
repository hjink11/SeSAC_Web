import PracData from "../../types/pracInterface";

interface Props {
  post: PracData;
}

const PostItem = (post: Props) => {
  const { id, title, body } = post.post;

  return (
    <div className="PostItem">
      <div>
        <span className="id">No. {id}</span>
        <span className="title">- {title}</span>
      </div>
      <p className="body">{body.slice(0, 120)}...</p>
    </div>
  );
};

export default PostItem;
