import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

import {
    CalendarDays,
    ChevronRight,
    FileText,
    Image,
    LayoutDashboard,
    LogOut,
    Mail,
    Menu,
    Package,
    PanelLeftOpen,
    UserRound,
    Users,
    X,
} from "lucide-react";

function AdminNavItem({ href, active, children, icon }) {
    return (
        <Link
            href={href}
            className={`group flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-medium transition duration-200 ${
                active
                    ? "bg-stone-100 text-stone-900 shadow-sm"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
            }`}
        >
            <span className="flex items-center gap-3">
                <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl transition duration-200 ${
                        active
                            ? "bg-stone-900 text-stone-50"
                            : "bg-stone-200 text-stone-600 group-hover:bg-stone-900 group-hover:text-stone-50"
                    }`}
                >
                    {icon}
                </span>
                <span>{children}</span>
            </span>

            <ChevronRight
                className={`h-4 w-4 transition duration-200 ${active ? "text-stone-400" : "text-stone-400 group-hover:text-stone-700"}`}
            />
        </Link>
    );
}

export default function AdminLayout({ children }) {
    const user = usePage().props.auth.user;
    const currentUrl = usePage().url;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        {
            label: "Dashboard",
            href: route("dashboard"),
            match: ["/admin", "/admin/"],
            icon: <LayoutDashboard className="h-4 w-4" />,
        },
        {
            label: "Artikel",
            href: route("admin.articles.index"),
            match: "/admin/articles",
            icon: <FileText className="h-4 w-4" />,
        },
        {
            label: "Event",
            href: route("admin.events.index"),
            match: "/admin/events",
            icon: <CalendarDays className="h-4 w-4" />,
        },
        {
            label: "Gallery",
            href: route("admin.galleries.index"),
            match: "/admin/galleries",
            icon: <Image className="h-4 w-4" />,
        },
        {
            label: "Klien",
            href: route("admin.clients.index"),
            match: "/admin/clients",
            icon: <Users className="h-4 w-4" />,
        },
        {
            label: "Produk",
            href: route("admin.products.index"),
            match: "/admin/products",
            icon: <Package className="h-4 w-4" />,
        },
        {
            label: "Kontak",
            href: route("admin.contacts.index"),
            match: "/admin/contacts",
            icon: <Mail className="h-4 w-4" />,
        },
        {
            label: "Konten Halaman",
            href: route("admin.page-contents.index"),
            match: "/admin/page-contents",
            icon: <PanelLeftOpen className="h-4 w-4" />,
        },
    ];

    const isActive = (match) => {
        if (Array.isArray(match)) {
            return match.some((path) => currentUrl === path);
        }

        return currentUrl.startsWith(match);
    };

    return (
        <div className="min-h-screen bg-[#F7F4EE] text-stone-900">
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-stone-900/30 backdrop-blur-sm lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-40 w-54 border-r border-stone-200 bg-[#FAF7F1] text-stone-900 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-transform duration-300 lg:translate-x-0 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex h-full flex-col px-4 py-5">
                    <div className="flex items-center justify-between pb-6">
                        <Link
                            href={route("dashboard")}
                            className="flex items-center gap-3"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-900 text-stone-50 shadow-sm">
                                <ApplicationLogo className="h-6 w-6 fill-current text-stone-50" />
                            </span>
                            <div>
                                <p className="text-xs font-medium uppercase tracking-[0.25em] text-stone-500">
                                    Admin
                                </p>
                                <p className="text-base font-semibold text-stone-900">
                                    Company Profile
                                </p>
                            </div>
                        </Link>

                        <button
                            type="button"
                            onClick={() => setSidebarOpen(false)}
                            className="rounded-xl p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-900 lg:hidden"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="space-y-2 overflow-y-auto pr-1">
                        {navItems.map((item) => (
                            <AdminNavItem
                                key={item.label}
                                href={item.href}
                                active={isActive(item.match)}
                                icon={item.icon}
                            >
                                {item.label}
                            </AdminNavItem>
                        ))}
                    </div>

                    <div className="mt-auto space-y-4 border-t border-stone-200 pt-5">
                        <div className="rounded-2xl bg-white p-4 shadow-sm border border-stone-200">
                            <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                                Signed in as
                            </p>
                            <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-stone-900">
                                <UserRound className="h-4 w-4 text-stone-500" />
                                {user.name}
                            </p>
                            <p className="text-xs text-stone-500">
                                {user.email}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <Link
                                href={route("profile.edit")}
                                className="rounded-2xl border border-stone-200 px-3 py-2 text-center text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                            >
                                Profile
                            </Link>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-3 py-2 text-center font-medium text-stone-50 transition hover:bg-stone-800"
                            >
                                <LogOut className="h-4 w-4" />
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="lg:pl-54">
                <div className="sticky top-0 z-20 border-b border-stone-200/80 bg-[#F7F4EE]/90 px-4 py-4 backdrop-blur lg:hidden">
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm"
                    >
                        <Menu className="h-5 w-5" />
                        Menu
                    </button>
                </div>

                <main>{children}</main>
            </div>
        </div>
    );
}
