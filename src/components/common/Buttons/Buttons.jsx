import React from "react";
import { useNavigate } from "react-router-dom";
import "./postSend.css"; // Import the CSS file

export const PostSend = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/post");
  };

  return (
    <div className="send-container">
      <button className="send-button" onClick={clickHandler}>
        Send Post
      </button>
    </div>
  );
};
