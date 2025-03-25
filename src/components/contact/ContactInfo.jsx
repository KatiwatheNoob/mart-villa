import { useState, useEffect } from "react";
import { BiMap } from "react-icons/bi";
import { FiMail, FiPhone } from "react-icons/fi";

const ContactInfo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulates data fetch delay
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 py-16 sm:grid-cols-2 md:grid-cols-3">
      {/* Contact Items */}
      {[ 
        { icon: <FiPhone />, title: "Phone Number", value: "010 2106218" },
        { icon: <FiMail />, title: "Email Address", value: "Info@hindsight-ventures.com" },
        { icon: <BiMap />, title: "Office Address", value: "Ukunda, Diani" }
      ].map((item, index) => (
        <div key={index} className="text-center">
          {/* Icon Box */}
          <div className="icon-box !h-14 !w-14 !bg-primary text-white mx-auto text-2xl flex items-center justify-center rounded-full">
            {loading ? (
              <div className="h-6 w-6 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
            ) : (
              item.icon
            )}
          </div>

          {/* Title */}
          <h1 className="mt-2 text-lg font-semibold">
            {loading ? (
              <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 animate-pulse mx-auto rounded-md"></div>
            ) : (
              item.title
            )}
          </h1>

          {/* Contact Details */}
          <p className="text-gray-700 dark:text-gray-300">
            {loading ? (
              <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 animate-pulse mx-auto rounded-md"></div>
            ) : (
              item.value
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
