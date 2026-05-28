import React, { useEffect, useRef, useState } from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Navbar() {
    const { auth } = usePage().props;
    const navbarRef = useRef(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [exploreMenuOpen, setExploreMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const navLinks = [
        { label: "Beranda", url: "/" },
        { label: "Tentang", url: "/about" },
        {
            label: "Eksplorasi",
            items: [
                { label: "Produk Kami", url: "/produk" },
                { label: "Klien", url: "/klien" },
                { label: "Galeri", url: "/gallery" },
                { label: "Acara", url: "/event" },
                { label: "Artikel", url: "/artikel" },
            ],
        },
        { label: "Kontak", url: "/kontak" },
    ];

    const currentUrl = usePage().url;
    const isActive = (url) => {
        if (url === "/" && currentUrl === "/") return true;
        if (url !== "/" && currentUrl.startsWith(url)) return true;
        return false;
    };

    const isDropdownActive = (items) =>
        items.some((item) => isActive(item.url));

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 20) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY + 8) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY - 8) {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!navbarRef.current?.contains(event.target)) {
                setExploreMenuOpen(false);
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header
            ref={navbarRef}
            className={`fixed left-1/2 top-4 z-40 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 rounded-3xl border border-border/70 bg-surface/90 shadow-lg shadow-ink/5 backdrop-blur-xl transition-all duration-300 sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] ${
                isVisible || mobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-24 opacity-0 pointer-events-none"
            }`}
        >
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left: Logo */}
                    <div className="flex items-center space-x-3">
                        {/* Brand Logo */}
                        <Link
                            href="/"
                            className="flex items-center space-x-2.5"
                        >
                            <span className="text-text font-bold font-mono tracking-widest text-lg hidden sm:inline-block">
                                Wynnsea
                            </span>
                        </Link>
                    </div>

                    {/* Middle: Desktop Nav Links */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link, idx) =>
                            link.items ? (
                                <div key={idx} className="relative">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setExploreMenuOpen(!exploreMenuOpen)
                                        }
                                        className={`inline-flex items-center gap-1 text-sm font-medium tracking-wide transition duration-200 ${
                                            isDropdownActive(link.items)
                                                ? "text-primary"
                                                : "text-muted hover:text-text"
                                        }`}
                                        aria-expanded={exploreMenuOpen}
                                        aria-haspopup="true"
                                    >
                                        {link.label}
                                        <svg
                                            className={`h-4 w-4 transition-transform duration-200 ${exploreMenuOpen ? "rotate-180" : ""}`}
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

                                    {exploreMenuOpen && (
                                        <div className="absolute left-0 top-full z-50 mt-3 w-56 rounded-2xl border border-border bg-surface/95 p-2 shadow-xl shadow-ink/10 backdrop-blur-xl">
                                            {link.items.map((item) => (
                                                <Link
                                                    key={item.url}
                                                    href={item.url}
                                                    onClick={() =>
                                                        setExploreMenuOpen(
                                                            false,
                                                        )
                                                    }
                                                    className={`block rounded-xl px-3 py-2 text-sm transition ${
                                                        isActive(item.url)
                                                            ? "bg-primary/10 text-primary"
                                                            : "text-muted hover:bg-secondary/60 hover:text-text"
                                                    }`}
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={idx}
                                    href={link.url}
                                    className={`text-sm font-medium tracking-wide transition duration-200 ${
                                        isActive(link.url)
                                            ? "text-primary"
                                            : "text-muted hover:text-text"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ),
                        )}
                    </nav>

                    {/* Right: Auth Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {auth?.user ? (
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/admin"
                                    className="text-xs bg-surface text-primary border border-border px-3.5 py-1.5 rounded-lg hover:border-primary/30 hover:bg-primary/10 hover:text-text transition duration-300 font-mono"
                                >
                                    DASBOR ({auth.user.name})
                                </Link>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="text-xs text-rose-500 hover:text-rose-600 font-mono"
                                >
                                    KELUAR
                                </Link>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-2xl shadow-sm shadow-primary/10 hover:opacity-90 transition duration-300 font-mono tracking-wider"
                            >
                                MASUK
                            </Link>
                        )}
                    </div>

                    {/* Right: Mobile Main Menu Toggle */}
                    <div className="flex lg:hidden items-center">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-muted transition hover:text-text focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-b border-border/70 bg-surface/95 px-4 pt-2 pb-6 space-y-3 shadow-lg shadow-ink/5">
                    {navLinks.map((link, idx) =>
                        link.items ? (
                            <div
                                key={idx}
                                className="rounded-2xl border border-border bg-base/80 p-2"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setExploreMenuOpen(!exploreMenuOpen)
                                    }
                                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-base font-medium transition ${
                                        isDropdownActive(link.items)
                                            ? "text-primary"
                                            : "text-muted hover:bg-secondary/60 hover:text-text"
                                    }`}
                                >
                                    <span>{link.label}</span>
                                    <svg
                                        className={`h-4 w-4 transition-transform duration-200 ${exploreMenuOpen ? "rotate-180" : ""}`}
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
                                {exploreMenuOpen && (
                                    <div className="mt-2 space-y-1 px-2 pb-1">
                                        {link.items.map((item) => (
                                            <Link
                                                key={item.url}
                                                href={item.url}
                                                onClick={() =>
                                                    setMobileMenuOpen(false)
                                                }
                                                className={`block rounded-xl px-3 py-2 text-sm transition ${
                                                    isActive(item.url)
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-muted hover:bg-secondary/60 hover:text-text"
                                                }`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={idx}
                                href={link.url}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                                    isActive(link.url)
                                        ? "bg-secondary/80 text-primary border-l-2 border-primary pl-2"
                                        : "text-muted hover:bg-secondary/60 hover:text-text"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ),
                    )}
                    <div className="pt-4 border-t border-border flex flex-col space-y-3">
                        {auth?.user ? (
                            <>
                                <Link
                                    href="/admin"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-center px-4 py-2 bg-surface text-primary border border-border rounded-2xl text-sm font-mono"
                                >
                                    DASBOR ({auth.user.name})
                                </Link>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-center px-4 py-2 bg-secondary text-rose-500 rounded-2xl text-sm font-mono"
                                >
                                    KELUAR
                                </Link>
                            </>
                        ) : (
                            <Link
                                href="/login"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-center px-4 py-2 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-2xl text-sm font-mono shadow-sm shadow-primary/10"
                            >
                                MASUK
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
