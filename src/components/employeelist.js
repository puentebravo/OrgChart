import React, { useState, useEffect } from "react";
import API from "../utils/API";

function EmployeeList() {
  const [tableEntry, setTableEntry] = useState({
    image: "",
    firstName: "",
    lastName: "",
    number: [],
    streetName: "",
    address: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    API.ping().then((res) => {
      console.log(res)
      setTableEntry({
        image: res.data.results[0].picture.thumbnail,
        firstName: res.data.results[0].name.first,
        lastName: res.data.results[0].name.last,
        number: res.data.results[0].location.street.number,
        streetName: res.data.results[0].location.street.name,
        address: res.data.results[0].location.city,
        email: res.data.results[0].email,
        phone: res.data.results[0].phone,
      });
    });
  }, []);

  const results = [tableEntry]

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <table className="table table-dark table-striped">
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
              {results.map((empData) => (
                <tr key={empData.length - 1}>
                  <td><img src={empData.image} alt="employee thumbnail"></img></td>
                  <td>
                    {empData.firstName} {empData.lastName}
                  </td>
                  <td>
                    {empData.number} {empData.streetName}, {empData.address}
                  </td>
                  <td>{empData.email}</td>
                  <td>{empData.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
