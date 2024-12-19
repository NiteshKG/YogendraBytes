import React from "react";

const MobileAppDevelopment = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">Mobile App Development</h1>
          <p className="text-lg leading-8 text-gray-700 mb-6">
            Our mobile app development services deliver innovative, scalable, and user-friendly applications for both iOS and Android platforms.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Database:</strong> Firebase, SQLite, and Realm for real-time data synchronization and offline capabilities.
            </li>
            <li>
              <strong>Efficiency:</strong> Optimized for performance and low latency on mobile devices.
            </li>
            <li>
              <strong>Technologies:</strong> React Native, Flutter, and native development with Swift and Kotlin.
            </li>
            <li>
              <strong>Custom Solutions:</strong> E-commerce apps, social platforms, and enterprise mobile tools.
            </li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="/assets/mobileapp_u.gif" 
            alt="Mobile App Development"
            className="w-3/4 max-w-md "
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;
