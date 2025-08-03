import { Link, useLocation } from "react-router";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import MobileNav from "./MobileNav";

function Navbar() {
    const { theme, setTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const getNavbarStyles = () => {
        switch (theme) {
            case 'light':
                return 'bg-white/95 backdrop-blur-md border-b border-gray-200 text-gray-800 shadow-lg';
            case 'colorful':
                return 'bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 text-white shadow-xl';
            default:
                return 'bg-colorful-gradient text-white';
        }
    };

    const getLinkStyles = (path: string) => {
        const isActive = location.pathname === path;
        switch (theme) {
            case 'light':
                return `px-4 py-2 rounded-lg transition-all duration-200 ${isActive
                        ? 'font-semibold text-blue-600'
                        : 'hover:text-red-800'
                    }`;
            case 'colorful':
                return `px-4 py-2 rounded-lg transition-all duration-200 font-pacifico ${isActive
                        ? 'text-blue-600 font-bold backdrop-blur-sm'
                        : 'hover:text-red-800 text-white'
                    }`;
            default:
                return `px-4 py-2 rounded-lg transition-all duration-200 ${isActive ? 'bg-white/20 text-white font-bold' : 'hover:text-white/90 text-white'
                    }`;
        }
    };

    const getSelectStyles = () => {
        switch (theme) {
            case 'light':
                return 'bg-white text-gray-800 border border-gray-300 rounded-lg px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm';
            case 'colorful':
                return 'bg-white/20 text-white border border-white/30 rounded-lg px-3 py-2 font-pacifico font-bold focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm';
            default:
                return 'border rounded px-2 py-1 bg-inherit';
        }
    };

    return (
        <nav className={`navbar fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-all duration-300 ${getNavbarStyles()}`}>
            <div className="flex items-center gap-3">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/011/883/296/non_2x/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg"
                    alt="Logo"
                    className={`rounded-full transition-all duration-200 ${theme === 'light' ? 'border-2 border-gray-200' : 'border-2 border-white/30'
                        }`}
                    style={{ width: "44px", height: "44px" }}
                />
                <span className={`text-xl font-bold ${theme === 'colorful' ? 'font-pacifico' : theme === 'light' ? 'font-semibold' : ''
                    }`}>
                    {theme === 'colorful' ? 'Multi Theme' : 'Dashboard'}
                </span>
            </div>

            <div className="flex items-center gap-3 md:hidden">
                <select
                    className={`text-sm ${getSelectStyles()}`}
                    onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'colorful')}
                    value={theme}
                    id="theme-select-mobile"
                >
                    <option value="light">☀️ Light</option>
                    <option value="dark">🌙 Dark</option>
                    <option value="colorful">🎨 Colorful</option>
                </select>
                <button
                    className={`p-2 rounded-lg focus:outline-none transition-colors ${theme === 'light'
                            ? 'hover:bg-gray-100'
                            : 'hover:bg-white/10'
                        }`}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <ul className="flex items-center gap-2">
                    <li>
                        <Link to="/" className={getLinkStyles('/')}>
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Home
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={getLinkStyles('/about')}>
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                About
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={getLinkStyles('/contact')}>
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.31a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Contact</span>
                            </span>
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center gap-2">
                    <span className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-white/80'}`}>Theme:</span>
                    <select
                        className={getSelectStyles()}
                        onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'colorful')}
                        value={theme}
                        id="theme-select-desktop"
                    >
                        <option value="light">☀️ Light Mode</option>
                        <option value="dark">🌙 Dark Mode</option>
                        <option value="colorful">🎨 Colorful Mode</option>
                    </select>
                </div>
            </div>

            <MobileNav open={menuOpen} theme={theme} onClose={() => setMenuOpen(false)} />
        </nav>
    );
}

export default Navbar;
