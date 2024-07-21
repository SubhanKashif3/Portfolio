import { Link } from "react-router-dom"
const Hero = () => {
    return (
        <div className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Subhan Kashif
                    </h1>
                    <h2 className="text-2xl sm:text-3xl text-slate-300 mb-6">
                        Full Stack Developer & Python Expert
                    </h2>
                    <p className="text-lg mb-8">
                        Crafting robust web applications and innovative Python solutions. 
                        Let's turn your ideas into reality.
                    </p>
                    <div className="space-x-4">
                        <Link to="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                            View Projects
                        </Link>
                        <Link to="/hire-me" className="bg-transparent hover:bg-white text-white hover:text-slate-800 font-bold py-2 px-4 rounded border border-white hover:border-transparent transition duration-300">
                            Hire Me
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
                        <pre className="text-green-400">
                            <code>
{`class Developer:
def __init__(self):
    self.name = "Subhan Kashif"
    self.role = "Full Stack Developer"
    self.languages = ["Python", "JavaScript", "HTML", "CSS"]
    self.libraries = ["React Native","React","Express"],
    self.js_env = ["NodeJS"]
    
def code(self):
    return "Building amazing web applications!"

me = Developer()
print(me.code())`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Hero