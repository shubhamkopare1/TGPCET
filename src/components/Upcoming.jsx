import React from "react";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Hackathon 2K25",
    description:
      "Where Innovation Meets Execution!",
    img: "hack2.jpg",
    entryFee: 200,
    date: "19 April 2025",
    time:"10:00 AM - 4:00 PM",
    location: "TGPCET,Nagpur",
    registrationLink: "https://forms.gle/Di2Gcrgf5UAirkTV6",
  }, 
  {
    id: 2,
    title: "IDEATHON",
    description:
      "Solve Real-World Problems with Innovative Solutions",
    img: "Your paragraph text.jpg",
    entryFee: "200",
    date: "17 April 2025",
    time:"10:00 AM - 4:00 PM",
    location: "TGPCET,Nagpur",
    registrationLink: "https://forms.gle/SNxLWYtXRzdvnB2j9",
  },
];

const Upcoming = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation function

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-transparent  p-8">
      <h1 className="text-[1.8rem] sm:text-[1.9rem] md:text-[2rem] pb-3 lg:text-[2.2rem] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
        Upcoming Events
      </h1>

      {/* Event Grid */}
      <div className="w-full h-full max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-[#101026] rounded-lg max-w-[400px] w-full p-5 text-left relative transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
          >
            {/* Event Image */}
            <img
              src={event.img}
              alt={event.title}
              className="w-full object-cover rounded-md"
            />

            {/* Event Details */}
            <div className="pb-0">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">{event.title}</h2>
                <span className="text-yellow-400 font-bold text-lg">
                  {" "}
                  ₹{event.entryFee}
                </span>
              </div>
              <p className="text-gray-300 text-sm mt-2">{event.description}</p>

              {/* Date & Location */}
              <div className="flex flex-col items-start gap-1 text-sm text-gray-400 mt-3">
                <span className="flex items-center gap-1 text-orange-400 font-semibold">
                  🗓️ Date : {event.date}
                </span>
                <span className="flex items-center gap-1 text-cyan-400  font-semibold">
                ⏳ Time : {event.time}
                </span>
                <span className="flex items-center  gap-1">
                  📍Location : {event.location}
                </span>
              </div>
              <div class="mt-5 flex gap-4"><button class="w-1/2 bg-purple-600 text-white text-sm px-4 py-2 rounded-md hover:bg-purple-700 transition hover:pointer" onClick={() => navigate(`/event/${event.id}`)}>View Details</button><a class="w-1/2 bg-green-600 text-white text-center text-sm px-4 py-2 rounded-md hover:bg-green-700 transition"  href={event.registrationLink || "#"}>Register</a></div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Upcoming;
