import React from "react";

const JavaEnterprise = () => {
  return (
    <div className="bg-blue-300 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Java Enterprise Applications</h1>
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
    </div>
  );
};

export default JavaEnterprise;
