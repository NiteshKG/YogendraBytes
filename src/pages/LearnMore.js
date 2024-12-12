import React, { useState } from "react";

const LearnMore = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="max-w-7xl mx-auto py-16 px-8 bg-blue-300 rounded-lg shadow-lg text-gray-800">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">
        Learn More About Us
      </h2>
      <p className="text-lg text-center text-gray-700 mb-8">
        Discover how we deliver exceptional solutions with a customer-first approach.
      </p>

      <div className="text-center">
        <button
          onClick={handleToggle}
          className="bg-blue-600 text-white px-6 py-3 rounded shadow-md hover:bg-blue-700 transition duration-300"
        >
          {isOpen ? "Show Less" : "Learn More"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-8 text-gray-700 space-y-6">
          {/* Our Services */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Our Services
            </h3>
            <p>
              We specialize in a wide range of services, including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Web Solutions</li>
              <li>Mobile App Development</li>
              <li>Software Testing & QA</li>
              <li>Cloud Consulting</li>
              <li>System Integration</li>
            </ul>
          </div>

          {/* Approach to Solutions */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Our Approach
            </h3>
            <p>
              As a team, we take a collaborative approach to delivering solutions:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Understanding Your Needs:</strong> We start by deeply
                understanding your business goals and challenges.
              </li>
              <li>
                <strong>Customized Strategy:</strong> We create a tailored plan
                to ensure your project aligns with your vision.
              </li>
              <li>
                <strong>Transparent Communication:</strong> Regular updates and
                open communication keep you in the loop.
              </li>
              <li>
                <strong>Iterative Feedback:</strong> We value your input at every
                stage of development.
              </li>
            </ul>
          </div>

          {/* Customer Interaction */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Customer Interaction
            </h3>
            <p>
              We build strong relationships with our customers by:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Listening actively to your needs and feedback.</li>
              <li>Providing prompt support and assistance.</li>
              <li>Ensuring transparency in all our dealings.</li>
            </ul>
          </div>

          {/* Payment Policies */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Payment Policies
            </h3>
            <p>
              We believe in fair and flexible payment terms. Our policies include:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Milestone-based payments for long-term projects.
              </li>
              <li>
                Secure online payment options for your convenience.
              </li>
              <li>
                Transparent invoicing with no hidden charges.
              </li>
            </ul>
          </div>

          {/* Assuring Quality */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Assuring Quality
            </h3>
            <p>
              We are committed to delivering the best:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Rigorous testing and QA processes to ensure flawless performance.
              </li>
              <li>
                Scalability and future-proofing for long-term success.
              </li>
              <li>
                Dedicated post-launch support and maintenance.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearnMore;
