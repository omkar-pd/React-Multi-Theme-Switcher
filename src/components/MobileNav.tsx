import { themes } from "../utils/themes";
import NavigationLinks from "./ui/NavigationLinks";

type MobileNavProps = {
  open: boolean;
  theme: 'light' | 'dark' | 'colorful';
  onClose: () => void;
};

function MobileNav({ open, theme, onClose }: MobileNavProps) {
  if (!open) return null;

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
      <NavigationLinks variant="mobile" onLinkClick={onClose} />
    </div>
  );
}

export default MobileNav;
