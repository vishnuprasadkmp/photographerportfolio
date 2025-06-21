import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify'

import "../styles/Signin.css";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
 let navigate=useNavigate()

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { username, password } = formData;

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    try {
            const res = await axios.post("https://photographerportfolioserver-4.onrender.com/user/login", formData);

      // const res = await axios.post("http://localhost:5000/user/login", formData);
      console.log("Login success:", res.data);
      toast.success("user login successfully")
      navigate("/addPhotos")
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user)); 
      // You can store token if returned
      // localStorage.setItem("token", res.data.token);

      // Redirect or update global state here
    } catch (err) {
      console.error(err);
      toast.error("invalid credentials")

    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
