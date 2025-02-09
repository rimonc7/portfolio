import { useContext } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { ThemeContext } from "../../Provider/ThemeProvider";

const AboutMe = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div id="about-me" className={`flex justify-center items-center mx-0 px-0 transition-all duration-300 ${darkTheme ? "text-white" : "text-gray-900"}`}>
      <div className={`w-full max-w-5xl p-10 md:p-14 rounded-xl shadow-2xl border mx-6 transition-all duration-300
        ${darkTheme ? "bg-[#1b1b1f] border-gray-800" : "bg-white border-gray-300"}`}>
        
        <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-8">About Me</h1>
        
        <p className={`mb-4 transition-all duration-300 ${darkTheme ? "text-gray-400" : "text-gray-700"}`}>
          I am a passionate <span className="font-semibold">MERN Stack Developer</span> with a strong foundation in SEO and digital marketing. My journey began with SEO, which led me to the technical side of web development, and now I specialize in building scalable, efficient, and SEO-friendly web applications.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 transition-all duration-300 ${darkTheme ? "text-gray-300" : "text-gray-800"}`}>💻 My Programming Journey</h2>
        <p className={`mb-4 transition-all duration-300 ${darkTheme ? "text-gray-400" : "text-gray-700"}`}>
          Started in 2018 as an SEO specialist and affiliate marketer, I gradually transitioned into full-stack development. I enjoy building interactive web applications and optimizing them for performance and search engines.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 transition-all duration-300 ${darkTheme ? "text-gray-300" : "text-gray-800"}`}>🏆 Skills & Expertise</h2>
        <ul className={`list-disc list-inside transition-all duration-300 ${darkTheme ? "text-gray-400" : "text-gray-700"}`}>
          <li><strong>Frontend:</strong> React.js, Next.js, HTML, CSS, JavaScript</li>
          <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, REST APIs</li>
          <li><strong>SEO & Digital Marketing:</strong> Technical SEO, Keyword Research, Link Building</li>
          <li><strong>Tools & Platforms:</strong> Git, GitHub, WordPress, Google Analytics, SEMrush</li>
        </ul>

        <h2 className={`text-2xl font-semibold mt-6 transition-all duration-300 ${darkTheme ? "text-gray-300" : "text-gray-800"}`}>📩 Connect with Me</h2>
        <div className="flex space-x-4 mt-4">
          <a href="mailto:rimonc7@gmail.com" className="text-yellow-400 text-2xl"><FaEnvelope /></a>
          <a href="https://github.com/rimonc7" target="_blank" className="text-yellow-400 text-2xl"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rimonchowdhuryy/" target="_blank" className="text-yellow-400 text-2xl"><FaLinkedin /></a>
          <a href="https://x.com/rimonc7" target="_blank" className="text-yellow-400 text-2xl"><FaTwitter /></a>
          <a href="https://wa.me/880768885113" target="_blank" className="text-yellow-400 text-2xl"><FaWhatsapp /></a>
          <a href="https://t.me/+880768885113" target="_blank" className="text-yellow-400 text-2xl"><FaTelegram /></a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
