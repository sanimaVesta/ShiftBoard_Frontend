import React from "react";

import { useParams } from "react-router-dom";

import DepartmentEmployees from "./Main/DepartmentEmployees";
import Details from "./Main/Details";

const Department = () => {
  //getting id of department
  const id = useParams().id;

  //html
  return (
    <section className="main-Container">
      <Details id={id}></Details>

      <DepartmentEmployees id={id} />
    </section>
  );
};

export default Department;
