// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const FeaturedProducts = () => {
//   const [isHovered, setisHovered] = useState(false);
//   const products = [
//     {
//       name: "Product 1",
//       price: 39.99,
//       image:
//         "https://www.shutterstock.com/image-photo/full-body-photo-attractive-young-260nw-2002950977.jpg",
//     },
//     {
//       name: "Product 2",
//       price: 49.99,
//       image:
//         "https://www.shutterstock.com/image-photo/photo-young-girl-happy-positive-260nw-1915191226.jpg",
//     },
//     {
//       name: "Product 3",
//       price: 59.99,
//       image:
//         "https://img.freepik.com/free-photo/full-length-portrait-cute-little-kid-girl-stylish-jeans-clothes-smiling-standing-white-kids-fashion-concept_155003-20299.jpg",
//     },
//   ];

//   const infiniteProduct = [...products, ...products, ...products];

//   return (
//     <motion.section
//       className={`py-16 bg-gray-100 ${
//         isHovered ? "duration-300" : "bg-gray-100"
//       }`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5, delay: 0.4 }}
//     >
//       <div className="container mx-auto px-4">
//         <h2
//           className={`text-3xl font-bold mb-8 text-center ${
//             isHovered ? "" : ""
//           }`}
//         >
//           Featured Products
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {products.map((product, index) => (
//             <motion.div
//               key={index}
//               className={`bg-white rounded-[1px] shadow-md overflow-hidden border border-transparent transition-all duration-300`}
//               whileHover={{
//                 scale: 1.05,
//                 // borderColor: "#ffff50",
//                 // borderWidth: "4px",
//               }}
//               whileTap={{ scale: 0.95 }}
//               onMouseEnter={() => setisHovered(true)}
//               onMouseLeave={() => setisHovered(false)}
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-64 object-contain"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//                 <p className="text-gray-600">${product.price.toFixed(2)}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default FeaturedProducts;

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import clsx from "clsx";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   {
//     src: "https://wallpapers.com/images/hd/purple-sky-3d-nature-9zgqmz91pcm7idf7.jpg",
//     title: "Showcase site | Branding",
//     caption: "AMGPRO",
//   },
//   {
//     src: "https://i.pinimg.com/originals/13/3b/89/133b89168deaceb619421cd65fc62f59.jpg",
//     title: "Ecommerce site | Branding",
//     caption: "Diamonds Story",
//   },
//   {
//     src: "https://e1.pxfuel.com/desktop-wallpaper/859/280/desktop-wallpaper-awesome-3d-nature-full-screen-3d-full-screen.jpg",
//     title: "Ecommerce site | Branding",
//     caption: "Diamonds Story",
//   },
//   {
//     src: "https://cdn.wallpapersafari.com/64/26/m4ojCw.jpg",
//     title: "Ecommerce site | Branding",
//     caption: "Diamonds Story",
//   },
//   // Add more images as needed
// ];

// const HorizontalScroll: React.FC = () => {
//   const scrollRef = useRef < HTMLDivElement > null;
//   const [scrollPosition, setScrollPosition] = useState < number > 0;
//   const [expandedIndex, setExpandedIndex] = (useState < number) | (null > null);
//   const infiniteImages = [...images, ...images, ...images];

//   useEffect(() => {
//     const handleWheel = (event: WheelEvent) => {
//       if (scrollRef.current) {
//         event.preventDefault();
//         scrollRef.current.scrollLeft += event.deltaY;
//       }
//     };

//     const handleScroll = () => {
//       if (scrollRef.current) {
//         const container = scrollRef.current;
//         const imageWidth = container.offsetWidth / 3;

//         if (container.scrollLeft < imageWidth) {
//           container.scrollLeft = container.scrollWidth / 3;
//         } else if (container.scrollLeft > (container.scrollWidth * 2) / 3) {
//           container.scrollLeft = container.scrollWidth / 3;
//         }

//         setScrollPosition(container.scrollLeft);
//       }
//     };

//     const scrollElement = scrollRef.current;
//     if (scrollElement) {
//       scrollElement.addEventListener("wheel", handleWheel);
//       scrollElement.addEventListener("scroll", handleScroll);

//       const initialScrollPosition = scrollElement.scrollWidth / 3;
//       scrollElement.scrollLeft = initialScrollPosition;
//       setScrollPosition(initialScrollPosition);
//     }

//     return () => {
//       if (scrollElement) {
//         scrollElement.removeEventListener("wheel", handleWheel);
//         scrollElement.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   const handleImageClick = (index: number) => {
//     if (expandedIndex === null) {
//       setExpandedIndex(index);
//     }
//   };

//   const handleOverlayClick = () => {
//     setExpandedIndex(null);
//   };

//   const calculateOpacityAndScale = (index: number) => {
//     if (expandedIndex === null) {
//       if (!scrollRef.current) return { opacity: 1, scale: 1 };

//       const elementWidth = scrollRef.current.offsetWidth / 3;
//       const center = scrollPosition + scrollRef.current.offsetWidth / 2;
//       const elementCenter = index * elementWidth + elementWidth / 2;

//       const distanceFromCenter = Math.abs(center - elementCenter);
//       const isCentral = distanceFromCenter < elementWidth / 2;
//       const opacity = isCentral ? 1 : 0.4;
//       const scale = isCentral ? 1 : 1;

//       return { opacity, scale };
//     } else {
//       return {
//         opacity: expandedIndex === index ? 1 : 0.4,
//         scale: expandedIndex === index ? 2 : 1,
//       };
//     }
//   };

//   return (
//     <div className="relative flex py-3 overflow-hidden">
//       <AnimatePresence>
//         {expandedIndex !== null && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               className="fixed inset-0 z-40 bg-black bg-opacity-100"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 3 }}
//             />
//             {/* Expanded Image */}
//             <motion.div
//               className="fixed inset-0 z-50 flex items-center justify-center"
//               onClick={handleOverlayClick}
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "100%" }}
//               transition={{ duration: 2 }}
//             >
//               <motion.img
//                 src={infiniteImages[expandedIndex].src}
//                 alt={infiniteImages[expandedIndex].caption}
//                 className="w-full h-full object-cover"
//                 onClick={(e) => e.stopPropagation()}
//               />
//               <motion.div
//                 className="absolute inset-0 z-[100] before:content-['']
//             before:absolute
//             before:inset-0
//             before:block
//             before:bg-gradient-to-t
//             before:from-black
//             before:to-transparent
//             before:opacity-75
//             before:z-[-5]
//               "
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 2, duration: 0.5 }}
//               />
//               <motion.div
//                 className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 2, duration: 0.5 }}
//               >
//                 <p className="text-white mb-12 z-[101] text-3xl font-bold">
//                   {infiniteImages[expandedIndex].title}
//                 </p>
//                 <button
//                   className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-75 rounded-full p-2"
//                   onClick={handleOverlayClick}
//                 >
//                   x
//                 </button>
//               </motion.div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       <motion.div
//         ref={scrollRef}
//         className="overflow-x-auto whitespace-nowrap cursor-pointer no-scrollbar"
//         style={{ maxWidth: "100vw" }}
//       >
//         <div className="inline-flex items-center gap-4 justify-center">
//           {infiniteImages.map((image, index) => {
//             const { opacity, scale } = calculateOpacityAndScale(index);

