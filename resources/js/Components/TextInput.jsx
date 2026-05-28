import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                "rounded-2xl border border-border bg-base px-4 py-2.5 text-text shadow-sm outline-none transition placeholder:text-muted/60 focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/10 " +
                className
            }
            ref={localRef}
        />
    );
});
