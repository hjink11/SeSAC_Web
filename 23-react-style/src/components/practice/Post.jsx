export default function Post({ id, title, body }) {
  return (
    <>
      <div className="con2">
        <div className="con3">
          <span className="id">No. {id}</span>
          <span className="title"> - {title}</span>
        </div>
        <div className="pDiv">
          <p>{body}</p>
        </div>
      </div>
    </>
  );
}
