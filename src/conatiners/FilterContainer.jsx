import React, { useState } from "react";
import Filter from "../components/Filter";

const FilterContainer = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSelectSkills = (value) => {
    setSelectedSkills(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(selectedSkills);
    
  };

  return (
    <div>
      <Filter
        handleSelectSkills={handleSelectSkills}
        selectedSkills={selectedSkills}
        submitHandler={submitHandler}
      />
    </div>
  );
};

export default FilterContainer;