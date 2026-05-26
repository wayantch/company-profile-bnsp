import React from "react";
import { Link } from "@inertiajs/react";

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
    return (
        <div className="relative mb-10 overflow-hidden border-b border-stone-200 bg-[#FAF7F1] py-12">
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-stone-900/5 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-stone-400/10 blur-3xl" />

            <div className="px-4 sm:px-6 lg:px-8">
                <nav
                    className="mb-4 flex items-center space-x-2 text-xs font-medium tracking-[0.22em] text-stone-500 uppercase"
                    aria-label="Breadcrumb"
                >
                    <Link
                        href="/"
                        className="transition duration-200 hover:text-stone-900"
                    >
                        HOME
                    </Link>
                    {breadcrumbs.map((crumb, idx) => (
                        <React.Fragment key={idx}>
                            <span className="text-stone-300">/</span>
                            {crumb.url ? (
                                <Link
                                    href={crumb.url}
                                    className="uppercase transition duration-200 hover:text-stone-900"
                                >
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="uppercase text-stone-900">
                                    {crumb.label}
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </nav>

                <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                    {title}
                </h1>

                {subtitle && (
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
