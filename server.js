const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Example API route
  server.get("/api/profile", (req, res) => {
    res.json({
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

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
