import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import CodeBackground from "./components/CodeBackground";
 import Home from "./pages/Home";
 import './App.css'
import About from "./pages/About";
import Contact from "./pages/Contact";
// import EventInf from "./components/EventInfo";
import Event from "./pages/Event";
import Sponsor from "./pages/Sponsor";
import ProblemForm from "./pages/ProblemForm";
import ProblemList from "./pages/ProblemList";
import ProblemStatements from "./pages/Problems";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import HackathonForm from "./pages/HackathonForm";
// import Sponsor from "./pages/Sponsor";
// import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ParticipantForm from "./pages/ParticipateForm";
import ParticipantsList from "./pages/ParticipantsList";
function App() {
  return (
    <>

<CodeBackground id="particles" />
{/* <ScrollToTop/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
          <Route path="/sponsor" element={<Event />} /> 
          <Route path="/event/:id" element={<Event />} />
  {/* <Route path="/admin" element={<Admin />} /> */}
  <Route path="/register" element={<RegisterForm/>} />
  <Route path="/Sponsor" element={<Sponsor />} />
        <Route path="/ProblemStatements8485" element={<ProblemStatements />} />
        <Route path="/ProblemForm" element={<ProblemForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/repos" element={<ProblemList/>} />
        <Route path="/hackhathonForm" element={<HackathonForm/>} />
        <Route path="/ParticipantForm" element={<ParticipantForm/>} />
        <Route path="/Participantlist" element={<ParticipantsList/>} />
       
      </Routes>
  
      <Footer/>
    </>
  );
}

export default App;