//             return (
//               <motion.div
//                 key={index}
//                 className={clsx(
//                   "inline-block relative transition-transform duration-300"
//                 )}
//                 style={{
//                   width: "calc(100vw / 3.2)",
//                   minWidth: "calc(100vw / 3.2)",
//                   maxHeight: "500px",
//                   height: "500px",
//                   minHeight: "500px",
//                   overflow: "hidden",
//                 }}
//                 initial={{ opacity: 0.3 }}
//                 whileInView={{ opacity }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <img
//                   src={image.src}
//                   alt={image.caption}
//                   className=" h-[350px] object-cover shadow-md"
//                   style={{ opacity, width: "800px" }}
//                   onClick={() =>
//                     expandedIndex === null && handleImageClick(index)
//                   }
//                 />
//                 <div className="flex justify-between mt-2 relative z-10">
//                   <p className="text-xl font-bold">{image.title}</p>
//                   <p className="text-lg text-gray-400">{image.caption}</p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HorizontalScroll;

// import React, { useEffect, useRef, useState } from "react";
// import clsx from "clsx";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   {
//     src: "https://media.istockphoto.com/id/1478708775/photo/full-length-of-serious-focused-mid-adult-male-professional-dressed-in-casual-working-over.jpg?s=612x612&w=0&k=20&c=WBeMJfYQFzPEEsiv2oSsDs9Au4PazUdn5eK11PIcFEM=",
//     title: "Product 1",
//     caption: "$50",
//   },
//   {
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkI1ERTLz1dvbwLZs3dzGEuNGT8rifY4KGA&s",
//     title: "Product 2",
//     caption: "$50",
//   },
//   {
//     src: "https://st5.depositphotos.com/20363444/64335/i/450/depositphotos_643351266-stock-photo-well-dressed-children-denim-vests.jpg",
//     title: "Product 3",
//     caption: "",
//   },
//   // Add more images as needed
// ];

