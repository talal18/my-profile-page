import { motion } from "framer-motion";
import { profile } from "../strings";
import { containerVariantsMoveUp, itemVariantsMoveUp } from "../constants";

const Profile = () => {
  return (
    <motion.section
      className="bg-gray-900 text-gray-300 py-16 px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariantsMoveUp}
      viewport={{ once: false }}
    >
      <motion.p
        className="text-lg text-center max-w-3xl mx-auto leading-relaxed"
        variants={itemVariantsMoveUp}
      >
        {profile}
      </motion.p>
    </motion.section>
  );
};

export default Profile;
