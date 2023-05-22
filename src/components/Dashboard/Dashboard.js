import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css"

function Dashboard(props) {

  const navigate = useNavigate();
  
  const viewRecord = () => {
    navigate("/viewRecord");
  }

  const addRecord = () => {
    navigate("/addRecord");
  }

  
  return (
    <div className="dashboard-page">

      {/* <button className="logout-btn" onClick={() => {navigate("/")}}>Logout</button> */}

      <h2 className="dash-heading">User Dashboard</h2>

      <div className="dash-btns">
        <button className="view-btn" onClick={viewRecord}>View Records</button>

        <button className="add-btn" onClick={addRecord}>Add Record</button>
      </div>
    </div>
  );
}

export default Dashboard;
