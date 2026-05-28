export default function SecondaryButton({
    type = "button",
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center rounded-2xl border border-border bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-widest text-text shadow-sm shadow-ink/5 transition duration-150 ease-in-out hover:border-primary/25 hover:bg-secondary/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-base disabled:opacity-25 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
