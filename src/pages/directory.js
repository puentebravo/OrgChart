import React from "react";

import StaticHeader from "../components/header";
import EmployeeList from "../components/employeelist";
import StickyFooter from "../components/footer";

function Directory() {
  return (
    <div>
      <StaticHeader />
      <EmployeeList />
      <StickyFooter />
    </div>
  );
}

export default Directory;
