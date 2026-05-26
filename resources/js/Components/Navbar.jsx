import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Navbar({ toggleSidebar, sidebarOpen }) {
    const { auth } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Home', url: '/' },
        { label: 'About Us', url: '/about' },
        { label: 'Visi & Misi', url: '/visi-misi' },
        { label: 'Produk Kami', url: '/produk' },
        { label: 'Klien Kami', url: '/klien' },
        { label: 'Kontak', url: '/kontak' }
    ];

    const currentUrl = usePage().url;
    const isActive = (url) => {
        if (url === '/' && currentUrl === '/') return true;
        if (url !== '/' && currentUrl.startsWith(url)) return true;
        return false;
    };

    return (
        <header className="sticky top-0 z-40 w-full bg-[#0A0F1E]/80 backdrop-blur-md border-b border-[#1E293B] transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left: Mobile Sidebar Toggle + Logo */}
                    <div className="flex items-center space-x-3">
                        {/* Hamburger for Sidebar (lg:hidden) */}
                        <button
                            type="button"
                            onClick={toggleSidebar}
                            className="lg:hidden text-muted hover:text-white focus:outline-none"
                            aria-label="Toggle Sidebar"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Brand Logo */}
                        <Link href="/" className="flex items-center space-x-2.5">
                            <span className="text-[#F1F5F9] font-bold font-mono tracking-widest text-lg hidden sm:inline-block">
                                Wynnsea
                            </span>
                        </Link>
                    </div>

                    {/* Middle: Desktop Nav Links */}
                    <nav className="hidden lg:flex space-x-8">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.url}
                                className={`text-sm font-medium tracking-wide transition duration-200 ${
                                    isActive(link.url)
                                        ? 'text-primary'
                                        : 'text-muted hover:text-white'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right: Auth Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {auth?.user ? (
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/admin"
                                    className="text-xs bg-[#111827] text-primary border border-primary/20 px-3.5 py-1.5 rounded-lg hover:bg-primary hover:text-base transition duration-300 font-mono"
                                >
                                    DASHBOARD ({auth.user.name})
                                </Link>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="text-xs text-rose-400 hover:text-rose-300 font-mono"
                                >
                                    LOGOUT
                                </Link>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="px-4 py-1.5 text-xs font-semibold text-[#0A0F1E] bg-gradient-to-r from-primary to-accent rounded-lg hover:opacity-90 transition duration-300 font-mono tracking-wider"
                            >
                                SIGN IN
                            </Link>
                        )}
                    </div>

                    {/* Right: Mobile Main Menu Toggle */}
                    <div className="flex lg:hidden items-center">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-muted hover:text-white focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-[#0A0F1E]/95 border-b border-[#1E293B] px-4 pt-2 pb-6 space-y-3 shadow-xl">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.url}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-3 py-2 rounded-lg text-base font-medium ${
                                isActive(link.url)
                                    ? 'bg-surface text-primary border-l-2 border-primary pl-2'
                                    : 'text-muted hover:bg-surface/50 hover:text-white'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-[#1E293B] flex flex-col space-y-3">
                        {auth?.user ? (
                            <>
                                <Link
                                    href="/admin"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-center px-4 py-2 bg-[#111827] text-primary border border-primary/20 rounded-lg text-sm font-mono"
                                >
                                    DASHBOARD ({auth.user.name})
                                </Link>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-center px-4 py-2 bg-[#1E293B] text-rose-400 rounded-lg text-sm font-mono"
                                >
                                    LOGOUT
                                </Link>
                            </>
                        ) : (
                            <Link
                                href="/login"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-center px-4 py-2 bg-gradient-to-r from-primary to-accent text-[#0A0F1E] font-bold rounded-lg text-sm font-mono"
                            >
                                SIGN IN
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
