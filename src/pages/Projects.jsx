import React from "react";
import v1 from "../../public/videos/rapid-ai.mp4";
const projects = [
  // {
  //   title: "Portfolio Website",
  //   video: "https://www.w3schools.com/html/mov_bbb.mp4",
  //   tech: ["HTML", "CSS", "JS", "React"],
  //   description: "A responsive portfolio website to showcase my projects and skills.",
  //   github: "https://github.com/username/portfolio",
  //   live: "https://username.github.io/portfolio"
  // },
  {
    title: "Rapid.ai",
    video: "https://www.youtube.com/watch?v=gHdmxGgJ8wM",
    tech: ["PERN Stack", "OpenAI API"],
    description:
      "An AI-powered web application that provides advanced text processing features such as translation, summarization, and language detection. Built using the PERN stack with OpenAI API integration for intelligent responses.",
    github: "https://github.com/attaullahchandio",
    live: "https://rapid-ai-omega.vercel.app",
  },
  {
    title: "E-commerce App",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "An e-commerce web app with product listing, cart, and payment integration.",
    github: "https://github.com/username/ecommerce",
    live: "https://ecommerceapp.com",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#0c0f17] text-white px-6 py-6">
      <h2 className="text-2xl md:text-5xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="flex flex-col gap-20">
        {projects.map((project, index) => {
          const isVideoRight = index % 2 === 0; // alternate video side
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                isVideoRight ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Video */}
              <div className="md:w-1/2">
                {project.video.includes("youtube") ? (
                  <iframe
                    src={project.video.replace("watch?v=", "embed/")}
                    className="w-full h-[300px] rounded-lg shadow-lg"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    controls
                    className="w-full rounded-lg shadow-lg"
                  />
                )}
              </div>

              {/* Content */}
              <div className="md:w-1/2 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-300">{project.description}</p>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition"
                  >
                    View GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 border-orange-500 font-semibold px-4 py-2 flex items-center gap-2  hover:text-orange-400 transition rounded-sm"
                  >
                    View Project
                    {/* Diagonal right-up outline arrow SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 19L19 5M19 5h-6M19 5v6"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
