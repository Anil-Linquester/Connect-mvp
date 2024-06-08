import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../db/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
// import PostContainer from "../conatiners/PostContainer";
import { PostSend } from "../components/common/Buttons/Buttons";
import EditFormComponent from "./EditFormComponent";
import '../styles/home.css'
import StudentSearchContainer from "../conatiners/studentSearchContainer";
import PostDisplay from "../components/PostDisplay/PostDisplay";

function Home() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [canedit, setCanedit] = useState(false);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  const handleEdit = () => {
    setCanedit(true);
    navigate("/edit-form", { state: { userData: userDetails } });
  };

  const handleFormSubmit = (formData) => {
    // Update user data or perform other actions
    console.log("Form submitted with data:", formData);
    // For example, update state with new form data
    setUserDetails(formData);
  };

  return (
    <div>
      {userDetails ? (
        <>
          <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>

          <StudentSearchContainer />

          <button onClick={handleEdit}>Edit</button>
          {userDetails && canedit && (
            <EditFormComponent
              userData={userDetails}
              onSubmit={handleFormSubmit}
            />
          )}
          <PostSend />
          <PostDisplay />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Home;
