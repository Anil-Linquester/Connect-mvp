import React, { useState } from "react";
import PostPage from "../components/common/PostsPage/PostPage";
import { postAPI } from "../Api/PostPageApi"; // Assuming postAPI exists for posting new content
import { useNavigate } from "react-router-dom";

const PostContainer = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await postAPI(title, text); // Using postAPI to post new content
    if (response.success) {
      setTitle("");
      setText("");
      navigate("/home");
    } else {
      console.log(response.message);
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
      <div></div>
    </div>
  );
};

export default PostContainer;
