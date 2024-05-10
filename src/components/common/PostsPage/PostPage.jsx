import React from "react";

const PostPage = ({
  title,
  titleHandler,
  text,
  textHandler,
  submitHandler,
}) => {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          onChange={titleHandler}
          className="title"
          placeholder="enter the title"
        />
        <textarea
          type="text"
          value={text}
          onChange={textHandler}
          className="project-idea"
          placeholder="enter the project idea or doubt"
        />
        <input type="submit" placeholder="submit" />
      </form>
    </div>
  );
};

export default PostPage;
