import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Reset = () => {
  const { id, token } = useParams();

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const [resetMessage, setResetMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { password, confirmPassword } = formData;
      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }
      const url = `/${id}/${token}`;
      const body = { password };
      const config = { headers: { 'Content-Type': 'application/json' } };
      const res = await axios.post(url, body, config);
      console.log(res.data);
      setResetMessage('Password reset successful');
      setFormData({ password: '', confirmPassword: '' });
    } catch (err) {
      console.error(err);
      setResetMessage('Password reset failed');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h2 className="text-center">Reset Password</h2>
        <form onSubmit={handleSubmit}>
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
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mt-3" type="submit">
              Submit
            </button>
          </div>
        </form>
        {resetMessage && (
          <div className="text-center mt-3">
            <p>{resetMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reset;
