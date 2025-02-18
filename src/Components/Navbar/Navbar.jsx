import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex flex-wrap justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-bold px-4">
        <a href="#" className="text-white no-underline">Rishi</a>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white mr-4" onClick={toggleMobileMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          )}
        </svg>
      </button>

      {/* Navbar Links */}
      <div className={`lg:flex lg:items-center lg:w-auto w-full ${isMobileMenuOpen ? "block" : "hidden"}`} id="navbarNav">
        <ul className="flex flex-col lg:flex-row lg:space-x-6 text-base lg:text-lg lg:items-center w-full lg:w-auto">
          <li className="block py-2 px-4 lg:inline-block hover:text-gray-400">
            <a href="#" className="text-white no-underline">Home</a>
          </li>
          <li className="block py-2 px-4 lg:inline-block hover:text-gray-400">
            <a href="#About" className="text-white no-underline">About</a>
          </li>
          <li className="block py-2 px-4 lg:inline-block hover:text-gray-400">
            <a href="#Service" className="text-white no-underline">Services</a>
          </li>
          <li className="block py-2 px-4 lg:inline-block hover:text-gray-400">
            <a href="#Skill" className="text-white no-underline">Skills</a>
          </li>
          <li className="block py-2 px-4 lg:inline-block hover:text-gray-400">
            <a href="#Project" className="text-white no-underline">Projects</a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mr-4 mt-2 lg:mt-0">
          <a href="mailto:rishispace21@gmail.com" className="hover:text-gray-400">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rishi-ram-357318243" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/rishiram21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
