import React, { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
  };

  const modalStyle = {display: "flex", flexDirection: "column"};
  const inputStyle = {
    padding: "10px",
    margin: "2px",
    borderRadius: "2px",
    border: "none",
    backgroundColor: "#E0E0E0"
  };
  const buttonStyle = {marginTop: "30px", height: "40px"};
  const underTextStyle = {textAlign: "center", cursor: "pointer", fontSize: "12px", marginTop: "10px"};

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white"
    }}>
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
              <button style={buttonStyle}>Login</button>
              <p style={underTextStyle} onClick={toggleLoginRegister}>Don't have an account? Register</p>
            </div>
          ) : (
            <div style={modalStyle}>
              <input style={inputStyle} type="text" placeholder="Username" />
              <input style={inputStyle} type="password" placeholder="Password" />
              <button style={buttonStyle}>Register</button>
              <p style={underTextStyle} onClick={toggleLoginRegister}>Already have an account? Login</p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default LoginPage;