import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("https://techkruti-backend.onrender.com/api/auth/login", formData);

      // Store token and admin status
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("isAdmin", true); // Assume the API returns admin status

      setMessage("Admin login successful!");
      
      // Delay the redirection so message is visible
      setTimeout(() => {
        window.location.href = "/repos";
      }, 1500);
      
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md  mx-auto bg-white p-6 shadow-lg rounded-lg mb-35 mt-40 md:mt-32 sm:mt-20 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3">
      <h2 className="text-2xl font-bold text-center">🔑 Admin Login</h2>

      {message && <p className="text-green-600 text-center mt-2">{message}</p>}
      {error && <p className="text-red-600 text-center mt-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required 
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required 
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition flex justify-center items-center"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;