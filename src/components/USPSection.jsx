// import React from "react";
// import { motion } from "framer-motion";

// const USPSection = () => {
//   const usps = [
//     { icon: "🚚", text: "Free Shipping on orders over $120" },
//     { icon: "🔒", text: "Secure Payments" },
//     { icon: "↩️", text: "14-Day Returns" },
//   ];

//   return (
//     <motion.section
//       className="bg-white py-12"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: 0.2 }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between">
//           {usps.map((usp, index) => (
//             <div
//               key={index}
//               className="flex items-center mb-4 md:mb-0 mr-2 ml-2"
//             >
//               <span className="text-3xl mr-3">{usp.icon}</span>
//               <p className="text-sm md:text-base">{usp.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default USPSection;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaShippingFast, FaLock, FaUndoAlt } from "react-icons/fa"; // Import specific icons

// const USPSection = () => {
//   const usps = [
//     {
//       icon: <FaShippingFast />,
//       heading: "Free Shipping",
//       subtext: "Capped at $39 per order",
//     },
//     {
//       icon: <FaLock />,
//       heading: "Secure Payments",
//       subtext: "Up to 12 months installments",
//     },
//     {
//       icon: <FaUndoAlt />,
//       heading: "14-Day Returns",
//       subtext: "Shop with confidence",
//     },
//   ];

//   return (
//     <motion.section
//       className="bg-white py-12"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: 0.2 }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-around items-center">
//           {usps.map((usp, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center mb-4 md:mb-0 mx-4 text-center"
//             >
//               <span className="text-3xl text-teal-700 mb-2">{usp.icon}</span>{" "}
//               {/* Icon */}
//               <h3 className="text-lg font-semibold">{usp.heading}</h3>{" "}
//               {/* Heading */}
//               <p className="text-sm text-gray-600">{usp.subtext}</p>{" "}
//               {/* Subtext */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default USPSection;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaShippingFast, FaLock, FaUndoAlt } from "react-icons/fa";

// const USPSection = () => {
//   const usps = [
//     {
//       icon: <FaShippingFast className="text-teal-700 text-3xl" />,
//       heading: "Free Shipping",
//       subtext: "Capped at $39 per order",
//     },
//     {
//       icon: <FaLock className="text-teal-700 text-3xl" />,
//       heading: "Secure Payments",
//       subtext: "Up to 12 months installments",
//     },
//     {
//       icon: <FaUndoAlt className="text-teal-700 text-3xl" />,
//       heading: "14-Day Returns",
//       subtext: "Shop with confidence",
//     },
//   ];

//   return (
//     <motion.section
//       className="bg-white py-12"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: 0.2 }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between">
//           {usps.map((usp, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center mb-4 md:mb-0 w-full md:w-1/3 px-4"
//             >
//               <div className="mr-4">{usp.icon}</div>
//               <div>
//                 <h3 className="text-lg font-semibold">{usp.heading}</h3>
//                 <p className="text-sm text-gray-600">{usp.subtext}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default USPSection;

import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaLock, FaUndo } from "react-icons/fa";

const USPSection = () => {
  const usps = [
    { icon: <FaTruck />, title: "Free Shipping", text: "On orders over $120" },
    {
      icon: <FaLock />,
      title: "Secure Payments",
      text: "100% secure payments",
    },
    { icon: <FaUndo />, title: "14-Day Returns", text: "Shop with confidence" },
  ];

  return (
    <motion.section
      className="bg-white pt-[4rem] pb-[1.95rem]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-around">
          {usps.map((usp, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-items-center justify-center w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0 px-4`}
            >
              <span className="text-teal-700 text-3xl md:text-4xl mr-0 md:mr-3 mb-2 md:mb-0">
                {usp.icon}
              </span>
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold">{usp.title}</h4>
                <p className="text-sm">{usp.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default USPSection;
