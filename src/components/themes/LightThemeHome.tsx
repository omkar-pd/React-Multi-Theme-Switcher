import { useProducts } from "../../hooks/useProducts";


function LightThemeHome() {
    const { products, loading, error } = useProducts();
    console.log(products);
    console.log(loading);
    console.log(error);
    return (
        <div className="light-theme-main-container min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
            <header className="w-full max-w-2xl mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Welcome to the Minimalist Light Theme</h1>
                <p className="text-lg text-gray-600 text-center">
                    Experience clarity and focus with a clean, distraction-free interface.
                </p>
            </header>
            <main className="w-full max-w-2xl flex flex-col items-center">
                <section className="mb-6 w-full">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow transition-colors w-full sm:w-auto">
                        Action Button
                    </button>
                </section>
                <section className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="minimal-card bg-white rounded-lg shadow p-6 flex flex-col items-start">
                        <h2 className="text-xl font-semibold mb-2 text-gray-900">Card One</h2>
                        <p className="text-gray-700 mb-4">
                            This is a sample card in the minimalist light theme. The layout is clean and easy to read.
                        </p>
                    </div>
                    <div className="minimal-card bg-white rounded-lg shadow p-6 flex flex-col items-start">
                        <h2 className="text-xl font-semibold mb-2 text-gray-900">Card Two</h2>
                        <p className="text-gray-700 mb-4">
                            Responsive design ensures a seamless experience on both desktop and mobile devices.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default LightThemeHome;
