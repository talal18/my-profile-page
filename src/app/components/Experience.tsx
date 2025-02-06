import { motion } from "framer-motion";
import { containerVariantsMoveUp, itemVariantsMoveUp } from "../constants";
import { experience } from "../strings";

const Experience = () => {
  return (
    <motion.section
      className="py-16 px-6 bg-gray-900 bg-opacity-90 backdrop-blur-md text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariantsMoveUp}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl font-semibold text-white mb-6 text-center">
        Experience
      </h2>
      <p className="text-gray-300 text-lg text-center">
        Here are some of the amazing companies I’ve worked for:
      </p>

      <div className="mt-8 flex flex-col w-full gap-8 items-center">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="p-6 w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg transform transition relative overflow-hidden hover:scale-105 hover:-translate-y-2"
            variants={itemVariantsMoveUp}
          >
            {/* Company Logo */}
            <div className="flex justify-center mb-4"></div>

            {/* Experience Details */}
            <h3 className="text-xl font-bold text-white text-center">
              {exp.company}
            </h3>
            <p className="text-gray-300 mt-2 text-center">{exp.title}</p>
            <p className="text-gray-400 mt-1 text-center">
              {exp.startDate} - {exp.endDate}
            </p>

            {/* Tools Used */}
            <p className="text-gray-300 mt-4">
              <strong>Tools:</strong> {exp.tools}
            </p>

            {/* Job Description */}
            <ul className="list-disc text-gray-300 mt-2 ml-6 space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
