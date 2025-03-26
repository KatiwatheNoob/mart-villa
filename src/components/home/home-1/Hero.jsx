"use client";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTransition, animated } from "@react-spring/web";
import styles from "../../../styles/HeroSection.css";


const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef([]);
  const [items, set] = useState([]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [{ color: "#c23369" }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(["Unbeatable Prices", "Prime Lands", "Secure Deals"]), 2000));
    ref.current.push(setTimeout(() => set(["Unbeatable Prices", "Secure Deals"]), 5000));
    ref.current.push(setTimeout(() => set(["Unbeatable Prices", "Prime Lands", "Luxury Homes"]), 8000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div
      className="relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"
      style={{
        background: "url('/images/hero-bg-pattern.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/30 dark:bg-[#04a7ff]/50 w-72 h-72 -z-10 blur-[120px]"></div>

      <div className="flex-1 basis-[20rem]">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="w-3/4 h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-1/2 h-10 mt-2 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-full h-4 mt-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-full h-4 mt-2 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-32 h-10 mt-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h1 className="text-4xl font-bold capitalize md:text-5xl">
              Find Your Dream <br /> Property Today
            </h1>
            <div className="pl-3 mt-5 border-l-4 border-primary">
              <p>
                Discover prime real estate opportunities tailored for you. Explore luxurious homes and profitable land investments.
              </p>
            </div>
            <button className="mt-6 btn btn-primary">Get Started</button>
          </motion.div>
        )}
      </div>

      <div className="flex-1 basis-[20rem] flex items-center justify-center">
        <div className={styles.container}>
          <div className={styles.main}>
            {transitions(({ innerHeight, ...rest }, item) => (
              <animated.div className={styles.transitionsItem} style={rest} onClick={reset}>
                <animated.div style={{ overflow: "hidden", height: innerHeight }}>{item}</animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
