import ProductGrid from "../ui/ProductGrid";


function LightThemeHome() {
    return (
        <div className="light-theme-main-container min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 pt-32">
            <header className="w-full mb-16">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center tracking-tight">Multi Theme Switcher</h1>
                <p className="text-xl text-gray-500 text-center font-light max-w-2xl mx-auto leading-relaxed">
                    Experience clarity and focus with a clean, distraction-free interface. This is the minimalist light theme with simple sans-serif fonts.
                </p>
            </header>
            <main className="w-full flex flex-col items-center">
                <section className="mb-16 w-full flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-12 rounded-lg shadow-md transition-colors text-lg">
                        Action Button
                    </button>
                </section>
                <section className="w-full pb-12">
                    <ProductGrid />
                </section>
            </main>
        </div>
    );
}

export default LightThemeHome;
