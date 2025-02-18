import React, { useState } from "react";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="text-white flex w-full justify-center items-center p-10 md:p-40 space-x-4">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-4xl font-bold flex leading-normal tracking-tighter">
          Hi, I'm <span className="text-[#465697] ml-2">Rishi Ram</span>
        </h1>
        <p className="text-sm md:text-xl tracking-tight mt-4">
          I'm a passionate React Developer specializing in web development. 
          I love building interactive and scalable applications. Let's create something amazing together!
        </p>

        <div className="mt-5 md:mt-10 flex space-x-4">
          <button 
            className="text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            onClick={() => setShowForm(!showForm)}
          >
            Contact Me
          </button>
          <a 
            href="/Resume.docx" 
            download="Rishi Resume - React Dev .docx"
            className="text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#28a745]"
          >
            Download Resume
          </a>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-2 rounded-md text-black border border-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-2 rounded-md text-black border border-gray-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-2 rounded-md text-black border border-gray-300"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
      <div className="hidden md:block md:w-1/4">
        <img src="/rishi.jpg" alt="Profile" className="w-full rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Home;
