"use client";

import { motion } from "framer-motion";
import {
  containerVariantsMoveUp,
  containerVariantsMoveDown,
  containerVariantsMoveRight,
  itemVariantsMoveDown,
  itemVariantsMoveRight,
  itemVariantsMoveUp,
} from "./constants";
import { contact, profile, skills, experience } from "./strings";

import Title from "./components/Title";
import Profile from "./components/Profile";

export default function HomePage() {
  const { cell, email, linkedIn } = contact;

  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 text-gray-800">
      {/* Tilte Section */}
      <Title />

      {/*Profile Section */}
      <Profile />

      {/* Skills Section */}
      <motion.section
        className="py-16 px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariantsMoveUp}
        viewport={{ once: false }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Skills
        </h2>
        <ul className="flex-flex-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <motion.li
            className="p-4 mb-4 bg-white shadow-md rounded-lg transform transition"
            variants={itemVariantsMoveRight}
            whileHover={{
              backgroundColor: "#242424",
              color: "#ededed",
              x: 5,
              cursor: "pointer",
            }}
          >
            JavaScript, TypeScript, ReactJS, NextJS
          </motion.li>
          <motion.li
            className="p-4 mb-4 bg-white shadow-md rounded-lg transform transition"
            variants={itemVariantsMoveRight}
            whileHover={{
              backgroundColor: "#242424",
              color: "#ededed",
              x: 5,
              cursor: "pointer",
            }}
          >
            CSS, Tailwind CSS, Styled Components
          </motion.li>
          <motion.li
            className="p-4 mb-4 bg-white shadow-md rounded-lg transform transition"
            variants={itemVariantsMoveRight}
            whileHover={{
              backgroundColor: "#242424",
              color: "#ededed",
              x: 5,
              cursor: "pointer",
            }}
          >
            Testing: Jest, React Testing Library, Playwright
          </motion.li>
          <motion.li
            className="p-4 mb-4 bg-white shadow-md rounded-lg transform transition"
            variants={itemVariantsMoveRight}
            whileHover={{
              backgroundColor: "#242424",
              color: "#ededed",
              x: 5,
              cursor: "pointer",
            }}
          >
            UI/UX Design with Figma and Photoshop
          </motion.li>
        </ul>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="py-16 px-6 bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={containerVariantsMoveUp}
        viewport={{ once: false }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Experience
        </h2>
        <p className="text-gray-700 text-lg text-center">
          Here are some of the amazing companies I’ve worked for:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg transform transition"
            variants={itemVariantsMoveUp}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <h3 className="text-xl font-bold text-gray-800">Ross Video</h3>
            <p className="text-gray-600 mt-2">Frontend Developer</p>
            <p className="text-gray-500 mt-1">Aug 2022 - Aug 2023</p>
          </motion.div>
          {/* Add more experiences as needed */}
        </div>
      </motion.section>

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
