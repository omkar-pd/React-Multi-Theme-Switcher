import { useTheme } from "../../hooks/useTheme";

type ThemeSelectorProps = {
    variant?: 'navbar' | 'sidebar' | 'mobile';
    className?: string;
};

function ThemeSelector({ variant = 'navbar', className = '' }: ThemeSelectorProps) {
    const { theme, setTheme } = useTheme();

    const getSelectStyles = () => {
        switch (variant) {
            case 'sidebar':
                return 'w-full border-none rounded-lg px-3 py-2 bg-gray-800 text-yellow-300 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all';
            case 'mobile':
                switch (theme) {
                    case 'light':
                        return 'bg-white text-gray-800 border border-gray-300 rounded-lg px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm';
                    case 'colorful':
                        return 'bg-white/20 text-white border border-white/30 rounded-lg px-3 py-2 font-pacifico font-bold focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm';
                    default:
                        return 'border rounded px-2 py-1 bg-inherit';
                }
            default:
                switch (theme) {
                    case 'light':
                        return 'bg-white text-gray-800 border border-gray-300 rounded-lg px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm';
                    case 'colorful':
                        return 'bg-white/20 text-white border border-white/30 rounded-lg px-3 py-2 font-pacifico font-bold focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm';
                    default:
                        return 'border rounded px-2 py-1 bg-inherit';
                }
        }
    };

    const getOptions = () => {
        if (variant === 'mobile') {
            return [
                { value: 'light', label: '☀️ Light' },
                { value: 'dark', label: '🌙 Dark' },
                { value: 'colorful', label: '🎨 Colorful' }
            ];
        }
        return [
            { value: 'light', label: '☀️ Light Mode' },
            { value: 'dark', label: '🌙 Dark Mode' },
            { value: 'colorful', label: '🎨 Colorful Mode' }
        ];
    };

    return (
        <select
            className={`${getSelectStyles()} ${className}`}
            onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'colorful')}
            value={theme}
        >
            {getOptions().map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default ThemeSelector;
