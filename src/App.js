import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "./conatiners/LoginContainer";
import RegistrationContainer from "./conatiners/RegistrationContainer";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/register" element={<RegistrationContainer />} />
      </Routes>
    </div>
  );
}

export default App;
