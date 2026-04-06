import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 py-12 px-6">
      
      <div className="max-w-4xl mx-auto text-center text-white">
        
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold">
  Attaullah khan Chandiooooooooooooo
</h2>

<p className="text-sm text-gray-300 mt-2">
  Mern Stack Developer | Building modern and responsive web applications.
</p>

        {/* Icons */}
        <div className="flex justify-center gap-6 mt-6">
          
          {/* Email */}
          <a
            href="mailto:your@email.com"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white text-black hover:bg-orange-400 hover:text-white transition duration-300"
          >
            <MdEmail size={18} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white text-black hover:bg-orange-400 hover:text-white transition duration-300"
          >
            <FaGithub size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white text-black hover:bg-orange-400 hover:text-white transition duration-300"
          >
            <FaLinkedinIn size={18} />
          </a>

        </div>
      </div>
    </footer>
  );
}