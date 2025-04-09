import React from "react";
import {  FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#0D1117] to-[#1A1F2B]  text-white py-4 px-6 text-center">
      {/* Floating Robot */}
      <img
        src="/robot.png" // Update with your image path
        alt="Robot"
        className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-28 animate-bounce"
      />
      <h2 className="text-base sm:text-lg font-semibold text-cyan-400 uppercase">
        Hackathon & Ideathon
      </h2>
      {/* Footer Content */}
      <div className="max-w-4xl mx-auto">
        {/* <h2 className="text-2xl font-bold text-cyan-400">TECH-AXION 2k25</h2> */}
        <p className="text-gray-400 mt-2">

          Tulsiramji Gaikwad Patil College of Engineering and Technology, Nagpur
        </p>
        <div className="flex justify-center space-x-6 mt-4">
    
          <a href="https://www.instagram.com/it_tgpcet/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-400 hover:text-pink-500 text-2xl" />
          </a>
          <a href="http://youtube.com/@tgpcetinformationtechnolog8192" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-gray-400 hover:text-red-500 text-2xl" />
          </a>
        
        </div>
        {/* Copyright */}
        
        <p class="text-gray-500 text-xs">
          Developed by{" "}
          <span class="text-cyan-400 font-semibold">
           Shubham Kopare & Chhagan Rakhade
          </span>{" "}
          {/* <span class="text-cyan-400 font-semibold">
            Btech-6th Sem
          </span>{" "} */}
        </p>
        <p className="text-gray-500 text-sm ">
          contact :<span class="text-cyan-400 font-semibold">8485029672 & </span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
