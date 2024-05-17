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

  // New state for project details
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");

  // New state for internship details
  const [internshipTitle, setInternshipTitle] = useState("");
  const [internshipDescription, setInternshipDescription] = useState("");
  const [internshipLink, setInternshipLink] = useState("");

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
            // Populate project details if they exist
            if (userData.project) {
              setProjectName(userData.project.name);
              setProjectDescription(userData.project.description);
              setProjectLink(userData.project.link);
            }
            // Populate internship details if they exist
            if (userData.internship) {
              setInternshipTitle(userData.internship.title);
              setInternshipDescription(userData.internship.description);
              setInternshipLink(userData.internship.link);
            }
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
        project: {
          name: projectName,
          description: projectDescription,
          link: projectLink,
        },
        internship: {
          title: internshipTitle,
          description: internshipDescription,
          link: internshipLink,
        },
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
      projectName={projectName}
      projectDescription={projectDescription}
      projectLink={projectLink}
      internshipTitle={internshipTitle}
      internshipDescription={internshipDescription}
      internshipLink={internshipLink}
      error={error}
      handleNameChange={(e) => setName(e.target.value)}
      handleEmailChange={(e) => setEmail(e.target.value)}
      handleSelectSkills={(value) => setSelectedSkills(value)}
      handleDescribeChange={(e) => setDescribe(e.target.value)}
      handleLocationChange={(e) => setLocation(e.target.value)}
      handleProjectNameChange={(e) => setProjectName(e.target.value)}
      handleProjectDescriptionChange={(e) => setProjectDescription(e.target.value)}
      handleProjectLinkChange={(e) => setProjectLink(e.target.value)}
      handleInternshipTitleChange={(e) => setInternshipTitle(e.target.value)}
      handleInternshipDescriptionChange={(e) => setInternshipDescription(e.target.value)}
      handleInternshipLinkChange={(e) => setInternshipLink(e.target.value)}
      handleSubmit={handleSubmit}
    />
  ) : (
    <div>Loading...</div>
  );
};

export default EditFormContainer;
