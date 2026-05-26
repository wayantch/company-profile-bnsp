import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link } from "@inertiajs/react";

function DashboardIcon({ name, className = "" }) {
    const commonProps = {
        className: `h-5 w-5 ${className}`,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
    };

    switch (name) {
        case "articles":
            return (
                <svg {...commonProps}>
                    <path d="M7 4h10a2 2 0 0 1 2 2v12a1 1 0 0 1-1.6.8L15 17H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                    <path d="M9 8h6" />
                    <path d="M9 11h4" />
                </svg>
            );
        case "events":
            return (
                <svg {...commonProps}>
                    <path d="M8 2v3" />
                    <path d="M16 2v3" />
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18" />
                    <path d="m9.5 14.5 1.8 1.8 3.9-3.9" />
                </svg>
            );
        case "gallery":
            return (
                <svg {...commonProps}>
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="m7 14 2.5-2.5 3 3L15 12l4 4" />
                    <circle cx="9" cy="9" r="1.3" />
                </svg>
            );
        case "clients":
            return (
                <svg {...commonProps}>
                    <path d="M17 20v-1.5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4V20" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 20v-1.5a3.5 3.5 0 0 0-2.5-3.35" />
                    <path d="M16 3.2a4 4 0 0 1 0 7.6" />
                </svg>
            );
        case "messages":
            return (
                <svg {...commonProps}>
                    <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
                    <path d="M7 8h10" />
                    <path d="M7 12h6" />
                </svg>
            );
        default:
            return null;
    }
}

