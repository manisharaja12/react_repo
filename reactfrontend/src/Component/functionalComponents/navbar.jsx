// // // Navbar.js
// // import React, { useState } from "react";
// // import { Link, useLocation, useNavigate } from "react-router-dom";

// // const Navbar = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const [learningDropdownOpen, setLearningDropdownOpen] = useState(false);
// //   const [hooksDropdownOpen, setHooksDropdownOpen] = useState(false);

// //   // Check login state from localStorage
// //   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

// //   // Logout function
// //   const handleLogout = () => {
// //     localStorage.removeItem("isLoggedIn");
// //     alert("Logged out successfully");
// //     navigate("/login");
// //   };

// //   const topLinks = [
// //     { path: "/", name: "Home" },
// //     { path: "/about", name: "About" },
// //     { path: "/contact", name: "Contact" },
// //   ];

// //   const learningLinks = [
// //     { path: "/props", name: "Props" },
// //     { path: "/state", name: "State" },
// //     { path: "/task", name: "Task" },
// //     { path: "/events", name: "Events" },
// //   ];

// //   const hookLinks = [
// //     { path: "/hooks/usestate", name: "UseState" },
// //     { path: "/hooks/useeffect", name: "UseEffect" },
// //     { path: "/hooks/useeffectapi", name: "UseEffectAPI" },
// //     { path: "/hooks/fakeimageapi", name: "FakeImageAPI" },
// //     { path: "/hooks/usecallback", name: "UseCallback" },
// //     { path: "/hooks/useref", name: "UseRef" },
// //     { path: "/hooks/usememo", name: "UseMemo" },
// //   ];

// //   // Styles
// //   const linkStyle = (path) => ({
// //     padding: "8px 14px",
// //     margin: "0 4px",
// //     textDecoration: "none",
// //     color: location.pathname === path ? "white" : "black",
// //     backgroundColor: location.pathname === path ? "black" : "transparent",
// //     borderRadius: "4px",
// //   });

// //   const navStyle = {
// //     display: "flex",
// //     alignItems: "center",
// //     padding: "10px 20px",
// //     backgroundColor: "#edd8e2ff",
// //     borderBottom: "2px solid #000",
// //   };

// //   const dropdownButtonStyle = (open) => ({
// //     padding: "8px 14px",
// //     borderRadius: "4px",
// //     border: "1px solid black",
// //     backgroundColor: open ? "black" : "transparent",
// //     color: open ? "white" : "black",
// //     cursor: "pointer",
// //     marginLeft: "4px",
// //   });

// //   const dropdownMenuStyle = {
// //     position: "absolute",
// //     top: "100%",
// //     left: 0,
// //     backgroundColor: "#000",
// //     borderRadius: "4px",
// //     marginTop: "4px",
// //     minWidth: "160px",
// //     zIndex: 100,
// //   };

// //   const dropdownLinkStyle = (path) => ({
// //     display: "block",
// //     padding: "8px 14px",
// //     textDecoration: "none",
// //     color: location.pathname === path ? "black" : "white",
// //     backgroundColor: location.pathname === path ? "white" : "black",
// //   });

// //   return (
// //     <nav style={navStyle}>
// //       {/* Top Links */}
// //       {topLinks.map((link) => (
// //         <Link key={link.path} to={link.path} style={linkStyle(link.path)}>
// //           {link.name}
// //         </Link>
// //       ))}

// //       {/* Learning React Dropdown */}
// //       <div style={{ position: "relative" }}>
// //         <button
// //           onClick={() => setLearningDropdownOpen(!learningDropdownOpen)}
// //           style={dropdownButtonStyle(learningDropdownOpen)}
// //         >
// //           Learning React ▼
// //         </button>
// //         {learningDropdownOpen && (
// //           <div style={dropdownMenuStyle}>
// //             {learningLinks.map((link) => (
// //               <Link
// //                 key={link.path}
// //                 to={link.path}
// //                 style={dropdownLinkStyle(link.path)}
// //                 onClick={() => setLearningDropdownOpen(false)}
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* Hooks Dropdown */}
// //       <div style={{ position: "relative" }}>
// //         <button
// //           onClick={() => setHooksDropdownOpen(!hooksDropdownOpen)}
// //           style={dropdownButtonStyle(hooksDropdownOpen)}
// //         >
// //           Hooks ▼
// //         </button>
// //         {hooksDropdownOpen && (
// //           <div style={dropdownMenuStyle}>
// //             {hookLinks.map((link) => (
// //               <Link
// //                 key={link.path}
// //                 to={link.path}
// //                 style={dropdownLinkStyle(link.path)}
// //                 onClick={() => setHooksDropdownOpen(false)}
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* Login / Logout */}
// //       <div style={{ marginLeft: "auto" }}>
// //         {!isLoggedIn ? (
// //           <>
// //             <Link to="/login" style={linkStyle("/login")}>
// //               Login
// //             </Link>
// //             <Link to="/signup" style={linkStyle("/signup")}>
// //               Signup
// //             </Link>
// //           </>
// //         ) : (
// //           <button onClick={handleLogout} style={dropdownButtonStyle(false)}>
// //             Logout
// //           </button>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // src/Component/functionalComponents/Navbar.jsx
// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const topLinks = [
//     { path: "/", name: "Home" },
//     { path: "/props", name: "Props" },
//     { path: "/state", name: "State" },
//     { path: "/task", name: "Task" },
//     { path: "/events", name: "Events" },
//     { path: "/contact", name: "Contact" },
//     { path: "/login", name: "Login" },
//     { path: "/signup", name: "Signup" },
//     { path: "/about", name: "About" },
//   ];

