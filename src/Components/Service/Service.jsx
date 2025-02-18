import React from "react";

const Service = () => {
  return (
    <div id="Service" className="py-16 bg-black bg-opacity-30 text-white">
      <h2 className="text-3xl md:text-3xl font-bold text-center text-gradient mb-8">
          Services
        </h2>
      
      {/* Service Cards Container */}
      <div className="flex flex-wrap justify-center gap-8">
        
        {/* Card 1 */}
        <div className="max-w-xs rounded-lg overflow-hidden shadow-xl bg-[#1e2a47] hover:shadow-2xl transform hover:scale-105 duration-300">
          <img src="service1.jpg" alt="Service 1" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-3xl font-semibold">Website Development</h3>
            <p className="text-sm mt-4">
              Build custom websites with responsive design,  and fast load times. We create seamless web experiences.
            </p>
            <br></br>
            <button className="mt-5 py-2 px-4 bg-[#465697] text-white rounded-lg hover:bg-[#6a7fbb]">Learn More</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-xs rounded-lg overflow-hidden shadow-xl bg-[#1e2a47] hover:shadow-2xl transform hover:scale-105 duration-300">
          <img src="service2.jpg" alt="Service 2" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-3xl font-semibold">Mobile-App Development</h3>
            <p className="text-sm mt-4">
              Create feature-rich mobile apps for iOS and Android. We focus on building intuitive and user-friendly mobile experiences.
            </p>
            <br></br>
            <button className="mt-5 py-2 px-4 bg-[#465697] text-white rounded-lg hover:bg-[#6a7fbb]">Learn More</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-xs rounded-lg overflow-hidden shadow-xl bg-[#1e2a47] hover:shadow-2xl transform hover:scale-105 duration-300">
          <img src="service3.jpg" alt="Service 3" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-3xl font-semibold">Search Engine Optimization</h3>
            <p className="text-sm mt-4">
              Improve your website's ranking on search engines with our tailored SEO strategies. Increase visibility and drive traffic.
            </p>
            <br></br>
            <button className="mt-5 py-2 px-4 bg-[#465697] text-white rounded-lg hover:bg-[#6a7fbb]">Learn More</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Service;
