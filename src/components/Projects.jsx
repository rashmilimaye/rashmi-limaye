import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

// Animation Variants
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

const Projects = () => {
  return (
    <div className="pb-4">
      {/* Section Title with Animation */}
      <motion.h2
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        🚀 Projects
      </motion.h2>

      <div className="space-y-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap items-start justify-center lg:justify-start bg-gradient-to-r from-stone-800 to-stone-900 p-6 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {/* Project Image */}
            <motion.div
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              className="w-full lg:w-1/3 flex justify-center"
            >
              <img
                src={project.image}
                width={300}
                height={300}
                alt={project.title}
                className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              className="w-full max-w-xl lg:w-2/3 pl-6"
            >
              <h3 className="mb-2 font-semibold text-2xl text-stone-100 tracking-tight hover:text-yellow-300 transition duration-300">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mt-2 rounded-full bg-gradient-to-r from-stone-700 to-stone-800 px-3 py-1 text-sm font-medium text-stone-300 shadow-md hover:scale-105 transition-transform duration-200"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Link Button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                  View Project 🔗
                </a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
