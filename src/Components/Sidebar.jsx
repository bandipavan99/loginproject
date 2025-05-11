import { FaUser, FaCog, FaBox, FaUserFriends, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <ul>
        <li onClick={() => navigate("/profile")}><FaUser /> Profile</li>
        <li onClick={() => navigate("/settings")}><FaCog /> Settings</li>
        <li onClick={() => navigate("/orders")}><FaBox /> Orders</li>
        <li onClick={() => navigate("/refer")}><FaUserFriends /> Refer a Friend</li>
        <li onClick={() => navigate("/login")}><FaSignOutAlt /> Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
