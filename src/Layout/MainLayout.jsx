import Banner from "../Home/Banner/Banner";
import AboutMe from "../Home/AboutMe/AboutMe";
import Skills from "../Home/Skills/Skills";
import Education from "../Home/Education/Education";
import Experience from "../Home/Experience/Experience";
import Projects from "../Home/Projects/Projects";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";

const MainLayout = () => {
    const { toggleTheme, darkTheme } = useContext(ThemeContext);

    return (
        <div className={`${darkTheme ? 'bg-[#121212]' : 'bg-[#F8F9FA]'}`}>
            <Banner></Banner>
            <Skills></Skills>
            <Education></Education>
            <AboutMe></AboutMe>
            <Experience></Experience>
            <Projects></Projects>
        </div>
    );
};

export default MainLayout;