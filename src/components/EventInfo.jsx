import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Hackathon 2K25",
    tagline: "Where Innovation Meets Execution!",
    date: "26th April, 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "TGPCET Campus",
    entryFee: "₹200 per group (Max. 4 members) ",
    entryFees: "₹300 per group (Max. 5 or 6 members) ",
    
    prizePool: "₹50,000+",
    registrationLink: "/ParticipantForm",
    domains: [
      "AI/ML & Emerging Trends",
      "Cyber Security & Privacy",
      "Sustainable Technology",
      "Blockchain & Web 3",
      "Renewable Vehicle Innovation",
    ],
    rules: [
      "Bring your own laptops and required accessories",
      "Internet access will be provided",
      "Follow ethical coding practices",
      "Respect team collaboration and fair play",
      "Judging criteria: Innovation, functionality, scalability",
      "The hackathon lasts for exactly 7 hours",
      "Teams will receive problem statements at the beginning of the event",
      "Final submissions must be made before the deadline",
      "Judges will evaluate based on creativity, feasibility, and execution",
      "Registration fees are non-refundable",
    ],
    coordinators: [
      { name: "Dr. Pravin Tajne", phone: "+91 9876543210" },
      { name: "Prof. Nilesh Nagrale", phone: "+91 8087305249" },
      { name: "Prof. T.P.Raju", phone: "+91 9823162972" },
      { name: "Prof. Nilesh Mhaiskar", phone: "+91 9561166493" },
      { name: "Prof. Apeksha Raut", phone: "+91 8446188223" },
      { name: "Mr. Saurabh Umredkar", phone: "+91 9552807842" },
    ],
  },
  {
    id: 2,
    title: "Ideathon", // Fixed key from `name` to `title`
    tagline: "Shape the Future With Your Ideas",
    date: "26th April 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "TGPCET Campus",
    entryFee: "₹200 per group (Max. 4 members) ",
    entryFees: "₹300 per group (Max. 5 or 6 members) ",
    registrationLink: "https://forms.gle/SNxLWYtXRzdvnB2j9",
    prizePool: "₹50,000+",
    themes: [
      "Sustainability",
      "Artificial Intelligence",
      "Smart Cities & Infrastructure",
      "Rural Development",
      "Water Conservation",
    ],
    rules: [
      "Teams must present unique and original ideas",
      "Plagiarism will result in disqualification",
      "Presentations should include problem statement, proposed solution, feasibility, and impact",
      "Use of visual aids like PPTs, models, or prototypes is encouraged",
      "Ideas will be evaluated based on innovation, relevance, and implementation plan",
      "Time allotted for each presentation: 5–7 minutes",
      "Be respectful and professional during Q&A",
      "The judge’s decision will be final and binding",
      "Registration fees are non-refundable",
    ],
    coordinators: [
      { name: "Prof. Hiteshkumar Mishra", phone: "8554827908" },
      { name: "Dr. Vinay Kumar", phone: "8765432109" },
      { name: "Dr. Atul Jichkar", phone: "9637717768" },
      { name: "Dr. Sapna Lonare", phone: "8605727476" },
      { name: "Prof. Vaishali Malekar", phone: "8788499807" },
      { name: "Prof. Jonna Naresh", phone: "9030987991" },
      { name: "Prof. Megha Khaire", phone: "7774812558" },
    ],
  },
];

const EventInfo = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [event]);

  if (!event) {
    return <h2 className="text-center text-white">Event not found</h2>;
  }

  return (
    <div className="w-full py-10 min-h-auto text-white flex flex-col items-center px-4 sm:px-10">
      {/* Hero Section */}
      <div className="w-full max-w-6xl text-center">
        <h1 className="font-bold text-4xl sm:text-5xl mb-3 md:text-6xl bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          {event.title}
        </h1>
        
        {event.tagline && (
          <p className="text-gray-300 text-md sm:text-lg mt-2">
            🚀 <strong>{event.tagline}</strong>
          </p>
        )}
       {event.id === 1 && event.tagline && (
  <p className="text-gray-300 text-md sm:text-lg mt-2 px-2 sm:px-0">
    💡 Join a high-energy <strong>6-hour coding marathon</strong> where top minds solve{" "}
    <strong>real-world challenges</strong>, compete with <strong>elite developers</strong>, and{" "}
    <strong>showcase their skills</strong> for exciting rewards!
  </p>
)}

      </div>

      {/* Event Details */}
      <div className="w-full max-w-4xl bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg mt-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400">📍 Event Details</h2>
        <ul className="mt-4 space-y-2 text-gray-300 text-sm sm:text-md">
          <li><strong>📅 Date:</strong> {event.date}</li>
          <li><strong>⏰ Time:</strong> {event.time}</li>
          <li><strong>📍 Venue:</strong> {event.venue}</li>
          <li><strong>💰 Entry Fee:</strong> {event.entryFee}</li>
          <li><strong>💰 Entry Fee:</strong> {event.entryFees}</li>
          <li><strong>👥 Team Size:</strong> {event.teamSize}</li>
          <li><strong>🏆 Prize Pool:</strong> {event.prizePool}</li>
        </ul>
      </div>

      {/* Domains */}
      {event.domains && (
        <div className="w-full max-w-4xl bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-400">🌍 Hackathon Domains</h2>
          <ul className="mt-4 space-y-2 text-gray-300 text-sm sm:text-md">
            {event.domains.map((domain, idx) => (
              <li key={idx}>🔹 {domain}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Themes (for Ideathon) */}
      {event.themes && (
        <div className="w-full max-w-4xl bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-400">🎯 Ideathon Themes</h2>
          <ul className="mt-4 space-y-2 text-gray-300 text-sm sm:text-md">
            {event.themes.map((theme, idx) => (
              <li key={idx}>🔸 {theme}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Rules */}
      {event.rules && (
        <div className="w-full max-w-4xl bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-red-400">📜 Rules & Guidelines</h2>
          <ul className="mt-4 space-y-2 text-gray-300 text-sm sm:text-md">
            {event.rules.map((rule, idx) => (
              <li key={idx}>✅ {rule}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Registration Button */}
      <div className="mt-10">
        <a
          href={event.registrationLink || "#"}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg transition block text-center"
        >
          🚀 Register Now
        </a>
      </div>

      {/* Coordinators */}
      {event.coordinators && (
        <div className="mt-10 bg-black p-4 sm:p-6 rounded-lg shadow-lg text-center w-full max-w-4xl">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">📞 Contact Coordinators</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {event.coordinators.map((coordinator, index) => (
              <h2
                key={index}
                className="text-md sm:text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300 cursor-pointer"
              >
                {coordinator.name}: <span className="text-blue-500 hover:text-white">{coordinator.phone}</span>
              </h2>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventInfo;
