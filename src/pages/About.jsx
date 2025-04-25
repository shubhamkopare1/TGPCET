import React from "react";

const About = () => {
  return (
    <div className=" min-h-screen py-12 px-6 text-white">
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-10 shadow-2xl">
        <h2 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-10 text-center drop-shadow-lg">
          About the Event
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          <span className="font-bold text-cyan-300 text-xl">Hackathon & Ideathon 2K25</span> is a <span className="text-yellow-400 font-semibold">National Level Competition</span> organized by the R&D Cell of <span className="text-cyan-300 font-semibold">TGPCET, Nagpur</span>. The event offers a platform for passionate coders and thinkers to collaborate, innovate, and bring bold ideas to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-xl p-6 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Hackathon</h3>
            <p className="text-gray-300 mb-2">📅 <span className="text-white font-semibold">26th April 2025</span></p>
            <p className="text-sm mb-3 text-gray-400">A 6-hour coding marathon.</p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>AI & Emerging Trends</li>
              <li>Cyber Security & Privacy</li>
              <li>Sustainable Technology</li>
              <li>Web 3 & Blockchain</li>
              <li>Renewable Vehicle Innovations</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-xl p-6 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Ideathon</h3>
            <p className="text-gray-300 mb-2">📅 <span className="text-white font-semibold">26th April 2025</span></p>
            <p className="text-sm mb-3 text-gray-400">Shape the future with your ideas.</p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Sustainability</li>
              <li>Artificial Intelligence</li>
              <li>Smart Cities & Infrastructure</li>
              <li>Rural Development</li>
              <li>Water Conservation</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-300 text-lg mb-4">
          💸 <span className="text-cyan-300 font-semibold">Registration Fees:</span><br />
          ₹200 per group (Max. 4 members)<br />
          ₹300 per group (Max. 5 or 6 members)
        </p>

        <p className="text-yellow-400 font-semibold text-lg mb-6">🎁 Prizes worth up to ₹50,000 + Certificates for all participants</p>

        <p className="text-gray-300 text-center mt-8">
          📍 <span className="text-cyan-300">Venue:</span> TGPCET, Nagpur &nbsp; | &nbsp; 🕙 <span className="text-cyan-300">Time:</span> 10 AM
        </p>
      </div>
    </div>
  );
};

export default About;
