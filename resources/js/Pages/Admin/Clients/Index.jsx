import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ clients = [] }) {
    const handleDelete = (id) => {
        if (window.confirm("Hapus klien ini?")) {
            router.delete(route("admin.clients.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Kelola Klien" />

            <PageHeader
                title="Kelola Klien"
                subtitle="Daftar mitra dan klien yang tampil di website."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Klien" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8">
                    <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                                    Klien
                                </p>
                                <h3 className="mt-2 text-2xl font-bold tracking-tight text-text">
                                    Semua Klien
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                    Total klien: {clients.length}
                                </p>
                            </div>

                            <Link
                                href={route("admin.clients.create")}
                                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                Tambah Klien
                            </Link>
                        </div>

                        <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-base/80">
                            <table className="min-w-full divide-y divide-border text-sm">
                                <thead className="bg-secondary/50 text-muted">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Nama
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Website
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Order
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border bg-base/80">
                                    {clients.length ? (
                                        clients.map((client) => (
                                            <tr
                                                key={client.id}
                                                className="align-top hover:bg-secondary/40"
                                            >
                                                <td className="px-4 py-4 font-medium text-text [overflow-wrap:anywhere]">
                                                    {client.name}
                                                </td>
                                                <td className="px-4 py-4 text-muted [overflow-wrap:anywhere]">
                                                    {client.website || "-"}
                                                </td>
                                                <td className="px-4 py-4 text-muted">
                                                    {client.order ?? 0}
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="flex flex-wrap gap-2">
                                                        <Link
                                                            href={route(
                                                                "admin.clients.show",
                                                                client.id,
                                                            )}
                                                            className="rounded-xl border border-border bg-surface px-3 py-2 text-xs font-medium text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                                        >
                                                            Lihat
                                                        </Link>
                                                        <Link
                                                            href={route(
                                                                "admin.clients.edit",
                                                                client.id,
                                                            )}
                                                            className="rounded-xl border border-border bg-surface px-3 py-2 text-xs font-medium text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    client.id,
                                                                )
                                                            }
                                                            className="rounded-xl border border-rose-200 px-3 py-2 text-xs font-medium text-rose-600 transition hover:border-rose-300 hover:bg-rose-50"
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
                                                colSpan={4}
                                            >
                                                Belum ada klien.
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
