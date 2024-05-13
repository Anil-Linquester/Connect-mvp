import React from "react";
import { Select, Input } from "antd";
import { Skills } from "../constants/Skills";
import "../styles/Login.css";
// import '../../styles/freelancer/register.css'

const RegistrationPage = ({
  name,
  email,
  password,
  selectedSkills,
  describe,
  location,
  collage,
  handleCollageChange,
  handleLocationChange,
  handleNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleSelectSkills,
  handleDescribeChange,
  handleSubmit,
}) => {
  return (
    <div className="login-page">
      <div className="login-box">
        <form action="" className="login-form" onSubmit={handleSubmit}>
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
            style={{ width: "230px" }}
            placeholder="Select skills"
            onChange={handleSelectSkills}
            value={selectedSkills}
            className="input-field"
          >
            {Skills.map((skill) => (
              <Select.Option style={{ backgroundColor: "#0E1E2B", color: "#f1f4ff" }} // Adjust as needed
              key={skill.value} value={skill.value}>
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

export default RegistrationPage;
