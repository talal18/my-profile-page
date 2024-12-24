import { motion } from "framer-motion";
import { skills } from "../strings";
import { containerVariantsMoveUp, itemVariantsMoveUp } from "../constants";

const Skills = () => {
  return (
    <motion.section
      className="py-16 px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariantsMoveUp}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Skills
      </h2>
      <div className="flex flex-col gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg transform transition"
            variants={itemVariantsMoveUp}
            whileHover={{
              backgroundColor: "#f3f3f3",
              y: -5,
              cursor: "pointer",
            }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">{category}</h3>
            <p className="text-gray-700">{items}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
