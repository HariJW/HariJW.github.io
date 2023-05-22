import React, { useState } from "react";
import "./loginform.css"

function LoginForm(props) {
  const { Login, errorMsg } = props;
  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  
  return (
    <div className="loginformcontainer">
      
    <form className="loginform" onSubmit={submitHandler}>
      <div className="form-inner">

        <h2 className="login-heading">Login Here</h2>

        <div className="form-group">
          <label htmlFor="username">username :</label>
          {/* <br/> */}
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            value={details.username}
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">password :</label>
          {/* <br/> */}
          <input
            type="text"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>

        <input className="login-btn" type="submit" value="Login" />
      </div>
    </form>

    
    </div>
  );
}

export default LoginForm;
