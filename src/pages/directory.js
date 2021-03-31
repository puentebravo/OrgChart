import React, { useEffect, useState } from "react";
import API from "../utils/API";
import StaticHeader from "../components/header";
import EmployeeList from "../components/employeelist";
import StickyFooter from "../components/footer";

function Directory() {
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
      console.log(res);
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

  return (
    <div>
      <StaticHeader />
      <EmployeeList results={tableEntry}/>
      <StickyFooter />
    </div>
  );
}

export default Directory;
