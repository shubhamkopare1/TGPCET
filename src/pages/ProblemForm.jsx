import React, { useState } from "react";
import axios from "axios";

const ProblemForm = () => {
  const [formData, setFormData] = useState({
    problemCode: "",
    teamName: "",
    link: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!formData.problemCode || !formData.teamName || !formData.link) {
      setError("⚠️ All fields are required.");
      return;
    }

    try {
      const res = await axios.post("https://techkruti-backend.onrender.com/api/problem-form/submit", formData);
      setMessage("✅ Submission successful!");
      setFormData({ problemCode: "", teamName: "", link: "" });
    } catch (err) {
      setError("❌ Submission failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 sm:p-6 lg:p-8">
    
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 transition-all duration-300 transform hover:scale-[1.005]">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          🚀 Submit Your Porblem
        </h2>

        {message && (
          <p className="mb-4 p-3 rounded-lg bg-green-900/30 text-green-300 text-center animate-fade-in">
            {message}
          </p>
        )}
        {error && (
          <p className="mb-4 p-3 rounded-lg bg-red-900/30 text-red-300 text-center animate-fade-in">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Problem Code
            </label>
            <input
              type="text"
              name="problemCode"
              value={formData.problemCode}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-400 transition-all"
              placeholder="e.g., TGPDS1"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Team Name
            </label>
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-400 transition-all"
              placeholder="Your team name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Repository Link
            </label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-400 transition-all"
              placeholder="https://github.com/Make a Team Name repo"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/20"
          >
            Launch Submission 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProblemForm;