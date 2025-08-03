import { useTheme } from "../../hooks/useTheme";

type LogoProps = {
  variant?: 'navbar' | 'sidebar';
  size?: 'small' | 'medium' | 'large';
};

function Logo({ variant = 'navbar', size = 'medium' }: LogoProps) {
  const { theme } = useTheme();

  const getImageSize = () => {
    switch (size) {
      case 'small':
        return { width: "32px", height: "32px" };
      case 'large':
        return { width: "48px", height: "48px" };
      default:
        return variant === 'navbar' ? { width: "44px", height: "44px" } : { width: "40px", height: "40px" };
    }
  };

  const getBorderStyles = () => {
    if (variant === 'sidebar') {
      return 'border-2 border-yellow-300/30';
    }
    return theme === 'light' ? 'border-2 border-gray-200' : 'border-2 border-white/30';
  };

  const getTextStyles = () => {
    if (variant === 'sidebar') {
      return 'text-xl tracking-wide';
    }
    return `text-xl font-bold ${theme === 'colorful' ? 'font-pacifico' : theme === 'light' ? 'font-semibold' : ''}`;
  };

  const getText = () => {
    if (variant === 'sidebar') return 'Dashboard';
    return theme === 'colorful' ? 'Multi Theme' : 'Dashboard';
  };

  return (
    <div className="flex items-center gap-3">
      <img
        src="https://static.vecteezy.com/system/resources/previews/011/883/296/non_2x/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg"
        alt="Logo"
        className={`rounded-full transition-all duration-200 ${getBorderStyles()}`}
        style={getImageSize()}
      />
      <span className={getTextStyles()}>
        {getText()}
      </span>
    </div>
  );
}

export default Logo;
