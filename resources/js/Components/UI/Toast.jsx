import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

export default function Toast() {
    const { props } = usePage();
    const flash = props.flash || {};
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("success");

    useEffect(() => {
        if (flash.success) {
            setMessage(flash.success);
            setType("success");
            setVisible(true);
        } else if (flash.error) {
            setMessage(flash.error);
            setType("error");
            setVisible(true);
        }
    }, [flash]);

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    if (!visible || !message) return null;

    const bgColors = {
        success: "bg-surface border border-primary/20 text-text",
        error: "bg-surface border border-accent/20 text-text",
    };

    const iconColors = {
        success: "text-primary",
        error: "text-accent",
    };

    return (
        <div className="fixed bottom-5 right-5 z-[9999] w-full max-w-sm p-4">
            <div
                className={`flex items-start rounded-2xl p-4 shadow-2xl shadow-ink/10 backdrop-blur-xl ${bgColors[type]}`}
            >
                <div className="flex-shrink-0">
                    {type === "success" ? (
                        <svg
                            className={`h-5 w-5 ${iconColors[type]}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    ) : (
                        <svg
                            className={`h-5 w-5 ${iconColors[type]}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    )}
                </div>
                <div className="ml-3 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-text">{message}</p>
                </div>
                <div className="ml-4 flex flex-shrink-0">
                    <button
                        type="button"
                        onClick={() => setVisible(false)}
                        className="inline-flex text-muted hover:text-text transition duration-200"
                    >
                        <svg
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
