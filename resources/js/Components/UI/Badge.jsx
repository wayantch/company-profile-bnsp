import React from 'react';

export default function Badge({
    variant = 'primary',
    className = '',
    children,
    ...props
}) {
    const baseStyle = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider';

    const variants = {
        primary: 'bg-primary/10 text-primary border border-primary/20',
        accent: 'bg-accent/10 text-accent border border-accent/20',
        muted: 'bg-surface text-muted border border-border',
        success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
        danger: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
    };

    return (
        <span
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}
