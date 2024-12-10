import { motion } from "framer-motion";
import { profile } from "../strings";
import { containerVariantsMoveUp, itemVariantsMoveUp } from "../constants";

const Profile = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariantsMoveUp}
      viewport={{ once: false }}
    >
      <motion.p
        className="p-10 text-gray-700 text-lg text-center"
        variants={itemVariantsMoveUp}
      >
        {profile}
      </motion.p>
    </motion.section>
  );
};

export default Profile;
