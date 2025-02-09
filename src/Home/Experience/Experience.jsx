import React, { useContext } from "react";
import { FaBriefcase, FaLaptopCode, FaBullhorn } from "react-icons/fa";
import { ThemeContext } from "../../Provider/ThemeProvider";

const Experience = () => {
    const { darkTheme } = useContext(ThemeContext);

    return (
        <div className={`py-12 transition-all duration-300 ${darkTheme ? "text-white" : "text-gray-900"}`}>
            <div className={`max-w-5xl lg:mx-auto p-8 rounded-xl shadow-2xl border mx-6 transition-all duration-300
                ${darkTheme ? "bg-[#1b1b1f] border-gray-800" : "bg-white border-gray-300"}`}>

                <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-8">Experience</h1>

                {/* Experience List */}
                <div className="space-y-8">
                    {/* Senior SEO Specialist - We Tech Pro */}
                    <div className={`p-6 rounded-xl shadow-lg flex items-center gap-4 transition-all duration-300
                        ${darkTheme ? "bg-gray-800" : "bg-gray-100 border border-gray-300"}`}>
                        <FaBullhorn className="text-3xl text-yellow-400" />
                        <div>
                            <h2 className={`text-2xl transition-all duration-300 ${darkTheme ? "text-gray-300" : "text-gray-800"}`}>Senior SEO Specialist</h2>
                            <p className={`text-xl transition-all duration-300 ${darkTheme ? "text-gray-400" : "text-gray-700"}`}>We Tech Pro</p>
                            <p className={`text-lg transition-all duration-300 ${darkTheme ? "text-gray-500" : "text-gray-600"}`}>2024 - Present</p>
                        </div>
                    </div>

                    {/* Digital Marketing Executive - Devute */}
                    <div className={`p-6 rounded-xl shadow-lg flex items-center gap-4 transition-all duration-300
                        ${darkTheme ? "bg-gray-800" : "bg-gray-100 border border-gray-300"}`}>
                        <FaBullhorn className="text-3xl text-yellow-400" />
                        <div>
                            <h2 className={`text-2xl transition-all duration-300 ${darkTheme ? "text-gray-300" : "text-gray-800"}`}>Digital Marketing Executive</h2>
                            <p className={`text-xl transition-all duration-300 ${darkTheme ? "text-gray-400" : "text-gray-700"}`}>Devute</p>
                            <p className={`text-lg transition-all duration-300 ${darkTheme ? "text-gray-500" : "text-gray-600"}`}>2023 - 2024</p>
                        </div>
                    </div>

                    {/* Affiliate Marketer - Amazon Associates */}
                    <div className={`p-6 rounded-xl shadow-lg flex items-center gap-4 transition-all duration-300
                        ${darkTheme ? "bg-gray-800" : "bg-gray-100 border border-gray-300"}`}>
                        <FaLaptopCode className="text-3xl text-yellow-400" />
                        <div>
                            <h2 className={`text-2xl transition-all duration-300 ${darkTheme ? "text-gray-300" : "text-gray-800"}`}>Affiliate Marketer</h2>
                            <p className={`text-xl transition-all duration-300 ${darkTheme ? "text-gray-400" : "text-gray-700"}`}>Amazon Associates</p>
                            <p className={`text-lg transition-all duration-300 ${darkTheme ? "text-gray-500" : "text-gray-600"}`}>2018 - 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
