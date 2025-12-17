// Signup.js
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({ email: "", username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // used for redirect

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://classroom-project-manisharaja12.onrender.com/signup",
        formData
      );
      setMessage(response.data.message);

      // Redirect to login after 1 second
      if (response.data.message.includes("successful")) {
        setTimeout(() => navigate("/login"), 1000);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {message && <p style={{ color: message.includes("successful") ? "green" : "red" }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <br />
        <div>
          <label>Username</label><br />
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <br />
        <div>
          <label>Password</label><br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <br />
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Signup;
