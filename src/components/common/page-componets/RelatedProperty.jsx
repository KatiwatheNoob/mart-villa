import React from "react";
import { Link } from "react-router-dom";
import { properties } from "../../../data/dummyData";

const RelatedProperties = ({ currentSlug }) => {
  // Filter properties to exclude the currently viewed property
  const related = properties.filter((prop) => prop.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null; // Don't render if no related properties exist

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Related Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((property) => (
          <div key={property.slug} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
            <img
              src={property.MainImage} // Display the first image
              alt={property.name} 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{property.name}</h3>
            <p className="text-gray-600">{property.price.toLocaleString()} KSH</p>
            <Link
              to={`/property/${property.slug}`}
              className="block mt-2 text-blue-600 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProperties;
