import React from "react";


function EmployeeList(props) {
  
  const results = [props.results]

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
