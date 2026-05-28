import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-primary text-text focus:border-primary"
                    : "border-transparent text-muted hover:border-primary/30 hover:text-text focus:border-primary/30 focus:text-text") +
                className
            }
        >
            {children}
        </Link>
    );
}
