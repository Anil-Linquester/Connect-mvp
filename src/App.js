import "./App.css";

import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import LoginContainer from "./conatiners/LoginContainer";
import RegistrationContainer from "./conatiners/RegistrationContainer";
import Home from "./pages/Home";
// import ProtectedRouter from "./components/ProtectedRouter";
function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginContainer />} setToken={setToken} />
        <Route path="/register" element={<RegistrationContainer />} />
        <Route path="/home" token={token} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
