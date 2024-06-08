import React, { useState } from "react";
import RegistrationPage from "../pages/RegistrationPage";
import { db, auth } from "../db/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const RegistrationContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [describe, setDescribe] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSelectSkills = (value) => {
    setSelectedSkills(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDescribeChange = (e) => {
    setDescribe(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !location) {
      setError("Please fill in all fields.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User is signed in
        const user = userCredential.user;
        console.log(user);
        // Set additional user data in Firestore
        return setDoc(doc(db, "Users", user.uid), {
          email: email,
          name: name,
          password: password,  // Note: Storing passwords in Firestore is a serious security risk.
          skill: selectedSkills,
          describe: describe,
          location: location, // Include location in user data
        });
      })
      .then(() => {
        console.log("User Registered Successfully!!");
        // Clear form fields after successful registration
        setName("");
        setEmail("");
        setPassword("");
        setSelectedSkills([]);
        setDescribe("");
        setLocation("");
        setError("");
      })
      .catch((error) => {
        console.error("Error registering user: " + error.message);
        setError(error.message);
      });

    console.log("User registration initiated.");
  };

  return (
    <div>
      <RegistrationPage
        name={name}
        email={email}
        password={password}
        selectedSkills={selectedSkills}
        describe={describe}
        location={location}
        error={error}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSelectSkills={handleSelectSkills}
        handleDescribeChange={handleDescribeChange}
        handleLocationChange={handleLocationChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegistrationContainer;
