import React, { useState } from "react";

const Contact = () => {

  const[formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });
  const[message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          requirements: "",
        });
      } 
      else {
        setMessage("Failed to send email. Please try again.");
      }
    }
    catch (error) {
      console.log(error);
      setMessage("Error: Uable to send email.");
    }
  };

  return (
    <div className="bg-blue-200 py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Have a project in mind? Reach out to us with your requirements, and
          we’ll get back to you promptly.
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-800 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-blue-200 rounded "
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-blue-200 rounded "
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-800 font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 border border-blue-200 rounded "
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="requirements"
              className="block text-gray-800 font-medium mb-2"
            >
              Requirement Specification
            </label>
            <textarea
              id="requirements"
              className="w-full p-3 border border-blue-200 rounded "
              rows="4"
              placeholder="Describe your requirements"
              value={formData.requirements}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
  <button
    type="submit"
    className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-600 transition-all duration-300"
  >
    Submit
  </button>
</div>

        </form>
          {message && <p className="text-center mt-4 text-teal-700">{message}</p>}
      </div>
    </div>
  );
};

export default Contact;
