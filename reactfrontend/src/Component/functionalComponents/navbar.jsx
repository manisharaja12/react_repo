// Navbar.js
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [learningDropdownOpen, setLearningDropdownOpen] = useState(false);
  const [hooksDropdownOpen, setHooksDropdownOpen] = useState(false);

  // Check login state from localStorage
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully");
    navigate("/login");
  };

  const topLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  const learningLinks = [
    { path: "/props", name: "Props" },
    { path: "/state", name: "State" },
    { path: "/task", name: "Task" },
    { path: "/events", name: "Events" },
  ];

  const hookLinks = [
    { path: "/hooks/usestate", name: "UseState" },
    { path: "/hooks/useeffect", name: "UseEffect" },
    { path: "/hooks/useeffectapi", name: "UseEffectAPI" },
    { path: "/hooks/fakeimageapi", name: "FakeImageAPI" },
    { path: "/hooks/usecallback", name: "UseCallback" },
    { path: "/hooks/useref", name: "UseRef" },
    { path: "/hooks/usememo", name: "UseMemo" },
  ];

  // Styles
  const linkStyle = (path) => ({
    padding: "8px 14px",
    margin: "0 4px",
    textDecoration: "none",
    color: location.pathname === path ? "white" : "black",
    backgroundColor: location.pathname === path ? "black" : "transparent",
    borderRadius: "4px",
  });

  const navStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#edd8e2ff",
    borderBottom: "2px solid #000",
  };

  const dropdownButtonStyle = (open) => ({
    padding: "8px 14px",
    borderRadius: "4px",
    border: "1px solid black",
    backgroundColor: open ? "black" : "transparent",
    color: open ? "white" : "black",
    cursor: "pointer",
    marginLeft: "4px",
  });

  const dropdownMenuStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#000",
    borderRadius: "4px",
    marginTop: "4px",
    minWidth: "160px",
    zIndex: 100,
  };

  const dropdownLinkStyle = (path) => ({
    display: "block",
    padding: "8px 14px",
    textDecoration: "none",
    color: location.pathname === path ? "black" : "white",
    backgroundColor: location.pathname === path ? "white" : "black",
  });

  return (
    <nav style={navStyle}>
      {/* Top Links */}
      {topLinks.map((link) => (
        <Link key={link.path} to={link.path} style={linkStyle(link.path)}>
          {link.name}
        </Link>
      ))}

      {/* Learning React Dropdown */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setLearningDropdownOpen(!learningDropdownOpen)}
          style={dropdownButtonStyle(learningDropdownOpen)}
        >
          Learning React ▼
        </button>
        {learningDropdownOpen && (
          <div style={dropdownMenuStyle}>
            {learningLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={dropdownLinkStyle(link.path)}
                onClick={() => setLearningDropdownOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Hooks Dropdown */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setHooksDropdownOpen(!hooksDropdownOpen)}
          style={dropdownButtonStyle(hooksDropdownOpen)}
        >
          Hooks ▼
        </button>
        {hooksDropdownOpen && (
          <div style={dropdownMenuStyle}>
            {hookLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={dropdownLinkStyle(link.path)}
                onClick={() => setHooksDropdownOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Login / Logout */}
      <div style={{ marginLeft: "auto" }}>
        {!isLoggedIn ? (
          <>
            <Link to="/login" style={linkStyle("/login")}>
              Login
            </Link>
            <Link to="/signup" style={linkStyle("/signup")}>
              Signup
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} style={dropdownButtonStyle(false)}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;





























