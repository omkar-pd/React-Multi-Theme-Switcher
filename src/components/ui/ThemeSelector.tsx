import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

type ThemeSelectorProps = {
    variant?: 'navbar' | 'sidebar' | 'mobile';
    className?: string;
};

function ThemeSelector({ variant = 'navbar', className = '' }: ThemeSelectorProps) {
    const { theme, setTheme } = useTheme();
    const [isChanging, setIsChanging] = useState(false);

    const handleThemeChange = (newTheme: 'light' | 'dark' | 'colorful') => {
        if (newTheme === theme || isChanging) return;

        setIsChanging(true);
        
        setTimeout(() => {
            setTheme(newTheme);
            setIsChanging(false);
        }, 50);
    };

    const getSelectStyles = () => {
        switch (variant) {
            case 'sidebar':
                return 'w-full border-none rounded-lg px-3 py-2 bg-gray-800 text-yellow-300 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400';
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
        <motion.div
            className="relative"
            animate={isChanging ? {
                scale: 0.95,
                opacity: 0.7,
            } : {
                scale: 1,
                opacity: 1,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.3
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <select
                className={`${getSelectStyles()} ${className}`}
                onChange={(e) => handleThemeChange(e.target.value as 'light' | 'dark' | 'colorful')}
                value={theme}
                disabled={isChanging}
                style={{
                    cursor: isChanging ? 'wait' : 'pointer',
                }}
            >
                {getOptions().map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            
            <AnimatePresence>
                {isChanging && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default ThemeSelector;
