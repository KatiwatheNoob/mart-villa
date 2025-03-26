import { useState, useEffect } from "react";
import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CardHoverIcons from "./CardHoverIcons";
import CardLabels from "./CardLabels";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const SingleProductCardFullWidth = ({
  name,
  slug,
  location,
  price,
  MainImage,
  description,
  textLength,
  showLabels,
  purpose,
  area,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="relative grid grid-cols-1 gap-4 mt-5 overflow-hidden border rounded-2xl shadow-lg sm:grid-cols-2 md:grid-cols-3 dark:border-card-dark group min-h-[300px]">
      {/* Image Section */}
      <div className="sm:col-span-1 h-full">
        <div className="group !opacity-100 overflow-hidden relative h-full">
          {loading ? (
            <div className="w-full h-full bg-gray-300 dark:bg-gray-700 animate-pulse rounded-lg" />
          ) : (
            <Link to={`/property/${slug}`} className="block relative w-full h-full">
              <img
                src={MainImage}
                alt={name}
                className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300"
              />
            </Link>
          )}
          {!loading && <CardHoverIcons />}
        </div>
        {!showLabels && !loading && <CardLabels distance={`${area} acres`} />}
      </div>

      {/* Content Section */}
      <div className="sm:col-span-1 md:col-span-2 p-6">
        {loading ? (
          <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md" />
        ) : (
          <motion.div variants={fadeInFromLeft} initial="hidden" animate="visible">
            <Link to={`/property/${slug}`} className="group-hover:text-primary transition-all">
              <h1 className="text-xl font-bold capitalize">{name}</h1>
            </Link>
          </motion.div>
        )}

        <div className="mt-2 flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <BiMap size={18} />
          {loading ? (
            <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md" />
          ) : (
            <motion.p variants={fadeInFromLeft} initial="hidden" animate="visible" className="text-sm">
              {location}
            </motion.p>
          )}
        </div>

        {loading ? (
          <div className="mt-2 h-12 w-full bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md" />
        ) : (
          <motion.p variants={fadeInFromLeft} initial="hidden" animate="visible" className="mt-2 text-gray-600 dark:text-gray-400">
            {`${description.slice(0, textLength || 250)}...`}
          </motion.p>
        )}

        {/* Price and Button */}
        <div className="mt-5 flex justify-between items-center">
          {loading ? (
            <div className="w-20 h-6 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md" />
          ) : (
            <motion.h1 variants={fadeInFromLeft} initial="hidden" animate="visible" className="text-xl font-semibold text-primary">
              Ksh {price.toLocaleString()}
            </motion.h1>
          )}

          {loading ? (
            <div className="w-24 h-10 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md" />
          ) : (
            <motion.div variants={fadeInFromLeft} initial="hidden" animate="visible">
              <Link to={`/property/${slug}`} className="btn btn-secondary px-5 py-2 text-lg">
                Details
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardFullWidth;
