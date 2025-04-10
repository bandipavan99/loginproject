import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlacesAutocomplete from "react-places-autocomplete";
import { FaMotorcycle, FaCar, FaUser, FaTaxi } from "react-icons/fa";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  const handleBooking = () => {
    if (!location || !destination || !selectedVehicle) {
      alert("Please enter all fields!");
      return;
    }
    alert(`Ride booked from ${location} to ${destination} via ${selectedVehicle}`);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-page">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-header">
        <button className="profile-button" onClick={toggleSidebar}>
          <FaUser size={20} />
        </button>
        <h1 className="dashboard-title">Bookar</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <div className="booking-section">
        <PlacesAutocomplete value={location} onChange={setLocation} onSelect={setLocation}>
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Enter current location",
                  className: "location-input",
                })}
              />
              <div className="suggestion-box">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    {...getSuggestionItemProps(suggestion)}
                    className={`suggestion-item ${suggestion.active ? "active" : ""}`}
                  >
                    {suggestion.description}
                  </div>
                ))}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <PlacesAutocomplete value={destination} onChange={setDestination} onSelect={setDestination}>
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Enter destination",
                  className: "location-input",
                })}
              />
              <div className="suggestion-box">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    {...getSuggestionItemProps(suggestion)}
                    className={`suggestion-item ${suggestion.active ? "active" : ""}`}
                  >
                    {suggestion.description}
                  </div>
                ))}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <div className="vehicle-options">
          <button
            className={`vehicle-button ${selectedVehicle === "Bike" ? "selected" : ""}`}
            onClick={() => setSelectedVehicle("Bike")}
          >
            <FaMotorcycle /> Bike
          </button>
          <button
            className={`vehicle-button ${selectedVehicle === "Car" ? "selected" : ""}`}
            onClick={() => setSelectedVehicle("Car")}
          >
            <FaCar /> Car
          </button>
          <button
            className={`vehicle-button ${selectedVehicle === "Auto" ? "selected" : ""}`}
            onClick={() => setSelectedVehicle("Auto")}
          >
            <FaTaxi /> Auto
          </button>
        </div>

        <button className="book-button" onClick={handleBooking}>Book Ride</button>
      </div>
    </div>
  );
};

export default Dashboard;
