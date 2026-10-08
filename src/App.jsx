import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ShopNestDetail from "./pages/ShopNestDetail.jsx";
import EventoraDetail from "./pages/EventoraDetail.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05050a] text-white">
      {/* upar-left blue glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/25 blur-3xl rounded-full pointer-events-none"></div>

      {/* upar-right purple glow */}
      <div className="absolute -top-40 right-0 w-[600px] h-[400px] bg-purple-700/30 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/projects/shopnest" element={<ShopNestDetail/>}></Route>
          <Route path="/projects/eventora" element={<EventoraDetail/>}></Route>
          
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
