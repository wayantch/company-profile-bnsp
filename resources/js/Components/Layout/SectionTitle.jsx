import React from "react";

export default function SectionTitle({
    title,
    subtitle,
    centered = true,
    className = "",
}) {
    return (
        <div
            className={`mb-12 ${centered ? "text-center" : "text-left"} ${className}`}
        >
            <div className="inline-block">
                <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-text">
                    {title}
                </h2>
                <span
                    className={`block h-1 w-16 bg-gradient-to-r from-primary to-accent mt-2.5 ${centered ? "mx-auto" : "mx-0"}`}
                />
            </div>
            {subtitle && (
                <p
                    className={`mt-4 text-sm sm:text-base text-muted max-w-2xl font-sans ${centered ? "mx-auto" : "mx-0"}`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
