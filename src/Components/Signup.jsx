import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = ({ setUserData }) => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(formData));
    setUserData(formData);

    setError("");
    navigate("/login");
  };

  const handleInstagramRedirect = () => {
    window.open("https://www.instagram.com/raghu_ram_333/", "_blank");
  };

  const handleInstagramRedirect1 = () => {
    window.open("https://www.instagram.com/srinu__reddy__18/", "_blank");
  };


  const handleInstagramRedirect2 = () => {
    window.open("https://www.instagram.com/praveenilla_18/", "_blank");
  };

  const handleInstagramRedirect3 = () => {
    window.open("https://www.instagram.com/purnendra_gatla/", "_blank");
  };

  const handleInstagramRedirect4 = () => {
    window.open("https://ibb.co/HLWnPXnd", "_blank");
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2>Come join us!</h2>
        <p>
          We are so excited to have you here. If you haven't already, create an account to get access
          to exclusive offers, rewards, and discounts.
        </p>
        <button className="secondary-button" onClick={() => navigate("/login")}>Already have an account? Sign in</button>
      </div>

      <div className="signup-right">
        <h2 className="signup-title">Signup</h2>
        {error && <p className="signup-error">{error}</p>}
        
        <input type="text" name="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} className="signup-input" />
        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="signup-input" />
        <input type="password" name="password" placeholder="Create a password" value={formData.password} onChange={handleChange} className="signup-input" />
        <input type="password" name="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} className="signup-input" />

        <button className="signup-button" onClick={handleSignup}>Signup</button>

        <p className="signup-footer">or signup with</p>
        <div className="social-icons">
          <button className="social-btn fb" onClick={handleInstagramRedirect}>F</button>
          <button className="social-btn fb" onClick={handleInstagramRedirect4}>F</button>
          <button className="social-btn google" onClick={handleInstagramRedirect1}>G+</button>
          <button className="social-btn linkedin" onClick={handleInstagramRedirect2}>in</button>
          <button className="social-btn fb" onClick={handleInstagramRedirect3}>F</button>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;
