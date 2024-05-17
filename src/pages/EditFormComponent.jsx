import React, { useState, useEffect } from "react";
import { auth, db } from "../db/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Skills } from "../constants/Skills";
import { Select, Input } from "antd";
import "../styles/Login.css";

const EditFormComponent = ({
  name,
  email,
  selectedSkills,
  describe,
  location,
  projectName,
  projectDescription,
  projectLink,
  internshipTitle,
  internshipDescription,
  internshipLink,
  handleNameChange,
  handleEmailChange,
  handleSelectSkills,
  handleDescribeChange,
  handleLocationChange,
  handleProjectNameChange,
  handleProjectDescriptionChange,
  handleProjectLinkChange,
  handleInternshipTitleChange,
  handleInternshipDescriptionChange,
  handleInternshipLinkChange,
  handleSubmit,
}) => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return userDetails ? (
    <div className="login-page">
      <div className="login-box">
        <form className="register-form" onSubmit={handleSubmit}>
          <h1 className="for-loginform-text">Profile</h1>
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
                style={{ backgroundColor: "#0E1E2B", color: "#f1f4ff" }}
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
            type="text"
            placeholder="Project Name"
            className="input-field"
            value={projectName}
            onChange={handleProjectNameChange}
          />
          <Input
            type="text"
            placeholder="Project Description"
            className="input-field"
            value={projectDescription}
            onChange={handleProjectDescriptionChange}
          />
          <Input
            type="text"
            placeholder="Project Link"
            className="input-field"
            value={projectLink}
            onChange={handleProjectLinkChange}
          />
          <Input
            type="text"
            placeholder="Internship Title"
            className="input-field"
            value={internshipTitle}
            onChange={handleInternshipTitleChange}
          />
          <Input
            type="text"
            placeholder="Internship Description"
            className="input-field"
            value={internshipDescription}
            onChange={handleInternshipDescriptionChange}
          />
          <Input
            type="text"
            placeholder="Internship Certificate Link"
            className="input-field"
            value={internshipLink}
            onChange={handleInternshipLinkChange}
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
  ) : (
    <div>Loading...</div>
  );
};

export default EditFormComponent;
