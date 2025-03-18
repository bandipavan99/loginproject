import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { useState, useEffect } from "react";

const Dashboard = ({ setAuthenticated }) => {
  const navigate = useNavigate();

  // User Info
  const [user, setUser] = useState({
    name: "Pavan Kumar",
    rating: 4.8,
    profilePic: "https://via.placeholder.com/100",
  });

  // Ride Statistics
  const [stats, setStats] = useState({
    totalRides: 24,
    earnings: "₹4,500",
    distance: "320 km",
  });

  // Sample Upcoming Rides
  const [rides, setRides] = useState([
    { id: 1, pickup: "KL University", drop: "Vijayawada", status: "Upcoming" },
    { id: 2, pickup: "Vijayawada", drop: "Guntur", status: "Completed" },
  ]);

  useEffect(() => {
    // Fetch user and ride data from API (optional)
  }, []);

  const handleLogout = () => {
    setAuthenticated(false);
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* User Info */}
      <div className="profile-section">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h2>{user.name}</h2>
        <p>⭐ {user.rating} / 5.0</p>
      </div>

      {/* Ride Statistics */}
      <div className="stats">
        <div className="stat-card">
          <h3>{stats.totalRides}</h3>
          <p>Total Rides</p>
        </div>
        <div className="stat-card">
          <h3>{stats.earnings}</h3>
          <p>Total Earnings</p>
        </div>
        <div className="stat-card">
          <h3>{stats.distance}</h3>
          <p>Distance Covered</p>
        </div>
      </div>

      {/* Ride Management */}
      <div className="ride-section">
        <h3>Upcoming Rides</h3>
        <ul>
          {rides.map((ride) => (
            <li key={ride.id} className={`ride-card ${ride.status.toLowerCase()}`}>
              <p><strong>From:</strong> {ride.pickup}</p>
              <p><strong>To:</strong> {ride.drop}</p>
              <span className="status">{ride.status}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Dashboard Navigation */}
      <div className="dashboard-links">
        <Link to="/profile" className="dashboard-link">Go to Profile</Link>
        <Link to="/history" className="dashboard-link">Ride History</Link>
      </div>

      {/* Logout Button */}
      <div className="actions">
        <button onClick={handleLogout} className="dashboard-button">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
