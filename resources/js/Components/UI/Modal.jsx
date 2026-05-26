import React, { useEffect } from 'react';

export default function Modal({
    show = false,
    onClose = () => {},
    title = '',
    maxWidth = 'md',
    children
}) {
    // Handle Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && show) {
                onClose();
            }
        };

        if (show) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [show, onClose]);

    if (!show) return null;

    const maxWidthClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '4xl': 'max-w-4xl',
    }[maxWidth] || 'max-w-md';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <div 
                className="fixed inset-0 bg-[#0A0F1E]/85 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Dialog Card */}
            <div 
                className={`relative bg-surface border border-border w-full rounded-xl shadow-2xl shadow-primary/5 p-6 overflow-hidden transform transition-all duration-300 ${maxWidthClasses} z-10`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                    <h3 className="text-lg font-bold text-[#F1F5F9] font-mono tracking-wide">
                        {title}
                    </h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-muted hover:text-white transition duration-200"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="max-h-[70vh] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
