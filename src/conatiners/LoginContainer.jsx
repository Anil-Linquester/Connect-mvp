import React, { useState } from "react";
import LoginPage from "../pages/loginPage";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../db/firebase";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  const navigate = useNavigate();

  const emailHandler = (e) => setEmail(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <LoginPage
      email={email}
      password={password}
      emailHandler={emailHandler}
      passwordHandler={passwordHandler}
      submitHandler={submitHandler}
    />
  );
};

export default LoginContainer;
