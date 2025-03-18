import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import "./Components/Auth.css"; // Consolidated CSS

const App = () => {
  const [userData, setUserData] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  return (
    <Routes>
      {/* Signup Page - Store User Data */}
      <Route path="/" element={<Signup setUserData={setUserData} />} />
      
      {/* Login Page - Validate Credentials */}
      <Route path="/login" element={<Login userData={userData} setAuthenticated={setAuthenticated} />} />

      {/* Protected Routes - Redirect if not logged in */}
      {authenticated ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Dashboard />} />
        </>
      ) : (
        <Route path="*" element={<Login userData={userData} setAuthenticated={setAuthenticated} />} />
      )}
    </Routes>
  );
};

export default App;
