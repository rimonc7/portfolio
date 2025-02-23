import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import profilePic from "../../assets/rimon.png";
import resumePDF from "../../assets/rimon-resume.pdf";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";
import { motion } from "framer-motion";

const Banner = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex justify-center items-center min-h-screen px-6 pt-10 transition-all duration-300 ${
        darkTheme ? "bg-[#121212] text-white" : " text-gray-900"
      }`}
    >
      <div
        className={`max-w-5xl p-10 md:p-14 rounded-xl shadow-2xl border ${
          darkTheme
            ? "bg-[#1b1b1f] border-gray-800"
            : "bg-white border-gray-300"
        } transition-all duration-300`}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div
            className={`relative w-40 h-40 rounded-full overflow-hidden border-4 ${
              darkTheme
                ? "border-yellow-400 bg-gray-800"
                : "border-gray-700 bg-gray-300"
            } shadow-lg`}
          >
            <img
              src={profilePic}
              alt="Rimon Chowdhury"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <h2
              className={`${
                darkTheme ? "text-gray-300" : "text-gray-600"
              } text-3xl font-light`}
            >
              Hi, I'm
            </h2>
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mt-2"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: darkTheme
                  ? "linear-gradient(90deg, #facc15, green, #facc15)"
                  : "linear-gradient(90deg, #3b82f6, green, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                backgroundSize: "200% 200%",
              }}
            >
              Rimon Chowdhury
            </motion.h1>
            <h3
              className={`${
                darkTheme ? "text-gray-400" : "text-gray-700"
              } text-2xl mt-2 font-medium`}
            >
              MERN Stack Developer & SEO Strategist
            </h3>
            <p
              className={`${
                darkTheme ? "text-gray-400" : "text-gray-600"
              } mt-5 text-lg leading-relaxed`}
            >
              I specialize in building high-performance, user-friendly web
              applications with a strong foundation in modern technologies. My
              expertise in SEO ensures that websites not only function
              seamlessly but also rank well on search engines.
            </p>

            {/* Availability */}
            <div
              className={`flex items-center mt-4 text-lg ${
                darkTheme ? "text-gray-300" : "text-gray-800"
              }`}
            >
              <span className="text-green-400 text-xl mr-2">●</span> Open to new
              projects & collaborations
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-6 mt-6 text-2xl">
              <a
                href="https://github.com/rimonc7"
                target="_blank"
                className={`transition ${
                  darkTheme
                    ? "text-gray-400 hover:text-yellow-400"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rimonchowdhuryy/"
                target="_blank"
                className={`transition ${
                  darkTheme
                    ? "text-gray-400 hover:text-yellow-400"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/rimonc7"
                target="_blank"
                className={`transition ${
                  darkTheme
                    ? "text-gray-400 hover:text-yellow-400"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:rimonc7@gmail.com"
                className={`transition ${
                  darkTheme
                    ? "text-gray-400 hover:text-yellow-400"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                <FaEnvelope />
              </a>
              <a
                href="https://wa.me/8801768885113"
                target="_blank"
                className={`transition ${
                  darkTheme
                    ? "text-gray-400 hover:text-yellow-400"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://t.me/+8801768885113"
                target="_blank"
                className={`transition ${
                  darkTheme
                    ? "text-gray-400 hover:text-yellow-400"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                <FaTelegram />
              </a>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col md:flex-row gap-6 mt-8">
              <a
                href={resumePDF}
                download="Rimon_Chowdhury_Resume.pdf"
                className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 ${
                  darkTheme
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "bg-blue-500 text-white hover:bg-blue-400"
                }`}
              >
                Download Resume
              </a>
              <a
                href="#about-me"
                className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 ${
                  darkTheme
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-300 text-gray-900 hover:bg-gray-400"
                }`}
              >
                More About Me →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
