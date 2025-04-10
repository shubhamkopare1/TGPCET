import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, LogIn, LogOut, Code2, Home, Contact, Info, Trophy } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Toggle authentication state
  const toggleAuth = () => {
    setIsAuthenticated((prev) => !prev);
  };
  const checkAuthStatus = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    
    setIsAuthenticated(token);
  };

  useEffect(() => {
    checkAuthStatus(); // Initial check

    // Listen for login/logout changes
    const handleStorageChange = () => checkAuthStatus();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };


  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Hackhathon", path: "/event/1", icon: <Rocket size={18} /> },
    { name: "Ideathon", path: "/event/2", icon: <Rocket size={18} /> },
    { name: "About", path: "/about", icon: <Info size={18} /> },
    { name: "Contact Us", path: "/contact", icon: <Contact size={18} /> },
    //  { name: "Register problem", path: "/ProblemForm", icon: <Code2 size={18} /> },
    
    { name: "Sponsor", path: "/sponsor", icon: <Trophy size={18} /> },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className=" sticky top-0 w-full bg-black  border-b-[3px] border-cyan-500/50 shadow-lg shadow-cyan-500/20 z-[9999] pb-4 animate-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-lg shadow-lg">
              <Code2 className="text-white" size={28} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
             
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link, index) => (
              <motion.div key={index} className="relative group" whileHover={{ scale: 1.1 }}>
                <Link to={link.path} className="flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300">
                  <span className="mr-2 opacity-70 group-hover:opacity-100">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </Link>

                {/* Animated Underline */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}

            {/* Auth Button */}
            <motion.div whileHover={{ scale: 1.05 }}>
              {isAuthenticated ? (
                <button
                onClick={() => {
                  toggleAuth();
                  handleLogout();
                }}
                
                  className="ml-4 px-6 py-2 bg-gradient-to-r from-red-600 to-cyan-500 rounded-full text-white font-semibold flex items-center hover:shadow-lg transition-all"
                >
                  <LogOut className="mr-2" size={18} />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold flex items-center hover:shadow-lg transition-all"
                >
                  <LogIn className="mr-2" size={18} />
                  Admin Login
                </Link>
              )}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 bg-gray-800 rounded-lg text-cyan-400 hover:bg-gray-700 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 w-3/4 h-screen bg-gray-900/90 flex flex-col items-center justify-start pt-24 space-y-6 z-40"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full px-8"
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 rounded-xl transition-all"
                >
                  <span className="mr-4 text-cyan-400">{link.icon}</span>
                  <span className="text-lg font-medium">{link.name}</span>
                </Link>
              </motion.div>
            ))}

            {/* Mobile Auth Button */}
            <div className="w-full px-8 mt-6 border-t border-gray-800 pt-4">
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    toggleAuth();
                    setIsOpen(false);
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-cyan-500 rounded-full text-white font-semibold flex items-center justify-center"
                >
                  <LogOut className="mr-2" size={18} />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold flex items-center justify-center"
                >
                  <LogIn className="mr-2" size={18} />
                  Admin Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;