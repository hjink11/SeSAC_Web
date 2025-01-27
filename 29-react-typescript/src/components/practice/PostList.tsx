// PostList 컴포넌트 입니다.
import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import PracData from "../../types/pracInterface";

const PostList = () => {
  const [posts, setPosts] = useState<PracData[]>([]);

  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data.slice(0, 10));
  };

  useEffect(() => {
    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);

  return (
    <div className="PostList">
      <header>Post List</header>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <PostItem post={post} key={post.id} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default PostList;
