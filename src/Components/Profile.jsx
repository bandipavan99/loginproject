import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => (
  <div className="profile-container">
    <h1 className="profile-title">Profile Page</h1>
    <p className="profile-text">User details will be displayed here.</p>
    <Link to="/dashboard" className="profile-link">Back to Dashboard</Link>
  </div>
);

export default Profile;