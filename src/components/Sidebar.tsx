import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import NavigationLinks from "./ui/NavigationLinks";
import ThemeSelector from "./ui/ThemeSelector";

function Sidebar() {
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
                        <Logo variant="sidebar" />

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
                        <ThemeSelector variant="sidebar" />
                    </div>
                </div>

                <nav className="p-6">
                    <div className="space-y-1">
                        <div className="text-xs text-yellow-200 uppercase tracking-wider mb-3 px-3">Navigation</div>
                        <NavigationLinks variant="sidebar" />
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
