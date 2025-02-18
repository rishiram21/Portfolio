import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row overflow-hidden items-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-4 md:p-12" // Changed to flex-col and added padding adjustments
    >
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gradient mb-6"> {/* Added margin-bottom */}
          About Me
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8"> {/* Changed to flex-col and added gap */}
          {/* Frontend Developer Card */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-2 md:p-4"> {/* Added padding adjustments */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-xl"> {/* Added padding adjustments */}
              <h1 className="text-xl md:text-2xl font-semibold text-gradient mb-2"> {/* Adjusted text size and margin */}
                Frontend Developer
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-gray-300"> {/* Adjusted text size */}
                I specialize in building interactive and user-friendly web
                applications using React.
              </p>
            </div>
          </div>

          {/* Backend Developer Card */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-2 md:p-4"> {/* Added padding adjustments */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-xl"> {/* Added padding adjustments */}
              <h1 className="text-xl md:text-2xl font-semibold text-gradient mb-2"> {/* Adjusted text size and margin */}
                Backend Developer
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-gray-300"> {/* Adjusted text size */}
                Proficient in building robust backend solutions using Node.js,
                Express, and Java.
              </p>
            </div>
          </div>

          {/* Database Developer Card */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-2 md:p-4"> {/* Added padding adjustments */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-xl"> {/* Added padding adjustments */}
              <h1 className="text-xl md:text-2xl font-semibold text-gradient mb-2"> {/* Adjusted text size and margin */}
                Database Developer
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-gray-300"> {/* Adjusted text size */}
                Experienced in managing and optimizing databases with MySQL,
                MongoDB, and Firebase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;