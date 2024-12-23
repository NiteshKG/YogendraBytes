import React from 'react';

function Terms() {
  const terms = [
    {
      title: "Service Agreement",
      description:
        "By engaging our services, you agree to provide necessary inputs and approvals to ensure timely project delivery.",
    },
    {
      title: "Payment Terms",
      description:
        "Clients must adhere to the agreed payment schedule. Late payments may incur additional fees or project delays.",
    },
    {
      title: "Intellectual Property",
      description:
        "Upon full payment, all rights to the delivered project will be transferred to the client, unless otherwise stated.",
    },
    {
      title: "Project Timeline",
      description:
        "Project timelines are estimates and may vary based on client responsiveness and unforeseen circumstances.",
    },
    {
      title: "Revisions Policy",
      description:
        "We provide a specified number of revisions. Additional revisions may incur extra charges.",
    },
    {
      title: "Confidentiality",
      description:
        "We maintain strict confidentiality regarding client information and project details.",
    },
    {
      title: "Warranty and Support",
      description:
        "Post-delivery, we offer a warranty period for fixing bugs. Further updates or changes will be billed separately.",
    },
    {
      title: "Termination Clause",
      description:
        "Either party may terminate the agreement with prior notice. Termination fees may apply based on the project's progress.",
    },
    {
      title: "Third-Party Services",
      description:
        "We may use third-party services (e.g., hosting providers, plugins) for project completion, and their terms apply.",
    },
    {
      title: "Limitation of Liability",
      description:
        "We are not liable for damages arising from the use or inability to use the delivered website or services.",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Terms and Conditions</h1>
      <div className="space-y-4">
        {terms.map((term, index) => (
          <div
            key={index}
            className="p-4 bg-gray-400 rounded-lg shadow-lg hover:bg-gray-500 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{term.title}</h2>
            <p className="text-blue-300">{term.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Terms;
