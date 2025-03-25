import { useParams } from "react-router-dom";
import { BiBed, BiMap, BiMapAlt, BiTab, BiPhone } from "react-icons/bi";
import { property as properties } from "../data/dummyData"; // Mock data
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();
  console.log("Property ID from URL:", id); 

  if (!properties || properties.length === 0) {
    console.log("Properties data is empty or not loaded.");
    return <p>Loading properties...</p>;
  }

  const selectedProperty = properties.find((item) => item.id === id);

  if (!selectedProperty) return <p className="text-center text-xl">Property not found</p>;

  return (
    <div className="container mx-auto px-5 py-10">
      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedProperty.images?.length > 0 ? (
          selectedProperty.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={selectedProperty.name}
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      {/* Property Info & Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Property Details */}
        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-2xl font-bold">{selectedProperty.name}</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <BiMap size={20} />
            <p>{selectedProperty.location}</p>
          </div>
          <p className="text-gray-700">{selectedProperty.description}</p>

          {/* Property Features */}
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex items-center gap-2 text-lg">
              <BiBed size={24} className="text-primary" />
              <span>{selectedProperty.number_of_beds} Beds</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <BiTab size={24} className="text-primary" />
              <span>{selectedProperty.number_of_bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <BiMapAlt size={24} className="text-primary" />
              <span>{selectedProperty.dimensions}</span>
            </div>
          </div>

          {/* Price */}
          <h2 className="text-2xl font-semibold text-primary mt-4">
            Ksh {selectedProperty.price.toLocaleString()}
          </h2>
        </div>

        {/* Contact Section */}
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md sticky top-20">
          <h2 className="text-xl font-semibold">Contact Agent</h2>
          <p className="text-gray-600 dark:text-gray-300">Get in touch for more details</p>
          <div className="flex items-center gap-2 mt-4">
            <BiPhone size={24} className="text-primary" />
            <span className="text-lg font-semibold">{selectedProperty.agentPhone}</span>
          </div>
          <Link to="/contact">
            <button className="mt-4 btn btn-primary w-full">Send Inquiry</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
