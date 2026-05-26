import React from 'react';

export default function Card({
    hover = false,
    className = '',
    children,
    ...props
}) {
    const baseStyle = 'bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300';
    
    const hoverStyle = hover 
        ? 'hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5' 
        : '';

    return (
        <div 
            className={`${baseStyle} ${hoverStyle} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
