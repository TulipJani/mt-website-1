// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const CategoryShowcase = () => {
//   const categories = [
//     "T-Shirts",
//     "Jeans",
//     "Dresses",
//     "Jackets",
//     "Shoes",
//     "Accessories",
//     "Sportswear",
//   ];

//   return (
//     <motion.section
//       className={`py-16 bg-gray-100`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5, delay: 0.6 }}
//     >
//       <div className="container mx-auto px-4">
//         <h2 className={`text-3xl font-bold mb-8 text-center`}>
//           Our Categories
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {categories.map((category, index) => (
//             <motion.div
//               key={index}
//               className="relative overflow-hidden rounded-[1px] shadow-md border border-transparent transition-all duration-300"
//               whileHover={{
//                 scale: 1.05,
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <img
//                 // src={`/path-to-${category.toLowerCase()}-image.jpg`}
//                 src={`https://cdn.shopify.com/s/files/1/0661/7423/files/tucked-in-with-high-waisted-pants.jpg?v=1691059221`}
//                 alt={category}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                 <h3 className="text-white text-xl font-semibold">{category}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default CategoryShowcase;

// import React from "react";
// import { motion } from "framer-motion";

// const CategoryShowcase = () => {
//   const categories = [
//     "T-Shirts",
//     "Jeans",
//     "Dresses",
//     "Jackets",
//     "Shoes",
//     "Accessories",
//     "Sportswear",
//   ];

//   return (
//     <motion.section
//       className="py-16 bg-gray-100"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5, delay: 0.6 }}
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Categories</h2>

//         {/* Flex container for responsive grid-like behavior */}
//         <div className="flex flex-wrap gap-4 justify-center">
//           {categories.map((category, index) => (
//             <motion.div
//               key={index}
//               className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden rounded-[1px] shadow-md border border-transparent transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <img
//                 src={`https://cdn.shopify.com/s/files/1/0661/7423/files/tucked-in-with-high-waisted-pants.jpg?v=1691059221`}
//                 alt={category}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                 <h3 className="text-white text-xl font-semibold">{category}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default CategoryShowcase;

import React from "react";
import { motion } from "framer-motion";

const CategoryShowcase = () => {
  const categories = [
    "T-Shirts",
    "Jeans",
    "Dresses",
    "Jackets",
    "Shoes",
    "Accessories",
    "Sportswear",
  ];

  return (
    <motion.section
      className="pt-0 mt-0 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-[1px] shadow-md transition-all duration-300 hover:scale-105"
            >
              <img
                src={`https://cdn.shopify.com/s/files/1/0661/7423/files/tucked-in-with-high-waisted-pants.jpg?v=1691059221`}
                alt={category}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{category}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CategoryShowcase;