export default function Dashboard({ stats = {}, recentContacts = [] }) {
    const summaryCards = [
        {
            label: "Artikel",
            value: stats.totalArticles ?? 0,
            note: "Konten publik yang terbit",
            icon: "articles",
            iconClass: "text-stone-50",
            iconBg: "bg-stone-900",
        },
        {
            label: "Event",
            value: stats.totalEvents ?? 0,
            note: "Agenda aktif dan terjadwal",
            icon: "events",
            iconClass: "text-stone-900",
            iconBg: "bg-stone-200",
        },
        {
            label: "Gallery",
            value: stats.totalGalleries ?? 0,
            note: "Dokumentasi visual tersimpan",
            icon: "gallery",
            iconClass: "text-stone-50",
            iconBg: "bg-stone-700",
        },
        {
            label: "Klien",
            value: stats.totalClients ?? 0,
            note: "Logo dan data mitra",
            icon: "clients",
            iconClass: "text-stone-900",
            iconBg: "bg-stone-300",
        },
        {
            label: "Pesan belum dibaca",
            value: stats.unreadContacts ?? 0,
            note: "Butuh tindak lanjut",
            icon: "messages",
            iconClass: "text-stone-50",
            iconBg: "bg-stone-900",
        },
    ];

    const recentItems = recentContacts.slice(0, 4);

    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />

            <PageHeader
                title="Admin Dashboard"
                subtitle="Ringkasan operasional untuk konten publik, event, gallery, klien, dan pesan masuk dengan tampilan monokrom yang lebih tenang."
                breadcrumbs={[{ label: "Admin Dashboard" }]}
            />

            <div className=" px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                    {summaryCards.map((card) => (
                        <Card
                            key={card.label}
                            className="border-stone-200 bg-white p-5 shadow-sm"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-sm font-medium text-stone-500">
                                        {card.label}
                                    </p>
                                    <div className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">
                                        {card.value}
                                    </div>
                                </div>
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${card.iconBg}`}
                                >
                                    <DashboardIcon
                                        name={card.icon}
                                        className={card.iconClass}
                                    />
                                </div>
                            </div>
                            <p className="mt-4 text-sm leading-6 text-stone-500">
                                {card.note}
                            </p>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
                    <Card className="border-stone-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900">
                                    Pesan terbaru
                                </h3>
                                <p className="mt-1 text-sm text-stone-500">
                                    Daftar pesan kontak yang masuk terakhir.
                                </p>
                            </div>
                            <Link
                                href={route("admin.contacts.index")}
                                className="text-sm font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 transition hover:decoration-stone-900"
                            >
                                Lihat semua
                            </Link>
                        </div>

                        <div className="mt-6 space-y-4">
                            {recentItems.length ? (
                                recentItems.map((contact) => (
                                    <div
                                        key={contact.id}
                                        className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4"
                                    >
                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                            <div>
                                                <p className="font-semibold text-stone-900">
                                                    {contact.name}
                                                </p>
                                                <p className="text-sm text-stone-500">
                                                    {contact.email}
                                                </p>
                                            </div>
                                            <Badge
                                                variant={
                                                    contact.is_read
                                                        ? "muted"
                                                        : "danger"
                                                }
                                            >
                                                {contact.is_read
                                                    ? "Dibaca"
                                                    : "Baru"}
                                            </Badge>
                                        </div>
                                        <p className="mt-3 text-sm leading-7 text-stone-600">
                                            {contact.subject}
                                        </p>
                                        <p className="mt-2 text-xs text-stone-400">
                                            {contact.created_at
                                                ? new Date(
                                                      contact.created_at,
                                                  ).toLocaleString("id-ID")
                                                : "-"}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <div className="rounded-2xl border border-dashed border-stone-200 bg-stone-50 p-6 text-sm text-stone-500">
                                    Belum ada pesan kontak yang masuk.
                                </div>
                            )}
                        </div>
                    </Card>

                    <div className="space-y-8">
                        <Card className="border-stone-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-stone-900">
                                Akses cepat
                            </h3>
                            <p className="mt-1 text-sm text-stone-500">
                                Menu untuk mengelola konten utama.
                            </p>

                            <div className="mt-6 space-y-3">
                                <Link
                                    href={route("admin.articles.index")}
                                    className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-400 hover:bg-white"
                                >
                                    <span>Kelola artikel</span>
                                    <span className="text-stone-400 transition group-hover:text-stone-900">
                                        →
                                    </span>
                                </Link>
                                <Link
                                    href={route("admin.events.index")}
                                    className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-400 hover:bg-white"
                                >
                                    <span>Kelola event</span>
                                    <span className="text-stone-400 transition group-hover:text-stone-900">
                                        →
                                    </span>
                                </Link>
                                <Link
                                    href={route("admin.galleries.index")}
                                    className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-400 hover:bg-white"
                                >
                                    <span>Kelola gallery</span>
                                    <span className="text-stone-400 transition group-hover:text-stone-900">
                                        →
                                    </span>
                                </Link>
                                <Link
                                    href={route("admin.clients.index")}
                                    className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-400 hover:bg-white"
                                >
                                    <span>Kelola klien</span>
                                    <span className="text-stone-400 transition group-hover:text-stone-900">
                                        →
                                    </span>
                                </Link>
                                <Link
                                    href={route("admin.products.index")}
                                    className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-400 hover:bg-white"
                                >
                                    <span>Kelola produk</span>
                                    <span className="text-stone-400 transition group-hover:text-stone-900">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </Card>

                        <Card className="border-stone-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-stone-900">
                                Status konten
                            </h3>
                            <p className="mt-1 text-sm text-stone-500">
                                Komposisi data yang paling sering dipantau tim
                                admin.
                            </p>

                            <div className="mt-6 space-y-4">
                                {[
                                    {
                                        label: "Artikel",
                                        value: stats.totalArticles ?? 0,
                                        total: 100,
                                        color: "bg-stone-900",
                                    },
                                    {
                                        label: "Event",
                                        value: stats.totalEvents ?? 0,
                                        total: 100,
                                        color: "bg-stone-500",
                                    },
                                    {
                                        label: "Gallery",
                                        value: stats.totalGalleries ?? 0,
                                        total: 100,
                                        color: "bg-stone-700",
                                    },
                                ].map((item) => (
                                    <div key={item.label}>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="font-medium text-stone-700">
                                                {item.label}
                                            </span>
                                            <span className="text-stone-500">
                                                {item.value}
                                            </span>
                                        </div>
                                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-stone-100">
                                            <div
                                                className={`h-full rounded-full ${item.color}`}
                                                style={{
                                                    width: `${Math.min(100, item.value ? Math.max(12, (item.value / Math.max(item.total, item.value)) * 100) : 0)}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
