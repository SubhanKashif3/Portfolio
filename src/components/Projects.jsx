import React from 'react';

const ProjectCard = ({ title, description, technologies, imageUrl, liveUrl, githubUrl }) => (
    <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
            <p className="text-slate-300 mb-4">{description}</p>
            <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies used:</h4>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="bg-slate-700 text-slate-300 px-2 py-1 rounded-full text-xs">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex justify-between">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Live Demo
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    GitHub Repo
                </a>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "YesMart-v3",
            description: "A full-stack Mega e-commerce solution for YesMart local mart in T.t singh , Pakistan  with client , server , localPurchaseTerminal and localAdmin any non-admin user have only access to client; ",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Zustand","React Router Dom","MERN","Shadcn","React Native","Vite"],
            imageUrl: "https://via.placeholder.com/400x200",
            liveUrl: "#",
            githubUrl: "https://github.com/SubhanKashif3/YesMart-v3"
        },
        {
            title: "Weather App",
            description: "A weather application that provides real-time weather data and forecasts for multiple locations.",
            technologies: ["JavaScript","React","Vite"],
            imageUrl: "https://via.placeholder.com/400x200",
            liveUrl: "https://weatherbyskdev2.vercel.app",
            githubUrl: "https://github.com/SubhanKashif3/WeatherAppAdvanced.git"
        },
        // Add more projects as needed
    ];

    return (
        <div className="bg-slate-800 min-h-screen py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-400 glow">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                    <p>i made many projects but only two are listed here</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;