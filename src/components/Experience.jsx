import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

// Animation Variants for smoother effects
const fadeInVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const Experience = () => {
  return (
    <div className="pb-4">
      {/* Section Title with Animation */}
      <motion.h2
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Experience 💼
      </motion.h2>

      <div className="space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap items-start justify-center lg:justify-start bg-gradient-to-r from-stone-800 to-stone-900 p-6 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {/* Year Section */}
            <motion.div
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              className="w-full lg:w-1/4 mb-4 lg:mb-0 text-center lg:text-left"
            >
              <p className="mb-2 text-sm font-medium text-stone-300 tracking-wide">
                📍 {experience.year}
              </p>
            </motion.div>

            {/* Role, Company & Description Section */}
            <motion.div
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-lg tracking-tight text-stone-100">
                {experience.role}{" "}
                <span className="text-sm text-stone-400 font-normal">
                  @ {experience.company}
                </span>
              </h3>

              <p className="mb-4 text-stone-400 leading-relaxed">
                {experience.description}
              </p>

              {/* Technologies Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mt-2 rounded-full bg-gradient-to-r from-stone-700 to-stone-800 px-3 py-1 text-sm font-medium text-stone-300 shadow-md hover:scale-105 transition-transform duration-200"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
