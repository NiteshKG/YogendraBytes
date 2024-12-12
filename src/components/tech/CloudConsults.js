import React from "react";

const CloudConsults = () => {
  return (
    <div className="bg-blue-300 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">MERN Stack Development</h1>
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
    </div>
  );
};

export default CloudConsults;
