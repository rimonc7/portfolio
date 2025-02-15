import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Provider/ThemeProvider";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    name: "Hostel Management System - DormDish",
    image: "https://i.ibb.co/gF9nNMGL/Dorm-Dish-02-06-2025-01-12-PM.png",
    liveLink: "https://dorm-dish.web.app/",
    repoLink: "https://github.com/rimonc7/dormdish-client",
    techStack: [
      "React",
      "Firebase Auth",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Stripe",
    ],
    description:
      "A hostel management system for university dorms, allowing students to log in, review meals, and interact with upcoming meals.",
    challenges:
      "Managing real-time meal updates and user authentication complexities.",
    improvements: "Enhancing UI and adding more meal customization options.",
  },
  {
    id: 2,
    name: "Movie World",
    image: "https://i.ibb.co/Y4RP9cjn/Movie-World-02-06-2025-01-11-PM.png",
    liveLink: "https://movieworld-dea37.web.app/",
    repoLink: "https://github.com/rimonc7/movieworld-client",
    techStack: [
      "React",
      "Firebase Auth",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
    ],
    description:
      "A movie collection web app where users can add, manage, and favorite movies.",
    challenges: "Implementing efficient search and filtering features.",
    improvements: "Adding movie reviews and rating functionalities.",
  },
  {
    id: 3,
    name: "Bistro Boss - Restaurant Website",
    image: "https://i.ibb.co/x8dWLPX3/Bistro-Boss-Home-02-06-2025-01-12-PM.png",
    liveLink: "https://bistro-boss-a95f4.web.app/",
    repoLink: "https://github.com/rimonc7/bistro-boss-client",
    techStack: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Stripe",
    ],
    description:
      "A fully responsive restaurant website with an online menu, reservations, and Stripe payments.",
    challenges: "Ensuring smooth payment integration and responsive UI.",
    improvements: "Introducing AI-based meal recommendations.",
  },
];

const Projects = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div
      id="projects"
      className={`py-12 transition-all duration-300 ${
        darkTheme ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
      }`}
    >
      <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-8">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`p-6 rounded-lg shadow-lg flex flex-col transition-all duration-300
                        ${
                          darkTheme
                            ? "bg-gray-800"
                            : "bg-white border border-gray-300"
                        }`}
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              src={project.image}
              alt={project.name}
              className="rounded-md mb-4"
            />
            <h3
              className={`text-xl font-semibold mb-2 ${
                darkTheme ? "text-white" : "text-gray-800"
              }`}
            >
              {project.name}
            </h3>
            <p
              className={`mb-4 flex-grow transition-all duration-300 ${
                darkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className={`text-sm px-3 py-1 rounded-full transition-all duration-300
                                    ${
                                      darkTheme
                                        ? "bg-gray-700 text-gray-200"
                                        : "bg-gray-200 text-gray-700"
                                    }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center w-full">
              <Link
                to={`/projects/${project.id}`}
                className={`px-4 py-2 rounded-md flex-1 text-center transition-all duration-300
                                ${
                                  darkTheme
                                    ? "bg-blue-500 text-white"
                                    : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}
              >
                View More / Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
