import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";
import Reset from "./components/Reset";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/forgotpassword/:id/:token" element={<Reset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
