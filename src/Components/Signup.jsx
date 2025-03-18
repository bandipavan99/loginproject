import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = ({ setUserData }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (!formData.username || !formData.password) {
      setError("All fields are required!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    // Save user data to local storage
    localStorage.setItem("userData", JSON.stringify(formData));
    setUserData(formData);

    setError("");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Create an Account</h2>
      {error && <p className="auth-error">{error}</p>}
      
      <input 
        type="text" 
        name="username" 
        placeholder="Enter your username" 
        value={formData.username} 
        onChange={handleChange} 
        className="auth-input" 
      />

      <input 
        type="password" 
        name="password" 
        placeholder="Create a password" 
        value={formData.password} 
        onChange={handleChange} 
        className="auth-input" 
      />

      <button onClick={handleSignup} className="auth-button">Sign Up</button>

      <p className="auth-footer">
        Already have an account? 
        <button className="link-button" onClick={() => navigate("/login")}>Login</button>
      </p>
    </div>
  );
};

export default Signup;
