import { useTheme } from "../../hooks/useTheme";

function ProductCardSkeleton() {
    const { theme } = useTheme();

    const getCardStyles = () => {
        switch (theme) {
            case 'dark':
                return 'bg-gray-950 border-2 border-yellow-300/30 rounded-xl shadow-2xl p-6 font-serif font-extrabold';
            case 'colorful':
                return 'rounded-2xl p-6 shadow-xl font-pacifico text-center border-4 border-pink-400/30 bg-gradient-to-br from-pink-300/50 via-yellow-200/50 to-green-200/50';
            default:
                return 'bg-white rounded-lg border border-gray-200 shadow-sm p-4';
        }
    };

    const getSkeletonColor = () => {
        switch (theme) {
            case 'dark':
                return 'bg-gray-800';
            case 'colorful':
                return 'bg-white/40';
            default:
                return 'bg-gray-200';
        }
    };

    const getTitleHeight = () => {
        switch (theme) {
            case 'colorful':
                return 'h-5';
            default:
                return 'h-4';
        }
    };

    const getDescriptionHeight = () => {
        switch (theme) {
            case 'colorful':
                return 'h-4';
            default:
                return 'h-3';
        }
    };

    const getPriceWidth = () => {
        switch (theme) {
            case 'colorful':
                return 'w-20 h-5';
            default:
                return 'w-16 h-4';
        }
    };

    return (
        <div className={`flex flex-col items-center w-full max-w-xs h-auto min-h-[320px] mx-auto animate-pulse ${getCardStyles()}`}>
            <div className={`mb-3 w-28 h-28 rounded flex-shrink-0 ${theme === 'colorful' ? 'mx-auto' : ''} ${getSkeletonColor()}`}></div>
            <div className="w-full mb-2 flex-grow flex flex-col justify-start">
                <div className={`${getTitleHeight()} rounded mb-2 ${getSkeletonColor()}`}></div>
                <div className={`${getTitleHeight()} rounded w-3/4 mx-auto ${getSkeletonColor()}`}></div>
            </div>
            <div className="w-full mb-2">
                <div className={`${getDescriptionHeight()} rounded mb-1 ${getSkeletonColor()}`}></div>
                <div className={`${getDescriptionHeight()} rounded w-2/3 mx-auto ${getSkeletonColor()}`}></div>
            </div>
            <div className={`mt-auto rounded ${theme === 'colorful' ? 'mx-auto' : ''} ${getPriceWidth()} ${getSkeletonColor()}`}></div>
        </div>
    );
}

export default ProductCardSkeleton;
