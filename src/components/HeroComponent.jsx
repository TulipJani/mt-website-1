import React, { useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      className={`relative h-screen flex items-center justify-center bg-gray-100 ${
        isHovered ? "bg-teal-700 duration-500" : ""
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={"text-center z-10"}>
        <h1
          className={`text-4xl md:text-6xl font-semibold mb-4 ml-6 transition-colors duration-300 ${
            isHovered ? "text-white duration-300" : "text-white"
          }`}
        >
          EXPLORE MORE
        </h1>
        <motion.button
          className={`px-8 py-3 rounded-full transition duration-300 z-50  border-transparent border-2 ${
            isHovered
              ? "bg-black text-white"
              : "text-white border-2 border-white"
          } `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          SHOP NOW
        </motion.button>
      </div>
      <img
        // src="/api/placeholder/400/320"
        src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/blog-img-banner.png?v=1651917668"
        alt="Model wearing comfortable clothing"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="z-[1] bg-black bg-opacity-35 w-full h-full absolute"></div>
    </motion.section>
  );
};

export default HeroSection;
