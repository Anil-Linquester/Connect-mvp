import React, { useState, useEffect } from "react";
import { auth, db } from "../db/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import EditFormComponent from "../pages/EditFormComponent";

const EditFormContainer = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [describe, setDescribe] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUserDetails(userData);
            setName(userData.name);
            setEmail(userData.email);
            setSelectedSkills(userData.skill);
            setDescribe(userData.describe);
            setLocation(userData.location);
          } else {
            console.log("User data not found in Firestore");
          }
        } else {
          console.log("User is not logged in");
        }
      });
    };
    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userRef = doc(db, "Users", auth.currentUser.uid);
      await updateDoc(userRef, {
        name: name,
        email: email,
        skill: selectedSkills,
        describe: describe,
        location: location,
      });
      console.log("User information updated successfully!");
    } catch (error) {
      console.error("Error updating user information:", error.message);
      setError(error.message);
    }
  };

  return userDetails ? (
    <EditFormComponent
      name={name}
      email={email}
      selectedSkills={selectedSkills}
      describe={describe}
      location={location}
      error={error}
      handleNameChange={(e) => setName(e.target.value)}
      handleEmailChange={(e) => setEmail(e.target.value)}
      handleSelectSkills={(value) => setSelectedSkills(value)}
      handleDescribeChange={(e) => setDescribe(e.target.value)}
      handleLocationChange={(e) => setLocation(e.target.value)}
      handleSubmit={handleSubmit}
    />
  ) : (
    <div>Loading...</div>
  );
};

export default EditFormContainer;
