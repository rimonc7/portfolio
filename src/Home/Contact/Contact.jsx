import { useContext } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp, FaTelegram, FaPhone } from "react-icons/fa";
import profilePic from "../../assets/rimon.png";
import resumePDF from '../../assets/rimon-resume.pdf';
import { ThemeContext } from "../../Provider/ThemeProvider";

const Contact = () => {
    const { darkTheme } = useContext(ThemeContext);

    return (
        <div className={`flex justify-center items-center min-h-screen transition-all duration-300
            ${darkTheme ? "bg-[#121212] text-white" : "bg-gray-100 text-gray-800"} px-6`}>
            
            <div className={`max-w-4xl p-10 md:p-14 rounded-xl shadow-2xl border transition-all duration-300
                ${darkTheme ? "bg-[#1b1b1f] border-gray-800" : "bg-white border-gray-300"}`}>
                
                {/* Profile Image */}
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
                    <img src={profilePic} alt="Rimon Chowdhury" className="w-full h-full object-cover" />
                </div>

                {/* Contact Info */}
                <h1 className="text-4xl font-extrabold text-yellow-400 mt-4">Rimon Chowdhury</h1>
                <h3 className={`text-xl mt-2 font-medium transition-all duration-300
                    ${darkTheme ? "text-gray-400" : "text-gray-600"}`}>
                    MERN Stack Developer & SEO Strategist
                </h3>
                <p className={`mt-3 text-lg transition-all duration-300
                    ${darkTheme ? "text-gray-400" : "text-gray-600"}`}>
                    Feel free to reach out for collaborations, freelance projects, or just to say hello!
                </p>

                {/* Availability */}
                <div className="flex justify-center items-center mt-4 text-lg">
                    <span className="text-green-400 text-xl mr-2">●</span> 
                    <span className={darkTheme ? "text-gray-300" : "text-gray-700"}>
                        Available for Work & Collaboration
                    </span>
                </div>

                {/* Phone Number */}
                <div className="flex items-center justify-center gap-2 text-lg mt-4">
                    <FaPhone className="text-yellow-400" />
                    <a href="tel:+8801768885113" className="hover:text-yellow-400 transition">
                        +8801768885113
                    </a>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center gap-6 mt-6 text-3xl">
                    <a href="https://github.com/rimonc7" target="_blank" className="hover:text-yellow-400 transition">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/rimonchowdhuryy/" target="_blank" className="hover:text-yellow-400 transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/rimonc7" target="_blank" className="hover:text-yellow-400 transition">
                        <FaTwitter />
                    </a>
                    <a href="mailto:rimonc7@gmail.com" className="hover:text-yellow-400 transition">
                        <FaEnvelope />
                    </a>
                    <a href="https://wa.me/8801768885113" target="_blank" className="hover:text-yellow-400 transition">
                        <FaWhatsapp />
                    </a>
                    <a href="https://t.me/+8801768885113" target="_blank" className="hover:text-yellow-400 transition">
                        <FaTelegram />
                    </a>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col md:flex-row gap-6 mt-8 justify-center">
                    <a
                        href={resumePDF}
                        download="Rimon_Chowdhury_Resume.pdf"
                        className="px-6 py-3 bg-yellow-400 text-black text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-all transform hover:scale-105">
                        Download Resume
                    </a>
                    <a
                        href="https://wa.me/880768885113"
                        target="_blank"
                        className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105
                            ${darkTheme ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}>
                        Contact on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