// const FeaturedProducts = () => {
//   const scrollRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const infiniteImages = [...images, ...images, ...images];

//   useEffect(() => {
//     const handleWheel = (event) => {
//       if (scrollRef.current) {
//         event.preventDefault();
//         scrollRef.current.scrollLeft += event.deltaY;
//       }
//     };

//     const handleScroll = () => {
//       if (scrollRef.current) {
//         const container = scrollRef.current;
//         const imageWidth = container.offsetWidth / 3;

//         if (container.scrollLeft < imageWidth) {
//           container.scrollLeft = container.scrollWidth / 3;
//         } else if (container.scrollLeft > (container.scrollWidth * 2) / 3) {
//           container.scrollLeft = container.scrollWidth / 3;
//         }

//         setScrollPosition(container.scrollLeft);
//       }
//     };

//     const scrollElement = scrollRef.current;
//     if (scrollElement) {
//       scrollElement.addEventListener("wheel", handleWheel);
//       scrollElement.addEventListener("scroll", handleScroll);

//       const initialScrollPosition = scrollElement.scrollWidth / 3;
//       scrollElement.scrollLeft = initialScrollPosition;
//       setScrollPosition(initialScrollPosition);
//     }

//     return () => {
//       if (scrollElement) {
//         scrollElement.removeEventListener("wheel", handleWheel);
//         scrollElement.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   const handleImageClick = (index) => {
//     if (expandedIndex === null) {
//       setExpandedIndex(index);
//     }
//   };

//   const handleOverlayClick = () => {
//     setExpandedIndex(null);
//   };

//   const calculateOpacityAndScale = (index) => {
//     if (expandedIndex === null) {
//       if (!scrollRef.current) return { opacity: 0, scale: 0 };

//       const elementWidth = scrollRef.current.offsetWidth / 3;
//       const center = scrollPosition + scrollRef.current.offsetWidth / 2;
//       const elementCenter = index * elementWidth + elementWidth / 2;

//       const distanceFromCenter = Math.abs(center - elementCenter);
//       const isCentral = distanceFromCenter < elementWidth / 2;
//       const opacity = isCentral ? 24 : 24;
//       const scale = isCentral ? 2 : 1;

//       return { opacity, scale };
//     } else {
//       return {
//         opacity: expandedIndex === index ? 24 : 24,
//         scale: expandedIndex === index ? 2 : 1,
//       };
//     }
//   };

//   return (
//     <div className="relative flex py-3 overflow-hidden">
//       <AnimatePresence>
//         {expandedIndex !== null && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               className="fixed inset-0 z-40 bg-black bg-opacity-100"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 3 }}
//             />
//             {/* Expanded Image */}
//             <motion.div
//               className="fixed inset-0 z-50 flex items-center justify-center"
//               onClick={handleOverlayClick}
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "100%" }}
//               transition={{ duration: 2 }}
//             >
//               <motion.img
//                 src={infiniteImages[expandedIndex].src}
//                 alt={infiniteImages[expandedIndex].caption}
//                 className="w-full h-full object-cover"
//                 onClick={(e) => e.stopPropagation()}
//               />
//               <motion.div
//                 className="absolute inset-0 z-[100] before:content-['']
//             before:absolute
//             before:inset-0
//             before:block
//             before:bg-gradient-to-t
//             before:from-black
//             before:to-transparent
//             before:opacity-75
//             before:z-[-5]
//               "
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 2, duration: 0.5 }}
//               />
//               <motion.div
//                 className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 2, duration: 0.5 }}
//               >
//                 <p className="text-white mb-12 z-[101] text-3xl font-bold">
//                   {infiniteImages[expandedIndex].title}
//                 </p>
//                 <button
//                   className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-75 rounded-full p-2"
//                   onClick={handleOverlayClick}
//                 >
//                   x
//                 </button>
//               </motion.div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       <motion.div
//         ref={scrollRef}
//         className="overflow-x-auto whitespace-nowrap cursor-pointer no-scrollbar"
//         style={{ maxWidth: "100vw" }}
//       >
//         <div className="inline-flex items-center gap-4 justify-center">
//           {infiniteImages.map((image, index) => {
//             const { opacity, scale } = calculateOpacityAndScale(index);

