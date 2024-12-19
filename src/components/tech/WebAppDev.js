import React from "react";

const WebAppDev = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">
            Web Applications Development
          </h1>
          <p className="text-lg leading-8 text-gray-700 mb-6">
            Java is a reliable and powerful language for building enterprise-grade
            applications.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Database:</strong> Oracle and MySQL for enterprise-level
              data solutions.
            </li>
            <li>
              <strong>Efficiency:</strong> Multi-threaded architecture for
              handling concurrent processes.
            </li>
            <li>
              <strong>Custom Solutions:</strong> ERP systems, banking software,
              and enterprise web applications.
            </li>
          </ul>
        </div>

        {/* Right Side - GIF */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="/assets/web-app_dev_u.gif" 
            alt="Mobile App Development"
            className="w-3/4 max-w-md "
          />
        </div>
      </div>
    </div>
  );
};

export default WebAppDev;
