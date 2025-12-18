// // // const express = require('express');
// // const mongoose = require('mongoose');
// // const bcrypt = require('bcrypt');
// // const app = express();
// // const PORT = 8001;

// // const Signup = require('./modules/signupSchema');

// // app.use(express.json());

// // // Connect to MongoDB
// // mongoose.connect('mongodb://localhost:27017/Mern')
// // .then(() => console.log("MongoDB connected successfully"))
// // .catch(err => console.log("MongoDB connection failed", err));

// // app.get('/', (req, res) => {
// //     res.send("Welcome to backend server");
// // });

// // app.get('/signup', (req, res) => {
// //     res.send("Signup page - Use POST method to submit signup data");
// // });

// // // Signup route (hash password directly)
// // app.post('/signup', async (req, res) => {
// //     const { email, username, password } = req.body;

// //     // Hash the password (10 rounds)
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const user = new Signup({
// //         email,
// //         username,
// //         password: hashedPassword
// //     });

// //     await user.save();
// //     res.json({ message: "Signup successful", data: { email, username } });
// // });

// // // Login route (compare hashed password)
// // app.post('/login', async (req, res) => {
// //     const { email, password } = req.body;

// //     const user = await Signup.findOne({ email });
// //     if (!user) return res.send("User not found");

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.send("Wrong password");

// //     res.send("Login successful");
// // });

// // app.listen(PORT, () => {
// //     console.log(`Server running on port ${PORT}`);
  
// // });

// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const app = express();
// const PORT = 8001;

// const Signup = require('./modules/signupSchema');

// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/Mern')
// .then(() => console.log("MongoDB connected successfully"))
// .catch(err => console.log("MongoDB connection failed", err));

// app.get('/', (req, res) => {
//     res.send("Welcome to backend server");
// });

// app.get('/signup', (req, res) => {
//     res.send("Signup page - Use POST method to submit signup data");
// });

// // Signup route (hash password directly)
// app.post('/signup', async (req, res) => {
//     const { email, username, password } = req.body;

//     // Hash the password (10 rounds)
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new Signup({
//         email,
//         username,
//         password: hashedPassword
//     });

//     await user.save();
//     res.json({ message: "Signup successful", data: { email, username } });
// });

// // Login route (compare hashed password)
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     const user = await Signup.findOne({ email });
//     if (!user) return res.send("User not found");

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.send("Wrong password");

//     res.send("Login successful");
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:8001/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password })
//     });

//     const data = await res.json();

//     if (res.ok) {
//       navigate("/"); // redirect to Home
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Login</button>

//       <p>
//         No account? <a href="/signup">Sign up</a>
//       </p>
//     </form>
//   );
// }

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("isLoggedIn", "true");
        setSuccess(true);
        setMessage("✅ Login successful");
        setTimeout(() => navigate("/"), 1200);
      } else {
        setSuccess(false);
        setMessage(`❌ ${data.message}`);
      }
    } catch (err) {
      setSuccess(false);
      setMessage("❌ Server error");
    }
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleLogin}>
        <h2 style={{ textAlign: "center" }}>Login</h2>

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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Login
        </button>

        <p style={{ textAlign: "center" }}>
          No account? <a href="/signup">Signup</a>
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
  flexDirection: "column", // 🔥 fixes side-by-side issue
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

export default Login;

