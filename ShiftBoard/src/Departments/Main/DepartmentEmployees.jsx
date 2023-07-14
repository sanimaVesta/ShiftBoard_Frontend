import "./department-main.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEmployeeDataByDepartmentId } from "../Hooks/useDepartmentData";
import SearchEmployeeInDepartment from "../Features/EmployeeFeatures/SearchEmployeeInDepartment";
import Loading from "../../Utils/Loading";
import TransferEmployee from "../Features/EmployeeFeatures/TransferEmployee";
import DeleteEmployeeInDepartment from "../Features/EmployeeFeatures/DeleteEmployeeInDepartment";

const DepartmentEmployees = ({ id }) => {
  //Fetching data
  const { isLoading, isError, error, data } = useEmployeeDataByDepartmentId(id);
  if (isLoading) return <Loading count={5} />;

  if (isError) {
    alert(error.message);
    return;
  }

  //resolving data
  const employees = data?.data?.data;

  //HTML
  return (
    <>
      <div className="component-container">
        <span className="component-container-header">
          <h2 className="">Employees</h2>
          <span className="end inline-actions">
            <button className="btn" id="blackBg">
              Add
            </button>
            <TransferEmployee employees={employees} />
            <DeleteEmployeeInDepartment
              employees={employees}
              collection={true}
              departmentId={id}
            />
          </span>
        </span>
        <div className="component-container-body">
          <SearchEmployeeInDepartment employees={employees} key={employees} />
        </div>
      </div>
    </>
  );
};

export default DepartmentEmployees;
