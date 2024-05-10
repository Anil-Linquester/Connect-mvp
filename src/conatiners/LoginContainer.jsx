import React, { useState, useEffect } from "react";
import LoginPage from "../pages/loginPage";
import { LoginApi } from "../Api/Authapi";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../db/firebase";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailHandler = (e) => setEmail(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    LoginApi(email, password)
      .then(() => {
        console.log("Successfully");
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Changed parameter name from res to user
      if (user) {
        // Checking if user is not null
        navigate("/home");
      }
    });
    return () => unsubscribe(); // Unsubscribe from auth state changes when component unmounts
  }, [navigate]); // Added navigate as a dependency
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
