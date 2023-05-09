import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loginSuccess, setLoginSuccess] = useState(false); // Add a new state variable for login success

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: formData.email,
      password: formData.password,
    };
    axios
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setFormData({ email: "", password: "" }); // Clear the form
        setLoginSuccess(true); // Set login success to true
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h2 className="text-center"><i class="fa fa-sign-in mx-2" aria-hidden="true"></i>Login</h2>
        {loginSuccess && ( // Conditionally render success message
          <div className="alert alert-success" role="alert">
            Logged in successfully!
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            ></input>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Enter Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            ></input>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mt-3">Login</button>
          </div>
        </form>
        <p className="forgot-password text-right">
            <Link to={'/forgot'}>Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
