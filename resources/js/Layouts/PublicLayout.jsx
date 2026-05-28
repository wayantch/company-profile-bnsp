import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Toast from "@/Components/UI/Toast";

export default function PublicLayout({ children, title }) {
    return (
        <div className="min-h-screen bg-base text-text flex flex-col font-sans selection:bg-primary/20 selection:text-ink">
            {/* Global Page Title metadata */}
            <Head title={`${title} | Wynnsea`} />

            {/* Global system status flash notifications */}
            <Toast />

            {/* Top Navigation */}
            <Navbar />

            {/* Main Application Area */}
            <div className="flex-1 flex flex-col">
                <main className="flex-grow min-h-[70vh]">{children}</main>

                {/* Footer element */}
                <Footer />
            </div>
        </div>
    );
}
