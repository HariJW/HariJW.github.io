import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import students from "../students"
import { v4 as uuid } from 'uuid';
import "./addrecord.css"

function AddRecord() {
  const navigate = useNavigate();

  const [newRecord, setNewRecord] = useState({
    firstName: "",
    LastName: "",
    Email: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const ids = uuid() 
    let uni = ids.slice(0, 8) 

    setNewRecord({ ...newRecord, id: uni })
    students.push(newRecord)
    navigate("/viewRecord")
    // console.log(newRecord);
  };

  return (
    <div className="addrecord">
 
      <form className="loginform" onSubmit={submitHandler}>
        <div className="form-inner">

        <h2 className="login-heading">Add Here</h2>


          <div className="form-group">
            <label htmlFor="firstName">firstName:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={(e) =>
                setNewRecord({ ...newRecord, firstName: e.target.value })
              }
              value={newRecord.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="LastName">LastName:</label>
            <input
              type="text"
              name="LastName"
              id="LastName"
              onChange={(e) =>
                setNewRecord({ ...newRecord, LastName: e.target.value })
              }
              value={newRecord.LastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input
              type="text"
              name="Email"
              id="Email"
              onChange={(e) =>
                setNewRecord({ ...newRecord, Email: e.target.value })
              }
              value={newRecord.Email}
            />
          </div>

          <input className="login-btn" type="submit" value="Add Record" />
        </div>
      </form>
    </div>
  );
}

export default AddRecord;
