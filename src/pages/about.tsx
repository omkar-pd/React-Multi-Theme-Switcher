function About() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl p-8 max-w-2xl w-full">
                <h1 className="text-4xl font-bold mb-4 text-center text-blue-600 dark:text-yellow-300">
                    About Us
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 text-center">
                    Welcome to the Multi Theme Switcher application! This project demonstrates how to implement dynamic theme switching in a modern React app using Tailwind CSS.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="flex-1 bg-blue-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                        <h2 className="font-semibold text-blue-700 dark:text-yellow-200 mb-2">Features</h2>
                        <ul className="text-sm text-gray-800 dark:text-gray-100 space-y-1">
                            <li>🌗 Light, Dark, and Colorful themes</li>
                            <li>⚡ Instant theme switching</li>
                            <li>💾 Theme persistence</li>
                            <li>📱 Fully responsive UI</li>
                        </ul>
                    </div>
                    <div className="flex-1 bg-yellow-100 dark:bg-gray-600 rounded-lg p-4 text-center">
                        <h2 className="font-semibold text-yellow-700 dark:text-blue-200 mb-2">About the Author</h2>
                        <p className="text-sm text-gray-800 dark:text-gray-100">
                            Created by <span className="font-bold">Omkar</span>.<br />
                            Explore the code and try switching themes using the selector above!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;
