import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import "./home.css"

function Home() {
  const navigate = useNavigate();

  const adminUser = {
    username: "harsh",
    password: "harsh123",
  };

  const [currentUser, setCurretUser] = useState({ username: "", password: "" });

  const Login = (details) => {
    // console.log(details);
    if (
      details.username == adminUser.username &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setCurretUser({
        username: details.username,
        password: details.password,
      });
      navigate("/dashboard");
    } else {
      alert("Details do not match!");
    }
  };

  const Logout = () => {
    setCurretUser({ username: "", password: "" });
  };

  return (
    <>
      <div className="App">
        <LoginForm Login={Login}/>
      </div>
    </>
  );
}

export default Home;
