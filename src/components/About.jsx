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
                                src="https://lh3.googleusercontent.com/pw/AP1GczOBVYFkhtv8UY2mzrsH8CKFmqdSID4nd_NPfpld5Udf1rsiDkKjq9cDktmLvddWZia2Fb5eZbjkmHOyNDuObisE9LjjUeCxl85vg0bEP44huMlJTRoT5ocsYfk4pBiwMC527sVfXFGoJDP99tVN7HvZoIdeHVVZLlHkO7k0yqKHqUOgu7dGfrXXd3ZCTG3VxX-8peqz5vyusNhpZKLgZS2Pbv8xNcBHs0lpLdrOCrJufPU3b1YPLoXYDmqLL35J6AjEvQx-uzO9uHUa2AvNDKovtm_iSdxI_Cno3Gkh63wbJHAvzzNF-eDn2iPX7kTYtIxqHwzMx8Go5tMMg409MXgrWCLcwIzpsLEtItg6IA34h1VYuuGsS4ZkiKka-O7WuNLQC5Bsg-h3F8kiTpR8joMOCv8zOuM4ASt--zEJoYkK2WZTI3UE6O36W70PJdk7PeEaznPd5hCaJBXUnZWwGIZhPK1XP7gphm-qODKd_YFxPOPYy0b2Pbim1Jqp1aqFXkaWIaQF82vzwSGBHTYor7DS7bwChWjTSTsWFFtHtmlLZ78N4JoPTlqnhF6t4RlIizCZPR3hIZqaF4hcX50r4lbYFHtJ-HeXL_-1r5BKN-gqVPFIPM4XADt7n-4XRHiBIT2Q11udPiiC9wpJjwl4-VfjRBct67jCYweHLf93Zloa1V7dHrbi7rhC069f00FaYTx1qn7AD1O5eed0dIaX05S1wJLCorF7z--z4VWYKzQtlNFYM9_RyKyZVE8--NgsFjj5NQSX3TGxwA-IoZtintpli_WKxMlO88myLBVnH_OQugLXw4F-4mbwOJ0GM9wnKA0xSK7efwlokQcDBI0do-o_8jvNFKVvG1bPaz-KQX8cgnE0oYpJabMAXmFyHhAwONa9rk6lNC4Yis_ES6fXA2Ou=w783-h1044-s-no-gm?authuser=0" 
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