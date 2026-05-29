import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, router } from "@inertiajs/react";

const formatDate = (value) => {
    if (!value) {
        return "-";
    }

    return new Date(value).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

export default function Index({ events = [] }) {
    const handleDelete = (id) => {
        if (window.confirm("Hapus event ini?")) {
            router.delete(route("admin.events.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Kelola Event" />

            <PageHeader
                title="Kelola Event"
                subtitle="Agenda dan kegiatan yang tampil pada website publik."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Event" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8">
                    <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                                    Agenda
                                </p>
                                <h3 className="mt-2 text-2xl font-bold tracking-tight text-text">
                                    Semua Event
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                    Total event: {events.length}
                                </p>
                            </div>

                            <Link
                                href={route("admin.events.create")}
                                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                Tambah Event
                            </Link>
                        </div>

                        <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-base/80">
                            <table className="min-w-full divide-y divide-border text-sm">
                                <thead className="bg-secondary/50 text-muted">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Judul
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Tanggal
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Lokasi
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Status
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border bg-base/80">
                                    {events.length ? (
                                        events.map((event) => (
                                            <tr
                                                key={event.id}
                                                className="hover:bg-secondary/40"
                                            >
                                                <td className="px-4 py-3 font-medium text-text">
                                                    {event.title}
                                                </td>
                                                <td className="px-4 py-3 text-muted">
                                                    {formatDate(
                                                        event.event_date,
                                                    )}
                                                </td>
                                                <td className="px-4 py-3 text-muted">
                                                    {event.location || "-"}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <Badge
                                                        variant={
                                                            event.is_published
                                                                ? "primary"
                                                                : "muted"
                                                        }
                                                    >
                                                        {event.is_published
                                                            ? "Published"
                                                            : "Draft"}
                                                    </Badge>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex flex-wrap gap-2">
                                                        <Link
                                                            href={route(
                                                                "admin.events.show",
                                                                event.id,
                                                            )}
                                                            className="rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                                        >
                                                            Lihat
                                                        </Link>
                                                        <Link
                                                            href={route(
                                                                "admin.events.edit",
                                                                event.id,
                                                            )}
                                                            className="rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    event.id,
                                                                )
                                                            }
                                                            className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600 transition hover:border-rose-300 hover:bg-rose-100"
                                                        >
                                                            Hapus
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                className="px-4 py-10 text-center text-muted"
                                                colSpan={5}
                                            >
                                                Belum ada event.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
