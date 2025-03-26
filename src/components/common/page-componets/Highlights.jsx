import React from "react";

const Highlights = ({ highlights }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4"> Highlights</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="text-lg">{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

export default Highlights;
