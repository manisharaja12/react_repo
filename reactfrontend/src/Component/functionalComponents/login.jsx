// Login.js
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://classroom-project-manisharaja12.onrender.com/login",
        formData
      );
      setMessage(response.data.message);

      if (response.data.isLoggedIn) {
        // Redirect to home after login
        navigate("/");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {message && <p style={{ color: message.includes("successful") ? "green" : "red" }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <br />
        <div>
          <label>Password</label><br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default Login;
