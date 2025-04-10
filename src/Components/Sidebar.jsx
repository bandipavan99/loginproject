import { FaUser, FaCog, FaBox, FaUserFriends, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ open, onClose }) => {
  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <ul>
        <li><FaUser /> Profile</li>
        <li><FaCog /> Settings</li>
        <li><FaBox /> Orders</li>
        <li><FaUserFriends /> Refer a Friend</li>
        <li><FaSignOutAlt /> Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
