import React from "react";
import heroImg from "../images/hero.png";
import shopnest from "../images/shopnest img.png";
import eventora from "../images/eventora img.png";
import htmllogo from "../images/html logo.png";
import csslogo from "../images/css img.webp";
import jslogo from "../images/js logo.png";
import tailwindlogo from "../images/tailwind logo.png";
import gitlogo from "../images/git logo.jpg";
import githublogo from "../images/Github-Logo.png";
import nodelogo from "../images/node logo.png";
import expresslogo from "../images/express logo.png";
import mongodblogo from "../images/mogodb logo.png";
import mongooselogo from "../images/mongoose logo.png";
import renderlogo from "../images/render logo.png";
import vercellogo from "../images/vercel logo.jpg";
import reactlogo from "../images/react loho.webp";
import reduxlogo from "../images/redux.webp";
import netlifylogo from "../images/netlify.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-96px)] px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-700/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full max-w-6xl py-12">
        {/* Left content */}
        <div className="flex flex-col gap-5 md:w-[55%]">
          <div className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-purple-600/15 border border-purple-500/30 text-sm text-purple-200">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Freelance
          </div>

          <h1 className="font-bold text-5xl md:text-7xl tracking-tight bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Hussain Shaikh
          </h1>

          <p className="text-lg text-purple-300 font-medium">
            React • Node.js • Express • MongoDB
          </p>

          <h2 className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-xl text-balance">
            Full Stack Developer building modern, responsive and scalable web
            applications with React, Node.js and MongoDB.
          </h2>

          <div className="flex gap-4 mt-2">
            <button
              onClick={() => navigate("/projects")}
              className="px-6 py-3 rounded-full bg-purple-700 hover:bg-purple-600 transition font-semibold shadow-[0_0_20px_rgba(160,32,240,0.4)]"
            >
              View Projects
            </button>
            <a
              href="https://wa.me/918595557482?text=Hi%20Hussain%2C%20I%20saw%20your%20portfolio"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image with glow */}
        <div className="relative md:w-[40%]">
          <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-full -z-10"></div>
          <img
            className="w-full h-[480px] object-cover rounded-3xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition duration-500"
            src={heroImg}
            alt="Hussain Shaikh"
          />
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 w-[70%] p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
        <div className="flex flex-col gap-3">
          {" "}
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="16"
              rx="2"
              stroke="#A020F0"
              strokeWidth="1.8"
            />
            <path d="M3 9H21" stroke="#A020F0" strokeWidth="1.8" />
            <path
              d="M6.5 6.5H6.51"
              stroke="#A020F0"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M9.5 6.5H9.51"
              stroke="#A020F0"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <h1 className="text-2xl font-bold text-white">Frontend</h1>
          <h2 className="text-sm leading-relaxed text-gray-400">
            Proven ability to build and maintain innovative Frontend
            Applications with extensice knowledge of HTML, Vanilla CSS ,
            Tailwind CSS, Javascript
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {" "}
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="7"
              rx="2"
              stroke="#A020F0"
              strokeWidth="1.8"
            />
            <rect
              x="3"
              y="14"
              width="18"
              height="7"
              rx="2"
              stroke="#A020F0"
              strokeWidth="1.8"
            />
            <path
              d="M7 6.5H7.01"
              stroke="#A020F0"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M7 17.5H7.01"
              stroke="#A020F0"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <h1 className="text-2xl font-bold text-white">Backend</h1>
          <h2 className="text-sm leading-relaxed text-gray-400">
            I build secure and scalable backend systems using Node.js and
            Express.js. I design efficient REST APIs to handle authentication,
            data, and application logic
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {" "}
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="12"
              cy="6"
              rx="8"
              ry="3"
              stroke="#A020F0"
              strokeWidth="1.8"
            />
            <path
              d="M4 6V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V6"
              stroke="#A020F0"
              strokeWidth="1.8"
            />
            <path
              d="M4 12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12"
              stroke="#A020F0"
              strokeWidth="1.8"
            />
          </svg>
          <h1 className="text-2xl font-bold text-white">Database</h1>
          <h2 className="text-sm leading-relaxed text-gray-400">
            I work with MongoDB to store, manage, and efficiently retrieve
            application data.
          </h2>
        </div>
      </div>
      <div className="projects mt-20 w-[70%] flex flex-col items-center">
        {/* Heading */}
        <div className="upper w-full">
          <h1 className="text-5xl font-extrabold">Selected Projects</h1>
          <h2 className="text-2xl text-[#56596E] mt-2">
            Take a look below at some of my projects
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
                <Link to="/projects/shopnest">
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
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Divider (sirf beech mein) */}
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

            <div className="relative w-full md:w-[60%] mt-4">
              <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition duration-300 group-hover:border-purple-500/40 group-hover:-translate-y-2">
                <Link to="/projects/eventora">
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

      <div className=" technologies w-[70%] mt-20">
        <h1 className="text-2xl md:text-5xl font-bold md:font-extrabold text-center">
          Technologies
        </h1>
        <div className="ox flex flex-col items-center gap-5 mt-20 md:grid md:grid-cols-3  md:justify-items-center md:gap-10">
          <div>
            <img
              className="w-40 rounded-3xl h-40 object-cover text-center"
              src={htmllogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">HTML</p>
          </div>
          <div>
            <img
              className="w-40 rounded-3xl h-40 object-cover text-center"
              src={csslogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">CSS</p>
          </div>
          <div>
            <img
              className="w-40 rounded-3xl h-40 object-cover text-center"
              src={jslogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">Javascript</p>
          </div>
          <div>
            <img
              className="w-40 rounded-3xl h-40 object-cover text-center"
              src={tailwindlogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">Tailwind CSS</p>
          </div>
          <div>
            <img
              className="w-40 rounded-3xl h-40 object-cover text-center"
              src={reactlogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">React</p>
          </div>
          <div>
            <img
              className="w-40 rounded-3xl h-40 object-cover text-center"
              src={reduxlogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">Redux</p>
          </div>
          <div>
            <img
              className="w-40 rounded-3xl h-40 object-cover text-center"
              src={gitlogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">Git</p>
          </div>
          <div>
            <img
              className="invert w-40 rounded-3xl h-40 object-cover text-center"
              src={githublogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">Github</p>
          </div>
          <div>
            <img
              className="w-40 rounded-3xl h-40 object-cover text-center"
              src={nodelogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">Node</p>
          </div>
          <div>
            <img
              className="w-40 rounded-3xl h-40 object-cover text-center"
              src={expresslogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">Express</p>
          </div>
          <div>
            <img
              className="w-40 rounded-3xl h-40 object-cover text-center"
              src={mongodblogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">Mongo DB</p>
          </div>
          <div>
            <img
              className="w-40 rounded-3xl h-40 object-cover text-center"
              src={mongooselogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">Mongoose</p>
          </div>
          <div>
            <img
              className="invert w-40 rounded-3xl h-40 object-cover text-center"
              src={vercellogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">Vercel</p>
          </div>
          <div>
            <img
              className="invert w-40 rounded-3xl h-40 object-cover text-center"
              src={renderlogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">Render</p>
          </div>
          <div>
            <img
              className="invert w-40 rounded-3xl h-40 object-contain text-center"
              src={netlifylogo}
              alt=""
            />
            <p className="text-center mt-5 font-bold">Netlify</p>
          </div>
        </div>
      </div>

      <div className="w-[85%] md:w-[60%] mt-20 mb-40 md:mt-40 md:mb-20 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h1 className="text-xl md:text-4xl leading-snug">
          Want to know more about myself?
        </h1>

        <button
          onClick={() => navigate("/about")}
          className="group w-fit flex items-center justify-center gap-2 md:gap-4 px-6 py-3 md:px-10 md:py-4 rounded-full text-base md:text-2xl font-semibold text-white bg-gradient-to-br from-pink-500 via-purple-700 to-indigo-900 shadow-[0_8px_30px_rgba(160,32,240,0.35)] transition duration-300 hover:shadow-[0_8px_40px_rgba(160,32,240,0.6)] hover:-translate-y-1 active:scale-95"
        >
          About
          <svg
            className="shrink-0 w-5 h-5 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-1.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12H19" />
            <path d="M13 6L19 12L13 18" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Home;
