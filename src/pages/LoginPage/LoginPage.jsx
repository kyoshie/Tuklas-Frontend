import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="login-inner-container">
        <h1 style={{textAlign: "center", marginBottom: "40px"}}>{isLogin ? "Login" : "Register"}</h1>
        {
          isLogin ? (
            <div className="login-modal">
              <input className="login-register-input" type="text" placeholder="Username" />
              <input className="login-register-input" type="password" placeholder="Password" />
              <button className="login-signup-button" onClick={() => location.href = "/home"}>Login</button>
              <p class="undertext" onClick={toggleLoginRegister}>Don't have an account? Register</p>
            </div>
          ) : (
            <div className="login-modal">
              <input className="login-register-input" type="text" placeholder="Firstname" />
              <input className="login-register-input" type="text" placeholder="Lastname" />
              <input className="login-register-input" type="text" placeholder="Username" />
              <input className="login-register-input" type="password" placeholder="Password" />
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