import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const tabs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="nav flex gap-3 m-5 md:m-7 items-center justify-between md:m-0 md:px-8 md:py-6">
      <div className="flex md:gap-3 items-center">
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
            height="18"
            rx="2"
            stroke="#A020F0"
            strokeWidth="1.8"
          />
          <path
            d="M7 8L10 11L7 14"
            stroke="#A020F0"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14H16"
            stroke="#A020F0"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        <h1 className="text-xs md:text-2xl font-bold text-white">
          Hussain Shaikh
        </h1>
      </div>

      <div>
        <ul className="flex gap-2 md:gap-6 rounded-full p-1 md:p-3 bg-white/10 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <NavLink
                to={tab.path}
                end={tab.path === "/"}
                key={tab}
                className={({ isActive }) =>
                  `block text-xs md:text-base px-2 py-1 md:px-4 md:py-2 rounded-full transition font-semibold ${
                    isActive
                      ? "bg-purple-700 text-white shadow-[0_0_12px_rgba(160,32,240,0.5)]"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {tab.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2 md:gap-6">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/hussain-shaikh-3958b2441/"
        >
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#C04BFF"
              d="M20.45 20.45H16.9V14.89C16.9 13.56 16.88 11.85 15.05 11.85C13.19 11.85 12.91 13.3 12.91 14.7V20.45H9.36V9H12.77V10.56H12.82C13.29 9.66 14.45 8.71 16.18 8.71C19.78 8.71 20.45 11.08 20.45 14.16V20.45ZM5.35 7.43C4.21 7.43 3.29 6.5 3.29 5.36C3.29 4.22 4.21 3.3 5.35 3.3C6.49 3.3 7.41 4.22 7.41 5.36C7.41 6.5 6.49 7.43 5.35 7.43ZM7.13 20.45H3.57V9H7.13V20.45ZM22.22 0H1.77C0.79 0 0 0.77 0 1.73V22.27C0 23.23 0.79 24 1.77 24H22.22C23.2 24 24 23.23 24 22.27V1.73C24 0.77 23.2 0 22.22 0Z"
            />
          </svg>
        </a>
        <a target="_blank" href="https://github.com/hussainshaikhsystem">
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#C04BFF"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.22.68-.48
    0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46
    -.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83
    .09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68
    -.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85 0 1.7.11 2.5.33
    1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68
    0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75
    0 .26.18.57.69.47A10.01 10.01 0 0 0 22 12c0-5.523-4.477-10-10-10Z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
