import React from "react";
import { motion } from "framer-motion";

const Highlights = ({ highlights }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Highlights</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        {highlights.map((highlight, index) => (
          <motion.li
            key={index}
            className="text-lg"
            initial={{ opacity: 0, x: -50 }} // Start off-screen to the left
            animate={{ opacity: 1, x: 0 }}  // Fade in and move to normal position
            transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger effect
          >
            {highlight}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Highlights;
