import React, { useState } from "react";
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = {
      fname: formData.name,
      email: formData.email,
      password: formData.password,
      cpassword: formData.confirmPassword,
    };
  
    axios.post('/register',data).then(
      res =>{
        console.log(res);
        alert('Registration Successful');
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    ).catch(
      err=>{
        console.log(err);
      }
    )
  };
  

  return (
    <div className="auth-wrapper mt-3">
      <div className="auth-inner">
        <h2 className="text-center"><i class="fa fa-registered mx-2" aria-hidden="true"></i>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            ></input>
          </div>
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
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            ></input>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mt-3">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
