import React from "react";
import { Select, Input } from "antd";
import { Skills } from "../constants/Skills";

const Filter = ({ selectedSkills, handleSelectSkills, submitHandler }) => {
  return (
    <div>
        
      <form onSubmit={submitHandler}>
        <Select
          mode="multiple"
          style={{ width: "230px" }}
          placeholder="find the crew"
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
          type="submit"
          value="Submit"
          className="feild-s"
          style={{ backgroundColor: "rgb(250, 208, 129)" }}
        />
      </form>
    </div>
  );
};

export default Filter;
