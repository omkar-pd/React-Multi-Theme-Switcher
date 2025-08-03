import ProductGrid from "../ui/ProductGrid";

function ColorfulThemeHome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-6 py-12 pt-32">
      <header className="w-full mb-16">
        <h1 className="text-5xl md:text-6xl font-pacifico mb-6 text-white drop-shadow-2xl text-center">
          Multi Theme Switcher
        </h1>
        <p className="text-xl md:text-2xl font-pacifico text-white text-center max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
          Enjoy a vibrant, playful experience with colorful gradients and fun
          typography. This theme uses the Pacifico Google Font for a unique look.
        </p>
      </header>

      <main className="w-full flex flex-col items-center">
        <section className="mb-16 w-full flex justify-center">
          <button className="bg-white/95 hover:bg-white text-purple-600 font-pacifico font-bold py-4 px-12 rounded-3xl shadow-2xl transition-all duration-300 text-xl hover:scale-110 hover:shadow-white/50">
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

export default ColorfulThemeHome;
