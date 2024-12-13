import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full transition-colors duration-300 ${isScrolled ? 'bg-white bg-opacity-60' : 'bg-transparent'
                }`}
        >
            <div className="container flex items-center py-4 px-6 text-gray-500 text-lg gap-4">
                <div>
                    <Link
                        to="mainBody"
                        smooth={true}
                        duration={300}
                        className="cursor-pointer hover:text-black"
                    >
                        BaekJongHyuk
                    </Link>
                </div>
                <div>
                    <Link
                        to="aboutMe"
                        smooth={true}
                        duration={300}
                        className="cursor-pointer hover:text-black"
                    >
                        About
                    </Link>
                </div>
                <div>
                    <Link
                        to="recentProjects"
                        smooth={true}
                        duration={200}
                        className="cursor-pointer hover:text-black"
                    >
                        Projects
                    </Link>
                </div>
                <div>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={200}
                        className="cursor-pointer hover:text-black"
                    >
                        Skills
                    </Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;