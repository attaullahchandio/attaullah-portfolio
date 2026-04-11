import React, { useEffect, useState } from "react";
import image from "../assets/images/chandio6.png";

const roles = [
  "Software Developer",
  "Frontend Developer",
  "MERN Stack Developer",
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex + 1 === current.length) {
            setIsDeleting(true);
          }
        } else {
          setText(current.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section className="min-h-screen flex flex-col justify-between bg-[#0c0f17] text-white px-6 md:px-16 pt-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-8 lg:gap-16">
        {/* LEFT */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-xl md:text-2xl">
            Hello<span className="text-orange-500">.</span>
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            I’m <span className="font-bold">Attaullah</span>
          </h2>

          <h1 className="text-3xl md:text-5xl font-bold text-orange-500 min-h-[60px]">
            <span className="inline-flex items-center whitespace-nowrap">
              {text}
              <span className="animate-pulse ml-1">|</span>
            </span>
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/923093344778?text=Hi%20Attaullah,%20I%20have%20a%20project%20for%20you",
                  "_blank",
                )
              }
              className="bg-orange-500 px-6 py-3 rounded-md hover:bg-orange-600 transition w-full sm:w-auto"
            >
              Got a project?
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1ny8kfbvE8c8_nZUYN62q5_xlcv4SB_Us/preview",
                  "_blank",
                )
              }
              className="border border-orange-500 px-6 py-3 rounded-md hover:bg-orange-500 transition w-full sm:w-auto"
            >
              My Resume
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={image}
            alt="profile"
            className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] h-auto object-contain"
          />
        </div>
      </div>

      {/* 💡 SKILLS AT BOTTOM */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-10 pb-6">
        <div className="bg-white/6 border-y border-white/20 py-3 overflow-x-auto">
          <div className="flex gap-6 sm:gap-8 md:gap-12 whitespace-nowrap justify-start md:justify-center px-6">
            {[
              "HTML5",
              "CSS",
              "JavaScript",
              "Node.js",
              "React",
              "Git",
              "GitHub",
              "MongoDB",
              "Express",
              "Tailwind",
            ].map((skill, i) => (
              <span
                key={i}
                className="
            text-base sm:text-md md:text-md 
            font-semibold md:font-semi-bold 
            text-white 
            hover:text-orange-400 
            transition duration-300 
            cursor-pointer
          "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
