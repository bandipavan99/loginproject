import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // optional

const Login = ({ userData, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const stored = localStorage.getItem("userData");
    const parsedUser = stored ? JSON.parse(stored) : null;

    if (!username || !password) {
      setError("Both fields required.");
      return;
    }

    if (!parsedUser || parsedUser.username !== username || parsedUser.password !== password) {
      setError("Invalid credentials or no account exists.");
      return;
    }

    setError("");
    setAuthenticated(true);
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      {error && <p className="login-error">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        className="login-input"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="login-input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>Login</button>

      <p className="signup-redirect-text">
        Don’t have an account?{" "}
        <button className="signup-button" onClick={() => navigate("/signup")}>
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;