//             return (
//               <motion.div
//                 key={index}
//                 className={clsx(
//                   "inline-block relative transition-transform duration-300"
//                 )}
//                 style={{
//                   width: "calc(100vw / 3.2)",
//                   minWidth: "calc(100vw / 3.2)",
//                   maxHeight: "500px",
//                   height: "500px",
//                   minHeight: "500px",
//                   overflow: "hidden",
//                 }}
//                 initial={{ opacity: 0.3 }}
//                 whileInView={{ opacity }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <img
//                   src={image.src}
//                   alt={image.caption}
//                   className=" h-[350px] object-cover shadow-md"
//                   style={{ opacity, width: "800px" }}
//                   onClick={() =>
//                     expandedIndex === null && handleImageClick(index)
//                   }
//                 />
//                 <div className="flex justify-between mt-2 relative z-10">
//                   <p className="text-xl font-bold">{image.title}</p>
//                   <p className="text-lg text-gray-400">{image.caption}</p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default FeaturedProducts;

// import React, { useEffect, useRef, useState } from "react";
// import clsx from "clsx";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   {
//     src: "https://media.istockphoto.com/id/1478708775/photo/full-length-of-serious-focused-mid-adult-male-professional-dressed-in-casual-working-over.jpg?s=612x612&w=0&k=20&c=WBeMJfYQFzPEEsiv2oSsDs9Au4PazUdn5eK11PIcFEM=",
//     title: "Product 1",
//     caption: "$50",
//   },
//   {
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkI1ERTLz1dvbwLZs3dzGEuNGT8rifY4KGA&s",
//     title: "Product 2",
//     caption: "$50",
//   },
//   {
//     src: "https://st5.depositphotos.com/20363444/64335/i/450/depositphotos_643351266-stock-photo-well-dressed-children-denim-vests.jpg",
//     title: "Product 3",
//     caption: "$40",
//   },
//   // Add more images as needed
// ];

// const FeaturedProducts = () => {
//   const scrollRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const infiniteImages = [...images, ...images, ...images]; // Triplicate the images to create an illusion of infinite scroll

//   useEffect(() => {
//     const scrollElement = scrollRef.current;
//     if (!scrollElement) return;

//     // Set initial scroll position to the middle section
//     const initialScrollPosition = scrollElement.scrollWidth / 3;
//     scrollElement.scrollLeft = initialScrollPosition;
//     setScrollPosition(initialScrollPosition);

//     // Auto-scroll logic for infinite scrolling
//     const scrollSpeed = 0.5; // Adjust the speed here (lower value = faster speed)
//     const scrollInterval = setInterval(() => {
//       if (scrollElement.scrollLeft <= 0) {
//         // Reset to the far right to create a continuous loop
//         scrollElement.scrollLeft = scrollElement.scrollWidth / 3;
//       } else {
//         // Scroll to the left
//         scrollElement.scrollLeft -= scrollSpeed;
//       }
//     }, 10); // Adjust the interval time for scroll speed

//     // Clean up interval on component unmount
//     return () => {
//       clearInterval(scrollInterval);
//     };
//   }, []);

//   const handleImageClick = (index) => {
//     if (expandedIndex === null) {
//       setExpandedIndex(index);
//     }
//   };

//   const handleOverlayClick = () => {
//     setExpandedIndex(null);
//   };

//   const calculateOpacityAndScale = (index) => {
//     if (expandedIndex === null) {
//       if (!scrollRef.current) return { opacity: 0, scale: 0 };

//       const elementWidth = scrollRef.current.offsetWidth / 3;
//       const center = scrollPosition + scrollRef.current.offsetWidth / 2;
//       const elementCenter = index * elementWidth + elementWidth / 2;

//       const distanceFromCenter = Math.abs(center - elementCenter);
//       const isCentral = distanceFromCenter < elementWidth / 2;
//       const opacity = isCentral ? 24 : 24;
//       const scale = isCentral ? 1 : 1;

//       return { opacity, scale };
//     } else {
//       return {
//         opacity: expandedIndex === index ? 24 : 24,
//         scale: expandedIndex === index ? 1 : 1,
//       };
//     }
//   };

