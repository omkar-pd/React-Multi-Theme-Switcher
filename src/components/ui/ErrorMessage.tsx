import { useTheme } from "../../hooks/useTheme";

type ErrorMessageProps = {
  message?: string;
  variant?: 'inline' | 'card';
};

function ErrorMessage({ message = "Error loading products.", variant = 'inline' }: ErrorMessageProps) {
  const { theme } = useTheme();

  const getTextStyles = () => {
    switch (theme) {
      case 'light':
        return 'text-red-600';
      case 'colorful':
        return 'text-red-200 font-pacifico';
      default:
        return 'text-red-400';
    }
  };

  const getContainerStyles = () => {
    if (variant === 'card') {
      switch (theme) {
        case 'light':
          return 'bg-red-50 border border-red-200 rounded-lg p-4';
        case 'colorful':
          return 'bg-red-500/20 border border-red-300/30 rounded-lg p-4 backdrop-blur-sm';
        default:
          return 'bg-red-900/20 border border-red-500/30 rounded-lg p-4';
      }
    }
    return '';
  };

  return (
    <div className={`text-center ${getContainerStyles()}`}>
      <div className={`flex items-center justify-center gap-2 ${getTextStyles()}`}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        {message}
      </div>
    </div>
  );
}

export default ErrorMessage;