//   const hookLinks = [
//     { path: "/hooks/usestate", name: "UseState" },
//     { path: "/hooks/useeffect", name: "UseEffect" },
//     { path: "/hooks/useeffectapi", name: "UseEffectAPI" },
//     { path: "/hooks/fakeimageapi", name: "FakeImageAPI" },
//     { path: "/hooks/usecallback", name: "UseCallback" },
//     { path: "/hooks/useref", name: "UseRef" },
//   ];

//   const linkStyle = (path) => ({
//     padding: "6px 12px",
//     margin: "0 4px",
//     textDecoration: "none",
//     color: location.pathname === path ? "white" : "black",
//     backgroundColor: location.pathname === path ? "#007BFF" : "transparent",
//     borderRadius: "4px",
//   });

//   return (
//     <nav style={{ display: "flex", alignItems: "center", padding: "8px 16px", backgroundColor: "#f0f0f0" }}>
//       {topLinks.map((link) => (
//         <Link key={link.path} to={link.path} style={linkStyle(link.path)}>
//           {link.name}
//         </Link>
//       ))}

//       {/* Hooks Dropdown */}
//       <div style={{ position: "relative", marginLeft: "8px" }}>
//         <button
//           onClick={() => setDropdownOpen(!dropdownOpen)}
//           style={{
//             padding: "6px 12px",
//             borderRadius: "4px",
//             border: "1px solid #007BFF",
//             backgroundColor: dropdownOpen ? "#007BFF" : "transparent",
//             color: dropdownOpen ? "white" : "#007BFF",
//             cursor: "pointer",
//           }}
//         >
//           Hooks ▼
//         </button>

//         {dropdownOpen && (
//           <div
//             style={{
//               position: "absolute",
//               top: "100%",
//               left: 0,
//               backgroundColor: "#fff",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//               marginTop: "4px",
//               minWidth: "140px",
//             }}
//           >
//             {hookLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 style={{
//                   display: "block",
//                   padding: "6px 12px",
//                   textDecoration: "none",
//                   color: location.pathname === link.path ? "white" : "black",
//                   backgroundColor: location.pathname === link.path ? "#007BFF" : "transparent",
//                 }}
//                 onClick={() => setDropdownOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [learningOpen, setLearningOpen] = useState(false);
//   const [hooksOpen, setHooksOpen] = useState(false);

//   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     navigate("/login");
//   };

//   const linkStyle = (path) => ({
//     padding: "8px 14px",
//     textDecoration: "none",
//     color: location.pathname === path ? "white" : "black",
//     backgroundColor: location.pathname === path ? "black" : "transparent",
//     borderRadius: "4px",
//     marginRight: "6px",
//   });

//   return (
//     <nav style={{ display: "flex", alignItems: "center", padding: "10px", background: "#edd8e2ff" }}>
//       <Link to="/" style={linkStyle("/")}>Home</Link>
//       <Link to="/about" style={linkStyle("/about")}>About</Link>
//       <Link to="/contact" style={linkStyle("/contact")}>Contact</Link>

//       {/* Learning React */}
//       <div style={{ position: "relative" }}>
//         <button onClick={() => setLearningOpen(!learningOpen)}>Learning ▼</button>
//         {learningOpen && (
//           <div style={{ position: "absolute", background: "black" }}>
//             <Link to="/props">Props</Link>
//             <Link to="/state">State</Link>
//             <Link to="/task">Task</Link>
//             <Link to="/events">Events</Link>
//           </div>
//         )}
//       </div>

