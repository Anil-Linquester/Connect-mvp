// // src/components/PostsList.js
// import React, { useEffect, useState } from "react";
// import { fetchPostsApi, updatePostApi, deletePostApi } from "../db/firebaseApi";
// import { auth } from "../../../db/firebase";


// const PostsList = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const getPosts = async () => {
//       setLoading(true);
//       try {
//         const postsList = await fetchPostsApi();
//         setPosts(postsList);
//       } catch (error) {
//         console.error("Error fetching posts: ", error);
//       }
//       setLoading(false);
//     };

//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });

//     getPosts();
//     return () => unsubscribe();
//   }, []);

//   const handleUpdate = async (id, updatedPost) => {
//     try {
//       const post = posts.find((post) => post.id === id);
//       if (post.userId === user.uid) {
//         const updated = await updatePostApi(id, updatedPost);
//         setPosts(posts.map((post) => (post.id === id ? updated : post)));
//       } else {
//         alert("You can only update your own posts.");
//       }
//     } catch (error) {
//       console.error("Error updating post: ", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const post = posts.find((post) => post.id === id);
//       if (post.userId === user.uid) {
//         await deletePostApi(id);
//         setPosts(posts.filter((post) => post.id !== id));
//       } else {
//         alert("You can only delete your own posts.");
//       }
//     } catch (error) {
//       console.error("Error deleting post: ", error);
//     }
//   };

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   return (
//     <div className="posts-container">
//       {posts.map((post) => (
//         <div key={post.id} className="post">
//           <h2>{post.title}</h2>
//           <p>{post.text}</p>
//           {user && post.userId === user.uid && (
//             <div>
//               <button
//                 onClick={() =>
//                   handleUpdate(post.id, {
//                     title: post.title + " (updated)",
//                     text: post.text,
//                   })
//                 }
//               >
//                 Update
//               </button>
//               <button onClick={() => handleDelete(post.id)}>Delete</button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PostsList;
