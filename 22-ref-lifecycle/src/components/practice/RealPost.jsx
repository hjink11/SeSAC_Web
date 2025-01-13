import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";

export default function RealPost() {
  // https://jsonplaceholder.typicode.com/posts

  const [posts, setPosts] = useState([]);

  // axios로 데이터 받아오기
  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    //     "https://jsonplaceholder.typicode.com/posts/{:id}"
    // /:id 로 받을 때

    console.log(response.data); //배열이 들어온다 100개
    setPosts(response.data.slice(0, 10)); //100개 중 0번부터 9번까지 짤라서
  };

  // getPosts();    // 데이터 처리 확인용임

  //useEffect 의 콜백에는(안에) async 를 사용할 수 없음
  // async await 를 사용하는 함수를 따로 만들어야 함 (위에 만들었긔 getPosts())
  // than catch 는 사용 가능 하다
  useEffect(() => {
    //async 방식은 아래
    //getPosts(); // 처음에는 async로 실습 이것만 주석 해체 하고 아래는 다 주석 처리하면 10개씩

    //than .catch 방법
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
      <h6>여기는 RealPost</h6>
      {posts.length === 0 ? (
        <span>...loding...</span>
      ) : (
        posts.map((post) => {
          return (
            // import한 컴포넌트에 props 전달
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })
      )}
    </>
  );
}
