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
                    ? "border border-primary/20 bg-primary/10 text-text shadow-sm"
                    : "text-muted hover:bg-secondary/70 hover:text-text"
            }`}
        >
            <span className="flex items-center gap-3">
                <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl transition duration-200 ${
                        active
                            ? "bg-gradient-to-br from-primary/20 to-accent/20 text-primary"
                            : "bg-secondary text-muted group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                >
                    {icon}
                </span>
                <span>{children}</span>
            </span>

            <ChevronRight
                className={`h-4 w-4 transition duration-200 ${active ? "text-muted" : "text-muted group-hover:text-text"}`}
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
            label: "Dasboard",
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
            label: "Galeri",
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
        // {
        //     label: "Konten Halaman",
        //     href: route("admin.page-contents.index"),
        //     match: "/admin/page-contents",
        //     icon: <PanelLeftOpen className="h-4 w-4" />,
        // },
    ];

    const isActive = (match) => {
        if (Array.isArray(match)) {
            return match.some((path) => currentUrl === path);
        }

        return currentUrl.startsWith(match);
    };

    return (
        <div className="min-h-screen bg-base text-text">
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute right-[-4rem] top-28 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
                <div className="absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-secondary/70 blur-3xl" />
            </div>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-text/10 backdrop-blur-sm lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-border/80 bg-surface/95 text-text shadow-[0_10px_30px_rgba(10,15,30,0.06)] backdrop-blur-xl transition-transform duration-300 lg:translate-x-0 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex h-full flex-col px-4 py-5">
                    <div className="flex items-center justify-between pb-6">
                        <Link
                            href={route("dashboard")}
                            className="flex items-center gap-3"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-sm shadow-primary/5">
                                <ApplicationLogo className="h-6 w-6 fill-current text-white" />
                            </span>
                            <div>
                                <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
                                    Admin
                                </p>
                                <p className="text-base font-semibold text-text">
                                    Profil Perusahaan
                                </p>
                            </div>
                        </Link>

                        <button
                            type="button"
                            onClick={() => setSidebarOpen(false)}
                            className="rounded-xl p-2 text-muted hover:bg-secondary/70 hover:text-text lg:hidden"
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

                    <div className="mt-auto space-y-4 border-t border-border/80 pt-5">
                        <div className="rounded-3xl border border-border bg-base/90 p-4 shadow-sm shadow-ink/5">
                            <p className="text-xs uppercase tracking-[0.22em] text-muted">
                                Masuk sebagai
                            </p>
                            <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-text">
                                <UserRound className="h-4 w-4 text-muted" />
                                {user.name}
                            </p>
                            <p className="text-xs text-muted">{user.email}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <Link
                                href={route("profile.edit")}
                                className="rounded-2xl border border-border bg-surface/80 px-3 py-2 text-center text-text transition hover:border-primary/30 hover:bg-secondary/70"
                            >
                                Profil
                            </Link>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-accent px-3 py-2 text-center font-medium text-white transition hover:opacity-90"
                            >
                                <LogOut className="h-4 w-4" />
                                Keluar
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="lg:pl-64">
                <div className="sticky top-0 z-20 border-b border-border/80 bg-base/90 px-4 py-4 backdrop-blur-xl lg:hidden">
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface/90 px-4 py-2 text-sm font-medium text-text shadow-sm shadow-ink/5"
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
