"use client";

import { motion } from "framer-motion";
import { containerVariantsMoveUp, itemVariantsMoveUp } from "./constants";
import { contact } from "./strings";

import Title from "./components/Title";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function HomePage() {
  const { cell, email, linkedIn } = contact;

  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 text-gray-800">
      {/* Title Section */}
      <Title />

      {/* Profile Section */}
      <Profile />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
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
    </main>
  );
}
