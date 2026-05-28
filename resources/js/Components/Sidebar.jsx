import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Sidebar({ isOpen, onClose }) {
    const { auth } = usePage().props;
    const [articlesOpen, setArticlesOpen] = useState(true);

    const currentUrl = usePage().url;
    const isActive = (path) => currentUrl === path;

    const categories = [
        { label: "Konsep Teknologi Informasi", query: "Konsep TI" },
        { label: "Tips Developer", query: "Tips Dev" },
        { label: "Case Study", query: "Case Study" },
        { label: "Industry News", query: "Industry News" },
    ];

    const sidebarClass = `fixed inset-y-0 left-0 z-30 w-60 bg-surface border-r border-border transform transition-transform duration-300 ease-in-out pt-16 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
    }`;

    return (
        <>
            {/* Backdrop for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-20 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={sidebarClass}>
                <div className="h-full px-4 py-6 overflow-y-auto flex flex-col justify-between">
                    <div className="space-y-6">
                        {/* Section 1: Navigation */}
                        <div>
                            <p className="px-3 text-xs font-semibold text-muted/80 uppercase tracking-wider font-mono">
                                EXPLORE
                            </p>
                            <nav className="mt-3 space-y-1">
                                {/* Article Dropdown */}
                                <div>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setArticlesOpen(!articlesOpen)
                                        }
                                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-muted hover:text-text hover:bg-secondary/60 rounded-lg group transition duration-200"
                                    >
                                        <div className="flex items-center space-x-2.5">
                                            <svg
                                                className="w-4 h-4 text-primary"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14"
                                                />
                                            </svg>
                                            <span>Artikel</span>
                                        </div>
                                        <svg
                                            className={`w-3.5 h-3.5 transform transition-transform duration-200 ${articlesOpen ? "rotate-180" : ""}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>

                                    {articlesOpen && (
                                        <div className="mt-1.5 pl-6 space-y-1 border-l border-border ml-5">
                                            {categories.map((cat, idx) => {
                                                const path = `/artikel?category=${encodeURIComponent(cat.query)}`;
                                                const active =
                                                    currentUrl.includes(
                                                        `category=${encodeURIComponent(cat.query)}`,
                                                    );
                                                return (
                                                    <Link
                                                        key={idx}
                                                        href={path}
                                                        onClick={onClose}
                                                        className={`block py-1.5 text-xs font-medium transition duration-200 ${
                                                            active
                                                                ? "text-primary pl-2 border-l border-primary"
                                                                : "text-muted hover:text-text"
                                                        }`}
                                                    >
                                                        {cat.label}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                {/* Events */}
                                <Link
                                    href="/event"
                                    onClick={onClose}
                                    className={`flex items-center space-x-2.5 px-3 py-2 text-sm font-medium rounded-lg transition duration-200 ${
                                        isActive("/event")
                                            ? "text-primary border-l-2 border-primary pl-2 bg-surface/30"
                                            : "text-muted hover:text-text hover:bg-secondary/60"
                                    }`}
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span>Event</span>
                                </Link>

                                {/* Gallery */}
                                <Link
                                    href="/gallery"
                                    onClick={onClose}
                                    className={`flex items-center space-x-2.5 px-3 py-2 text-sm font-medium rounded-lg transition duration-200 ${
                                        isActive("/gallery")
                                            ? "text-primary border-l-2 border-primary pl-2 bg-surface/30"
                                            : "text-muted hover:text-text hover:bg-secondary/60"
                                    }`}
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span>Gallery Foto</span>
                                </Link>

                                {/* Clients */}
                                <Link
                                    href="/klien"
                                    onClick={onClose}
                                    className={`flex items-center space-x-2.5 px-3 py-2 text-sm font-medium rounded-lg transition duration-200 ${
                                        isActive("/klien")
                                            ? "text-primary border-l-2 border-primary pl-2 bg-surface/30"
                                            : "text-muted hover:text-text hover:bg-secondary/60"
                                    }`}
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <span>Klien Kami</span>
                                </Link>
                            </nav>
                        </div>
                    </div>

                    {/* Section 2: Bottom Auth Links */}
                    <div className="border-t border-border pt-6">
                        {!auth?.user ? (
                            <div className="space-y-2">
                                <Link
                                    href="/login"
                                    onClick={onClose}
                                    className="flex items-center justify-center w-full px-4 py-2 text-xs font-mono text-white bg-primary rounded-lg hover:opacity-90 font-bold tracking-wider transition duration-200"
                                >
                                    SIGN IN
                                </Link>
                                <Link
                                    href="/register"
                                    onClick={onClose}
                                    className="flex items-center justify-center w-full px-4 py-2 text-xs font-mono text-text border border-border bg-surface rounded-lg hover:bg-secondary/60 transition duration-200"
                                >
                                    SIGN UP
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <Link
                                    href="/admin"
                                    onClick={onClose}
                                    className="flex items-center justify-center w-full px-4 py-2 text-xs font-mono text-primary bg-secondary border border-border rounded-lg hover:bg-surface transition duration-200"
                                >
                                    ADMIN DASHBOARD
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
}
