import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // set isAuthenticated = true
    navigate("/profile"); // redirect to profile after login
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Please Log In to Continue</h2>
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 15px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Log In
      </button>
    </div>
  );
}

export default Login;
