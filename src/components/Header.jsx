import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    const NavButton = ({ text, href }) => (
        <Link to={href} className="px-3 py-2 text-white hover:bg-slate-700 rounded transition-colors">
            {text}
        </Link>
    );

    return (
        <header className="bg-slate-900">
            <nav className="container mx-auto px-2">
                <div className="flex justify-between items-center h-14">
                    <div>
                        <h1 className="text-xl text-white font-semibold">Subhan Kashif</h1>
                    </div>
                    <div className="hidden md:flex space-x-2">
                        <NavButton text="Home" href="/" />
                        <NavButton text="Projects" href="/projects" />
                        <NavButton text="Hire Me" href="/hire-me" />
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`fixed top-0 right-0 h-full w-64 bg-slate-800 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="p-4">
                    <button onClick={toggleMenu} className="text-white focus:outline-none mb-4">
                        <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="flex flex-col space-y-2">
                        <NavButton text="Home" href="/" />
                        <NavButton text="Projects" href="/projects" />
                        <NavButton text="Hire Me" href="/hire-me" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;