//       {/* Hooks */}
//       <div style={{ position: "relative", marginLeft: "10px" }}>
//         <button onClick={() => setHooksOpen(!hooksOpen)}>Hooks ▼</button>
//         {hooksOpen && (
//           <div style={{ position: "absolute", background: "black" }}>
//             <Link to="/hooks/usestate">UseState</Link>
//             <Link to="/hooks/useeffect">UseEffect</Link>
//             <Link to="/hooks/useeffectapi">UseEffectAPI</Link>
//             <Link to="/hooks/usecallback">UseCallback</Link>
//             <Link to="/hooks/useref">UseRef</Link>
//           </div>
//         )}
//       </div>

//       {/* Auth */}
//       <div style={{ marginLeft: "auto" }}>
//         {!isLoggedIn ? (
//           <>
//             <Link to="/login" style={linkStyle("/login")}>Login</Link>
//             <Link to="/signup" style={linkStyle("/signup")}>Signup</Link>
//           </>
//         ) : (
//           <button onClick={handleLogout}>Logout</button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [learningOpen, setLearningOpen] = useState(false);
  const [hooksOpen, setHooksOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const linkStyle = (path) => ({
    padding: "8px 14px",
    marginRight: "6px",
    textDecoration: "none",
    color: location.pathname === path ? "white" : "black",
    backgroundColor: location.pathname === path ? "black" : "transparent",
    borderRadius: "4px",
  });

  const dropdownBtnStyle = (open) => ({
    padding: "8px 14px",
    borderRadius: "4px",
    border: "1px solid black",
    backgroundColor: open ? "black" : "transparent",
    color: open ? "white" : "black",
    cursor: "pointer",
    marginRight: "6px",
  });

  const dropdownMenuStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "black",
    borderRadius: "4px",
    marginTop: "4px",
    minWidth: "160px",
    zIndex: 100,
    display: "flex",
    flexDirection: "column", // 🔥 vertical fix
  };

  const dropdownLinkStyle = {
    padding: "8px 14px",
    textDecoration: "none",
    color: "white",
    display: "block", // 🔥 important
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#edd8e2ff",
        borderBottom: "2px solid black",
      }}
    >
      {/* Top Links */}
      <Link to="/" style={linkStyle("/")}>Home</Link>
      <Link to="/about" style={linkStyle("/about")}>About</Link>
      <Link to="/contact" style={linkStyle("/contact")}>Contact</Link>

      {/* Learning Dropdown */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => {
            setLearningOpen(!learningOpen);
            setHooksOpen(false);
          }}
          style={dropdownBtnStyle(learningOpen)}
        >
          Learning ▼
        </button>

        {learningOpen && (
          <div style={dropdownMenuStyle}>
            <Link to="/props" style={dropdownLinkStyle} onClick={() => setLearningOpen(false)}>Props</Link>
            <Link to="/state" style={dropdownLinkStyle} onClick={() => setLearningOpen(false)}>State</Link>
            <Link to="/task" style={dropdownLinkStyle} onClick={() => setLearningOpen(false)}>Task</Link>
            <Link to="/events" style={dropdownLinkStyle} onClick={() => setLearningOpen(false)}>Events</Link>
          </div>
        )}
      </div>

      {/* Hooks Dropdown */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => {
            setHooksOpen(!hooksOpen);
            setLearningOpen(false);
          }}
          style={dropdownBtnStyle(hooksOpen)}
        >
          Hooks ▼
        </button>

        {hooksOpen && (
          <div style={dropdownMenuStyle}>
            <Link to="/hooks/usestate" style={dropdownLinkStyle} onClick={() => setHooksOpen(false)}>UseState</Link>
            <Link to="/hooks/useeffect" style={dropdownLinkStyle} onClick={() => setHooksOpen(false)}>UseEffect</Link>
            <Link to="/hooks/useeffectapi" style={dropdownLinkStyle} onClick={() => setHooksOpen(false)}>UseEffectAPI</Link>
            <Link to="/hooks/usecallback" style={dropdownLinkStyle} onClick={() => setHooksOpen(false)}>UseCallback</Link>
            <Link to="/hooks/useref" style={dropdownLinkStyle} onClick={() => setHooksOpen(false)}>UseRef</Link>
          </div>
        )}
      </div>

      {/* Auth */}
      <div style={{ marginLeft: "auto" }}>
        {!isLoggedIn ? (
          <>
            <Link to="/login" style={linkStyle("/login")}>Login</Link>
            <Link to="/signup" style={linkStyle("/signup")}>Signup</Link>
          </>
        ) : (
          <button onClick={handleLogout} style={dropdownBtnStyle(false)}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;











