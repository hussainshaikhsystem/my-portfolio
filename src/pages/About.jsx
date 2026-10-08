import React from "react";

const About = () => {
  return (
    <div className="min-h-screen md:p-10  w-full flex flex-col items-center gap-10  justify-center">
      <div className="md:flex flex-row justify-between w-[70%] md:gap-10 ">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Background</h1>
        <div className="text-[#BFC4D7] md:text-xl flex flex-col gap-4">
          <p>
            I'm a self-taught developer who got into programming because I
            wanted to turn ideas into real products people can actually use.
            What started as curiosity about how websites work quickly grew into
            a serious pursuit of building full-stack applications from scratch.
          </p>
          <p>
            Alongside completing my BCA through IGNOU, I taught myself the MERN
            stack. I started with HTML, CSS and JavaScript, then moved on to
            React, Tailwind CSS and Redux on the front end, and Node.js,
            Express, MongoDB and Mongoose on the back end. I use Git and GitHub
            for version control and deploy my work on platforms like Vercel and
            Render.
          </p>
          <p>
            I've put this into practice by building projects like ShopNest, an
            e-commerce platform, and Eventora, an event management app. Right
            now I'm focused on freelancing, helping clients turn their ideas
            into fast, responsive web applications, and my long-term goal is to
            work with international clients remotely and grow into AI
            engineering.
          </p>
        </div>
      </div>

      <div className="w-[85%] md:w-[70%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Education & Learning */}
      <div className="w-[85%] md:w-[70%] grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
        <h2 className="text-2xl md:text-3xl font-bold">Education & Learning</h2>

        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              Bachelor of Computer Applications -{" "}
              <span className="text-cyan-400">IGNOU</span>
            </h3>
            <p className="text-base md:text-lg text-[#BFC4D7]">2026 - 2029</p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              Full Stack Development -{" "}
              <span className="text-cyan-400">Self-taught</span>
            </h3>
            <p className="text-base md:text-lg text-[#BFC4D7]">
              2026 - Present
            </p>
            <ul className="list-disc ml-6 mt-3 text-[#BFC4D7] text-base md:text-lg flex flex-col gap-1">
              <li>
                Built ShopNest, a full-stack e-commerce platform with the MERN
                stack.
              </li>
              <li>
                Built Eventora, an event management app with React, Node.js and
                MongoDB.
              </li>
              <li>Learned Git, GitHub and deployment on Vercel and Render.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="w-[85%] md:w-[70%] grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
        <h2 className="text-2xl md:text-3xl font-bold">Languages</h2>
        <ul className="list-disc ml-6 text-[#BFC4D7] text-base md:text-lg flex flex-col gap-1">
          <li>Hindi (native)</li>
          <li>English at the workplace</li>
        </ul>
      </div>

      <div className="w-[85%] md:w-[70%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* What I'm looking for */}
      <div className="w-[85%] md:w-[70%] grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
        <h2 className="text-2xl md:text-3xl font-bold">What I'm looking for</h2>
        <ul className="list-disc ml-6 text-[#BFC4D7] text-base md:text-lg flex flex-col gap-1">
          <li>Freelance web projects, MERN stack</li>
          <li>Long term remote clients</li>
        </ul>
      </div>

      <div className="w-[85%] md:w-[70%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Services */}
      <div className="w-[85%] md:w-[70%] grid grid-cols-1 md:grid-cols-[1fr_3fr] mb-5 gap-4 md:gap-12">
        <h2 className="text-2xl md:text-3xl font-bold">Services</h2>
        <ul className="list-disc ml-6 text-[#BFC4D7] text-base md:text-lg flex flex-col gap-1">
          <li>Responsive websites</li>
          <li>REST API development</li>
          <li>Full-stack MERN apps</li>
          <li>Portfolio and business sites</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
