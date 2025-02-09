import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../Provider/ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa"; // Import React Icons

const Nav = () => {
    const { toggleTheme, darkTheme } = useContext(ThemeContext);

    const links = (
        <div className={`space-y-3 lg:space-x-6 lg:space-y-0 uppercase font-medium ${darkTheme ? "text-gray-300" : "text-gray-700"}`}>
            <NavLink
                to="/"
                className="block lg:inline hover:text-[#56CCF2] transition duration-300"
            >
                Home
            </NavLink>
            <a href="#skills" className="block lg:inline hover:text-[#56CCF2] transition duration-300">
                Skills
            </a>
            <a href="#projects" className="block lg:inline hover:text-[#56CCF2] transition duration-300">
                Projects
            </a>
            <Link
                to="/contact"
                className="block lg:hidden px-5 py-1 bg-[#56CCF2] w-fit text-white font-semibold rounded-lg shadow-md hover:bg-[#45B6E7] transition duration-300"
            >
                Contact Me
            </Link>
        </div>
    );

    return (
        <nav className={`${darkTheme ? "bg-[#1E1E2E] text-white shadow-sm" : "bg-[#F8F9FA] text-gray-800 shadow-white shadow-sm mb-[2px]"} navbar px-10 py-3 transition-all duration-300`}>
            <div className="navbar-start flex items-center">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost lg:hidden focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className={`${darkTheme ? "bg-[#282A36] border-gray-700" : "bg-white border-gray-300"} menu menu-sm dropdown-content rounded-lg z-[1] mt-3 w-56 p-4 shadow-xl border`}
                    >
                        {links}
                    </ul>
                </div>

                <NavLink to="/" className="flex flex-col items-center leading-none">
                    <h1 className="text-[1.8rem] md:text-[2rem] font-bold lg:tracking-[0.2em]">
                        R I M O N
                    </h1>
                    <h2 className="text-[1.2rem] md:text-[1.5rem] font-semibold tracking-[0.25em] text-[#56CCF2]">
                        CHOWDHURY
                    </h2>
                </NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-4 space-x-6">{links}</ul>
            </div>

            <div className="navbar-end flex items-center gap-4">
                <Link
                    to="/contact"
                    className="hidden lg:block px-5 py-2 bg-[#56CCF2] text-white font-semibold rounded-lg shadow-md hover:bg-[#45B6E7] transition duration-300"
                >
                    Contact Me
                </Link>

                {/* Dark/Light Toggle Button with Icon */}
                <button 
                    onClick={toggleTheme} 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-md bg-gray-700 text-white hover:bg-gray-600 transition duration-300"
                >
                    {darkTheme ? <FaSun className="text-yellow-400" size={20} /> : <FaMoon className="text-[#F6F1D5]" size={20} />}
                </button>
            </div>
        </nav>
    );
};

export default Nav;
