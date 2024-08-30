import React from "react";
import { motion } from "framer-motion";

const USPSection = () => {
  const usps = [
    { icon: "🚚", text: "Free Shipping on orders over $120" },
    { icon: "🔒", text: "Secure Payments" },
    { icon: "↩️", text: "14-Day Returns" },
  ];

  return (
    <motion.section
      className="bg-white py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="flex items-center mb-4 md:mb-0 mr-2 ml-2"
            >
              <span className="text-3xl mr-3">{usp.icon}</span>
              <p className="text-sm md:text-base">{usp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default USPSection;
