import React from 'react';
import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {
    if (!links || links.length <= 3) return null; // Hide if only 1 page

    return (
        <nav className="flex flex-wrap justify-center items-center gap-2 mt-8" aria-label="Pagination">
            {links.map((link, index) => {
                if (link.url === null) {
                    return (
                        <span
                            key={index}
                            className="px-3.5 py-2 text-sm text-muted/40 bg-surface border border-border rounded-lg select-none"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    );
                }

                return (
                    <Link
                        key={index}
                        href={link.url}
                        className={`px-3.5 py-2 text-sm border rounded-lg transition duration-300 ${
                            link.active
                                ? 'bg-primary border-primary text-base font-semibold'
                                : 'bg-surface border-border text-muted hover:border-primary/50 hover:text-white'
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                );
            })}
        </nav>
    );
}
