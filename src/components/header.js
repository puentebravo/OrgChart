import React from "react";
import SearchBar from "./searchform";

function StaticHeader(props) {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <h4 className="display-4 text-white">Welcome to OrgChart</h4>
        <SearchBar search={props.filter} handleInputChange={props.handleInputChange} handleFormSubmit={props.handleFormSubmit} />
      </div>
    </nav>
  );
}

export default StaticHeader;
