import React from "react";
import shopnest from "../images/shopnest img.png";
import eventora from "../images/eventora img.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="flex justify-center i">
      <div className="projects mt-10 md:mt-20 w-[70%] flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="upper w-full">
          <h1 className="text-3xl md:text-5xl font-extrabold">My Projects</h1>
          <h2 className="text-sm md:text-2xl text-[#56596E] mt-2">
            See my most recent projects below to get an idea of my past
            experience.
          </h2>
        </div>

        {/* Projects */}
        <div className="lower mt-16 flex flex-col gap-20 w-full">
          {/* ShopNest */}
          <div className="group flex flex-col items-center gap-4 text-center cursor-pointer">
            <h1 className="uppercase font-bold text-5xl md:text-6xl tracking-tight transition duration-300 group-hover:text-purple-300">
              ShopNest
            </h1>
            <p className="max-w-xl text-gray-400">
              A full-stack e-commerce platform with product browsing, cart
              management and secure user authentication. Built with the MERN
              stack and a REST API backend for smooth, scalable shopping.
            </p>

            <div className="relative w-full md:w-[60%] mt-4">
              {/* hover glow */}
              <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition duration-300 group-hover:border-purple-500/40 group-hover:-translate-y-2">
              <Link to='/projects/shopnest'>
              <img
                  className="w-full transition duration-500 group-hover:scale-105"
                  src={shopnest}
                  alt="ShopNest"
                />
                <span className="md:hidden absolute bottom-3 right-3 px-3 py-1.5 text-xs font-semibold rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                  View Details →
                </span>

                {/* Desktop: hover overlay */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 font-semibold">
                    View Details →
                  </span>
                </div></Link>
                
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Eventora */}
          <div className="group flex flex-col items-center gap-4 text-center cursor-pointer">
            <h1 className="uppercase font-bold text-5xl md:text-6xl tracking-tight transition duration-300 group-hover:text-purple-300">
              Eventora
            </h1>
            <p className="max-w-xl text-gray-400">
              A modern event management app to discover, create and manage
              events in one place. Features a responsive React interface backed
              by Node.js, Express and MongoDB.
            </p>

            <div className="relative w-full md:w-[60%] mt-4 mb-10">
              <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition duration-300 group-hover:border-purple-500/40 group-hover:-translate-y-2">
                <Link to='/projects/eventora'>
                  <img
                    className="w-full transition duration-500 group-hover:scale-105"
                    src={eventora}
                    alt="Eventora"
                  />
                  <span className="md:hidden absolute bottom-3 right-3 px-3 py-1.5 text-xs font-semibold rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                    View Details →
                  </span>

                  {/* Desktop: hover overlay */}
                  <div className="hidden md:flex absolute inset-0 items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 font-semibold">
                      View Details →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
