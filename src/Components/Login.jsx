import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ userData, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError("Username and password are required!");
      return;
    }

    if (!userData || userData.username !== username || userData.password !== password) {
      setError("Invalid credentials. Please sign up first!");
      return;
    }

    setError("");
    setAuthenticated(true);
    navigate("/dashboard");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      {error && <p className="login-error">{error}</p>}
      <div className="login-input-group">
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>Login</button>

      {/* Updated Sign Up Button */}
      <p>Don't have an account? 
        <button className="link-button" onClick={() => navigate("/signup")}>Sign Up</button>
      </p>
    </div>
  );
};

export default Login;
