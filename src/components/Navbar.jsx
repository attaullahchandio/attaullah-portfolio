import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-[#0c0f17] text-white">
      {/* Logo */}
      <h1 className="text-xl font-semibold">Jensen Omega</h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-sm">
        <li className="hover:text-orange-500 cursor-pointer"><a href="#home">Home</a></li>
        <li className="hover:text-orange-500 cursor-pointer"><a href="#about">About</a></li>
        <li className="hover:text-orange-500 cursor-pointer"><a href="#projects">Projects</a></li>
        <li className="hover:text-orange-500 cursor-pointer"><a href="#contacts">Contacts</a></li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <span className="text-2xl">☰</span>
      </div>
    </nav>
  );
};

export default Navbar;