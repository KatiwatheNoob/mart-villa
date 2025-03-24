"use client";
import { motion } from "framer-motion";

const statsData = [
  { title: "Land Investment", percentage: 80 },
  { title: "Project Development", percentage: 70 },
  { title: "Community Planning", percentage: 90 },
  { title: "Client Satisfaction", percentage: 85 },
];

const Stats = () => {
  return (
    <div className="pt-10 pb-16">
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

          {/* Animated Stats */}
          <div className="mt-3">
            {statsData.map((stat, index) => (
              <div key={index} className="mt-4">
                <div className="flex justify-between">
                  <h1 className="font-semibold capitalize">{stat.title}</h1>
                  <h1 className="font-semibold capitalize">
                    {stat.percentage}%
                  </h1>
                </div>
                <div className="w-full h-2 mt-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-light">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-secondary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
