import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profilePic1 from "../assets/rashmipfp.jpg";
import profilePic2 from "../assets/rashmipfp2.jpg";
import profilePic3 from "../assets/rashmipfp3.jpg";
import { HERO_CONTENT } from "../constants/index";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, staggerChildren: 0.4 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Images Array
const images = [profilePic1, profilePic2, profilePic3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-Slide Feature (5s per slide)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Manual Slide Navigation
  const nextSlide = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Profile Picture Section with Auto-Slider */}
        <div className="w-full lg:w-1/2">
          <div className="relative flex justify-center lg:p-8">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Rashmi Limaye"
              className="border border-stone-900 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
              width={700}
              height={700}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />

            {/* Previous and Next Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-stone-400 to-stone-600 p-2 rounded-full shadow-md hover:bg-stone-500 transition duration-300 hover:scale-110"
            >
              ◀
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-stone-400 to-stone-600 p-2 rounded-full shadow-md hover:bg-stone-500 transition duration-300 hover:scale-110"
            >
              ▶
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 mx-1 cursor-pointer rounded-full transition-transform duration-300 ${
                  currentIndex === index ? "bg-stone-800 scale-125" : "bg-stone-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl font-extrabold tracking-tighter lg:text-6xl bg-gradient-to-r from-blue-100 to-purple-800 bg-clip-text text-transparent"
            >
              Rashmi Limaye
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl font-semibold tracking-tight text-transparent"
            >
              Software Developer 
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-lg leading-relaxed tracking-tighter text-stone-300"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* View Resume Button */}
            <motion.a
              variants={childVariants}
              href="/rashmilimaye-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-stone-300 to-stone-500 rounded-full p-4 text-sm text-stone-800 mb-10 hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              View My Resume 
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
