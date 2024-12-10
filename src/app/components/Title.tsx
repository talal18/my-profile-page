import { motion } from "framer-motion";
import { containerVariantsMoveUp, itemVariantsMoveUp } from "../constants";

import { title } from "../strings";

const Title = () => {
  const { name, jobTitle, subTitle } = title;
  return (
    <motion.section
      className="text-center py-20 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100"
      initial="hidden"
      animate="visible"
      variants={containerVariantsMoveUp}
      viewport={{ once: false }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-gray-900"
        whileHover={{ scale: 1.05, color: "#4B9CD3" }}
      >
        {name}
      </motion.h1>
      <motion.p
        className="mt-4 text-2xl font-medium text-red-700"
        variants={itemVariantsMoveUp}
      >
        {jobTitle}
      </motion.p>
      <motion.p
        className="mt-4 text-xl font-medium text-gray-700"
        variants={itemVariantsMoveUp}
      >
        {subTitle}
      </motion.p>
    </motion.section>
  );
};

export default Title;
