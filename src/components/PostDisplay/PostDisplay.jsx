import React, { useEffect, useState } from "react";
import { fetchPostsApi } from "../../Api/PostPageApi";
import { auth } from "../../db/firebase";
import './postDisplay.css'



const PostDisplay = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const postsList = await fetchPostsApi();
        setPosts(postsList);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
      setLoading(false);
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    getPosts();
    return () => unsubscribe();
  }, [setPosts]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.text}</p>
          <p>
            <strong>Posted by:</strong> {post.author.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostDisplay;
