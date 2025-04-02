import { BiLogoPostgresql, BiLogoDjango } from "react-icons/bi";
import { DiRedis, DiPython } from "react-icons/di";
import { FaNodeJs, FaReact, FaAngular, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiCplusplus, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

// Icon Floating Animation Setup
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// Tech Stack Array (Cleaner Approach)
const techStack = [
  { icon: <FaReact className="text-cyan-400" />, duration: 2.5 },
  //{ icon: <TbBrandNextjs />, duration: 3 },
  { icon: <SiMongodb className="text-green-500" />, duration: 2.8 },
  { icon: <SiCplusplus className="text-blue-500" />, duration: 4.5 },
  // { icon: <DiRedis className="text-red-700" />, duration: 2 },
  { icon: <FaNodeJs className="text-green-500" />, duration: 6 },
  //{ icon: <BiLogoPostgresql className="text-sky-700" />, duration: 4 },
  { icon: <DiPython className="text-yellow-400" />, duration: 2.2 },
  { icon: <BiLogoDjango className="text-green-700" />, duration: 3.5 },
  
 
  { icon: <FaAngular className="text-red-600" />, duration: 3.8 },
  { icon: <SiExpress className="text-gray-500" />, duration: 3 },
  { icon: <RiJavascriptFill className="text-yellow-400" />, duration: 2.4 },
  { icon: <SiTailwindcss className="text-sky-400" />, duration: 3.2 },
  { icon: <FaGithub className="text-gray-300" />, duration: 3.5 },
];

const Technologies = () => {
  return (
    <div className="pb-24">
      {/* Section Title Animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        🚀 Technologies I Work With
      </motion.h2>

      {/* Icons Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconVariants(tech.duration)}
            className="p-4 cursor-pointer transition-transform duration-300 hover:scale-125"
          >
            <div className="text-7xl shadow-lg hover:drop-shadow-[0_0_12px_rgb(255,255,255,0.8)]">
              {tech.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
