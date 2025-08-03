import ProductGrid from "../ui/ProductGrid";

function DarkThemeHome() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col items-center justify-start p-6 md:p-12 pt-24 md:pt-16">
        <div className="w-full max-w-6xl">
          <header className="w-full mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 tracking-tight text-center">Multi Theme Switcher</h1>
            <p className="text-xl md:text-2xl mb-8 md:mb-10 font-semibold text-center max-w-4xl mx-auto leading-relaxed">
              Experience a bold, focused design with sidebar navigation. This is the dark theme with serif fonts and enhanced readability.
            </p>
          </header>
          
          <section className="mb-16 w-full flex justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-extrabold py-4 px-12 rounded-lg shadow-xl transition-colors text-lg">
              Action Button
            </button>
          </section>

          <section className="w-full pb-12">
            <ProductGrid />
          </section>
        </div>
      </main>
    </div>
  );
}

export default DarkThemeHome;
