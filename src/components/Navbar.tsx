import { Link } from "react-router";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import MobileNav from "./MobileNav";

function Navbar() {
    const { theme, setTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 shadow z-50 bg-colorful-gradient font-pacifico">
            <div className="flex items-center">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/011/883/296/non_2x/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg"
                    alt="Logo"
                    className="mr-3 rounded"
                    style={{ width: "40px", height: "40px" }}
                />
            </div>
            <div className="flex items-center md:hidden">
                <button
                    className="p-2 focus:outline-none"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
                <select
                    className="border rounded px-2 py-1 bg-inherit ml-2"
                    onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'colorful')}
                    value={theme}
                    id="theme-select-mobile"
                >
                    <option value="light">Light Mode</option>
                    <option value="dark">Dark Mode</option>
                    <option value="colorful">Colorful Mode</option>
                </select>
            </div>
            <ul className="nav-links hidden md:flex space-x-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <select
                className="border rounded px-2 py-1 bg-inherit hidden md:block"
                onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'colorful')}
                value={theme}
                id="theme-select-desktop"
            >
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
                <option value="colorful">Colorful Mode</option>
            </select>
            <MobileNav open={menuOpen} theme={theme} onClose={() => setMenuOpen(false)} />
        </nav>
    );
}

export default Navbar;
