
import React from 'react';
import './CasPbas.css';

const CasPbas = () => {
  return ( 
    <div className="cas-pbas">
      <div className="about-samarth">
        <h1>About Samarth eGov Suite</h1>
        <p>
          Samarth is an Open Source, Open Standard enabled Robust, Secure, Scalable, and Evolutionary Process Automation Engine for Universities and Higher Education Institutions.
        </p>
        <p>
          Samarth eGov Suite is operating systems agnostic. All you need is a browser to access and operate the application modules. Quick deployment and easy data migration make for fast adoption.
        </p>
      </div>
      <div className="left-section">
        <h1>✪ Top ICT Initiatives of</h1>
        <h2>Sign In</h2>
        <p>Please enter your username, password, and then click on the Proceed button.</p>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username/Registered Email</label>
            <input type="text" id="username" name="username" placeholder="Enter your username/email" />
            {/* You can add additional validation or state handling for the username input */}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
            {/* You can add additional validation or state handling for the password input */}
          </div>
          <div className="captcha-group">
            <label htmlFor="captcha">Captcha Verification</label>
            <input type="text" id="captcha" name="captcha" placeholder="Enter the text from the image" />
            {/* You can add the logic for handling the Captcha Verification */}
          </div>
          <button type="submit">Proceed</button>
          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>
        </form>
        <p className="more-info">
          For more information, click the link below:{" "}
          <a
            className="website-link"
            href="https://sujammu.samarth.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://sujammu.samarth.ac.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default CasPbas;
