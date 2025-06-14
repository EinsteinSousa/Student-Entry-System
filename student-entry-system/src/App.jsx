import React from 'react';
import './App.css';
import nitlogo from './assets/nitlogo.png';
import background from './assets/background.jpg';

function App() {
  return (
    <div
      className="main-background"
      style={{
        minHeight: '100vh',
        background: `url(${background}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        position: 'relative'
      }}
    >
      {/* Overlay */}
      <div className="overlay"></div>

      {/* College Logo and Name */}
      <img src={nitlogo} alt="NIT Goa Logo" className="logo1" />
      <div className="college-name">
        National Institute of Technology Goa
      </div>

      {/* Main Title */}
      <div className="college-title">College Entry Management</div>

      {/* Login Card */}
      <div className="login-container">
        <img src={nitlogo} alt="NIT Goa Logo" className="login-logo" />
        <div className="login-title">Login</div>
        <form className="login-form">

          {/* Name Field */}
          <div className="name-textbox">
            <label className="label" htmlFor="fullname">Full name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="John Doe"
              required
            />
            
          </div>
          {/* Password Field */}
          <div className="password-textbox">
            <label className="label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter at least 8+ characters"
              required
            />
            
          </div>
          <button className="sign-in-btn" type="submit">Sign in</button>
        </form>
        <div className="forgot-password">Forgot Password</div>
      </div>
    </div>
  );
}

export default App;
