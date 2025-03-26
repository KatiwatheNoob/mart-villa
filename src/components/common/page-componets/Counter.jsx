import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const statsData = [
  { label: "Sold Property", value: 75, unit: "%" },
  { label: "Perimeter Wall", value: 100, unit: "%" },
  { label: "Property Searches", value: 150, unit: "+" },
  { label: "Satisfied Clients", value: 100, unit: "%" },
];

const Counter = () => {
  const [displayValues, setDisplayValues] = useState(statsData.map(() => 0));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      statsData.forEach((stat, index) => {
        setTimeout(() => {
          setDisplayValues((prev) => {
            const newValues = [...prev];
            newValues[index] = stat.value;
            return newValues;
          });
        }, index * 300);
      });
    }
  }, [isInView]);

  return (
    <div ref={ref} className="flex-wrap justify-center gap-4 px-4 py-8 flex-align-center sm:justify-between bg-secondary">
      {statsData.map((stat, index) => (
        <div key={index} className="text-center">
          <motion.h1
            className="heading !text-slate-100"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {displayValues[index]}
            {stat.unit}
          </motion.h1>
          <p className="text-slate-100">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
