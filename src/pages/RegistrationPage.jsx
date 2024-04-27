import React from "react";
import { Select, Input } from "antd";
import { Skills } from "../constants/Skills";

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
    <div>
      <form action="" className="registration" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name of the User"
          className="feild"
          value={name}
          onChange={handleNameChange}
        />
        <Input
          type="email"
          placeholder="Student email"
          className="feild"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          placeholder="Password"
          className="feild"
          value={password}
          onChange={handlePasswordChange}
        />
        <Input
          type="text"
          placeholder="Location"
          className="feild"
          value={location}
          onChange={handleLocationChange}
        />
        <Select
          mode="multiple"
          style={{ width: "230px" }}
          placeholder="Select skills"
          onChange={handleSelectSkills}
          value={selectedSkills}
        >
          {Skills.map((skill) => (
            <Select.Option key={skill.value} value={skill.value}>
              {skill.label}
            </Select.Option>
          ))}
        </Select>

        <Input
          type="text"
          placeholder="Describe yourself"
          className="feild-d"
          value={describe}
          onChange={handleDescribeChange}
        />
        <Input
          type="submit"
          value="Submit"
          className="feild-s"
          style={{ backgroundColor: "rgb(250, 208, 129)" }}
        />
      </form>
    </div>
  );
};

export default RegistrationPage;
