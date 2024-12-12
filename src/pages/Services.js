import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-cover bg-center py-16 px-8">
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex flex-col pb-16">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">
          Our Services
        </h1>
        <p className="text-lg leading-8 text-blue-700 text-center mb-12">
          At <i>8bits,</i> we specialize in providing end-to-end technology solutions that help businesses modernize, optimize, and grow. With a focus on innovation and technical excellence, our team of experts crafts tailored solutions to fit the unique needs of your business.
          Our services span a wide range of technologies, including web and mobile app development, cloud consulting, software engineering, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Service 1: Custom Software Development */}
          <Link to="/services/csw">
            <div className="bg-white text-blue-900 shadow-lg rounded-xl p-6 text-center border border-blue-300 hover:bg-white-200 hover:text-white hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
              <img src="/assets/service1.jpg" alt="Custom Software Development" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-black font-semibold text-xl mb-2">
                Custom Software Development
              </h2>
              <p className="text-gray-700">Tailored software solutions to meet your business needs and drive innovation.</p>
            </div>
          </Link>

          {/* Service 2: Web Application Development */}
          <Link to="/services/web-appDev">
            <div className="bg-white text-blue-900 shadow-lg rounded-xl p-6 text-center border border-blue-300 hover:bg-white-200 hover:text-white hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
              <img src="/assets/service2.jpg" alt="Web Application Development" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-black font-semibold text-xl mb-2">
                Web Application Development
              </h2>
              <p className="text-gray-700">Build responsive, scalable, and feature-rich web applications for your business.</p>
            </div>
          </Link>

          {/* Service 3: Mobile App Development */}
          <Link to="/services/mobile-apps">
            <div className="bg-white text-blue-900 shadow-lg rounded-xl p-6 text-center border border-blue-300 hover:bg-white-900 hover:text-white hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
              <img src="/assets/service3.jpg" alt="Mobile App Development" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-black font-semibold text-xl mb-2">
                Mobile App Development
              </h2>
              <p className="text-gray-900">Create seamless mobile experiences for iOS and Android platforms.</p>
            </div>
          </Link>

          {/* Service 4: Cloud Consulting */}
          <Link to="/services/cloudConsults">
            <div className="bg-white text-blue-900 shadow-lg rounded-xl p-6 text-center border border-blue-300 hover:bg-white-900 hover:text-white hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ">
              <img src="/assets/service4.jpg" alt="Cloud Consulting" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-black font-semibold text-xl mb-2">
                Cloud Consulting
              </h2>
              <p className="text-gray-700">Optimize your cloud infrastructure and maximize scalability with expert guidance.</p>
            </div>
          </Link>

          {/* Service 5: Quality Assurance */}
          <Link to="/services/QA">
            <div className="bg-white text-blue-900 shadow-lg rounded-xl p-6 text-center border border-blue-300 hover:bg-white-900 hover:text-white hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
              <img src="/assets/service5.jpg" alt="Quality Assurance" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-black font-semibold text-xl mb-2">
                Quality Assurance
              </h2>
              <p className="text-gray-700">Ensure your software is flawless and ready for launch with our testing services.</p>
            </div>
          </Link>

          {/* Service 6: Systems Integration */}
          <Link to="/services/SI">
            <div className="bg-white text-blue-900 shadow-lg rounded-xl p-6 text-center border border-blue-300 hover:bg-white-900 hover:text-white hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
              <img src="/assets/service6.jpg" alt="Systems Integration" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-black font-semibold text-xl mb-2">
                Systems Integration
              </h2>
              <p className="text-gray-700">Seamlessly integrate your systems for improved efficiency and performance.</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Services;