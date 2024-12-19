import React from "react";
import { useCountUp } from "react-countup"; // assuming you are using react-countup

const Achievement = () => {
  const { countUp } = useCountUp({
    start: 0,
    end: 250,
    duration: 3,
    separator: ",",
  });

  const stats = [
    { label: "Happy Clients", value: countUp }, // Use countUp here for dynamic value
    { label: "Projects Completed", value: "150+" },
    { label: "Years in Business", value: "5+" },
    { label: "Team Members", value: "30+" },
  ];

  return (
    <div>
      <section className="py-16 px-8 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Achievements</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-5xl font-bold">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievement;
