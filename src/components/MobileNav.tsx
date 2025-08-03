import { Link, useLocation } from "react-router";
import { themes } from "../utils/themes";

type MobileNavProps = {
  open: boolean;
  theme: 'light' | 'dark' | 'colorful';
  onClose: () => void;
};

function MobileNav({ open, theme, onClose }: MobileNavProps) {
  const location = useLocation();
  
  if (!open) return null;

  const getLinkStyles = (path: string) => {
    const isActive = location.pathname === path;
    switch (theme) {
      case 'light':
        return `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
          isActive 
            ? 'bg-blue-600 font-semibold' 
            : 'hover:text-blue-600 text-gray-800'
        }`;
      case 'colorful':
        return `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-pacifico ${
          isActive 
            ? 'bg-white/30 font-bold backdrop-blur-sm' 
            : 'hover:text-white/90 text-white'
        }`;
      default:
        return `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
          isActive ? 'bg-white/20 font-bold' : 'hover:text-white/90'
        }`;
    }
  };

  const getContainerStyles = () => {
    switch (theme) {
      case 'light':
        return 'bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl';
      case 'colorful':
        return 'bg-gradient-to-b from-pink-500 to-green-400 backdrop-blur-md shadow-xl';
      default:
        return themes[theme].className;
    }
  };

  return (
    <div
      className={`absolute top-full left-0 right-0 mx-4 mt-2 rounded-xl p-4 space-y-2 md:hidden z-50 ${getContainerStyles()}`}
    >
      <Link to="/" onClick={onClose} className={getLinkStyles('/')}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Home
      </Link>
      <Link to="/about" onClick={onClose} className={getLinkStyles('/about')}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        About
      </Link>
      <Link to="/contact" onClick={onClose} className={getLinkStyles('/contact')}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.31a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Contact</span>
      </Link>
    </div>
  );
}

export default MobileNav;
