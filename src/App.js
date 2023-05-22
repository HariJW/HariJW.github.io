import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import ViewRecord from "./components/ViewRecord/ViewRecord";
import AddRecord from "./components/AddRecord/AddRecord";
import EditRecord from "./components/EditRecord/EditRecord";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Routes>
        <Route path="/viewRecord" element={<ViewRecord />}></Route>
      </Routes>
      <Routes>
        <Route path="/addRecord" element={<AddRecord />}></Route>
      </Routes>
      <Routes>
        <Route path="editRecord/:id" element={<EditRecord />}></Route>
      </Routes>
    </div>
  );
}

export default App;
