import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-col justify-between items-center bg-[#465697] text-white p-2 md:p-2 text-sm md:text-base"
    >
      {/* Contact Title Section */}
      <div className="text-center md:text-left mb-3 md:mb-0">
        <h1 className="text-lg text-center md:text-xl font-bold">Contact</h1>
        <h3 className="text-xs md:text-sm">Feel free to reach out!</h3>
      </div>

      {/* Contact Info List */}
      <ul className="flex flex-col md:flex-row gap-3 text-xs md:text-sm">
        {/* Email */}
        <li className="flex items-center gap-2">
          <MdOutlineEmail size={18} />
          <a href="mailto:rishispace21@gmail.com" className="hover:text-gray-300">
            rishispace21@gmail.com
          </a>
        </li>

        {/* LinkedIn */}
        <li className="flex items-center gap-2">
          <CiLinkedin size={18} />
          <a
            href="https://www.linkedin.com/in/rishi-ram-357318243"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            rishi-ram
          </a>
        </li>

        {/* GitHub */}
        <li className="flex items-center gap-2">
          <FaGithub size={18} />
          <a
            href="https://github.com/rishiram21"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            rishiram21
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
