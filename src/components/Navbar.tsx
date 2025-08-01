import { useTheme } from "../hooks/useTheme";


function Navbar() {
    const { theme, setTheme } = useTheme();
    console.log(theme);

    return (
        <nav className="navbar fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 shadow z-50 bg-colorful-gradient font-pacifico">
            <div className="flex items-center">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/011/883/296/non_2x/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg"
                    alt="Logo"
                    className="mr-3 rounded"
                    style={{ width: "40px", height: "40px" }}
                />
                <h1 className="text-xl font-bold">My Application</h1>
            </div>
            <ul className="nav-links flex space-x-4">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <select
                className="border rounded px-2 py-1 bg-inherit"
                onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'colorful')}
                value={theme}
                id="theme-select"
            >
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
                <option value="colorful">Colorful Mode</option>
            </select>
        </nav>
    );
}


export default Navbar;
