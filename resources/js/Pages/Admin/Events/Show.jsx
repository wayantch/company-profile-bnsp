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
                    <Card className="overflow-hidden border-stone-200 bg-white shadow-sm">
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

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900">
                                {event.title}
                            </h2>

                            <div className="mt-4 flex flex-wrap gap-4 text-sm text-stone-500">
                                <span>
                                    {event.location || "Lokasi belum diisi"}
                                </span>
                            </div>

                            <div className="mt-8 whitespace-pre-wrap rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm leading-8 text-stone-700">
                                {event.description}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href={route("admin.events.edit", event.id)}
                                    className="rounded-2xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
                                >
                                    Edit Event
                                </Link>
                                <Link
                                    href={route("admin.events.index")}
                                    className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                >
                                    Kembali
                                </Link>
                            </div>
                        </div>
                    </Card>

                    <aside className="space-y-4">
                        <Card className="border-stone-200 bg-white p-6 shadow-sm">
                            <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
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
                                            className="block rounded-2xl border border-stone-200 bg-stone-50 p-4 transition hover:border-stone-400 hover:bg-white"
                                        >
                                            <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                                                {formatDate(item.event_date)}
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-stone-900">
                                                {item.title}
                                            </p>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-stone-500">
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
