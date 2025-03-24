"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Stats = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-10 pb-16"
    >
      {/* Header Section */}
      <div className="text-center">
        <h1 className="heading">
          Unlocking Real Estate Potential in Kwale County
        </h1>
        <p className="mt-4">
          At <strong>Hindsight Ventures Limited</strong>, we specialize in
          transforming land into valuable opportunities. With a focus on
          development, investment, and community enhancement, we are shaping the
          future of real estate in this coastal region.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap gap-24 mt-8">
        <div className="flex-1 basis-[22rem]">
          <p>
            Our expertise spans land acquisition, enhancement, and sustainable
            development. We believe in maximizing the value of every parcel of
            land while fostering long-term growth.
          </p>
          <p className="mt-3">
            We strive to create seamless investment experiences, ensuring our
            clients receive tailored solutions that align with their goals.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
