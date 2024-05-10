import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../db/firebase";

export const postAPI = async (title, text) => {
  const postsCollectionRef = collection(db, "Users");

  try {
    await addDoc(postsCollectionRef, {
      title,
      text,
      author: { email: auth.currentUser.email, id: auth.currentUser.uid },
    });
    return { success: true, message: "Post added successfully." };
  } catch (error) {
    console.error("Error adding post:", error);
    return { success: false, message: "Failed to add post." };
  }
};

export const fetchPostsAPI = async () => {
  const postsCollectionRef = collection(db, "Users");

  try {
    const q = query(
      postsCollectionRef,
      where("author.id", "==", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: posts };
  } catch (error) {
    console.error("Error fetching user posts:", error);
    return { success: false, message: "Failed to fetch user posts." };
  }
};
