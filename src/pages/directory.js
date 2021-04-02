import React, { useEffect, useState } from "react";
import StaticHeader from "../components/header";

import EmployeeList from "../components/employeelist";
import StickyFooter from "../components/footer";

function Directory() {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const tableEl = document.getElementById("empList");
    const trData = tableEl.getElementsByTagName("tr");

    if (!filter) {
      return;
    }

    for (let i = 0; i < trData.length; i++) {
      let tdData = trData[i].getElementsByTagName("td")[1];
      if (tdData) {
        let content = tdData.textContent || tdData.innerText;
        if (content.indexOf(filter) > -1) {
          trData[i].style.display = "";
        } else {
          trData[i].style.display = "none";
        }
      }
    }
  }, [filter]);

  const handleInputChange = (event) => {
    setFilter(event.target.value);
    if (event.target.value === "") {
      setFilter(null)
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <StaticHeader
        search={filter}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
      <EmployeeList />
      <StickyFooter />
    </div>
  );
}

export default Directory;
