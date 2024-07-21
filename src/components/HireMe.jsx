import Button from "./Buttton"

const HireMe = () => {
    return (
        <div className="bg-slate-800 min-h-screen py-16 flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <h2 className="text-4xl font-bold mb-8 text-blue-400 glow animate-pulse">Hire Me</h2>
                <Button
                    text="Gmail Me"
                    onClick={() => {
                        window.location.href = 'mailto:ksubhank38@gmail.com';
                    }}
                    style={{ backgroundColor: '#0f172a', width: 'fit-content' }}
                />
                <div className="mt-8 text-left bg-slate-900 p-6 rounded-lg shadow-lg">
                    <h3 className="text-white font-semibold text-xl mb-4">Follow these instructions while emailing:</h3>
                    <ol className="list-decimal list-inside text-gray-300">
                        <li className="mb-2">Enter Your Name</li>
                        <li className="mb-2">Enter Your Work</li>
                        <li className="mb-2">Professional Emails Only</li>
                        <li className="mb-2">Write Tech Stack or Type Any</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
export default HireMe