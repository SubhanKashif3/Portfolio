import React from 'react';

const About = () => {
    return (
        <>
        <div className="bg-slate-900 text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-400 glow">About Me</h2>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <div className="w-64 h-64 rounded-full mx-auto overflow-hidden border-4 border-blue-500 shadow-glow">
                            {/* Replace with your actual image */}
                            <img 
                                src="https://i.ibb.co/r2JDJn5/176218081.jpg" 
                                alt="Subhan Kashif" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                        <p className="text-lg mb-4 text-slate-300">
                            Hi there! I'm Subhan Kashif, a 13-year-old MERN stack developer with a passion for creating innovative web applications.
                        </p>
                        <h3 className="text-xl font-semibold mb-2 text-blue-400 glow">My Tech Stack:</h3>
                        <ul className="list-disc list-inside mb-4 text-slate-300">
                            <li>MongoDB</li>
                            <li>Express.js</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Python</li>
                        </ul>
                        <h3 className="text-xl font-semibold mb-2 text-blue-400 glow">My Qualities:</h3>
                        <ul className="list-disc list-inside mb-4 text-slate-300">
                            <li>Quick learner</li>
                            <li>Problem solver</li>
                            <li>Creative thinker</li>
                            <li>Team player</li>
                            <li>Passionate about coding</li>
                        </ul>
                        <p className="text-lg text-slate-300">
                            Despite my young age, I'm dedicated to mastering the art of web development and creating impactful digital solutions.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        <hr />
        </>
       
    );
};

export default About;