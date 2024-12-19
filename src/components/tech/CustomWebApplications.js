import React from "react";

const CustomWebApplications = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">
            Custom Software Development
          </h1>
          <p className="text-lg leading-8 text-gray-700 mb-6">
            We specialize in creating tailor-made web applications designed to
            meet your specific business requirements.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Database:</strong> MySQL, PostgreSQL, and MongoDB for
              structured and unstructured data handling.
            </li>
            <li>
              <strong>Efficiency:</strong> Highly optimized and secure web
              applications with responsive design.
            </li>
            <li>
              <strong>Technologies:</strong> HTML5, CSS3, JavaScript, and
              frameworks like Django, Ruby on Rails, and .NET Core.
            </li>
            <li>
              <strong>Custom Solutions:</strong> CRM tools, SaaS platforms, and
              bespoke enterprise solutions.
            </li>
          </ul>
        </div>

        {/* Right Side - GIF */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="/assets/software_dev_u.gif" 
            alt="Mobile App Development"
            className="w-3/4 max-w-md "
          />
        </div>
      </div>
    </div>
  );
};

export default CustomWebApplications;
