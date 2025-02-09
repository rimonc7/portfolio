import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";

const projects = [
    {
        id: 1,
        name: "Hostel Management System - DormDish",
        image: "https://i.ibb.co/gF9nNMGL/Dorm-Dish-02-06-2025-01-12-PM.png",
        liveLink: "https://dorm-dish.web.app/",
        repoLink: "https://github.com/rimonc7/dormdish-client",
        techStack: ["React", "Firebase Auth", "Tailwind CSS", "Express.js", "MongoDB", "Node.js", "Stripe"],
        description: "A hostel management system for university dorms, allowing students to log in, review meals, and interact with upcoming meals.",
        challenges: "Managing real-time meal updates and user authentication complexities.",
        improvements: "Enhancing UI and adding more meal customization options."
    },
    {
        id: 2,
        name: "Movie World",
        image: "https://i.ibb.co/Y4RP9cjn/Movie-World-02-06-2025-01-11-PM.png",
        liveLink: "https://movieworld-dea37.web.app/",
        repoLink: "https://github.com/rimonc7/movieworld-client",
        techStack: ["React", "Firebase Auth", "Tailwind CSS", "Express.js", "MongoDB"],
        description: "A movie collection web app where users can add, manage, and favorite movies.",
        challenges: "Implementing efficient search and filtering features.",
        improvements: "Adding movie reviews and rating functionalities."
    },
    {
        id: 3,
        name: "Bistro Boss - Restaurant Website",
        image: "https://i.ibb.co/x8dWLPX3/Bistro-Boss-Home-02-06-2025-01-12-PM.png",
        liveLink: "https://bistro-boss-a95f4.web.app/",
        repoLink: "https://github.com/rimonc7/bistro-boss-client",
        techStack: ["React", "Tailwind CSS", "MongoDB", "Node.js", "Express.js", "Stripe"],
        description: "A fully responsive restaurant website with an online menu, reservations, and Stripe payments.",
        challenges: "Ensuring smooth payment integration and responsive UI.",
        improvements: "Introducing AI-based meal recommendations."
    }
];

const Details = () => {
    const { id } = useParams();
    const { darkTheme } = useContext(ThemeContext);
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="text-center py-12">
                <h2 className="text-3xl text-red-500 font-bold">Project Not Found</h2>
                <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Go Back</Link>
            </div>
        );
    }

    return (
        <div className={`py-12 px-6 min-h-screen ${darkTheme ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
            <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow-lg ${darkTheme ? "bg-gray-800" : "bg-white border border-gray-300"}`}>
                <h2 className={`text-3xl font-bold mb-4 ${darkTheme ? "text-yellow-400" : "text-gray-900"}`}>{project.name}</h2>
                <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full" />
                
                <p className="mb-4">{project.description}</p>

                <h3 className="text-xl font-semibold mt-6">🔧 Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className={`text-sm px-3 py-1 rounded-full ${darkTheme ? "bg-gray-700" : "bg-gray-300"}`}>{tech}</span>
                    ))}
                </div>

                <h3 className="text-xl font-semibold mt-6">🚀 Live Demo</h3>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block">
                    {project.liveLink}
                </a>

                <h3 className="text-xl font-semibold mt-6">💻 GitHub Repository</h3>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block">
                    {project.repoLink}
                </a>

                <h3 className="text-xl font-semibold mt-6">⚡ Challenges Faced</h3>
                <p>{project.challenges}</p>

                <h3 className="text-xl font-semibold mt-6">🌟 Future Improvements</h3>
                <p>{project.improvements}</p>

                <div className="text-center mt-6">
                    <Link to="/" className="bg-blue-500 text-white px-6 py-2 rounded-md">🔙 Back to Projects</Link>
                </div>
            </div>
        </div>
    );
};

export default Details;
