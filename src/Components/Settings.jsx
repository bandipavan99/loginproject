import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("16px");

  return (
    <div style={{
      background: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#000",
      fontSize,
      minHeight: "100vh",
      padding: "1rem"
    }}>
      <h2>Settings</h2>
      <label>
        <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        Enable Dark Mode
      </label>
      <br /><br />
      <label>
        Font Size:
        <select value={fontSize} onChange={(e) => setFontSize(e.target.value)} style={{ marginLeft: "10px" }}>
          <option value="14px">Small</option>
          <option value="16px">Medium</option>
          <option value="18px">Large</option>
        </select>
      </label>
      <br /><br />
      <button onClick={() => navigate("/dashboard")}>Return to Home</button>
    </div>
  );
}

export default Settings;
