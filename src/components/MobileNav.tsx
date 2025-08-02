import { Link } from "react-router";
import { themes } from "../utils/themes";

type MobileNavProps = {
  open: boolean;
  theme: 'light' | 'dark' | 'colorful';
  onClose: () => void;
};

function MobileNav({ open, theme, onClose }: MobileNavProps) {
  if (!open) return null;
  return (
    <ul
      className={`absolute top-full left-0 w-full shadow-md flex flex-col items-center py-4 space-y-2 md:hidden z-50 ${themes[theme].className}`}
    >
      <li>
        <Link to="/" onClick={onClose}>Home</Link>
      </li>
      <li>
        <Link to="/about" onClick={onClose}>About</Link>
      </li>
      <li>
        <Link to="/contact" onClick={onClose}>Contact</Link>
      </li>
    </ul>
  );
}

export default MobileNav;
