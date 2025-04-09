import React, { useState } from "react";

const HackathonForm = () => {
  const [formData, setFormData] = useState({
    leaderName: "",
    leaderEmail: "",
    leaderCollege: "",
    leaderNumber: "",
    teamName: "",
    teamMembers: [{ name: "", email: "", number: "" }],
  });

  const [status, setStatus] = useState(""); // success / error message

  const handleChange = (e, index = null, field = null) => {
    const { name, value } = e.target;
    if (index !== null && field) {
      const members = [...formData.teamMembers];
      members[index][field] = value;
      setFormData({ ...formData, teamMembers: members });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addMember = () => {
    setFormData({
      ...formData,
      teamMembers: [...formData.teamMembers, { name: "", email: "", number: "" }],
    });
  };

  const resetForm = () => {
    setFormData({
      leaderName: "",
      leaderEmail: "",
      leaderCollege: "",
      leaderNumber: "",
      teamName: "",
      teamMembers: [{ name: "", email: "", number: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdDJ5TafFnoLVAlennfrzzy5HNiclvqsbZwpQm1sqXcmVoJJQ/formResponse";

    const formPayload = new FormData();

    // NOTE: Replace entry IDs with actual ones from your form
    formPayload.append("entry.1111111111", formData.leaderName);
    formPayload.append("entry.2222222222", formData.leaderEmail);
    formPayload.append("entry.3333333333", formData.leaderCollege);
    formPayload.append("entry.4444444444", formData.leaderNumber);
    formPayload.append("entry.5555555555", formData.teamName);

    formData.teamMembers.forEach((member) => {
      formPayload.append("entry.6666666666", member.name);
      formPayload.append("entry.7777777777", member.email);
      formPayload.append("entry.8888888888", member.number);
    });

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors", // needed for Google Forms
      body: formPayload,
    })
      .then(() => {
        setStatus("success");
        alert("Form Submitted Successfully!");
        resetForm();
      })
      .catch((err) => {
        console.error("Submission error:", err);
        setStatus("error");
        alert("There was an error submitting the form.");
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Hackathon Registration
      </h1>

      {status === "success" && (
        <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
          Form submitted successfully!
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
          Error submitting form. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="leaderName"
          placeholder="Leader Name"
          value={formData.leaderName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="leaderEmail"
          placeholder="Leader Email"
          value={formData.leaderEmail}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="leaderCollege"
          placeholder="Leader College"
          value={formData.leaderCollege}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="tel"
          name="leaderNumber"
          placeholder="Leader Mobile Number"
          value={formData.leaderNumber}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="teamName"
          placeholder="Team Name"
          value={formData.teamName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <div>
          <label className="font-semibold block mb-1">Team Members</label>
          {formData.teamMembers.map((member, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-200 rounded bg-gray-50">
              <p className="font-medium mb-2">Member {index + 1}</p>
              <input
                type="text"
                placeholder="Member Name"
                value={member.name}
                onChange={(e) => handleChange(e, index, "name")}
                className="w-full p-2 border border-gray-300 rounded mb-2"
                required
              />
              <input
                type="email"
                placeholder="Member Email"
                value={member.email}
                onChange={(e) => handleChange(e, index, "email")}
                className="w-full p-2 border border-gray-300 rounded mb-2"
                required
              />
              <input
                type="tel"
                placeholder="Member Mobile Number"
                value={member.number}
                onChange={(e) => handleChange(e, index, "number")}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addMember}
            className="text-blue-600 text-sm hover:underline mt-1"
          >
            + Add Team Member
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HackathonForm;
