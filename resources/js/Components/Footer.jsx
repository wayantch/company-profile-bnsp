import React from "react";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-secondary/50 text-muted backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2.5">
                            <span className="bg-gradient-to-r from-primary to-accent text-white font-bold font-mono px-2 py-0.5 rounded-2xl text-base tracking-wider shadow-sm shadow-primary/10">
                                WS
                            </span>
                            <span className="text-text font-bold font-mono tracking-widest text-base">
                                WYNNSEA
                            </span>
                        </div>
                        <p className="text-sm font-sans leading-relaxed">
                            Kami menghadirkan solusi digital yang rapi, ringan,
                            dan siap berkembang untuk mendukung bisnis Anda.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4 md:pl-10">
                        <h4 className="text-sm font-bold font-mono text-text tracking-wider uppercase">
                            Tautan Cepat
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-primary transition duration-200"
                                >
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-primary transition duration-200"
                                >
                                    Tentang
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/produk"
                                    className="hover:text-primary transition duration-200"
                                >
                                    Produk Kami
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/klien"
                                    className="hover:text-primary transition duration-200"
                                >
                                    Klien
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/gallery"
                                    className="hover:text-primary transition duration-200"
                                >
                                    Galeri
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/event"
                                    className="hover:text-primary transition duration-200"
                                >
                                    Acara
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/artikel"
                                    className="hover:text-primary transition duration-200"
                                >
                                    Artikel
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold font-mono text-text tracking-wider uppercase">
                            Informasi Kontak
                        </h4>
                        <ul className="space-y-2.5 text-sm font-sans">
                            <li className="flex items-start space-x-2">
                                <svg
                                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span className="leading-relaxed">
                                    Menara Sudirman Lantai 12, Jl. Jend.
                                    Sudirman Kav. 60, Jakarta 12190
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg
                                    className="w-5 h-5 text-primary flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span>+62 21 5088 1234</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg
                                    className="w-5 h-5 text-primary flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="hover:text-primary transition duration-200">
                                    contact@wynnsea.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs font-mono">
                    <p>
                        &copy; {new Date().getFullYear()} Wynnsea. All rights
                        reserved.
                    </p>
                    <p className="mt-2 md:mt-0 text-muted/80">
                        Dirancang oleh Wayan | Solusi digital yang rapi dan
                        modern
                    </p>
                </div>
            </div>
        </footer>
    );
}
