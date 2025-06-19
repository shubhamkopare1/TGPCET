import React, { useState } from "react";

const ParticipantForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    leader: "",
    utrId: "",
    college: "",
    upiPlatform: "",
    teamName: "",
  });

  const [members, setMembers] = useState([{ name: "", phone: "" }]);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [submitted, setSubmitted] = useState(false); // ✅ Added state to disable form

  const upiOptions = ["GPay", "PhonePe", "Paytm", "Others"];

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "10-digit phone required";
    if (!formData.leader.trim()) newErrors.leader = "Leader name required";
    if (!formData.utrId.trim()) newErrors.utrId = "UTR ID is required";
    if (!formData.college.trim()) newErrors.college = "College name is required";
    if (!formData.upiPlatform) newErrors.upiPlatform = "Select UPI platform";
    if (!formData.teamName.trim()) newErrors.teamName = "Team name is required";

    members.forEach((member, i) => {
      if (!member.name.trim()) newErrors[`member-name-${i}`] = "Name required";
      if (!/^\d{10}$/.test(member.phone))
        newErrors[`member-phone-${i}`] = "10-digit phone required";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...members];
    newMembers[index][field] = value;
    setMembers(newMembers);
  };

  const addMember = () => {
    setMembers([...members, { name: "", phone: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    const payload = { ...formData, members };

    try {
      const response = await fetch("https://techkruti-backend.onrender.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccess("✅ Data submitted successfully!");
        setSubmitted(true); // ✅ Disable the form
        setErrors({});
      } else {
        setSuccess("❌ Submission failed");
      }
    } catch (err) {
      console.error(err);
      setSuccess("❌ Server error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="w-full max-w-xl bg-black bg-opacity-80 p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Hackathon Participation Form</h2>
        <form onSubmit={handleSubmit} noValidate className="space-y-4">

          {/* Input fields */}
          {[
            { label: "Leader Name", name: "leader" },
            { label: "Email", name: "email" },
            { label: "Phone", name: "phone" },
            { label: "College Name", name: "college" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-white mb-1">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleFormChange}
                disabled={submitted}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors[field.name] && (
                <p className="text-red-400 text-sm mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}
          {/* Team Name */}
<div>
  <label className="block text-white mb-1">Team Name</label>
  <input
    type="text"
    name="teamName"
    value={formData.teamName}
    onChange={handleFormChange}
    disabled={submitted}
    className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  {errors.teamName && (
    <p className="text-red-400 text-sm mt-1">{errors.teamName}</p>
  )}
</div>
          {/* Team Members Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold mt-6 mb-2">Team Members</h3>
            {members.map((member, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white">Member Name</label>
                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) => handleMemberChange(index, "name", e.target.value)}
                    disabled={submitted}
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors[`member-name-${index}`] && (
                    <p className="text-red-400 text-sm mt-1">{errors[`member-name-${index}`]}</p>
                  )}
                </div>
                <div>
                  <label className="text-white">Phone Number</label>
                  <input
                    type="text"
                    value={member.phone}
                    onChange={(e) => handleMemberChange(index, "phone", e.target.value)}
                    disabled={submitted}
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors[`member-phone-${index}`] && (
                    <p className="text-red-400 text-sm mt-1">{errors[`member-phone-${index}`]}</p>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addMember}
              disabled={submitted}
              className={`w-full mt-2 text-sm underline ${submitted ? 'text-gray-400 cursor-not-allowed' : 'text-blue-400 hover:text-blue-500'}`}
            >
              + Add Another Member
            </button>
          </div>

          {/* UTR ID */}
          <div>
            <label className="block text-white mb-1">UTR ID</label>
            <input
              type="text"
              name="utrId"
              value={formData.utrId}
              onChange={handleFormChange}
              disabled={submitted}
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.utrId && (
              <p className="text-red-400 text-sm mt-1">{errors.utrId}</p>
            )}
          </div>

          {/* UPI Platform */}
          <div>
            <label className="block text-white mb-1">UPI Platform Used</label>
            <select
              name="upiPlatform"
              value={formData.upiPlatform}
              onChange={handleFormChange}
              disabled={submitted}
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select Platform --</option>
              {upiOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.upiPlatform && (
              <p className="text-red-400 text-sm mt-1">{errors.upiPlatform}</p>
            )}
          </div>

          {/* QR Section */}
          <div className="mt-4 text-center">
            <p className="text-white mb-2 font-medium">Scan this QR to Pay</p>
            <img
              src="/public/images/download.png"
              alt="UPI Payment QR Code"
              className="w-40 mx-auto rounded-md shadow-lg border border-gray-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitted}
            className={`w-full ${submitted ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'} text-white py-2 mt-4 rounded-lg font-semibold transition duration-200`}
          >
            {submitted ? "Submitted" : "Submit"}
          </button>
        </form>

        {/* Success Message */}
        {success.startsWith("✅") && (
          <div className="text-center mt-4">
            <a
              href="https://chat.whatsapp.com/YourGroupInviteCodeHere"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              👉 Join WhatsApp Group
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParticipantForm;
