import { useProducts } from "../../hooks/useProducts";
import ColorfulProductCard from "../ui/ColorfulProductCard";

function ColorfulThemeHome() {
  const { products, loading, error } = useProducts();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 pt-24">
      <h1 className="text-5xl font-pacifico mb-10 text-white drop-shadow-lg">
        Multi Theme Switcher
      </h1>
      {loading && <div className="text-white">Loading products...</div>}
      {error && <div className="text-red-200">Error loading products.</div>}
      {products && products.length > 0 && (
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {products.map(product => (
              <ColorfulProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
      {products && products.length === 0 && !loading && !error && (
        <div className="text-white">No products found.</div>
      )}
    </div>
  );
}

export default ColorfulThemeHome;
