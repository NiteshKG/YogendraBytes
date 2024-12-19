import React from "react";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="bg-blue-200 text-blue-900 py-16 px-8 m-10 rounded-lg shadow-xl shadow-blue-500">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
        About Green Leaf
      </h1>
      <p className="text-lg leading-8 text-gray-700 text-center mb-12">
        At <span className="font-semibold text-blue-700">Green Leaf</span>, we
        specialize in providing cutting-edge web solutions tailored to your
        business needs. Our team of skilled developers and designers work
        together to create responsive, user-friendly, and scalable
        applications that help businesses thrive in the digital age. Whether
        you need a sleek website, robust e-commerce platform, or custom web
        applications, we've got you covered!
      </p>
      <div className="text-center">
        <Link to="/learn">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition-all duration-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  );
};

export default About;
