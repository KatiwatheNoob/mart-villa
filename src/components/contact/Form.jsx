import { useState, useEffect } from "react";

const Form = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {loading ? (
          <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md mx-auto"></div>
        ) : (
          "Contact Us"
        )}
      </h2>

      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[...Array(2)].map((_, index) => (
          <div key={index}>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              {loading ? (
                <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
              ) : index === 0 ? (
                "First Name"
              ) : (
                "Last Name"
              )}
            </label>
            {loading ? (
              <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
            ) : (
              <input type="text" className="w-full input" placeholder={`Enter ${index === 0 ? "First" : "Last"} Name`} />
            )}
          </div>
        ))}
      </div>

      {/* Email */}
      <div className="mt-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">
          {loading ? (
            <div className="h-4 w-28 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
          ) : (
            "Email Address"
          )}
        </label>
        {loading ? (
          <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
        ) : (
          <input type="email" className="w-full input" placeholder="Enter Email Address" />
        )}
      </div>

      {/* Message */}
      <div className="mt-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">
          {loading ? (
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
          ) : (
            "Message"
          )}
        </label>
        {loading ? (
          <div className="h-24 w-full bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
        ) : (
          <textarea rows={4} className="w-full input" placeholder="Enter your message..."></textarea>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-6 text-center">
        {loading ? (
          <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md mx-auto"></div>
        ) : (
          <button className="btn btn-primary w-full sm:w-auto px-6 py-2 text-lg">Submit</button>
        )}
      </div>
    </div>
  );
};

export default Form;
