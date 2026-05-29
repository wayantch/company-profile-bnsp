import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link } from "@inertiajs/react";

const formatDate = (value) => {
    if (!value) {
        return "-";
    }

    return new Date(value).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
};

export default function Show({ event, relatedEvents = [] }) {
    return (
        <AdminLayout>
            <Head title={event.title} />

            <PageHeader
                title={event.title}
                subtitle="Detail event admin untuk melihat tampilan publik secara utuh."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Event", url: route("admin.events.index") },
                    { label: "Detail" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.4fr]">
                    <Card className="overflow-hidden border-border/80 bg-surface/90 shadow-sm shadow-ink/5">
                        {event.thumbnail && (
                            <img
                                src={event.thumbnail}
                                alt={event.title}
                                className="h-80 w-full object-cover"
                            />
                        )}

                        <div className="p-6 lg:p-8">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge variant="accent">
                                    {formatDate(event.event_date)}
                                </Badge>
                                <Badge
                                    variant={
                                        event.is_published ? "success" : "muted"
                                    }
                                >
                                    {event.is_published ? "Published" : "Draft"}
                                </Badge>
                            </div>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text">
                                {event.title}
                            </h2>

                            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
                                <span>
                                    {event.location || "Lokasi belum diisi"}
                                </span>
                            </div>

                            <div className="mt-8 whitespace-pre-wrap rounded-3xl border border-border bg-base/80 p-5 text-sm leading-8 text-text/80">
                                {event.description}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href={route("admin.events.edit", event.id)}
                                    className="rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                                >
                                    Edit Event
                                </Link>
                                <Link
                                    href={route("admin.events.index")}
                                    className="rounded-2xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                >
                                    Kembali
                                </Link>
                            </div>
                        </div>
                    </Card>

                    <aside className="space-y-4">
                        <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                                Event Lainnya
                            </p>
                            <div className="mt-4 space-y-4">
                                {relatedEvents.length ? (
                                    relatedEvents.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={route(
                                                "admin.events.show",
                                                item.id,
                                            )}
                                            className="block rounded-2xl border border-border bg-base/80 p-4 transition hover:border-primary/25 hover:bg-white"
                                        >
                                            <p className="text-xs uppercase tracking-[0.22em] text-muted">
                                                {formatDate(item.event_date)}
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-text">
                                                {item.title}
                                            </p>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-muted">
                                        Belum ada event lainnya.
                                    </p>
                                )}
                            </div>
                        </Card>
                    </aside>
                </div>
            </div>
        </AdminLayout>
    );
}
