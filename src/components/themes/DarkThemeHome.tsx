function DarkThemeHome() {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:block w-64 bg-gray-900 text-yellow-300 font-serif font-bold p-8">
        <h2 className="text-2xl mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">Navigation 1</li>
          <li className="mb-2">Navigation 2</li>
        </ul>
      </aside>
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Multi Theme Switcher</h1>
        <p className="text-lg mb-8">This is the dark theme layout with a sidebar</p>
      </main>
    </div>
  );
}

export default DarkThemeHome;
