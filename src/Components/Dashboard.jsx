import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ({ setAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthenticated(false);
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-text">Welcome to the Dashboard! 🎉</p>
      <div className="dashboard-links">
        <Link to="/profile" className="dashboard-link">Go to Profile</Link>
        <button onClick={handleLogout} className="dashboard-button">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
