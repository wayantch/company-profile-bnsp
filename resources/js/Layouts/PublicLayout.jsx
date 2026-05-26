import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';
import Footer from '@/Components/Footer';
import Toast from '@/Components/UI/Toast';

export default function PublicLayout({ children, title }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0A0F1E] flex flex-col text-[#F1F5F9] font-sans selection:bg-primary selection:text-[#0A0F1E]">
            {/* Global Page Title metadata */}
            <Head title={`${title} | Wynnsea`} />

            {/* Global system status flash notifications */}
            <Toast />

            {/* Top Navigation */}
            <Navbar 
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
                sidebarOpen={sidebarOpen} 
            />

            {/* Sidebar drawer (collapsible on mobile, fixed 240px wide on lg desktop) */}
            <Sidebar 
                isOpen={sidebarOpen} 
                onClose={() => setSidebarOpen(false)} 
            />

            {/* Main Application Area (lg:ml-60 accounts for the fixed sidebar) */}
            <div className="flex-1 flex flex-col lg:pl-60 transition-all duration-300">
                <main className="flex-grow min-h-[70vh]">
                    {children}
                </main>
                
                {/* Footer element */}
                <Footer />
            </div>
        </div>
    );
}
