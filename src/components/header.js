import React from "react";

function StaticHeader() {
  return (
    <nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
    <h4 className="display-4 text-white">Welcome to OrgChart</h4>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search Directory" aria-label="Search"/>
      <button className="btn btn-outline-warning" type="submit">Search</button>
    </form>
  </div>
</nav>
  );
}

export default StaticHeader;
