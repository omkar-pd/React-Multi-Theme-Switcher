import { useTheme } from "../../hooks/useTheme";

type LoadingSpinnerProps = {
  message?: string;
  size?: 'small' | 'medium' | 'large';
};

function LoadingSpinner({ message = "Loading products...", size = 'medium' }: LoadingSpinnerProps) {
  const { theme } = useTheme();

  const getTextStyles = () => {
    switch (theme) {
      case 'light':
        return 'text-gray-600';
      case 'colorful':
        return 'text-white font-pacifico';
      default:
        return 'text-yellow-400';
    }
  };

  const getSpinnerSize = () => {
    switch (size) {
      case 'small': return 'w-4 h-4';
      case 'large': return 'w-8 h-8';
      default: return 'w-6 h-6';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`${getSpinnerSize()} animate-spin rounded-full border-2 border-transparent border-t-current ${getTextStyles()}`} />
      <div className={`text-center ${getTextStyles()}`}>
        {message}
      </div>
    </div>
  );
}

export default LoadingSpinner;
