import React from "react";

export default function Card({
    hover = false,
    className = "",
    children,
    ...props
}) {
    const baseStyle =
        "bg-surface/85 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-sm shadow-ink/5 transition-all duration-300";

    const hoverStyle = hover
        ? "hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/5"
        : "";

    return (
        <div className={`${baseStyle} ${hoverStyle} ${className}`} {...props}>
            {children}
        </div>
    );
}
