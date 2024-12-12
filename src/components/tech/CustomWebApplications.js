import React from "react";

const CustomWebApplications = () => {
  return (
    <div className="bg-blue-300 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Custom Web Applications</h1>
        <p className="text-lg leading-8 text-gray-700 mb-6">
          We specialize in creating tailor-made web applications designed to meet your specific business requirements.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li>
            <strong>Database:</strong> MySQL, PostgreSQL, and MongoDB for structured and unstructured data handling.
          </li>
          <li>
            <strong>Efficiency:</strong> Highly optimized and secure web applications with responsive design.
          </li>
          <li>
            <strong>Technologies:</strong> HTML5, CSS3, JavaScript, and frameworks like Django, Ruby on Rails, and .NET Core.
          </li>
          <li>
            <strong>Custom Solutions:</strong> CRM tools, SaaS platforms, and bespoke enterprise solutions.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomWebApplications;
