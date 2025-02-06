import { motion } from "framer-motion";
import { containerVariantsMoveUp, itemVariantsMoveUp } from "../constants";
import { title } from "../strings";

const Title = () => {
  const { name, mainTitle, subTitle } = title;

  return (
    <motion.section
      className="text-center py-20 bg-gray-900 text-gray-200"
      initial="hidden"
      animate="visible"
      variants={containerVariantsMoveUp}
      viewport={{ once: false }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-gray-100"
        whileHover={{ scale: 1.05 }}
      >
        {name}
      </motion.h1>
      <motion.p
        className="mt-4 text-2xl font-medium text-blue-400"
        variants={itemVariantsMoveUp}
      >
        {mainTitle}
      </motion.p>
      <motion.p
        className="mt-4 text-xl font-medium text-gray-400"
        variants={itemVariantsMoveUp}
      >
        {subTitle}
      </motion.p>
    </motion.section>
  );
};

export default Title;
