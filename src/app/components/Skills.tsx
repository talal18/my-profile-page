import { motion } from "framer-motion";
import { containerVariantsMoveUp, itemVariantsMoveRight } from "../constants";
import { skills } from "../strings";

const Skills = () => {
  return (
    <motion.section
      className="py-16 px-6 bg-gray-900 text-gray-200"
      initial="hidden"
      animate="visible"
      variants={containerVariantsMoveUp}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl font-semibold text-gray-100 mb-6 text-center">
        Skills
      </h2>
      <div className="flex flex-col items-center gap-6">
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={index}
            className="p-6 w-full max-w-xl text-center rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300"
            variants={itemVariantsMoveRight}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold text-gray-300 mb-2">{category}</h3>
            <p className="text-gray-400">{skillList}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
