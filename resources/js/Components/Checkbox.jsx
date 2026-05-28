export default function Checkbox({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded border-border text-primary shadow-sm focus:ring-primary/30 focus:ring-offset-0 " +
                className
            }
        />
    );
}
