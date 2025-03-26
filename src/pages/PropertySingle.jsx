import { useParams } from "react-router-dom";
import { properties } from "../data/dummyData"; 
import ImageGrid from "../components/common/page-componets/ImageGrid";
import Highlights from "../components/common/page-componets/Highlights";
import { motion } from "framer-motion"; // Import Framer Motion
import RelatedProperty from "../components/common/page-componets/RelatedProperty";

const PropertySingle = () => {
  const { slug } = useParams(); // ✅ Get slug from URL
  const property = properties.find((prop) => prop.slug === slug);

  if (!property) {
    return <h1 className="text-center text-2xl mt-10">Property not found!</h1>;
  }


  return (
    <motion.div
      className="container mx-auto p-6 flex flex-col gap-8 mt-24"
      initial={{ opacity: 0, y: 20 }} // Start position
      animate={{ opacity: 1, y: 0 }} // End position
      transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
    >
      {/* Property Name Heading */}
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        {property.name}
      </h1>

      {/* Enlarged Image Grid */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Property Images</h2>
        <ImageGrid images={property.images} />
      </div>

      {/* Price Box with KSH & USD */}
      <div className="bg-white shadow-md p-6 rounded-lg text-center border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800">Property Price</h3>
        <p className="text-2xl font-bold text-green-600 mt-2">
          KSH {property.price.toLocaleString()} <br />
        </p>
      </div>

      {/* Highlights Section */}
      <div>
        <Highlights highlights={property.highlights} />
      </div>
       {/* Related Properties Section */}
       <RelatedProperty currentSlug={slug} />
    </motion.div>
  );
};

export default PropertySingle;
