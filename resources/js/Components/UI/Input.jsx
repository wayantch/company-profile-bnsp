import React from 'react';

export default function Input({
    label,
    error,
    helperText,
    type = 'text',
    id,
    className = '',
    ...props
}) {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label 
                    htmlFor={inputId}
                    className="block text-sm font-medium text-muted mb-1.5 font-sans"
                >
                    {label}
                </label>
            )}

            {type === 'textarea' ? (
                <textarea
                    id={inputId}
                    className={`w-full bg-base border ${
                        error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-border focus:border-primary focus:ring-primary/20'
                    } rounded-lg px-4 py-2.5 text-[#F1F5F9] placeholder-muted/50 focus:outline-none focus:ring-4 transition duration-200 min-h-[120px]`}
                    {...props}
                />
            ) : (
                <input
                    id={inputId}
                    type={type}
                    className={`w-full bg-base border ${
                        error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-border focus:border-primary focus:ring-primary/20'
                    } rounded-lg px-4 py-2.5 text-[#F1F5F9] placeholder-muted/50 focus:outline-none focus:ring-4 transition duration-200`}
                    {...props}
                />
            )}

            {error && (
                <p className="mt-1.5 text-xs text-red-500 font-sans">
                    {error}
                </p>
            )}

            {helperText && !error && (
                <p className="mt-1.5 text-xs text-muted/70 font-sans">
                    {helperText}
                </p>
            )}
        </div>
    );
}
