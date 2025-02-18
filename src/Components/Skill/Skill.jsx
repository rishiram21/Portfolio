import React from 'react';
import { FaReact, FaHtml5, FaCss3, FaPython, FaJava, FaChartArea, FaJs, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Import icons

const Skill = () => {
  const skills = [
    { name: "ReactJS", level: 90, icon: <FaReact size={20} /> },
    { name: "HTML", level: 95, icon: <FaHtml5 size={20} /> },
    { name: "CSS", level: 90, icon: <FaCss3 size={20} /> },
    { name: "Python", level: 85, icon: <FaPython size={20} /> },
    { name: "Java", level: 80, icon: <FaJava size={20} /> },
    { name: "Power BI", level: 75, icon: <FaChartArea size={20} /> },
    { name: "JavaScript", level: 90, icon: <FaJs size={20} /> },
    { name: "Node.js", level: 80, icon: <FaNodeJs size={20} /> },
    { name: "SQL", level: 85, icon: <FaDatabase size={20} /> },
  ];

  return (
    <div className="bg-black bg-opacity-30 text-white py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-8">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col"> {/* Added flex-col */}
            <div className="flex items-center justify-between mb-4 w-full"> {/* Added w-full */}
              <div className="flex items-center"> {/* Added flex items-center */}
                {skill.icon} <h3 className="text-xl font-semibold ml-2">{skill.name}</h3> {/* Added margin-left */}
              </div>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="bg-gray-700 rounded-full h-2 w-full"> {/* Added w-full */}
              <div
                className="bg-[#465697] rounded-full h-2"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;