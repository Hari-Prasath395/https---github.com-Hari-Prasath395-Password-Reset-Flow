import React, { useState } from "react";
import axios from "axios";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
    };

    axios
      .post("/sendpasswordlink", data)
      .then((res) => {
        setIsSent(true);
        setError(null);
      })
      .catch((err) => {
        setIsSent(false);
        setError(err.message);
      });
  };
  
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h2 className="text-center"><i class="fa fa-key mx-2" aria-hidden="true"></i>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mt-3">Submit</button>
          </div>
        </form>

        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}

        {isSent && (
          <div className="alert alert-success mt-3" role="alert">
            Password reset email has been sent.
          </div>
        )}
      </div>
    </div>
  );
};

export default Forgot;
