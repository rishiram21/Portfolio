import React, { useState } from "react";

const Project = () => {
  // Project data categorized into two sections
  const technicalProjects = [
    {
      name: "Examination System",
      description: "Frontend - Awt || Backend - Jsp || Database - MySQL",
      image: "/project-image1.jpg",
    },
    {
      name: "Shop Antique",
      description:
        "Frontend - Reactjs || Backend - Nodejs/Expressjs || Database - MongoDB",
      image: "/project-image2.jpg",
    },
    {
      name: "Football Fixture Association",
      description: "Frontend - Html, css || Backend - Php || Database - MySQL",
      image: "/project-image3.jpg",
    },
  ];

  const researchProjects = [
    {
      name: "Football Analysis",
      description:
        "This research project includes prediction of 2026 Fifa World Cup Winner",
      image: "/project-image4.jpg",
    },
    {
      name: "Law & Justice",
      description: "This research project includes Fairness in Legal System",
      image: "/project-image6.jpg",
    },
  ];

  const [flipped, setFlipped] = useState(
    Array(technicalProjects.length + researchProjects.length).fill(false)
  );

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div id="Project" className="py-16 bg-black bg-opacity-30 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient">
        Projects
      </h2>

      {/* Technical Projects Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-center text-blue-300 mb-6">
          Technical Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          {technicalProjects.map((project, index) => (
            <div
              key={index}
              className="relative w-full h-64 perspective hover:scale-105 transition-transform duration-300"
              onClick={() => handleFlip(index)}
            >
              <div
                className={`w-full h-full transition-transform duration-500 transform-style-3d ${
                  flipped[index] ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div
                  className={`absolute inset-0 bg-gray-800 rounded-lg shadow-lg flex justify-center items-center ${
                    flipped[index] ? "hidden" : "flex"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                {/* Back Side */}
                <div
                  className={`absolute inset-0 bg-[#465697] text-white rounded-lg shadow-lg flex flex-col justify-center items-center p-5 ${
                    flipped[index] ? "flex" : "hidden"
                  }`}
                >
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-sm text-center mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Projects Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-center text-blue-300 mb-6">
          Research Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 place-items-center">
          {researchProjects.map((project, index) => (
            <div
              key={index + technicalProjects.length}
              className="relative w-full h-64 perspective hover:scale-105 transition-transform duration-300"
              onClick={() => handleFlip(index + technicalProjects.length)}
            >
              <div
                className={`w-full h-full transition-transform duration-500 transform-style-3d ${
                  flipped[index + technicalProjects.length] ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div
                  className={`absolute inset-0 bg-gray-800 rounded-lg shadow-lg flex justify-center items-center ${
                    flipped[index + technicalProjects.length] ? "hidden" : "flex"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                {/* Back Side */}
                <div
                  className={`absolute inset-0 bg-[#465697] text-white rounded-lg shadow-lg flex flex-col justify-center items-center p-5 ${
                    flipped[index + technicalProjects.length] ? "flex" : "hidden"
                  }`}
                >
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-sm text-center mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
