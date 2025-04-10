import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard"; // placeholder
import Profile from "./Components/Profile"; // placeholder

const ProtectedRoute = ({ element, authenticated }) => {
  return authenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  const [userData, setUserData] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Signup setUserData={setUserData} />} />
      <Route path="/signup" element={<Signup setUserData={setUserData} />} />
      <Route
        path="/login"
        element={<Login userData={userData} setAuthenticated={setAuthenticated} />}
      />
      <Route
        path="/dashboard"
        element={<ProtectedRoute authenticated={authenticated} element={<Dashboard />} />}
      />
      <Route
        path="/profile"
        element={<ProtectedRoute authenticated={authenticated} element={<Profile />} />}
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
