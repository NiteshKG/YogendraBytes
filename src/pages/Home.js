import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import './Home.css';

//https://img.freepik.com/free-vector/abstract-blue-light-dynamic-motion-wallpaper-with-shiny-effect_1017-55323.jpg

const Home = () => {
  const stats = [
    { label: "Happy Clients", value: "250+" },
    { label: "Projects Completed", value: "150+" },
    { label: "Years in Business", value: "5+" },
    { label: "Team Members", value: "30+" },
  ];

  const testimonials = [
    {
      quote:
        "Green Leaf transformed our online presence with a sleek and modern website. Our sales have increased tremendously!",
      author: "Jane Doe, CEO of XYZ Corp",
    },
    {
      quote:
        "The mobile app they delivered exceeded our expectations in both functionality and design. Highly recommended!",
      author: "John Smith, Founder of TechWorld",
    },
  ];

  const approachSteps = [
    {
      title: "Understand Your Needs",
      description:
        "We begin with a deep understanding of your business and project goals to craft a custom solution.",
    },
    {
      title: "Plan & Design",
      description:
        "Our team creates a clear plan and visually appealing designs that align with your brand identity.",
    },
    {
      title: "Build & Launch",
      description:
        "We develop, test, and launch your project with precision, ensuring scalability and performance.",
    },
  ];

  return (
   
      //fjfj
      <div className="bg-cover bg-center min-h-screen text-gray-700 text-center py-16 px-8">
        {/* Hero Section */}
        <section className="relative text-center py-20 px-8 overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 blur-lg opacity-80"></div>

  {/* Animated Squares */}
  <div className="animated-squares"></div>

  {/* Typing Effect */}
  <div className="relative z-10 max-w-7xl mx-auto">
    <h1 className="text-5xl font-bold mb-6 text-gray-800">
      Welcome to{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
        Green Leaf
      </span>{" "}
      Web Solutions
    </h1>

    {/* Glowing and Fading Text */}
    <p className="glowing-text text-xl font-medium text-purple-600 mt-4">
      We create the innovation for you in a familiar manner
    </p>

    <Link to="/learn">
      <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded shadow-lg hover:scale-110 transition-transform duration-300 mt-8">
        Explore More
      </button>
    </Link>
  </div>

  {/* CSS Styles */}
  <style jsx>{`
    .glowing-text {
      animation: glow 2s infinite ease-in-out;
      color: #6a0dad; /* Purple color */
    }

    @keyframes glow {
      0% {
        text-shadow: 0 0 5px #b57edc, 0 0 10px #b57edc, 0 0 20px #b57edc;
        opacity: 0.7;
      }
      50% {
        text-shadow: 0 0 10px #b57edc, 0 0 20px #b57edc, 0 0 40px #b57edc;
        opacity: 1;
      }
      100% {
        text-shadow: 0 0 5px #b57edc, 0 0 10px #b57edc, 0 0 20px #b57edc;
        opacity: 0.7;
      }
    }

    .animated-squares {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }

    .animated-squares::before,
    .animated-squares::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        45deg,
        rgba(102, 205, 170, 0.1),
        rgba(102, 205, 170, 0.1) 20px,
        rgba(148, 0, 211, 0.2) 20px,
        rgba(148, 0, 211, 0.2) 40px
      );
      opacity: 0.5;
      animation: fade-blocks 5s infinite;
    }

    @keyframes fade-blocks {
      0% {
        transform: translateY(0) scale(1);
        opacity: 0.2;
      }
      50% {
        transform: translateY(50px) scale(1.2);
        opacity: 0.5;
      }
      100% {
        transform: translateY(0) scale(1);
        opacity: 0.2;
      }
    }
  `}</style>
</section>




      {/* Why Choose Us Section */}
      <section className="py-16 px-8 m-4">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-700 mb-8">Why Choose Us?</h2>
    <p className="text-lg text-blue-700 mb-12">
      Discover why Green Leaf is the trusted partner for businesses worldwide:
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Expertise",
          description:
            "Our team of professionals has years of experience in delivering top-notch solutions.",
        },
        {
          title: "Client-Centric",
          description:
            "We prioritize your needs, ensuring personalized attention and satisfaction.",
        },
        {
          title: "Innovative",
          description:
            "Staying ahead of industry trends to deliver innovative and scalable solutions.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relative group bg-blue-50 shadow-lg rounded-lg text-center p-6 transition duration-300 transform hover:scale-90"
        >
          {/* Title and Description Swap */}
          <div className="group-hover:hidden">
            <button className="text-blue-700 text-xl font-semibold px-4 py-2 bg-blue-200 rounded-full shadow-md hover:bg-blue-200 transition">
              {item.title}
            </button>
          </div>

          <div className="hidden group-hover:flex items-center justify-center p-4 bg-blue-200 shadow-lg rounded-lg text-gray-700">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Our Approach Section */}
      <section className="py-16 px-8 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachSteps.map((step, index) => (
              <div
                key={index}
                className="p-6 bg-blue-50 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-left"
              >
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <h3 className="text-blue-700 font-semibold">
                  - {testimonial.author}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 bg-blue-700 text-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">Our Achievements</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          {/* Use CountUp for animated numbers */}
          <h3 className="text-5xl font-bold">
            <CountUp
              start={0} // Start value
              end={parseInt(stat.value)} // End value (ensure it's numeric)
              duration={2} // Animation duration in seconds
              enableScrollSpy // Trigger animation when element is visible
              scrollSpyOnce // Run animation only once
              suffix={stat.value.includes("+") ? "+" : ""} // Add suffix like "+" if present
            />
          </h3>
          <p className="text-lg">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>
        
      </div>
     
    
  );
  
};

export default Home;
