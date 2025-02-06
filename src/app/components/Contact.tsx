import { motion } from "framer-motion";
import { contact } from "../strings";
import { containerVariantsMoveUp, itemVariantsMoveUp } from "../constants";

const Contact = () => {
  const { email, cell, linkedIn } = contact;

  return (
    <motion.section
      className="py-16 px-6 text-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariantsMoveUp}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact</h2>
      <p className="text-lg text-gray-700">Let’s work together!</p>
      <p className="mt-2 text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Phone: {cell}</p>
      <p className="mt-4">
        <motion.a
          href={linkedIn}
          className="text-blue-500 hover:underline transform transition"
          variants={itemVariantsMoveUp}
          whileHover={{ scale: 1.1 }}
        >
          LinkedIn Profile
        </motion.a>
      </p>
    </motion.section>
  );
};

export default Contact;
