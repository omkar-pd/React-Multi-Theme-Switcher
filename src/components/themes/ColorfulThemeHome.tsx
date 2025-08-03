import ProductGrid from "../ui/ProductGrid";

function ColorfulThemeHome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 pt-24">
      <h1 className="text-5xl font-pacifico mb-10 text-white drop-shadow-lg">
        Multi Theme Switcher
      </h1>
      <ProductGrid />
    </div>
  );
}

export default ColorfulThemeHome;
