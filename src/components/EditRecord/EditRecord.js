import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import students from "../students";

function EditRecord() {
  const navigate = useNavigate();

  const { id } = useParams();

  let a = students[id];
  const [newFirstName, setnewFirstName] = useState(a.firstName);
  const [newLastName, setnewLastName] = useState(a.LastName);
  const [newEmail, setnewEmail] = useState(a.Email);

  console.log(id);

  const submitHandler = (e) => {
    e.preventDefault();

    a.firstName = newFirstName;
    a.LastName = newLastName;
    a.Email = newEmail;
    navigate("/viewRecord");
  };

  return (
    <div className="loginformcontainer">
    
      <form  className="loginform" onSubmit={submitHandler}>
        <div className="form-inner">
          
        <h2 className="login-heading"> Update Here</h2>

          <div className="form-group">
            <label htmlFor="firstName">firstName:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={(e) => setnewFirstName(e.target.value)}
              value={newFirstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="LastName">LastName:</label>
            <input
              type="text"
              name="LastName"
              id="LastName"
              onChange={(e) => setnewLastName(e.target.value)}
              value={newLastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input
              type="text"
              name="Email"
              id="Email"
              onChange={(e) => setnewEmail(e.target.value)}
              value={newEmail}
            />
          </div>

          <input className="login-btn" type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
}

export default EditRecord;