//   return (
//     <div className="relative flex py-3 overflow-hidden">
//       <AnimatePresence>
//         {expandedIndex !== null && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               className="fixed inset-0 z-40 bg-black bg-opacity-100"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 3 }}
//             />
//             {/* Expanded Image */}
//             <motion.div
//               className="fixed inset-0 z-50 flex items-center justify-center"
//               onClick={handleOverlayClick}
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "100%" }}
//               transition={{ duration: 2 }}
//             >
//               <motion.img
//                 src={infiniteImages[expandedIndex].src}
//                 alt={infiniteImages[expandedIndex].caption}
//                 className="w-full h-full object-cover"
//                 onClick={(e) => e.stopPropagation()}
//               />
//               <motion.div
//                 className="absolute inset-0 z-[100] before:content-['']
//                 before:absolute
//                 before:inset-0
//                 before:block
//                 before:bg-gradient-to-t
//                 before:from-black
//                 before:to-transparent
//                 before:opacity-75
//                 before:z-[-5]"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 2, duration: 0.5 }}
//               />
//               <motion.div
//                 className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 2, duration: 0.5 }}
//               >
//                 <p className="text-white mb-12 z-[101] text-3xl font-bold">
//                   {infiniteImages[expandedIndex].title}
//                 </p>
//                 <button
//                   className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-75 rounded-full p-2"
//                   onClick={handleOverlayClick}
//                 >
//                   x
//                 </button>
//               </motion.div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       <motion.div
//         ref={scrollRef}
//         className="overflow-x-hidden whitespace-nowrap cursor-pointer no-scrollbar"
//         style={{ maxWidth: "100vw" }}
//       >
//         <div className="inline-flex items-center gap-4 justify-center">
//           {infiniteImages.map((image, index) => {
//             const { opacity, scale } = calculateOpacityAndScale(index);

//             return (
//               <motion.div
//                 key={index}
//                 className={clsx(
//                   "inline-block relative transition-transform duration-300"
//                 )}
//                 style={{
//                   width: "calc(100vw / 3.2)",
//                   minWidth: "calc(100vw / 3.2)",
//                   maxHeight: "500px",
//                   height: "500px",
//                   minHeight: "500px",
//                   overflow: "hidden",
//                   opacity,
//                   transform: `scale(${scale})`,
//                 }}
//               >
//                 <img
//                   src={image.src}
//                   alt={image.caption}
//                   className="h-[350px] object-cover shadow-md"
//                   onClick={() =>
//                     expandedIndex === null && handleImageClick(index)
//                   }
//                 />
//                 <div className="flex justify-between mt-2 relative z-10">
//                   <p className="text-xl font-bold">{image.title}</p>
//                   <p className="text-lg text-gray-400">{image.caption}</p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default FeaturedProducts;

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import "../index.css";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const images = [
  {
    src: "https://media.istockphoto.com/id/1478708775/photo/full-length-of-serious-focused-mid-adult-male-professional-dressed-in-casual-working-over.jpg?s=612x612&w=0&k=20&c=WBeMJfYQFzPEEsiv2oSsDs9Au4PazUdn5eK11PIcFEM=",
    title: "Product 1",
    caption: "$50",
  },
  {
    src: "https://www.panaprium.com/cdn/shop/articles/outfits_guys_think_hot_1000.jpg?v=1620211875",
    title: "Product 2",
    caption: "$50",
  },
  {
    src: "https://st5.depositphotos.com/20363444/64335/i/450/depositphotos_643351266-stock-photo-well-dressed-children-denim-vests.jpg",
    title: "Product 3",
    caption: "$40",
  },
  // Add more images as needed
];
const FeaturedProducts = () => {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);
  const infiniteImages = [...images, ...images, ...images];
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const initialScrollPosition = scrollElement.scrollWidth / 3;
    scrollElement.scrollLeft = initialScrollPosition;

    const scrollSpeed = 2;
    const scrollInterval = setInterval(() => {
      if (scrollElement.scrollLeft <= 0) {
        scrollElement.scrollLeft = scrollElement.scrollWidth / 3;
      } else {
        scrollElement.scrollLeft -= scrollSpeed;
      }
    }, 10);

    gsap.fromTo(
      titleRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center",
          end: "top+=100 center",
          scrub: 1,
        },
      }
    );

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-start pt-[3.5rem] bg-white">
      <h2
        ref={titleRef}
        className="text-6xl uppercase text-left w-fit tracking-wider font-bold mb-2 p-12 pt-0"
      >
        Featured Products
      </h2>
      <div className="relative flex overflow-hidden">
        <motion.div
          ref={scrollRef}
          className="overflow-x-hidden whitespace-nowrap cursor-pointer no-scrollbar"
          style={{ maxWidth: "100vw" }}
        >
          <div className="inline-flex items-center gap-4 justify-center">
            {infiniteImages.map((image, index) => (
              <motion.div
                key={index}
                className={clsx(
                  "inline-block relative transition-transform duration-300"
                )}
                style={{
                  width: "calc(100vw / 3.2)",
                  minWidth: "calc(100vw / 3.2)",
                  maxHeight: "500px",
                  height: "500px",
                  minHeight: "500px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="h-[350px] object-cover shadow-md"
                />
                <div className="flex justify-between mt-2 relative z-10">
                  <p className="text-xl font-bold">{image.title}</p>
                  <p className="text-lg text-gray-400">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
