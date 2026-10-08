import React from "react";

const Footer = () => {
  return (
    <div className="flex text-sm md:text-lg justify-between p-5 md:p-10 border-t-1 border-gray-500">
      <div className="text-gray-500">
        <h1>Designed & Developed with React & Vite</h1>
        <h2>© 2026 Hussain Shaikh</h2>
      </div>
      <div className="text-gray-500 flex flex-col ">
        <a target="_blank" href="https://www.linkedin.com/in/hussain-shaikh-3958b2441/">Linkedin</a>
        <a target="_blank" href="https://github.com/hussainshaikhsystem">GitHub</a>
      </div>
    </div>
  );
};

export default Footer;
