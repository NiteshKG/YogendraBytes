import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 w-full">
      <div className="container mx-auto px-6 sm:px-12 md:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Logo / Brand */}
          <div className="footer-logo">
            <h1 className="text-3xl font-bold">MyWebsite</h1>
            <p className="text-sm mt-2">Your one-stop solution for everything.</p>
          </div>
          
          {/* Navigation Links */}
          <div className="footer-nav">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="footer-social">
            <h2 className="text-xl font-semibold">Follow Us</h2>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                <i className="fa-brands fa-facebook-f text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>

          {/* Legal Information */}
          <div className="footer-legal sm:col-span-2 md:col-span-1">
            <p className="text-sm"> © {new Date().getFullYear()} Web Solutions. All rights reserved.</p>
            <p className="text-sm text-gray-400">Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;