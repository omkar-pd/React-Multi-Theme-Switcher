import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import MobileNav from "./MobileNav";
import Logo from "./ui/Logo";
import NavigationLinks from "./ui/NavigationLinks";
import ThemeSelector from "./ui/ThemeSelector";

function Navbar() {
    const { theme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

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

    return (
        <nav className={`navbar fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-all duration-300 ${getNavbarStyles()}`}>
            <Logo variant="navbar" />

            <div className="flex items-center gap-3 md:hidden">
                <ThemeSelector variant="mobile" />
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
                <NavigationLinks variant="navbar" />

                <div className="flex items-center gap-2">
                    <span className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-white/80'}`}>Theme:</span>
                    <ThemeSelector variant="navbar" />
                </div>
            </div>

            <MobileNav open={menuOpen} theme={theme} onClose={() => setMenuOpen(false)} />
        </nav>
    );
}

export default Navbar;
