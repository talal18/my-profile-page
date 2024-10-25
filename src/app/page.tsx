"use client"; // Client Component

import { useEffect, useState } from "react";
import ContactSection from "./components/mainPage/contactSection";
import ExperienceSection from "./components/mainPage/ExperienceSection";
import ProfileSection from "./components/mainPage/profileSection";
import SkillsSection from "./components/mainPage/skillsSection";
import TitleSection from "./components/mainPage/TitleSection";

export default function Home() {
  const [profile, setProfile] = useState<{
    name: string;
    role: string;
    bio: string;
    skills: string[];
    experience: string[];
  } | null>(null);

  useEffect(() => {
    setProfile({
      name: "Talal Qasem",
      role: "Software Developer",
      bio: "Your profile bio",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "Tailwind CSS",
      ],
      experience: [
        "Front-End Developer at Ross Video (Aug 2022 – Aug 2023)",
        "Web Application Developer at Airmeez (Nov 2019 – Dec 2022)",
        "Mobile/Web Developer at QuickTo Solutions (Dec 2019 – Dec 2020)",
      ],
    });
  });

  // useEffect(() => {
  //   fetch("/api/profile")
  //     .then((response) => response.json())
  //     .then((data) => setProfile(data));
  // }, []);

  if (!profile) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
      <div className="">
        <TitleSection />
        <ContactSection />
        <ProfileSection />
        <SkillsSection />

        {/* Skills Section */}
        {/* <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            {profile.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div> */}

        {/* Experience Section */}
        <ExperienceSection />
      </div>
    </div>
  );
}
