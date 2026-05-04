// Teachers.js

import React, { useState } from 'react';
import './Teachers.css';

const Teachers = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="teachers-login">
      <h1>Teachers Profile</h1>
      <h2>Log in</h2>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Enter your email" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          placeholder="Enter your password"
        />
        <span className="show-password" onClick={handleShowPasswordToggle}>
          {showPassword ? 'Hide Password' : 'Show Password'}
        </span>
      </div>
      <a href="#" className="forgot-password">
        Forgot password?
      </a>
      <button type="submit" className="login-button">
        Log in
      </button>
      <p className="new-user-text">
        New user? <a href="#">Click Here</a>
      </p>
    </div>
  );
};

export default Teachers;
