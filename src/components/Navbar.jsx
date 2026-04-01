import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0c0f17] text-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-10 py-5">
        {/* Logo */}
        <h1 className="text-xl font-semibold">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {["home", "about", "projects", "contacts"].map((id) => (
            <li key={id}>
              <button
                onClick={() =>
                  document.getElementById(id).scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-orange-500 transition"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden cursor-pointer">
          <span className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-4 bg-[#0c0f17] text-sm">
          {["home", "about", "projects", "contacts"].map((id) => (
            <li key={id}>
              <button
                onClick={() => {
                  document.getElementById(id).scrollIntoView({
                    behavior: "smooth",
                  });
                  setMenuOpen(false);
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
