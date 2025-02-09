import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";

const Footer = () => {
    const { darkTheme } = useContext(ThemeContext);

    return (
        <footer className={`py-6 text-center transition-all duration-300
            ${darkTheme ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-700"}`}>
            <p>&copy; 2025 Rimon Chowdhury. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-2">
                <a href="/" className={`hover:text-yellow-400 transition-all duration-200
                    ${darkTheme ? "text-gray-400" : "text-gray-700 hover:text-gray-900"}`}>
                    Home
                </a>
                <a href="#projects" className={`hover:text-yellow-400 transition-all duration-200
                    ${darkTheme ? "text-gray-400" : "text-gray-700 hover:text-gray-900"}`}>
                    Projects
                </a>
                <a href="#contact" className={`hover:text-yellow-400 transition-all duration-200
                    ${darkTheme ? "text-gray-400" : "text-gray-700 hover:text-gray-900"}`}>
                    Contact
                </a>
            </div>
        </footer>
    );
};

export default Footer;
