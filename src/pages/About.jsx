import React from "react";

const About = () => {
  return (
    <section className="bg-[#0c0f17] text-white px-6 md:px-16 py-16">

      <div className="flex flex-col md:flex-row gap-12">

      {/* RIGHT SIDE */}
<div className="flex-1 flex gap-6 md:mt-5">
  {/* Vertical line and items */}
  <div className="flex flex-col items-start relative">
    {/* Vertical line */}
    <div className="absolute left-1.5 top-1 bottom-1 w-0.5 bg-red-500"></div>

    {/* Items */}
    {[
      { title: "Website Development", icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>) },
      { title: "App Development", icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 16V4h10v12M7 20h10" /></svg>) },
      { title: "Website Hosting", icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z M4 8h16" /></svg>) }
    ].map((item, idx) => (
      <div key={idx} className="flex items-center gap-4 relative mb-6 last:mb-0">
        {/* Dot */}
        <div className="w-3 h-3 bg-red-500 rounded-full z-10"></div>
        {/* Icon */}
        <div className="text-white text-2xl">{item.icon}</div>
        {/* Text */}
        <div>
          <h3 className="text-white text-lg font-semibold">{item.title}</h3>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* LEFT SIDE */}
        <div className="flex-1 space-y-6">

          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I’m a passionate software developer focused on building modern,
            responsive, and user-friendly web applications. I enjoy turning
            complex problems into simple, beautiful solutions.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-8 mt-6">

            <div>
              <h3 className="text-2xl font-bold text-orange-500">
                +50
              </h3>
              <p className="text-gray-400 text-sm">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">
                +30
              </h3>
              <p className="text-gray-400 text-sm">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">
                +2 Years
              </h3>
              <p className="text-gray-400 text-sm">
                Experience
              </p>
            </div>

          </div>

        </div>



      </div>

    </section>
  );
};

export default About;