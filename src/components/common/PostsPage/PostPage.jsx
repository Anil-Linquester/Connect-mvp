import React from "react";
import '../../../styles/postPage.css'

const PostPage = ({
  title,
  titleHandler,
  text,
  textHandler,
  submitHandler,
}) => {
  return (
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          onChange={titleHandler}
          className="title"
          placeholder="Enter the title"
        />
        <textarea
          type="text"
          value={text}
          onChange={textHandler}
          className="project-idea"
          placeholder="Enter the project idea or doubt"
        />
        <input type="submit" className="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostPage;