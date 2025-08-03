import { useProducts } from "../../hooks/useProducts";
import DarkProductCard from "../ui/DarkProductCard";

function DarkThemeHome() {
  const { products, loading, error } = useProducts();

  return (
    <div className="min-h-screen">
      <main className="flex flex-col items-center justify-start p-6 md:p-12 pt-20 md:pt-12">
        <div className="w-full max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight text-center">Multi Theme Switcher</h1>
          <p className="text-xl md:text-2xl mb-8 md:mb-10 font-semibold text-center">This is the dark theme layout with a sidebar</p>
          <div className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg w-full max-w-2xl mx-auto mb-8 md:mb-10">
            <p className="text-yellow-200 text-base md:text-lg">Enjoy a focused, bold look with a sidebar for navigation.</p>
          </div>

          {loading && <div className="text-yellow-400 text-center">Loading products...</div>}
          {error && <div className="text-red-400 text-center">Error loading products.</div>}
          {products && products.length > 0 && (
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                {products.map(product => (
                  <DarkProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
          {products && products.length === 0 && !loading && !error && (
            <div className="text-yellow-300 text-center">No products found.</div>
          )}
        </div>
      </main>
    </div>
  );
}

export default DarkThemeHome;
