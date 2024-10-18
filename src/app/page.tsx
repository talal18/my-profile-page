"use client"; // Client Component

import { useEffect, useState } from "react";

export default function Home() {
  const [profile, setProfile] = useState<{
    name: string;
    role: string;
    bio: string;
    skills: string[];
    experience: string[];
  } | null>(null);

  useEffect(() => {
    fetch("/api/profile")
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          {profile.name}
        </h1>
        <p className="text-xl text-center text-gray-600 mb-2">{profile.role}</p>
        <p className="text-base text-center text-gray-500 mb-6">
          {profile.bio}
        </p>

        {/* Skills Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            {profile.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Experience Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Experience
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            {profile.experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
