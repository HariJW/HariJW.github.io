import React, { useState } from "react";
import students from "../students";
import { useNavigate, Link } from "react-router-dom";
import "./viewrecord.css"

function ViewRecord() {

  const navigate = useNavigate();

  const addRecord = () => {
    navigate("/addRecord");
  };

  const deleteRecord = (id) => {
    console.log(id);

    var index = students
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    // deleting the entry with index
    students.splice(index, 1);
    navigate("/viewRecord");
  };

  return (
    <div className="table-page">

      <h1 className="view-heading">Student Details</h1>

      <table className="records">

      <thead>
        <tr>
          <th>id</th>
          <th>firstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Action</th>
          <th>Remove</th>
        </tr>
        </thead>
        <tbody>
        {students && students.length > 0
          ? students.map((student, index) => {
              return (

                
                <tr>
                  <td>{index + 1}</td>
                  <td>{student.firstName}</td>
                  <td>{student.LastName}</td>
                  <td>{student.Email}</td>
                  <td className="edit-btn">
                    <Link to={`/editRecord/${index}`}>Edit</Link>
                  </td>
                  <td>
                    <button onClick={(e) => deleteRecord(student.id)}>
                      Delete Record
                    </button>
                  </td>
                </tr>

              );
            })
          : "No Records Found"}
          </tbody>
      </table>

      <button className="add-btnv" onClick={addRecord}>Add Record</button>
    </div>
  );
}

export default ViewRecord;
