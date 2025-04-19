import { useState, useEffect } from "react";
import React from "react";

const Countdown = () => {
  const targetDate = new Date("April 26, 2025 10:00:00").getTime();


  // Initial time left
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  // Function to calculate remaining time
  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining();
      setTimeLeft(remaining);

      if (
        remaining.days === "00" &&
        remaining.hours === "00" &&
        remaining.minutes === "00" &&
        remaining.seconds === "00"
      ) {
        clearInterval(interval); // Stop countdown
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="w-full text-white bg-transparent min-h-auto ">
      <div className="p-6 flex flex-col items-center text-center">
        <h1 className="text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold tracking-[5px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 animate-gradient-flow">
          National Level Event  2K25
        </h1>
        <h3 className="text-[1.5rem] sm:text-[1.5rem] md:text-[1.5rem] lg:text-[3rem] font-bold tracking-wide uppercase  bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 bg-clip-text text-transparent mt">
          Prize Upto 50K
        </h3>
        <h5 className="text-lg sm:text-sm md:text-2xl lg:text-2xl text-cyan-400 text-center mt-3 max-w-4xl leading-relaxed">
          Organized by R&D Cell In Tulsiramji
          Gaikwad Patil College of Engineering and Technology, Nagpur
        </h5>
        <h5 className="text-lg sm:text-sm md:text-2xl lg:text-2xl text-cyan-400 text-center max-w-4xl leading-relaxed">
          (An Autonomous Institute)
        </h5>
        <br />
        <br />
        <h1 className="text-[1.8rem] sm:text-[1.9rem] md:text-[2rem] lg:text-[2.2rem] font-bold uuppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
          Countdown
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div
              key={index}
              className="text-white bg-gradient-to-br from-gray-900 to-gray-800 border-[3px] border-purple-500/60 rounded-xl shadow-md shadow-purple-500/50 hover:shadow-lg hover:shadow-purple-500/70 transition-all duration-300 ease-in-out font-extrabold text-[clamp(1rem,3vw,1.5rem)] w-[clamp(80px,15vw,130px)] p-4 text-center"
            >
              <span className="text-[clamp(1.5rem,4vw,2rem)] text-cyan-300">
                {value}
              </span>
              <br />
              <span className="text-xs uppercase tracking-widest text-gray-300">
                {unit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
