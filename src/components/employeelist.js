import React, { useEffect, useState } from "react";
import API from "../utils/API";
import "../styles/employeelist.css";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.ping().then((res) => {
      setEmployees(res.data.results);
    });
  }, []);

  return (
      <div className="row">
        <table className="table table-dark table-striped" id="empList"> 
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((empData, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={empData.picture.thumbnail}
                    alt="employee thumbnail"
                  ></img>
                </td>
                <td>
                  {empData.name.first} {empData.name.last}
                </td>
                <td>
                  {empData.location.street.number}{" "}
                  {empData.location.street.name}, {empData.location.city}
                </td>
                <td>{empData.email}</td>
                <td>{empData.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default EmployeeList;
