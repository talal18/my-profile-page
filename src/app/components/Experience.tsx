import { motion } from "framer-motion";
import { containerVariantsMoveUp, itemVariantsMoveUp } from "../constants";
import { experience } from "../strings";

const Experience = () => {
  return (
    <motion.section
      className="py-16 px-6 bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariantsMoveUp} // Assuming you have variants defined
      viewport={{ once: false }}
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Experience
      </h2>
      <p className="text-gray-700 text-lg text-center">
        Here are some of the amazing companies I’ve worked for:
      </p>
      <div className="mt-8 flex flex-col items-center gap-8">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg transform transition relative overflow-hidden w-full "
            variants={itemVariantsMoveUp} // Assuming you have variants defined
            whileHover={{ scale: 1.05, y: -10 }}
          >
            {/* Displaying the logo image */}
            <div className="flex justify-center mb-4">
              <img
                src={exp.logo} // Dynamically set logo path
                alt={`${exp.company} logo`}
                className="w-24 h-24 object-contain" // Ensures all logos are the same size
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
            <p className="text-gray-600 mt-2">{exp.title}</p>
            <p className="text-gray-500 mt-1">
              {exp.startDate} - {exp.endDate}
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Tools:</strong> {exp.tools}
            </p>
            <ul className="list-disc text-gray-700 mt-2 ml-6">
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
