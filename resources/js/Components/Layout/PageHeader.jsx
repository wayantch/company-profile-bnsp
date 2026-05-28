import React from "react";
import { Link } from "@inertiajs/react";

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
    return (
        <div className="relative mb-10 overflow-hidden border-b border-border/70 bg-surface/95 py-12">
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="px-4 sm:px-6 lg:px-8">
                <nav
                    className="mb-5 flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold tracking-[0.24em] text-text uppercase"
                    aria-label="Breadcrumb"
                >
                    <Link
                        href="/"
                        className="rounded-full border border-border bg-white px-3 py-1.5 text-text transition duration-200 hover:border-primary/25 hover:bg-secondary/70 hover:text-text"
                    >
                        Beranda
                    </Link>
                    {breadcrumbs.map((crumb, idx) => (
                        <React.Fragment key={idx}>
                            <span className="text-border">/</span>
                            {crumb.url ? (
                                <Link
                                    href={crumb.url}
                                    className="rounded-full border border-border bg-white px-3 py-1.5 text-text transition duration-200 hover:border-primary/25 hover:bg-secondary/70 hover:text-text"
                                >
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-text">
                                    {crumb.label}
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </nav>

                <div className="max-w-4xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                        Admin Section
                    </p>
                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                        {title}
                    </h1>
                </div>

                {/* {subtitle && (
                    <p className="mt-4 max-w-3xl text-sm leading-7  text-text/75 sm:text-base">
                        {subtitle}
                    </p>
                )} */}
            </div>
        </div>
    );
}
