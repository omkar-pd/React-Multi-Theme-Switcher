import { Link, useLocation } from "react-router";
import { useTheme } from "../../hooks/useTheme";

type NavigationLinksProps = {
    variant?: 'navbar' | 'sidebar' | 'mobile';
    onLinkClick?: () => void;
};

function NavigationLinks({ variant = 'navbar', onLinkClick }: NavigationLinksProps) {
    const { theme } = useTheme();
    const location = useLocation();

    const getLinkStyles = (path: string) => {
        const isActive = location.pathname === path;
        
        switch (variant) {
            case 'sidebar':
                return `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${isActive
                        ? 'bg-yellow-300 text-gray-900 font-bold'
                        : 'hover:bg-gray-800 hover:text-yellow-100'
                    }`;
            case 'mobile':
                switch (theme) {
                    case 'light':
                        return `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive 
                                ? 'bg-blue-600 font-semibold' 
                                : 'hover:text-blue-600 text-gray-800'
                            }`;
                    case 'colorful':
                        return `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-pacifico ${isActive 
                                ? 'bg-white/30 font-bold backdrop-blur-sm' 
                                : 'hover:text-white/90 text-white'
                            }`;
                    default:
                        return `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-white/20 font-bold' : 'hover:text-white/90'
                            }`;
                }
            default: // navbar
                switch (theme) {
                    case 'light':
                        return `px-4 py-2 rounded-lg transition-all duration-200 ${isActive
                                ? 'font-semibold text-blue-600'
                                : 'hover:text-red-800'
                            }`;
                    case 'colorful':
                        return `px-4 py-2 rounded-lg transition-all duration-200 font-pacifico ${isActive
                                ? 'text-blue-600 font-bold backdrop-blur-sm'
                                : 'hover:text-red-800 text-white'
                            }`;
                    default:
                        return `px-4 py-2 rounded-lg transition-all duration-200 ${isActive ? 'bg-white/20 text-white font-bold' : 'hover:text-white/90 text-white'
                            }`;
                }
        }
    };

    const getIconSize = () => {
        return variant === 'navbar' ? 'w-4 h-4' : 'w-5 h-5';
    };

    const renderNavItem = (path: string, label: string, icon: React.ReactNode) => (
        <li key={path}>
            <Link
                to={path}
                onClick={onLinkClick}
                className={getLinkStyles(path)}
            >
                <span className="flex items-center gap-2">
                    {icon}
                    {label}
                </span>
            </Link>
        </li>
    );

    return (
        <ul className={variant === 'navbar' ? 'flex items-center gap-2' : 'space-y-2'}>
            {renderNavItem('/', 'Home', 
                <svg className={getIconSize()} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )}
            {renderNavItem('/about', 'About',
                <svg className={getIconSize()} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )}
            {renderNavItem('/contact', 'Contact',
                <svg className={getIconSize()} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.31a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )}
        </ul>
    );
}

export default NavigationLinks;
