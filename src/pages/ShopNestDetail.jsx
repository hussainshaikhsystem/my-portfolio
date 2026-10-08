import React from "react";
import { useNavigate } from "react-router-dom";
import shopnestimg from "../images/shopnest img.png";

const tags = ["React", "Redux", "Node.js", "Express.js", "MongoDB", "Mongoose"];

const features = [
  {
    title: "User Authentication (JWT)",
    body: (
      <>
        Users can register and log in securely. The backend verifies
        credentials and issues a <strong>JWT token</strong>, which the frontend
        sends with each request to access protected routes. Passwords are never
        stored as plain text, they are <strong>hashed</strong> before being
        saved in the database.
      </>
    ),
  },
  {
    title: "Product Browsing",
    body: (
      <>
        The shop displays products fetched from a <strong>REST API</strong>{" "}
        built with Express and Node.js. Each product is stored in{" "}
        <strong>MongoDB</strong> using <strong>Mongoose</strong> schemas, which
        keeps the data structured and validated.
      </>
    ),
  },
  {
    title: "Shopping Cart Management",
    body: (
      <>
        Users can add items to the cart, remove them and update quantities.
        Cart state is handled with <strong>Redux</strong>, so the UI updates
        across the app without reloading the page.
      </>
    ),
  },
  {
    title: "Clean & Responsive UI",
    body: (
      <>
        The interface is built with <strong>React</strong> and{" "}
        <strong>Tailwind CSS</strong> and works smoothly on both mobile and
        desktop screens.
      </>
    ),
  },
];

const stack = [
  {
    title: "Backend",
    items: [
      "REST API with separate routes, controllers and models to keep the code easy to maintain.",
      <>
        <strong>Mongoose</strong> schemas validate data before it reaches the
        database.
      </>,
      "Middleware protects private routes by checking the user's token.",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Component-based structure with reusable UI pieces.",
      <>
        <strong>Redux</strong> for global state such as cart and user data.
      </>,
      <>
        Styled with <strong>Tailwind CSS</strong> for a consistent responsive
        layout.
      </>,
    ],
  },
  {
    title: "Deployment",
    items: [
      <>
        Frontend hosted on <strong>Vercel</strong> and backend on{" "}
        <strong>Render</strong>.
      </>,
    ],
  },
];

const cardClass =
  "relative overflow-hidden flex flex-col gap-4 p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(160,32,240,0.25)]";

const Shine = () => (
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
);

const Divider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
);

const ShopNestDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen items-center mt-15">
      {/* Upper */}
      <div className="w-[85%] md:w-[70%] flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-12">
        <div className="flex flex-col gap-5 md:gap-8 md:w-[45%]">
          <button
            onClick={() => navigate("/projects")}
            className="group flex items-center justify-center gap-2 w-40 h-14 text-2xl rounded-full text-white bg-gradient-to-br from-[#5b5cff] via-[#4f8cff] to-[#35c9f5] border border-white/20 shadow-[0_8px_25px_rgba(79,140,255,0.35),inset_0_1px_0_rgba(255,255,255,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(79,140,255,0.6),inset_0_1px_0_rgba(255,255,255,0.5)] active:scale-95"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Projects
          </button>

          <h1 className="text-5xl md:text-7xl font-extrabold">ShopNest</h1>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-white font-semibold whitespace-nowrap cursor-default bg-gradient-to-b from-[#9a2fd6] to-[#7611A6] border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(160,32,240,0.6)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="md:w-[50%] text-base md:text-xl leading-relaxed text-[#BFC4D7]">
          A full-stack e-commerce web application for browsing products and
          managing a shopping cart. It includes user authentication and a REST
          API for handling products, users and orders. Built with the MERN stack
          (MongoDB, Express, React and Node.js), the project focuses on a smooth
          shopping experience, secure login and clean code organization.
        </p>
      </div>

      <div className="mt-10 w-full">
        <Divider />
      </div>

      {/* Image */}
      <div className="group relative w-[85%] md:w-[60%] mt-10">
        <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>
        <img
          className="w-full rounded-3xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition duration-500 group-hover:scale-[1.02] group-hover:border-purple-500/40"
          src={shopnestimg}
          alt="ShopNest"
        />
      </div>

      {/* Key features */}
      <section className="w-[85%] md:w-[70%] my-10 flex flex-col gap-6">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Key Features & How They Work
        </h2>
        {features.map((f) => (
          <div key={f.title} className={cardClass}>
            <Shine />
            <h3 className="text-xl md:text-3xl font-bold">{f.title}</h3>
            <p className="text-base md:text-xl leading-relaxed text-[#BFC4D7]">
              {f.body}
            </p>
          </div>
        ))}
      </section>

      <Divider />

      {/* Tech stack */}
      <section className="w-[85%] md:w-[70%] my-10 flex flex-col gap-6">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Tech Stack Details
        </h2>
        {stack.map((s) => (
          <div key={s.title} className={cardClass}>
            <Shine />
            <h3 className="text-xl md:text-3xl font-bold">{s.title}</h3>
            <ul className="list-disc ml-6 flex flex-col gap-2 text-base md:text-xl text-[#BFC4D7] marker:text-purple-500">
              {s.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Live demo */}
      <a
        href="https://shopnest-e-commerce-project.onrender.com/"
        target="_blank"
        rel="noreferrer"
        className="group relative overflow-hidden flex justify-center items-center mb-4 w-48 h-14 text-xl font-semibold text-white rounded-full bg-gradient-to-br from-[#5b5cff] via-[#4f8cff] to-[#35c9f5] border border-white/20 shadow-[0_8px_25px_rgba(79,140,255,0.35),inset_0_1px_0_rgba(255,255,255,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(79,140,255,0.6)] active:scale-95"
      >
        <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
        <span className="relative">Live Demo →</span>
      </a>
      <p className="mb-10 text-sm text-gray-500 text-center px-6">
        First load may take up to a minute (free hosting).
      </p>
    </div>
  );
};

export default ShopNestDetail;