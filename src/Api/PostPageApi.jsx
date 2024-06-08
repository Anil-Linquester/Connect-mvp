import {
  getDocs,
  collection,
  doc,
  getDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { db, auth } from "../db/firebase";

export const postAPI = async (title, text) => {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    console.error("User is not authenticated.");
    return { success: false, message: "User is not authenticated." };
  }

  const postsCollectionRef = collection(db, "Posts");

  try {
    await addDoc(postsCollectionRef, {
      title,
      text,
      author: { email: currentUser.email, id: currentUser.uid },
    });
    return { success: true, message: "Post added successfully." };
  } catch (error) {
    console.error("Error adding post:", error);
    return { success: false, message: "Failed to add post." };
  }
};


export const fetchPostsApi = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Posts"));
    const postsList = await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const postData = doc.data();
        let authorName = "Unknown";

        // Fetch user data based on email
        if (postData.author && postData.author.email) {
          const usersCollectionRef = collection(db, "Users");
          const queryUser = query(
            usersCollectionRef,
            where("email", "==", postData.author.email)
          );
          const userSnapshot = await getDocs(queryUser);

          if (!userSnapshot.empty) {
            const userData = userSnapshot.docs[0].data();
            authorName = userData.name || "Unknown";
          }
        }

        return {
          id: doc.id,
          ...postData,
          author: {
            ...postData.author,
            name: authorName,
          },
        };
      })
    );

    return postsList;
  } catch (error) {
    console.error("Error fetching posts: ", error);
    throw error;
  }
};
