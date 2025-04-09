import React from "react";

const supportTeam = [
  {
    id: 3,
    name: "Shubham Kopare",
    role: "Technical Support",
    email: "shubhamkopare2004@gmail.com",
    phone: "+91 8485029672"
  },
  {
    id: 1,
    name: "Chhagan Rakhade",
    role: "Technical Support",
    email: "chhaganrakhade7@gmail.com",
    phone: "+91 9158396794"
  },
  {
    id: 2,
    name: "Himanshu Dhenge",
    role: "Technical Support",
    email: "himanshudhenge4@gmail.com",
    phone: "+91 9322913858"
  },
 
];

const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-6 text-white">
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-10 shadow-2xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-10 text-center drop-shadow-lg">
          Contact Us
        </h1>

        {/* Support Team Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportTeam.map((person) => (
            <div
              key={person.id}
              className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-xl p-6 border border-cyan-500/30 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold text-cyan-300">{person.name}</h2>
              <p className="text-gray-400 text-sm mb-3">{person.role}</p>
              <p className="text-gray-300 text-sm mb-2">
                📧{" "}
                <a
                  href={`mailto:${person.email}`}
                  className="text-blue-400 hover:underline break-all"
                >
                  {person.email}
                </a>
              </p>
              <p className="text-gray-300 text-sm">
                📞{" "}
                <a
                  href={`tel:${person.phone}`}
                  className="text-blue-400 hover:underline"
                >
                  {person.phone}
                </a>
              </p>
            </div>
          ))}
        </div>

        {/* Google Maps Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Location</h2>
          <div className="overflow-hidden rounded-xl shadow-lg border border-cyan-500/30">
            <iframe
              title="TGPCET Location"
              className="w-full h-64 sm:h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3495438371925!2d79.0125!3d20.9607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd495fb10c4e4f3%3A0x77a4d2c0a5a8f6f9!2sTulsiramji%20Gaikwad-Patil%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1712345678901"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
