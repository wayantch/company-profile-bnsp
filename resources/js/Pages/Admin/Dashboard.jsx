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
            iconClass: "text-primary",
            iconBg: "bg-primary/10",
        },
        {
            label: "Event",
            value: stats.totalEvents ?? 0,
            note: "Agenda aktif dan terjadwal",
            icon: "events",
            iconClass: "text-accent",
            iconBg: "bg-accent/10",
        },
        {
            label: "Galeri",
            value: stats.totalGalleries ?? 0,
            note: "Dokumentasi visual tersimpan",
            icon: "gallery",
            iconClass: "text-text",
            iconBg: "bg-secondary",
        },
        {
            label: "Klien",
            value: stats.totalClients ?? 0,
            note: "Logo dan data mitra",
            icon: "clients",
            iconClass: "text-primary",
            iconBg: "bg-primary/10",
        },
        {
            label: "Pesan belum dibaca",
            value: stats.unreadContacts ?? 0,
            note: "Butuh tindak lanjut",
            icon: "messages",
            iconClass: "text-white",
            iconBg: "bg-gradient-to-br from-primary to-accent",
        },
    ];

    const recentItems = recentContacts.slice(0, 4);

    const quickActions = [
        {
            label: "Kelola artikel",
            href: route("admin.articles.index"),
            description: "Tambah dan atur konten publik.",
        },
        {
            label: "Kelola event",
            href: route("admin.events.index"),
            description: "Atur agenda dan jadwal kegiatan.",
        },
        {
            label: "Kelola galeri",
            href: route("admin.galleries.index"),
            description: "Rawat dokumentasi visual perusahaan.",
        },
        {
            label: "Kelola kontak",
            href: route("admin.contacts.index"),
            description: "Tindak lanjuti pesan masuk lebih cepat.",
        },
    ];

    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />

            <PageHeader
                title="Admin Dashboard"
                subtitle="Ringkasan operasional untuk konten publik, event, galeri, klien, dan pesan masuk dengan tampilan yang lebih bersih dan modern."
                breadcrumbs={[{ label: "Admin Dashboard" }]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/90 p-6 shadow-lg shadow-ink/5 backdrop-blur-xl sm:p-8">
                    <div className="pointer-events-none absolute right-0 top-0 -z-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                                Ringkasan hari ini
                            </p>
                            <h3 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-[2.15rem] lg:leading-tight">
                                Dashboard admin yang rapi, cepat dibaca, dan
                                tetap nyaman dipakai.
                            </h3>
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                                Semua komponen utama disusun sebagai kartu
                                ringan dengan ruang napas yang cukup, sehingga
                                data penting lebih mudah dipantau tanpa terasa
                                padat.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 text-sm">
                                <Link
                                    href={route("admin.articles.index")}
                                    className="rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 font-semibold text-white shadow-sm shadow-primary/10 transition hover:opacity-90"
                                >
                                    Buka artikel
                                </Link>
                                <Link
                                    href={route("admin.contacts.index")}
                                    className="rounded-full border border-border bg-base/80 px-5 py-2.5 font-semibold text-text transition hover:border-primary/30 hover:bg-secondary/70"
                                >
                                    Lihat pesan
                                </Link>
                            </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                            {summaryCards.slice(0, 3).map((card) => (
                                <div
                                    key={card.label}
                                    className="rounded-2xl border border-border bg-base/85 p-4 shadow-sm shadow-ink/5"
                                >
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                                        {card.label}
                                    </p>
                                    <div className="mt-2 flex items-end justify-between gap-4">
                                        <div className="text-3xl font-bold tracking-tight text-text">
                                            {card.value}
                                        </div>
                                        <div
                                            className={`flex h-10 w-10 items-center justify-center rounded-2xl ${card.iconBg}`}
                                        >
                                            <DashboardIcon
                                                name={card.icon}
                                                className={card.iconClass}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                    {summaryCards.map((card) => (
                        <Card
                            key={card.label}
                            hover
                            className="border-border/80 bg-surface/90 p-5"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-sm font-medium text-muted">
                                        {card.label}
                                    </p>
                                    <div className="mt-3 text-3xl font-semibold tracking-tight text-text">
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
                            <p className="mt-4 text-sm leading-6 text-muted">
                                {card.note}
                            </p>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
                    <Card className="border-border/80 bg-surface/90 p-6">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold tracking-tight text-text">
                                    Pesan terbaru
                                </h3>
                                <p className="mt-1 text-sm leading-6 text-muted">
                                    Daftar pesan kontak yang masuk terakhir.
                                </p>
                            </div>
                            <Link
                                href={route("admin.contacts.index")}
                                className="text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary"
                            >
                                Lihat semua
                            </Link>
                        </div>

                        <div className="mt-6 space-y-4">
                            {recentItems.length ? (
                                recentItems.map((contact) => (
                                    <div
                                        key={contact.id}
                                        className="rounded-2xl border border-border bg-base/80 p-4 transition hover:border-primary/20 hover:bg-secondary/50"
                                    >
                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                            <div>
                                                <p className="font-semibold tracking-tight text-text">
                                                    {contact.name}
                                                </p>
                                                <p className="text-sm text-muted">
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
                                        <p className="mt-3 text-sm leading-7 text-text/80">
                                            {contact.subject}
                                        </p>
                                        <p className="mt-2 text-xs text-muted">
                                            {contact.created_at
                                                ? new Date(
                                                      contact.created_at,
                                                  ).toLocaleString("id-ID")
                                                : "-"}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <div className="rounded-2xl border border-dashed border-border bg-base/70 p-6 text-sm text-muted">
                                    Belum ada pesan kontak yang masuk.
                                </div>
                            )}
                        </div>
                    </Card>

                    <div className="space-y-8">
                        <Card className="border-border/80 bg-surface/90 p-6">
                            <h3 className="text-lg font-semibold tracking-tight text-text">
                                Akses cepat
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-muted">
                                Menu untuk mengelola konten utama.
                            </p>

                            <div className="mt-6 grid gap-3">
                                {quickActions.map((action) => (
                                    <Link
                                        key={action.label}
                                        href={action.href}
                                        className="group rounded-2xl border border-border bg-base/80 p-4 transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-secondary/60"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <div className="text-sm font-semibold tracking-tight text-text">
                                                    {action.label}
                                                </div>
                                                <p className="mt-1 text-sm leading-6 text-muted">
                                                    {action.description}
                                                </p>
                                            </div>
                                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition group-hover:bg-primary group-hover:text-white">
                                                Buka
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Card>

                        <Card className="border-border/80 bg-surface/90 p-6">
                            <h3 className="text-lg font-semibold tracking-tight text-text">
                                Status konten
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-muted">
                                Komposisi data yang paling sering dipantau tim
                                admin.
                            </p>

                            <div className="mt-6 space-y-4">
                                {[
                                    {
                                        label: "Artikel",
                                        value: stats.totalArticles ?? 0,
                                        total: 100,
                                        color: "bg-primary",
                                    },
                                    {
                                        label: "Event",
                                        value: stats.totalEvents ?? 0,
                                        total: 100,
                                        color: "bg-accent",
                                    },
                                    {
                                        label: "Gallery",
                                        value: stats.totalGalleries ?? 0,
                                        total: 100,
                                        color: "bg-text",
                                    },
                                ].map((item) => (
                                    <div key={item.label}>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="font-medium text-text">
                                                {item.label}
                                            </span>
                                            <span className="text-muted">
                                                {item.value}
                                            </span>
                                        </div>
                                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
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
