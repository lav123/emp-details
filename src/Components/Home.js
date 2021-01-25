import React from "react";
import Header from "./Header";
import EmployeeList from "./EmployeeList";
import employeeList from "../data/employeeList";
import "./Home.css";
class Home extends React.Component {
  componentDidMount() {
    const localdata = JSON.parse(localStorage.getItem("empData"));
    if (localdata.length === 0 || localdata === null) {
      window.localStorage.setItem("empData", JSON.stringify(employeeList));
    }
  }
  render() {
    return (
      <div className="home">
        <Header />
        <EmployeeList />
      </div>
    );
  }
}

export default Home;
