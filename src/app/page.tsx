"use client";

import Title from "./components/Title";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function HomePage() {
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
      <Contact />
    </main>
  );
}
