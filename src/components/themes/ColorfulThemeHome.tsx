function ColorfulThemeHome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-pacifico mb-8">Multi Theme Switcher</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        <div className="bg-yellow-300 text-black rounded-xl p-6 shadow font-pacifico">
          <h2 className="text-2xl mb-2">Card 1</h2>
          <p>Colorful Theme Card </p>
        </div>
        <div className="bg-pink-300 text-black rounded-xl p-6 shadow font-pacifico">
          <h2 className="text-2xl mb-2">Card 2</h2>
          <p>Switch themes to see different layouts and styles!</p>
        </div>
      </div>
    </div>
  );
}

export default ColorfulThemeHome;
