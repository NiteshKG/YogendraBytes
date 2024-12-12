import React from "react";

const MobileAppDevelopment = () => {
  return (
    <div className="bg-blue-300 py-16 px-8">
      <div className="max-w-7xl mx-auto">
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
    </div>
  );
};

export default MobileAppDevelopment;
