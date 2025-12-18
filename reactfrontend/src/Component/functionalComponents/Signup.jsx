// // // Signup.js
// // import { Link, useNavigate } from "react-router-dom";
// // import { useState } from "react";
// // import axios from "axios";

// // function Signup() {
// //   const [formData, setFormData] = useState({ email: "", username: "", password: "" });
// //   const [message, setMessage] = useState("");
// //   const navigate = useNavigate(); // used for redirect

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post(
// //         "https://classroom-project-manisharaja12.onrender.com/signup",
// //         formData
// //       );
// //       setMessage(response.data.message);

// //       // Redirect to login after 1 second
// //       if (response.data.message.includes("successful")) {
// //         setTimeout(() => navigate("/login"), 1000);
// //       }
// //     } catch (error) {
// //       setMessage(error.response?.data?.message || "Signup failed");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Sign Up</h2>
// //       {message && <p style={{ color: message.includes("successful") ? "green" : "red" }}>{message}</p>}
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Email</label><br />
// //           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
// //         </div>
// //         <br />
// //         <div>
// //           <label>Username</label><br />
// //           <input type="text" name="username" value={formData.username} onChange={handleChange} required />
// //         </div>
// //         <br />
// //         <div>
// //           <label>Password</label><br />
// //           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
// //         </div>
// //         <br />
// //         <button type="submit">Sign Up</button>
// //       </form>
// //       <br />
// //       <p>Already have an account? <Link to="/login">Login</Link></p>
// //     </div>
// //   );
// // }

// // export default Signup;


// import { useState } from "react";
// import axios from "axios"; // For making requests to your backend

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8001/signup", { name, email, password });
//       alert("Signup successful!");
//       setName("");
//       setEmail("");
//       setPassword("");
//     } catch (err) {
//       alert("Signup failed!");
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
//         <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:8001/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, username, password })
//     });

//     if (res.ok) {
//       navigate("/login");
//     }
//   };

//   return (
//     <form onSubmit={handleSignup}>
//       <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
//       <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
//       <button>Sign up</button>
//     </form>
//   );
// }

// export default Signup;



import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8001/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setMessage("✅ Signup successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setSuccess(false);
        setMessage(`❌ ${data.message || "Signup failed"}`);
      }
    } catch (err) {
      setSuccess(false);
      setMessage("❌ Server error");
    }
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSignup}>
        <h2 style={{ textAlign: "center" }}>Signup</h2>

        {message && (
          <div
            style={{
              padding: "8px",
              textAlign: "center",
              borderRadius: "4px",
              backgroundColor: success ? "#d4edda" : "#f8d7da",
              color: success ? "#155724" : "#721c24",
            }}
          >
            {message}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Signup
        </button>

        <p style={{ textAlign: "center" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

/* 🔹 INLINE STYLES */
const containerStyle = {
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const formStyle = {
  width: "320px",
  display: "flex",
  flexDirection: "column", // 🔥 vertical layout fix
  gap: "12px",
  padding: "20px",
  border: "2px solid black",
  borderRadius: "8px",
  backgroundColor: "#fff",
};

const inputStyle = {
  padding: "8px",
  fontSize: "14px",
};

const buttonStyle = {
  padding: "8px",
  backgroundColor: "black",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default Signup;
