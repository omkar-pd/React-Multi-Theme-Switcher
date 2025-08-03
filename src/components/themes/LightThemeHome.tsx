import ProductGrid from "../ui/ProductGrid";


function LightThemeHome() {
    return (
        <div className="light-theme-main-container min-h-screen bg-gray-50 flex flex-col items-center py-12 px-2 pt-24">
            <header className="w-full mb-10">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center tracking-tight">Minimalist Light Theme</h1>
                <p className="text-xl text-gray-500 text-center font-light max-w-xl mx-auto">
                    Experience clarity and focus with a clean, distraction-free interface.
                </p>
            </header>
            <main className="w-full flex flex-col items-center">
                <section className="mb-12 w-full flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-10 rounded-lg shadow-md transition-colors text-lg">
                        Action Button
                    </button>
                </section>
                <section className="w-full">
                    <ProductGrid />
                </section>
            </main>
        </div>
    );
}

export default LightThemeHome;
