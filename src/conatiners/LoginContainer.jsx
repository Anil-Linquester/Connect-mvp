import React, { useState } from "react";
import LoginPage from "../pages/loginPage";
import supabase from "../db/supabase";
// import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setFormError] = useState(null);
  //   const navigate = useNavigate();

  const emailHandler = (e) => setEmail(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);

  const submitHandler = async (e) => {
    e.preventDefault();
    setFormError(null); // Clear previous errors

    if (!email || !password) {
      setFormError("Please fill in both email and password.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })

    if (error) throw error
    console.log(data)
  //   alert('Check your email for verification link')

    
  } catch (error) {
    alert(error)
  }
  };

  return (
    <LoginPage
      email={email}
      password={password}
      emailHandler={emailHandler}
      passwordHandler={passwordHandler}
      submitHandler={submitHandler}
      error={error}
    />
  );
};

export default LoginContainer;
