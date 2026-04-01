import React from "react";
import image from "../assets/images/chandio3.png";

const Home = () => {
  return (
<section className="min-h-screen flex items-center bg-[#0c0f17] text-white px-6 md:px-16">

  <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10">

    {/* LEFT CONTENT */}
    <div className="max-w-xl space-y-5 text-center md:text-left">

      <p className="text-lg">
        Hello<span className="text-orange-500">.</span>
      </p>

      <h2 className="text-2xl md:text-3xl">
        I’m <span className="font-semibold">Jensen</span>
      </h2>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Software Developer
      </h1>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">

        <button className="bg-orange-500 px-6 py-3 rounded-md hover:bg-orange-600 transition w-full sm:w-auto">
          Got a project?
        </button>

        <button className="border border-orange-500 px-6 py-3 rounded-md hover:bg-orange-500 transition w-full sm:w-auto">
          My resume
        </button>

      </div>
    </div>

    {/* RIGHT IMAGE */}
   <div className="flex justify-center">

      <img
        src={image}
        alt="profile"
        className="w-full h-full md:w-80 md:h-80 object-cover"
      />

    </div>

  </div>

</section>
)};

export default Home;
