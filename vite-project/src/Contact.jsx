import React from "react";

const Contact = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold">Contact Me</h2>
      <p className="mt-4">
        You can reach me at:{" "}
        <a href="mailto:me@example.com" className="text-blue-500">
          me@example.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
