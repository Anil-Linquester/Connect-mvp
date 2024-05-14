import React, { useState, useEffect } from "react";
import { auth, db } from "../db/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Skills } from "../constants/Skills";
import { Select, Input } from "antd";
import "../styles/Login.css";


const EditFormComponent = ({
  name,
  email,
  password,
  selectedSkills,
  describe,
  location,
  handleCollageChange,
  handleLocationChange,
  handleNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleSelectSkills,
  handleDescribeChange,
  handleSubmit,
}) => {
  const [userDetails, setUserDetails] = useState(null);

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

  return (
    <div className="login-page">
      <div className="login-box">
        <form action="" className="register-form" onSubmit={handleSubmit}>
        <h1 className="for-loginform-text">Sign up to Connect</h1>
         <Input
            type="text"
            placeholder="Name of the User"
            className="input-field"
            value={name}
            onChange={handleNameChange}
          />
          <Input
            type="email"
            placeholder="Student email"
            className="input-field"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={handlePasswordChange}
          />
          <Input
            type="text"
            placeholder="Location"
            className="input-field"
            value={location}
            onChange={handleLocationChange}
          />
          <Select
            mode="multiple"
            style={{ width: "330px" }}
            placeholder="Select skills"
            onChange={handleSelectSkills}
            value={selectedSkills}
            className="input-field"
          >
            {Skills.map((skill) => (
              <Select.Option
                style={{ backgroundColor: "#0E1E2B", color: "#f1f4ff" }} // Adjust as needed
                key={skill.value}
                value={skill.value}
              >
                {skill.label}
              </Select.Option>
            ))}
          </Select>

          <Input
            type="text"
            placeholder="Describe yourself"
            className="input-field"
            value={describe}
            onChange={handleDescribeChange}
          />
          <Input
            type="submit"
            value="Submit"
            className="input-field"
            style={{ backgroundColor: "rgb(250, 208, 129)" }}
          />
        </form>
      </div>
    </div>
  );
};

export default EditFormComponent;
