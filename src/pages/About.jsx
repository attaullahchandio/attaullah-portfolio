import React from "react";

const About = () => {
  return (
    <section className="bg-[#0c0f17] text-white px-6 md:px-16 py-16">

      <div className="flex flex-col-reverse md:flex-row gap-12">

      {/* RIGHT SIDE */}
<div className="flex-1 flex gap-6 md:mt-5">
  {/* Vertical line and items */}
  <div className="flex flex-col items-start relative">
    {/* Vertical line */}
    <div className="absolute left-1.5 top-1 bottom-1 w-0.5 bg-red-500"></div>

    {/* Items */}
    {[
  {
  title: "Full Stack Web Apps",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 10v4M17 10v4" />
    </svg>
  )
},
  {
  title: "REST API Development",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 12h8M16 8l2 2-2 2M16 16l2-2-2-2" />
    </svg>
  )
},
  {
    title: "Database Design (MongoDB)",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5"/>
        <path d="M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6"/>
      </svg>
    )
  },
  {
    title: "Responsive UI (React)",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="14" rx="2"/>
        <path d="M8 20h8" />
      </svg>
    )
  }
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

          <h2 className="text-2xl md:text-5xl font-bold">
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
                +10
              </h3>
              <p className="text-gray-400 text-sm">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">
                +5
              </h3>
              <p className="text-gray-400 text-sm">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">
                +1 Years
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