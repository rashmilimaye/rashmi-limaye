import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si"; // Import Gmail icon
import logo from "../assets/raviKumarLogo.webp";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      {/* Social Media Section */}
      <div className="m-8 flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/rashmilimaye"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/rashmilimaye"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        {/* Gmail Link */}
        <a
          href="mailto:rashmilimaye@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
        >
          <SiGmail className="text-red-500" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;