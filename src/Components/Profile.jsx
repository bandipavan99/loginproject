import { useNavigate } from "react-router-dom";
import "./Profile.css";
function Profile({ user }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user?.name || "Srinu"}</p>
      <p><strong>Email:</strong> {user?.email || "srininivasreddybranham2004@gmail.com"}</p>
      <button onClick={() => navigate("/dashboard")}>Return to Home</button>
    </div>
  );
}

export default Profile;
