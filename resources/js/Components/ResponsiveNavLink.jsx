import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${
                active
                    ? "border-stone-900 bg-stone-100 text-stone-900 focus:border-stone-900 focus:bg-stone-100 focus:text-stone-900"
                    : "border-transparent text-stone-600 hover:border-stone-300 hover:bg-stone-100 hover:text-stone-900 focus:border-stone-300 focus:bg-stone-100 focus:text-stone-900"
            } text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`}
        >
            {children}
        </Link>
    );
}
