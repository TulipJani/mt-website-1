// // src/components/Header.js
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import rough from "roughjs/bundled/rough.esm.js";

// const Header = () => {
//   const [showHeader, setShowHeader] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [activeLink, setActiveLink] = useState("Shop"); // Initial active link
//   const [menuOpen, setMenuOpen] = useState(false); // State for handling mobile menu
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY < lastScrollY) {
//         // User is scrolling up
//         setShowHeader(true);
//       } else {
//         // User is scrolling down
//         setShowHeader(false);
//       }
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup function to remove the event listener
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   useEffect(() => {
//     // Draw a rough shape behind the active link using rough.js
//     const canvas = canvasRef.current;
//     const rc = rough.canvas(canvas);
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings

//     // Draw the rough shape
//     rc.rectangle(0, 0, 100, 40, {
//       fill: "teal",
//       fillStyle: "hachure",
//       roughness: 1,
//       stroke: "none",
//     });
//   }, [activeLink]); // Update when the active link changes

//   return (
//     <motion.header
//       className="bg-white shadow-md py-4 px-8 fixed w-full top-0 left-0 right-0 z-50 flex justify-between items-center"
//       initial={{ y: -50, opacity: 0 }}
//       animate={showHeader ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Logo Section */}
//       <a href="/">
//         <div className="text-2xl font-bold text-black">Mark Tailor</div>
//       </a>

//       {/* Hamburger Icon for Mobile */}
//       <button
//         className="block md:hidden text-black focus:outline-none"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           ></path>
//         </svg>
//       </button>

//       {/* Navigation Menu */}
//       <nav
//         className={`${
//           menuOpen ? "block" : "hidden"
//         } md:flex space-x-8 items-center`}
//       >
//         <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-black relative">
//           <li className="relative">
//             <a
//               href="#"
//               className={`text-black font-medium relative ${
//                 activeLink === "Shop" ? "active" : ""
//               } hover:text-teal-700 hover:underline hover:underline-offset-4 transition duration-300`}
//               onClick={() => setActiveLink("Shop")}
//             >
//               Shop
//             </a>
//             {activeLink === "Shop" && (
//               <canvas
//                 ref={canvasRef}
//                 width={40}
//                 height={40}
//                 className="absolute top-1/2 transform -translate-y-1/2 -z-10"
//               ></canvas>
//             )}
//           </li>
//           <li className="relative">
//             <a
//               href="#"
//               className={`text-black ${
//                 activeLink === "Gallery" ? "font-medium relative active" : ""
//               } hover:text-teal-700 hover:underline hover:underline-offset-4 transition duration-300`}
//               onClick={() => setActiveLink("Gallery")}
//             >
//               Gallery
//             </a>
//             {activeLink === "Gallery" && (
//               <canvas
//                 ref={canvasRef}
//                 width={51}
//                 height={40}
//                 className="absolute top-1/2 transform -translate-y-1/2 -z-10"
//               ></canvas>
//             )}
//           </li>
//           <li className="relative">
//             <a
//               href="#"
//               className={`text-black ${
//                 activeLink === "Contact" ? "font-medium relative active" : ""
//               } hover:text-teal-700 hover:underline hover:underline-offset-4 transition duration-300`}
//               onClick={() => setActiveLink("Contact")}
//             >
//               Contact
//             </a>
//             {activeLink === "Contact" && (
//               <canvas
//                 ref={canvasRef}
//                 width={55}
//                 height={40}
//                 className="absolute top-1/2 transform -translate-y-1/2 -z-10"
//               ></canvas>
//             )}
//           </li>
//         </ul>
//         <a
//           href="#"
//           className="text-teal-700 border-2 border-teal-700 px-4 py-1 rounded-sm hover:scale-105 transition duration-300"
//         >
//           Home
//         </a>
//       </nav>
//     </motion.header>
//   );
// };

// export default Header;

// Header.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import rough from "roughjs/bundled/rough.esm.js";

// const Header = () => {
//   const [showHeader, setShowHeader] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [activeLink, setActiveLink] = useState("Shop"); // Initial active link
//   const [menuOpen, setMenuOpen] = useState(false); // State for handling mobile menu
//   const [isHeroVisible, setIsHeroVisible] = useState(true); // State to check if hero section is visible
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY < lastScrollY) {
//         // User is scrolling up
//         setShowHeader(true);
//       } else {
//         // User is scrolling down
//         setShowHeader(false);
//       }
//       setLastScrollY(currentScrollY);

//       // Check if hero section is visible
//       const heroSection = document.querySelector("#hero-section");
//       if (heroSection) {
//         const rect = heroSection.getBoundingClientRect();
//         setIsHeroVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup function to remove the event listener
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   useEffect(() => {
//     // Draw a rough shape behind the active link using rough.js
//     const canvas = canvasRef.current;
//     const rc = rough.canvas(canvas);
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings

//     // Draw the rough shape
//     rc.path("M10 30 C 20 10, 40 10, 50 30 S 70 50, 90 30", {
//       stroke: `${isHeroVisible ? "" : "teal"}`,
//       strokeWidth: 5,
//       fill: "teal",
//       fillStyle: "hachure",
//       roughness: 2,
//     });
//   }, [activeLink, isHeroVisible]); // Update when the active link changes

//   return (
//     <motion.header
//       className={`${
//         isHeroVisible ? "bg-transparent" : "bg-white shadow-md"
//       } py-4 px-8 fixed w-full top-0 left-0 right-0 z-50 flex justify-between items-center transition-colors duration-300`}
//       initial={{ y: -50, opacity: 0 }}
//       animate={showHeader ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Logo Section */}
//       <a href="/">
//         <div
//           className={`text-2xl font-bold text-black ${
//             isHeroVisible ? "text-white text-2xl font-bold " : ""
//           }`}
//         >
//           Mark Tailor
//         </div>
//       </a>

//       {/* Hamburger Icon for Mobile */}
//       <button
//         className={`block md:hidden text-black focus:outline-none ${
//           isHeroVisible ? "block md:hidden text-white focus:outline-none" : ""
//         }`}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           ></path>
//         </svg>
//       </button>

//       {/* Navigation Menu */}
//       <nav
//         className={`${
//           menuOpen ? "block" : "hidden"
//         } md:flex space-x-8 items-center`}
//       >
//         <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-black relative">
//           <li className="relative">
//             <a
//               href="#"
//               className={`text-black font-medium relative ${
//                 activeLink === "Shop" ? "active" : ""
//               }   hover:underline-offset-4 hover:underline ${
//                 isHeroVisible
//                   ? "text-white"
//                   : " hover:text-teal-700 transition duration-300"
//               }`}
//               onClick={() => setActiveLink("Shop")}
//             >
//               Shop
//             </a>
//             {activeLink === "Shop" && (
//               <canvas
//                 ref={canvasRef}
//                 width={40}
//                 height={40}
//                 className="absolute top-1/2 transform -translate-y-1/2 -z-10"
//               ></canvas>
//             )}
//           </li>
//           <li className="relative">
//             <a
//               href="#"
//               className={`text-black ${
//                 activeLink === "Gallery" ? "font-medium relative active" : ""
//               }  hover:underline hover:underline-offset-4  ${
//                 isHeroVisible
//                   ? "text-white"
//                   : "hover:text-teal-700 transition duration-300"
//               }`}
//               onClick={() => setActiveLink("Gallery")}
//             >
//               Gallery
//             </a>
//             {activeLink === "Gallery" && (
//               <canvas
//                 ref={canvasRef}
//                 width={51}
//                 height={40}
//                 className="absolute top-1/2 transform -translate-y-1/2 -z-10"
//               ></canvas>
//             )}
//           </li>
//           <li className="relative">
//             <a
//               href="#"
//               className={`text-black ${
//                 activeLink === "Contact" ? "font-medium relative active" : ""
//               } hover:underline hover:underline-offset-4  ${
//                 isHeroVisible
//                   ? "text-white"
//                   : "hover:text-teal-700 transition duration-300"
//               }`}
//               onClick={() => setActiveLink("Contact")}
//             >
//               Contact
//             </a>
//             {activeLink === "Contact" && (
//               <canvas
//                 ref={canvasRef}
//                 width={55}
//                 height={40}
//                 className="absolute top-1/2 transform -translate-y-1/2 -z-10"
//               ></canvas>
//             )}
//           </li>
//         </ul>
//         <a
//           href="#"
//           className={`text-teal-700 border-2 px-4 py-1 rounded-sm hover:scale-105 transition duration-300 ${
//             isHeroVisible ? "border-white text-white" : "border-teal-700"
//           }`}
//         >
//           Home
//         </a>
//       </nav>
//     </motion.header>
//   );
// };

// export default Header;

// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import rough from "roughjs/bundled/rough.esm.js";

// const Header = () => {
//   const [showHeader, setShowHeader] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [activeLink, setActiveLink] = useState("Shop");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isHeroVisible, setIsHeroVisible] = useState(true);
//   const canvasRefs = {
//     Shop: useRef(null),
//     Gallery: useRef(null),
//     Contact: useRef(null),
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setShowHeader(currentScrollY < lastScrollY);
//       setLastScrollY(currentScrollY);

//       const heroSection = document.querySelector("#hero-section");
//       if (heroSection) {
//         const rect = heroSection.getBoundingClientRect();
//         setIsHeroVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     Object.keys(canvasRefs).forEach((link) => {
//       const canvas = canvasRefs[link].current;
//       if (canvas) {
//         const rc = rough.canvas(canvas);
//         const ctx = canvas.getContext("2d");
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         // Only draw on the active link
//         if (activeLink === link) {
//           const pathData = "M10 -10 M -20 -30, 20 10 T 20 10 T 25 15, 20 -10"; // Example path
//           rc.path(pathData, {
//             stroke: "teal",
//             strokeWidth: 1.5,
//             fill: "teal",
//             fillStyle: "solid", // You can use 'hachure' for a hatched effect
//             roughness: 5,
//           });
//         }
//       }
//     });
//   }, [activeLink, isHeroVisible]);

//   return (
//     <motion.header
//       className={`${
//         isHeroVisible ? "bg-transparent" : "bg-white shadow-md"
//       } py-4 px-8 fixed w-full top-0 left-0 right-0 z-50 flex justify-between items-center transition-colors duration-300`}
//       initial={{ y: -50, opacity: 0 }}
//       animate={showHeader ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <a href="/">
//         <div
//           className={`text-2xl font-bold text-black ${
//             isHeroVisible ? "text-white" : ""
//           }`}
//         >
//           Mark Tailor
//         </div>
//       </a>

//       <button
//         className={`block md:hidden text-black focus:outline-none ${
//           isHeroVisible ? "text-white" : ""
//         }`}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           ></path>
//         </svg>
//       </button>

//       <nav
//         className={`${
//           menuOpen ? "block" : "hidden"
//         } md:flex space-x-8 items-center`}
//       >
//         <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-black relative">
//           {["Shop", "Gallery", "Contact"].map((link) => (
//             <li key={link} className="relative">
//               <a
//                 href="#"
//                 className={`text-black font-medium relative ${
//                   activeLink === link ? "active" : ""
//                 } hover:underline-offset-4 hover:underline ${
//                   isHeroVisible
//                     ? "text-white"
//                     : " hover:text-teal-700 transition duration-300"
//                 }`}
//                 onClick={() => setActiveLink(link)}
//               >
//                 {link}
//               </a>
//               {activeLink === link && (
//                 <canvas
//                   ref={canvasRefs[link]}
//                   width={80}
//                   height={40}
//                   className="absolute top-1/2 transform -translate-y-1/2 -z-10"
//                 ></canvas>
//               )}
//             </li>
//           ))}
//         </ul>
//         <a
//           href="#"
//           className={`text-teal-700 border-2 px-4 py-1 rounded-sm hover:scale-105 transition duration-300 ${
//             isHeroVisible ? "border-white text-white" : "border-teal-700"
//           }`}
//         >
//           Home
//         </a>
//       </nav>
//     </motion.header>
//   );
// };

// export default Header;

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import rough from "roughjs/bundled/rough.esm.js";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("Shop");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const canvasRefs = {
    Shop: useRef(null),
    Gallery: useRef(null),
    Contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);

      const heroSection = document.querySelector("#hero-section");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsHeroVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    Object.keys(canvasRefs).forEach((link) => {
      const canvas = canvasRefs[link].current;
      if (canvas) {
        const rc = rough.canvas(canvas);
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Only draw on the active link
        if (activeLink === link) {
          const pathData = "T10 40 Q 70 1, 35 35 M 55 25  M 45 15, -35 1005"; // Examplepath
          rc.path(pathData, {
            stroke: `${isHeroVisible ? "none" : "none"}`,
            strokeWidth: 1.5,
            fill: `${isHeroVisible ? "none" : "none"}`,
            fillStyle: `${isHeroVisible ? "none" : "solid"}`, // You can use 'hachure' for a hatched effect
            roughness: 2,
          });
        }
      }
    });
  }, [activeLink, isHeroVisible]);

  return (
    <motion.header
      className={`${
        isHeroVisible ? "bg-transparent" : "bg-white shadow-md"
      } py-4 px-8 fixed w-full top-0 left-0 right-0 z-50 flex justify-between items-center transition-colors duration-300`}
      initial={{ y: -50, opacity: 0 }}
      animate={showHeader ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href="/">
        <div
          className={`text-2xl font-bold text-black ${
            isHeroVisible ? "text-white" : ""
          }`}
        >
          Mark Tailor
        </div>
      </a>

      <button
        className={`block md:hidden text-black focus:outline-none ${
          isHeroVisible ? "text-white" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <nav
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:flex md:flex-row md:space-x-8 md:space-y-0 md:translate-x-0 md:bg-transparent`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-black relative">
          {["Shop", "Gallery", "Contact"].map((link) => (
            <li key={link} className="relative">
              <a
                href="#"
                className={`text-black font-medium relative ${
                  activeLink === link ? "active" : ""
                } hover:underline-offset-4 hover:underline ${
                  isHeroVisible
                    ? "text-white"
                    : " hover:text-teal-700 transition duration-300"
                }`}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </a>
              {activeLink === link && (
                <canvas
                  ref={canvasRefs[link]}
                  width={80}
                  height={40}
                  className="absolute top-1/2 transform -translate-y-1/2 -z-10"
                ></canvas>
              )}
            </li>
          ))}
        </ul>
        <a
          href="#"
          className={`text-teal-700 border-2 px-4 py-1 rounded-sm hover:scale-105 transition duration-300 ${
            isHeroVisible ? "border-white text-white" : "border-teal-700"
          }`}
        >
          Home
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
