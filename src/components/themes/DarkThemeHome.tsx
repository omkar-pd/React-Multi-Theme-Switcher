import ProductGrid from "../ui/ProductGrid";

function DarkThemeHome() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col items-center justify-start p-6 md:p-12 pt-20 md:pt-12">
        <div className="w-full max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight text-center">Multi Theme Switcher</h1>
          <p className="text-xl md:text-2xl mb-8 md:mb-10 font-semibold text-center">This is the dark theme layout with a sidebar</p>
          <div className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg w-full max-w-2xl mx-auto mb-8 md:mb-10">
            <p className="text-yellow-200 text-base md:text-lg">Enjoy a focused, bold look with a sidebar for navigation.</p>
          </div>

          <ProductGrid />
        </div>
      </main>
    </div>
  );
}

export default DarkThemeHome;
