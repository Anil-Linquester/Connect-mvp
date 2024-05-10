import React, { useState } from "react";
import PostPage from "../components/common/PostsPage/PostPage";
import { postAPI, fetchPostsAPI } from "../Api/PostPageApi";

const PostContainer = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [userPosts, setUserPosts] = useState([]);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await postAPI(title, text);
    if (response.success) {
      setTitle("");
      setText("");
      fetchUserPosts();
    } else {
      console.error(response.message);
    }
  };

  const fetchUserPosts = async () => {
    const response = await fetchPostsAPI();
    if (response.success) {
      setUserPosts(response.data);
    } else {
      console.error(response.message);
    }
  };

  return (
    <div>
      <PostPage
        title={title}
        titleHandler={titleHandler}
        text={text}
        textHandler={textHandler}
        submitHandler={submitHandler}
      />
      <div>
        <h2>User Posts</h2>
        <ul>
          {userPosts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostContainer;
