import React from "react";

const QualityAssurance = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">
            Quality Assurance
          </h1>
          <p className="text-lg leading-8 text-gray-700 mb-6">
            PHP and Laravel provide powerful frameworks for backend solutions and
            web application development.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Database:</strong> MySQL and PostgreSQL integration for
              robust database management.
            </li>
            <li>
              <strong>Efficiency:</strong> Laravel simplifies complex backend
              tasks with elegant syntax and rich features.
            </li>
            <li>
              <strong>Custom Solutions:</strong> APIs, CMS platforms, and dynamic
              web portals.
            </li>
          </ul>
        </div>

        {/* Right Side - GIF */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="/assets/quality_u.gif" 
            alt="Mobile App Development"
            className="w-3/4 max-w-md "
          />
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;
