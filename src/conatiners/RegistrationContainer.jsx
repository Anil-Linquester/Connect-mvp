import React, { useState } from "react";
import RegistrationPage from "../pages/RegistrationPage";
import supabase from "../db/supabase";
const RegistrationContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [describe, setDescribe] = useState("");


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

  const handleDescribeChange = (e) => {
    setDescribe(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      password,
      selectedSkills,
      describe,
    });

    if (!name || !email || !password) {
      console.log("Please fill in the fields correctly");
      return;
    }
    const { data: existingUsers, error: fetchError } = await supabase.auth.signUp({
      email:email,
      password:password,
      options:{
        name:name,
        describe:describe,
        selectedSkills:selectedSkills,
      }
    })
      

    if (fetchError) {
      console.log(fetchError);
      return;
    }

    if (existingUsers && existingUsers.length > 0) {
      console.log("Already exists");
      return;
    }

    const { data, error } = await supabase
      .from("connect")
      .insert([
        {
          name: name,
          email: email,
          password: password,
          skills: selectedSkills,
          describe: describe,
        },
      ])
      .select();

    if (error) {
      console.log(error);
    } else if (data) {
      console.log("Data inserted successfully:", data);
      // setFormError(null);
      setEmail("");
      setPassword("");
      setName("");
    }
  };

  return (
    <div>
      <RegistrationPage
        name={name}
        email={email}
        password={password}
        selectedSkills={selectedSkills}
        describe={describe}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSelectSkills={handleSelectSkills}
        handleDescribeChange={handleDescribeChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegistrationContainer;
