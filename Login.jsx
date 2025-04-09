// Login.jsx
import React from "react";
import './Login.css';

function Login({ onLogin }) {
  const handleSubmit = (event) => { 
    event.preventDefault(); 
    onLogin(); 
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br></br>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
