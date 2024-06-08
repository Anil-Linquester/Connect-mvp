import React from "react";
import { Select } from "antd";
import { Skills } from "../../constants/Skills";
const StudentSearch = ({ skill, skillHandler }) => {
  return (
    <div>
      <div>
        <Select
          style={{ width: "330px" }}
          placeholder="Select skills"
          value={skill}
          onChange={skillHandler}
          className="input-field"
        >
          {Skills.map((skill) => (
            <Select.Option
              style={{ backgroundColor: "#0E1E2B", color: "#f1f4ff" }} // Adjust as needed
              key={skill.value}
              value={skill.value}
            >
              {skill.label}
            </Select.Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default StudentSearch;
