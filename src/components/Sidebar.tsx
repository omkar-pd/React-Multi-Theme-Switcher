import { Link, useLocation } from "react-router";
import { useTheme } from "../hooks/useTheme";
import { useEffect, useState } from "react";

function Sidebar() {
    const { theme, setTheme } = useTheme();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setSidebarOpen(false);
    }, [location.pathname]);

    return (
        <>
            <button
                className="md:hidden fixed top-4 left-4 z-50 bg-gray-950 text-yellow-300 p-3 rounded-lg focus:outline-none shadow-lg border border-yellow-300/30"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <aside className={`fixed md:static top-0 left-0 h-full w-72 bg-gradient-to-b from-gray-950 to-gray-900 text-yellow-300 font-serif font-extrabold shadow-2xl min-h-screen z-40 border-r border-yellow-300/20
        ${sidebarOpen ? "block" : "hidden"} md:block transition-all duration-300`}>

                <div className="p-6 border-b border-yellow-300/20">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/011/883/296/non_2x/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg"
                                alt="Logo"
                                className="rounded-full border-2 border-yellow-300/30"
                                style={{ width: "40px", height: "40px" }}
                            />
                            <h2 className="text-xl tracking-wide">Dashboard</h2>
                        </div>

                        <button
                            className="md:hidden text-yellow-300 p-1 rounded hover:bg-gray-800 transition-colors"
                            onClick={() => setSidebarOpen(false)}
                            aria-label="Close sidebar"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-yellow-200 block">Theme</label>
                        <select
                            className="w-full border-none rounded-lg px-3 py-2 bg-gray-800 text-yellow-300 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                            onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'colorful')}
                            value={theme}
                            id="theme-select-sidebar"
                        >
                            <option value="light">☀️ Light Mode</option>
                            <option value="dark">🌙 Dark Mode</option>
                            <option value="colorful">🎨 Colorful Mode</option>
                        </select>
                    </div>
                </div>

                <nav className="p-6">
                    <div className="space-y-1">
                        <div className="text-xs text-yellow-200 uppercase tracking-wider mb-3 px-3">Navigation</div>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${location.pathname === '/'
                                            ? 'bg-yellow-300 text-gray-900 font-bold'
                                            : 'hover:bg-gray-800 hover:text-yellow-100'
                                        }`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 5.5-5.5M21 3l-5.5 5.5M3 21l5.5-5.5M21 21l-5.5-5.5" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${location.pathname === '/about'
                                            ? 'bg-yellow-300 text-gray-900 font-bold'
                                            : 'hover:bg-gray-800 hover:text-yellow-100'
                                        }`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${location.pathname === '/contact'
                                            ? 'bg-yellow-300 text-gray-900 font-bold'
                                            : 'hover:bg-gray-800 hover:text-yellow-100'
                                        }`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.31a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Sidebar overlay"
                />
            )}
        </>
    );
}

export default Sidebar;
