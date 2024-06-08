import { useState } from "react";
import StudentSearch from "../components/StudentSearch/StudentSearch";
import StudentSuggest from "../components/studentSuggest/studentSuggest"; // Corrected component name

const StudentSearchContainer = () => {
  const [skill, setSkill] = useState("");

  const skillHandler = (value) => {
    setSkill(value);
    console.log(value);
  };

  return (
    <div>
      <StudentSearch skill={skill} skillHandler={skillHandler} />
      <StudentSuggest /> {/* Corrected component name */}
    </div>
  );
};

export default StudentSearchContainer;
