import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import "../../style/practice4.scss";

export default function Practice4() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="header">
        <h2>📨 Post List</h2>
      </div>

      <div className="con1">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })}
      </div>
      <br />
      <br />
    </>
  );
}
