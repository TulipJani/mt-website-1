import React, { useState } from "react";
import { motion } from "framer-motion";

const FeaturedProducts = () => {
  const [isHovered, setisHovered] = useState(false);
  const products = [
    {
      name: "Product 1",
      price: 39.99,
      image:
        "https://www.shutterstock.com/image-photo/full-body-photo-attractive-young-260nw-2002950977.jpg",
    },
    {
      name: "Product 2",
      price: 49.99,
      image:
        "https://www.shutterstock.com/image-photo/photo-young-girl-happy-positive-260nw-1915191226.jpg",
    },
    {
      name: "Product 3",
      price: 59.99,
      image:
        "https://img.freepik.com/free-photo/full-length-portrait-cute-little-kid-girl-stylish-jeans-clothes-smiling-standing-white-kids-fashion-concept_155003-20299.jpg",
    },
  ];

  const infiniteProduct = [...products, ...products, ...products];

  return (
    <motion.section
      className={`py-16 bg-gray-100 ${
        isHovered ? "duration-300" : "bg-gray-100"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold mb-8 text-center ${
            isHovered ? "" : ""
          }`}
        >
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-[1px] shadow-md overflow-hidden border border-transparent transition-all duration-300`}
              whileHover={{
                scale: 1.05,
                // borderColor: "#ffff50",
                // borderWidth: "4px",
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setisHovered(true)}
              onMouseLeave={() => setisHovered(false)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProducts;
