import React from "react";

function SearchBar(props) {
  return (
    <form className="d-flex">
      <input
        value={props.filter}
        onChange={props.handleInputChange}
        className="form-control me-2"
        type="search"
        placeholder="Search Directory"
        aria-label="Search"
      />
    </form>
  );
}

export default SearchBar;
