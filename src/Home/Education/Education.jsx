import { useContext } from "react";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { ThemeContext } from "../../Provider/ThemeProvider";

const Education = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={`lg:py-12 m-6 transition-all duration-300 ${darkTheme ? "text-white" : "text-gray-900"}`}>
      <div className={`w-full max-w-5xl mx-auto p-8 rounded-xl shadow-2xl border transition-all duration-300
        ${darkTheme ? "bg-[#1b1b1f] border-gray-800" : "bg-white border-gray-300"}`}>

        <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-8">Education</h1>

        {/* Education List */}
        <div className="space-y-8">
          <EducationCard
            icon={<FaUniversity className="text-3xl text-yellow-400" />}
            title="BSc (Hons)"
            institution="University of Rajshahi"
            year="2020"
            darkTheme={darkTheme}
          />
          <EducationCard
            icon={<FaSchool className="text-3xl text-yellow-400" />}
            title="H.S.C (Science)"
            institution="Cantonment Public School & College, Rangpur"
            year="2014"
            darkTheme={darkTheme}
          />
          <EducationCard
            icon={<FaSchool className="text-3xl text-yellow-400" />}
            title="S.S.C (Science)"
            institution="Cantonment Public School & College, Rangpur"
            year="2012"
            darkTheme={darkTheme}
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Education Card Component
const EducationCard = ({ icon, title, institution, year, darkTheme }) => {
  return (
    <div className={`p-6 rounded-xl shadow-lg flex items-center gap-4 transition-all duration-300
      ${darkTheme ? "bg-gray-800" : "bg-gray-100"}`}>
      {icon}
      <div>
        <h2 className={`text-2xl transition-all duration-300 ${darkTheme ? "text-gray-300" : "text-gray-800"}`}>{title}</h2>
        <p className={`text-xl transition-all duration-300 ${darkTheme ? "text-gray-400" : "text-gray-600"}`}>{institution}</p>
        <p className={`text-lg transition-all duration-300 ${darkTheme ? "text-gray-500" : "text-gray-500"}`}>Year: {year}</p>
      </div>
    </div>
  );
};

export default Education;
