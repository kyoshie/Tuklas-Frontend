import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
  };

  const modalStyle = {display: "flex", flexDirection: "column", padding: "0px 8px 0px 8px"};
  const inputStyle = {
    padding: "10px",
    margin: "2px",
    borderRadius: "2px",
    border: "solid 1px white",
    background: "none",
    color: "white",
    outline: "none",
  };

  return (
    <div className="container">
      <div style={{
        backgroundColor: "#7469B6",
        height: "300px",
        borderRadius: "2px",
        padding: "4px",
        width: "30%",
      }}>
        <h1 style={{textAlign: "center", marginBottom: "40px"}}>{isLogin ? "Login" : "Register"}</h1>
        {
          isLogin ? (
            <div style={modalStyle}>
              <input style={inputStyle} type="text" placeholder="Username" />
              <input style={inputStyle} type="password" placeholder="Password" />
              <button className="login-signup-button">Login</button>
              <p class="undertext" onClick={toggleLoginRegister}>Don't have an account? Register</p>
            </div>
          ) : (
            <div style={modalStyle}>
              <input style={inputStyle} type="text" placeholder="Username" />
              <input style={inputStyle} type="password" placeholder="Password" />
              <button className="login-signup-button">Register</button>
              <p className="undertext" onClick={toggleLoginRegister}>Already have an account? Login</p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default LoginPage;