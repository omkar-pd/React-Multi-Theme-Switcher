import { useProducts } from "../../hooks/useProducts";
import ProductList from "../ui/ProductList";


function LightThemeHome() {
    const { products, loading, error } = useProducts();
    return (
        <div className="light-theme-main-container min-h-screen bg-gray-50 flex flex-col items-center py-12 px-2">
            <header className="w-full mb-10">
                <h1 className="text-4xl font-bold text-gray-900 mb-3 text-center tracking-tight">Welcome to the Minimalist Light Theme</h1>
                <p className="text-lg text-gray-500 text-center font-light">
                    Experience clarity and focus with a clean, distraction-free interface.
                </p>
            </header>
            <main className="w-full flex flex-col items-center">
                <section className="mb-8 w-full flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg shadow-md transition-colors">
                        Action Button
                    </button>
                </section>
                <section className="w-full">
                    <ProductList products={products} loading={loading} error={error} />
                </section>
            </main>
        </div>
    );
}

export default LightThemeHome;
