import React from "react";

const CloudConsults = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">
            Cloud Consulting Services
          </h1>
          <p className="text-lg leading-8 text-gray-700 mb-6">
            The MERN stack is a full-stack development technology using MongoDB,
            Express, React, and Node.js to create high-performance and scalable
            web applications.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Database:</strong> MongoDB provides a flexible and
              efficient NoSQL database solution for managing large datasets.
            </li>
            <li>
              <strong>Efficiency:</strong> React and Node.js allow faster
              development cycles and real-time updates.
            </li>
            <li>
              <strong>Scalability:</strong> The stack ensures scalability for
              enterprise-level applications.
            </li>
            <li>
              <strong>Custom Solutions:</strong> Tailored web apps, e-commerce
              platforms, and single-page applications.
            </li>
          </ul>
        </div>

        {/* Right Side - GIF */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="/assets/cloud_consult_u.gif" 
            alt="Mobile App Development"
            className="w-3/4 max-w-md "
          />
        </div>
      </div>
    </div>
  );
};

export default CloudConsults;
