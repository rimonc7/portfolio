import { useContext } from "react";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaWordpress,
  FaSearch,
  FaDatabase,
  FaFigma,
} from "react-icons/fa";
import { ThemeContext } from "../../Provider/ThemeProvider";
import { motion } from "framer-motion";

const Skills = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div
      id="skills"
      className={`min-h-screen m-6 transition-all duration-300 ${
        darkTheme ? "text-white" : "text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-5xl px-4 lg:mx-auto p-8 rounded-xl shadow-2xl border transition-all duration-300 ${
          darkTheme
            ? "bg-[#1b1b1f] border-gray-800"
            : "bg-white border-gray-300"
        }`}
      >
        <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-8">
          Skills
        </h1>

        {/* Frontend Skills */}
        <div className="mb-10">
          <h2
            className={`text-3xl mb-4 transition-all duration-300 ${
              darkTheme ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Frontend
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              icon={<FaHtml5 className="text-5xl text-orange-500 mb-2" />}
              name="HTML"
              level="90%"
              darkTheme={darkTheme}
            />
            <SkillCard
              icon={<FaCss3Alt className="text-5xl text-blue-500 mb-2" />}
              name="CSS"
              level="85%"
              darkTheme={darkTheme}
            />
            <SkillCard
              icon={<FaJs className="text-5xl text-yellow-500 mb-2" />}
              name="JavaScript"
              level="80%"
              darkTheme={darkTheme}
            />
            <SkillCard
              icon={<FaReact className="text-5xl text-blue-400 mb-2" />}
              name="React.js"
              level="95%"
              darkTheme={darkTheme}
            />
            <SkillCard
              icon={<FaWordpress className="text-5xl text-blue-600 mb-2" />}
              name="WordPress"
              level="70%"
              darkTheme={darkTheme}
            />
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-10">
          <h2
            className={`text-3xl mb-4 transition-all duration-300 ${
              darkTheme ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Backend
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              icon={<FaNode className="text-5xl text-green-500 mb-2" />}
              name="Node.js"
              level="85%"
              darkTheme={darkTheme}
            />
            <SkillCard
              icon={<FaDatabase className="text-5xl text-green-700 mb-2" />}
              name="MongoDB"
              level="75%"
              darkTheme={darkTheme}
            />
            <SkillCard
              icon={<FaGithub className="text-5xl text-gray-800 mb-2" />}
              name="GitHub"
              level="85%"
              darkTheme={darkTheme}
            />
            <SkillCard
              icon={<FaNode className="text-5xl text-green-500 mb-2" />}
              name="Express.js"
              level="80%"
              darkTheme={darkTheme}
            />
          </div>
        </div>

        {/* Other Skills */}
        <div className="mb-10">
          <h2
            className={`text-3xl mb-4 transition-all duration-300 ${
              darkTheme ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Other Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              icon={<FaSearch className="text-5xl text-green-500 mb-2" />}
              name="SEO"
              level="75%"
              darkTheme={darkTheme}
            />
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-10">
          <h2
            className={`text-3xl mb-4 transition-all duration-300 ${
              darkTheme ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              icon={<FaGithub className="text-5xl text-gray-800 mb-2" />}
              name="GitHub"
              level="90%"
              darkTheme={darkTheme}
            />
            <SkillCard
              icon={<FaFigma className="text-5xl text-pink-600 mb-2" />}
              name="Figma"
              level="80%"
              darkTheme={darkTheme}
            />
            <SkillCard
              icon={<FaWordpress className="text-5xl text-blue-600 mb-2" />}
              name="VS Code"
              level="90%"
              darkTheme={darkTheme}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, name, level, darkTheme }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
        {icon}
      </motion.div>
      <p
        className={`text-xl transition-all duration-300 ${
          darkTheme ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {name}
      </p>
      <div
        className={`w-full h-2 rounded-full mt-2 transition-all duration-300 ${
          darkTheme ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <div
          className="bg-yellow-400 h-2 rounded-full"
          style={{ width: level }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
